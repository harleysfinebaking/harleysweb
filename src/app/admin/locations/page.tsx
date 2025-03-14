"use client";
import { useState, useEffect } from "react";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  query,
  orderBy,
} from "firebase/firestore";
import { dbNew } from "@/lib/firebase";
import { EditIcon, MapPin, PlusCircle, Trash2Icon } from "lucide-react";
import withAuth from "@/components/withAuth";
import AddEditLocation, { Location } from "./AddEditLocation";

export default withAuth(function LocationsPage() {
  const [loading, setLoading] = useState<boolean>(false);
  const [locations, setLocations] = useState<Location[]>([]);
  const [editingLocation, setEditingLocation] = useState<Location | null>(null);
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  /**
   * Fetch Locations
   */
  const fetchLocations = async () => {
    setLoading(true);
    try {
      const locationsRef = collection(dbNew, "locations");
      const q = query(locationsRef, orderBy("createdAt"));
      const snapshot = await getDocs(q);
      setLocations(
        snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as Location))
      );
    } catch (error) {
      console.error("Error fetching locations:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLocations();
  }, []);

  /**
   * Delete Location
   * @param id
   */
  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this location?")) {
      setLoading(true);
      try {
        await deleteDoc(doc(dbNew, "locations", id));
        setLocations(locations.filter((location) => location.id !== id));
      } catch (error) {
        console.error("Error deleting location:", error);
      } finally {
        setLoading(false);
      }
    }
  };

  /**
   * Close the modal
   */
  const onCloseModal = () => {
    setEditingLocation(null);
    setModalOpen(false);
  };

  return (
    <div className="shadow-xl p-3 bg-slate-50 rounded-md">
      <div className="flex justify-between items-center border-b p-3    ">
        <h2 className="text-2xl font-medium flex items-center gap-x-2">
          <MapPin className="text-primayPink" /> Locations
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
              <th scope="col" className="border p-2 w-40">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {locations.map((location, index) => (
              <tr key={location.id}>
                <td className="border p-2 w-10 text-center">{index + 1}</td>
                <td className="border p-2">{location?.name}</td>
                <td className="border p-2 text-center">
                  <button
                    onClick={() => {
                      setEditingLocation(location);
                      setModalOpen(true);
                    }}
                    className="mr-3 bg-gray-200 hover:bg-gray-100 p-1 rounded-md"
                    title="Edit"
                  >
                    <EditIcon size={20} strokeWidth={1.5} />
                  </button>
                  <button
                    onClick={() => handleDelete(location.id)}
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
        {locations.length > 0 ? (
          <p className="pt-2 text-sm text-gray-500">
            Total Records: {locations.length}
          </p>
        ) : (
          <p className="text-sm text-center mt-2 text-gray-500">
            No Locations Found
          </p>
        )}
      </div>
      {modalOpen && (
        <AddEditLocation
          editingLocation={editingLocation}
          onSubmit={fetchLocations}
          onCloseModal={onCloseModal}
        />
      )}
    </div>
  );
});
