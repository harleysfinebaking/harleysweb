import Image from "next/image";
import DecoratedTitle from "./DecoratedTitle";
import { FadeInElement } from "./Locations";
import { MapPin } from "lucide-react";

type OutletProps = {
  id: string;
  outlets: {
    name: string;
    image: string;
    locationUrl: string;
  }[];
};
const Outlet = ({ id, outlets }: OutletProps) => {
  return (
    <div
      id={id.toLowerCase()}
      className="container mx-auto px-4 py-4 md:py-8 lg:py-12"
    >
      <FadeInElement>
        <DecoratedTitle title={id} className="mb-8" />
      </FadeInElement>
      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {outlets.map((outlet, index) => (
          <FadeInElement key={`${index + 1}`} delay={index * 0.1}>
            <div className="bg-white/30 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={outlet.image}
                  alt={`${outlet.name} outlet`}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-4 flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-600">
                  {outlet.name}
                </h3>
                <a
                  href={outlet.locationUrl}
                  target="_blank"
                  className="flex justify-center items-center"
                >
                  <span className="flex items-center bg-primayPink hover:bg-[#CBEBF2] px-4 py-2 rounded-full gap-x-1">
                    <MapPin size={16} />
                    <span className="hidden lg:block text-sm">Directions</span>
                  </span>
                </a>
              </div>
            </div>
          </FadeInElement>
        ))}
      </div>
    </div>
  );
};

export default Outlet;
