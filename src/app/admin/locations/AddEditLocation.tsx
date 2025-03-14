import { dbNew } from "@/lib/firebase";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export type Location = {
  id: string;
  name: string;
  createdAt: string;
};
type AddEditLocationProps = {
  editingLocation: Location | null;
  onSubmit: () => void;
  onCloseModal: () => void;
};

type LocationFormData = {
  name: string;
  createdAt: string;
};

const AddEditLocation = ({
  editingLocation,
  onSubmit,
  onCloseModal,
}: AddEditLocationProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm<LocationFormData>();

  useEffect(() => {
    if (editingLocation) {
      setValue("name", editingLocation?.name);
    }
  }, [editingLocation]);

  /**
   * Add or Edit Location
   */
  const handleSave = async (data: LocationFormData) => {
    setIsLoading(true);
    if (editingLocation) {
      try {
        await updateDoc(doc(dbNew, "locations", editingLocation.id), data);
      } catch (error) {
        console.error("Error adding location:", error);
      } finally {
        setIsLoading(false);
      }
    } else {
      try {
        await addDoc(collection(dbNew, "locations"), {
          name: data.name,
          createdAt: serverTimestamp(),
        });
      } catch (error) {
        console.error("Error updating location:", error);
      } finally {
        setIsLoading(false);
      }
    }
    reset();
    onCloseModal();
    onSubmit();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[30vw]">
        <h2 className="text-xl mb-4 font-medium">
          {editingLocation ? "Edit" : "Add"} Location
        </h2>
        <form onSubmit={handleSubmit(handleSave)}>
          <div>
            <label className="block text-sm font-medium">
              Name<span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              {...register("name", { required: "Name is required" })}
              className="border p-2 w-full my-2"
            />
            {errors.name && (
              <p className="text-red-600 text-sm">{errors.name.message}</p>
            )}
          </div>
          <div className="flex justify-end">
            <button
              className="bg-gray-200 px-4 py-2 rounded mr-2"
              onClick={onCloseModal}
              disabled={!!isLoading}
            >
              Cancel
            </button>
            <button className="bg-primayPink px-4 py-2 rounded" type="submit">
              {isLoading ? "Saving..." : "Save"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEditLocation;
