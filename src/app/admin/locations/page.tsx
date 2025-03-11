"use client";

import { useState, useEffect } from "react";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
  addDoc,
} from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useRouter } from "next/navigation";
import { EditIcon, MapPinned, PlusCircle, Trash2Icon } from "lucide-react";

type Location = {
  id: string;
  name: string;
  address: string;
};

export default function LocationsPage() {
  const dummyData = [
    { id: "1", name: "Nanakramguda", address: "Hyderabad" },
    { id: "2", name: "AMB", address: "Hyderabad" },
    { id: "3", name: "Manikonda", address: "Hyderabad" },
    { id: "4", name: "JP Nagar", address: "Banglore" },
  ];
  const [locations, setLocations] = useState<Location[]>([...dummyData]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingLocation, setEditingLocation] = useState(null);
  const [formData, setFormData] = useState({ name: "", address: "" });
  const router = useRouter();

  /**
   * Fetch Locations
   */
  useEffect(() => {
    const fetchLocations = async () => {
      //   const querySnapshot = await getDocs(collection(db, "locations"));
      //   setLocations(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Location)));
    };
    fetchLocations();
  }, []);

  /**
   * Add or Edit Location
   */
  const handleSave = async () => {
    // if (editingLocation) {
    //   await updateDoc(doc(db, "locations", editingLocation.id), formData);
    // } else {
    //   await addDoc(collection(db, "locations"), formData);
    // }
    console.log(formData);
    setModalOpen(false);
    setEditingLocation(null);
  };

  /**
   * Delete Location
   * @param id
   */
  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this location?")) {
      await deleteDoc(doc(db, "locations", id));
      setLocations(locations.filter((location) => location.id !== id));
    }
  };

  return (
    <div className="shadow-xl p-3 bg-slate-50 rounded-md">
      <div className="flex justify-between items-center border-b p-3    ">
        <h2 className="text-2xl font-medium flex items-center gap-x-2">
          <MapPinned className="text-primayPink" /> Locations
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
                Address
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
                <td className="border p-2">{location.name}</td>
                <td className="border p-2">{location.address}</td>
                <td className="border p-2 text-center">
                  <button
                    onClick={() => {
                      setEditingLocation(location);
                      setFormData({
                        name: location.name,
                        address: location.address,
                      });
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
      </div>
      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[40vw]">
            <h2 className="text-xl mb-4 font-medium">
              {editingLocation ? "Edit" : "Add"} Location
            </h2>
            <input
              type="text"
              placeholder="Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="border p-2 w-full mb-2"
            />
            <input
              type="text"
              placeholder="Address"
              value={formData.address}
              onChange={(e) =>
                setFormData({ ...formData, address: e.target.value })
              }
              className="border p-2 w-full mb-2"
            />
            <div className="flex justify-end">
              <button
                className="bg-gray-200 px-4 py-2 rounded mr-2"
                onClick={() => {
                  setFormData({
                    name: "",
                    address: "",
                  });
                  setEditingLocation(null);
                  setModalOpen(false);
                }}
              >
                Cancel
              </button>
              <button
                className="bg-primayPink px-4 py-2 rounded"
                onClick={handleSave}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
