import { dbNew } from "@/lib/firebase";
import {
  addDoc,
  collection,
  doc,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Location } from "../locations/AddEditLocation";

export type Outlet = {
  id: string;
  city: string;
  name: string;
  address: string;
  locationUrl: string;
  createdAt: string;
  locationId: string;
  locationName: string;
};

type AddEditOutletProps = {
  editOutlet: Outlet | null;
  onSubmit: () => void;
  onCloseModal: () => void;
};

type OutletFormData = {
  name: string;
  city: string;
  address: string;
  locationUrl: string;
};

const AddEditOutlet = ({
  editOutlet,
  onSubmit,
  onCloseModal,
}: AddEditOutletProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [locations, setLocations] = useState<Location[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
    watch,
  } = useForm<OutletFormData>();

  useEffect(() => {
    if (editOutlet) {
      setValue("name", editOutlet?.name);
      setValue("address", editOutlet?.address);
      setValue("locationUrl", editOutlet?.locationUrl);
      setValue("city", editOutlet?.locationId);
    }
  }, [editOutlet]);

  const getLocations = async () => {
    const locationsRef = collection(dbNew, "locations");
    const q = query(locationsRef, orderBy("createdAt"));
    const snapshot = await getDocs(q);
    setLocations(
      snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as Location))
    );
  };

  useEffect(() => {
    getLocations();
  }, []);

  /**
   * Add or Edit Location
   */
  const handleSave = async (data: OutletFormData) => {
    setIsLoading(true);
    if (editOutlet) {
      try {
        const outletRef = doc(
          dbNew,
          "locations",
          data.city,
          "outlets",
          editOutlet.id
        );
        await updateDoc(outletRef, {
          name: data.name,
          address: data.address,
          locationUrl: data.locationUrl,
        });
      } catch (error) {
        console.error("Error adding location:", error);
      } finally {
        setIsLoading(false);
      }
    } else {
      try {
        const outletRef = collection(dbNew, "locations", data.city, "outlets"); // Nested collection reference
        await addDoc(outletRef, {
          name: data.name,
          address: data.address,
          locationUrl: data.locationUrl,
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
      <div className="bg-white p-6 rounded-lg shadow-lg w-[100vw] md:w-[70vw] lg:w-[50vw]">
        <h2 className="text-xl mb-4 font-medium">
          {editOutlet ? "Edit" : "Add"} Location
        </h2>
        <form onSubmit={handleSubmit(handleSave)}>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium">
                Name<span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                {...register("name", { required: "Name is required" })}
                className="border p-2 w-full my-2 rounded-md"
              />
              {errors.name && (
                <p className="text-red-600 text-sm">{errors.name.message}</p>
              )}
            </div>
            {!editOutlet && (
              <div>
                <label className="block text-sm font-medium">
                  Location <span className="text-red-600">*</span>
                </label>
                <select
                  className="border p-2 w-full my-2 rounded-md"
                  value={watch("city") || ""}
                  {...register("city", { required: "Please select city" })}
                  onChange={(e) => setValue("city", e.target.value)}
                >
                  <option value="" disabled>
                    Select Location
                  </option>
                  {locations.map((location: Location) => (
                    <option key={location.id} value={location.id}>
                      {location.name}
                    </option>
                  ))}
                </select>
                {errors.city && (
                  <p className="text-red-600 text-sm">{errors.city.message}</p>
                )}
              </div>
            )}
            <div>
              <label className="block text-sm font-medium">
                Address<span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                placeholder="Address"
                {...register("address", { required: "Address is required" })}
                className="border p-2 w-full my-2 rounded-md"
              />
              {errors.address && (
                <p className="text-red-600 text-sm">{errors.address.message}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium">
                Location Url<span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                placeholder="Location Url"
                {...register("locationUrl", {
                  required: "Location Url is required",
                })}
                className="border p-2 w-full my-2 rounded-md"
              />
              {errors.locationUrl && (
                <p className="text-red-600 text-sm">
                  {errors.locationUrl.message}
                </p>
              )}
            </div>
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

export default AddEditOutlet;
