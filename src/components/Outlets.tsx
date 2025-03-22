import DecoratedTitle from "./DecoratedTitle";
import { FadeInElement } from "./Locations";
import { MapPin, Phone } from "lucide-react";

type OutletProps = {
  id: string;
  outlets: {
    name: string;
    address: string;
    locationUrl: string;
  }[];
};
const Outlet = ({ id, outlets }: OutletProps) => {
  return (
    <div
      id={id?.toLowerCase()}
      className="container mx-auto px-4 py-4 md:py-8 lg:py-12"
    >
      <FadeInElement>
        <DecoratedTitle title={id} className="mb-8" />
      </FadeInElement>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {outlets.map((outlet, index) => (
          <FadeInElement key={`${index + 1}`} delay={index * 0.1}>
            <div className="bg-[#CBEBF2] hover:bg-primayPink rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="h-auto md:h-[200px] lg:h-[240px] px-4 py-6 flex flex-col justify-between gap-y-4 md:gap-y-0">
                <h3 className="text-lg lg:text-xl font-semibold text-gray-600">
                  {outlet.name}
                </h3>
                <p className="text-sm xl:text-base text-gray-600">
                  {outlet.address}
                </p>
                <div className="flex justify-start gap-x-2">
                  <a href={outlet.locationUrl} target="_blank" className="flex">
                    <span className="flex items-center bg-white hover:bg-[#CBEBF2] px-4 py-2 rounded-full gap-x-1">
                      <MapPin size={16} />
                      <span className="text-sm">Directions</span>
                    </span>
                  </a>
                  <a
                    href="tel:8083098888"
                    className="text-xs lg:text-sm flex items-center transition-colors"
                  >
                    <span className="flex items-center bg-white hover:bg-[#CBEBF2] px-4 py-2 rounded-full gap-x-1">
                      <Phone size={16} />
                      <span className="text-sm">Call Us</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </FadeInElement>
        ))}
      </div>
    </div>
  );
};

export default Outlet;
