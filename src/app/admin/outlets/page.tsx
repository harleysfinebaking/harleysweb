"use client";
import { useState, useEffect } from "react";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { dbNew } from "@/lib/firebase";
import { EditIcon, MapPinned, PlusCircle, Trash2Icon } from "lucide-react";
import withAuth from "@/components/withAuth";
import AddEditOutlet, { Outlet } from "./AddEditOutlet";

export default withAuth(function OutletsPage() {
  const [loading, setLoading] = useState<boolean>(false);
  const [outlets, setOutlets] = useState<Outlet[]>([]);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [editingOutlet, setEditingOutlet] = useState<Outlet | null>(null);

  /**
   * Fetch Outlets
   */
  const fetchOutlets = async () => {
    setLoading(true);
    try {
      const locationsRef = collection(dbNew, "locations");
      const locationsSnapshot = await getDocs(locationsRef);

      let allOutlets = [];

      await Promise.all(
        locationsSnapshot.docs.map(async (locationDoc) => {
          const outletsRef = collection(
            dbNew,
            "locations",
            locationDoc.id,
            "outlets"
          );
          const outletsSnapshot = await getDocs(outletsRef);

          // Collect all outlets from this location
          const locationOutlets = outletsSnapshot.docs.map((outletDoc) => ({
            locationId: locationDoc.id,
            locationName: locationDoc.data().name,
            id: outletDoc.id,
            ...outletDoc.data(),
          }));

          // Add to the main array
          allOutlets = [...allOutlets, ...locationOutlets];
        })
      );
      setOutlets(allOutlets);
    } catch (error) {
      console.error("Error fetching outlets:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOutlets();
  }, []);

  /**
   * Delete Outlet
   * @param id
   */
  const handleDelete = async (locationId: string, id: string) => {
    if (confirm("Are you sure you want to delete this outlet?")) {
      setLoading(true);
      try {
        await deleteDoc(doc(dbNew, "locations", locationId, "outlets", id));
        setOutlets(outlets.filter((outlet) => outlet.id !== id));
      } catch (error) {
        console.error("Error deleting outlet:", error);
      } finally {
        setLoading(false);
      }
    }
  };

  /**
   * Close the modal
   */
  const onCloseModal = () => {
    setEditingOutlet(null);
    setModalOpen(false);
  };

  return (
    <div className="shadow-xl p-3 bg-slate-50 rounded-md">
      <div className="flex justify-between items-center border-b p-3    ">
        <h2 className="text-2xl font-medium flex items-center gap-x-2">
          <MapPinned className="text-primayPink" /> Outlets
        </h2>
        <button
          onClick={() => setModalOpen(true)}
          className="p-2 bg-primayPink rounded-md font-medium hover:opacity-80"
        >
          <span className="flex items-center gap-x-1">
            <PlusCircle size={16} /> Add New
          </span>
        </button>
      </div>
      <div className="p-3">
        <table className="w-full ">
          <thead className="uppercase text-left text-xs bg-gray-100">
            <tr>
              <th scope="col" className="border p-2">
                Sr.No
              </th>
              <th scope="col" className="border p-2">
                Name
              </th>
              <th scope="col" className="border p-2">
                Location
              </th>
              <th scope="col" className="border p-2 w-40">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {outlets.map((Outlet, index) => (
              <tr key={Outlet.id}>
                <td className="border p-2 w-10 text-center">{index + 1}</td>
                <td className="border p-2">{Outlet.name}</td>
                <td className="border p-2">{Outlet?.locationName}</td>
                <td className="border p-2 text-center">
                  <button
                    onClick={() => {
                      setEditingOutlet(Outlet);
                      setModalOpen(true);
                    }}
                    className="mr-3 bg-gray-200 hover:bg-gray-100 p-1 rounded-md"
                    title="Edit"
                  >
                    <EditIcon size={20} strokeWidth={1.5} />
                  </button>
                  <button
                    onClick={() => {
                      handleDelete(Outlet.locationId, Outlet.id);
                    }}
                    className="bg-gray-200 hover:bg-gray-100 p-1 rounded-md"
                    title="Delete"
                  >
                    <Trash2Icon size={20} strokeWidth={1.5} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {loading && <p className="text-center">Loading...</p>}
        {outlets.length > 0 ? (
          <p className="pt-2 text-sm text-gray-500">
            Total Records: {outlets.length}
          </p>
        ) : (
          <p className="text-sm text-center mt-2 text-gray-500">
            No Outlets Found
          </p>
        )}
      </div>
      {modalOpen && (
        <AddEditOutlet
          editOutlet={editingOutlet}
          onSubmit={fetchOutlets}
          onCloseModal={onCloseModal}
        />
      )}
    </div>
  );
});
