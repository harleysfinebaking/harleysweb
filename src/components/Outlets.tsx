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
  const totalOutlets = outlets.length;
  const remainder = totalOutlets % 3;
  const completeRows = Math.floor(totalOutlets / 3);
  const lastRowStartIndex = completeRows * 3;

  const completeRowOutlets = outlets.slice(0, lastRowStartIndex);
  const lastRowOutlets = outlets.slice(lastRowStartIndex);

  const isOnlyTwoOutlets = totalOutlets === 2;
  const isLastRowTwo = remainder === 2;

  return (
    <div
      id={id.toLowerCase()}
      className="container mx-auto px-4 py-4 md:py-8 lg:py-12"
    >
      <FadeInElement>
        <DecoratedTitle title={id} className="mb-8" />
      </FadeInElement>

      {/* COMPLETE ROWS - EXPAND CARDS TO FILL GRID */}
      {completeRowOutlets.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-4">
          {completeRowOutlets.map((outlet, index) => (
            <FadeInElement key={index} delay={index * 0.1}>
              <OutletCard outlet={outlet} fullWidth /> {/* fullWidth prop */}
            </FadeInElement>
          ))}
        </div>
      )}

      {/* LAST ROW - KEEP ORIGINAL WIDTH, CENTER IF 1 OR 2 OUTLETS */}
      {lastRowOutlets.length > 0 && (
        <div
          className={
            isOnlyTwoOutlets || isLastRowTwo
              ? "flex justify-center gap-4" // Center 1 or 2 cards
              : remainder === 1
              ? "flex justify-center"
              : "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4"
          }
        >
          {lastRowOutlets.map((outlet, index) => {
            const actualIndex = lastRowStartIndex + index;
            return (
              <FadeInElement key={actualIndex} delay={actualIndex * 0.1}>
                <OutletCard outlet={outlet} /> {/* default width */}
              </FadeInElement>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Outlet;

/* ---------------------------------- */
/* OUTLET CARD                        */
/* ---------------------------------- */

type OutletCardProps = {
  outlet: {
    name: string;
    address: string;
    locationUrl: string;
  };
  fullWidth?: boolean; // Optional prop to expand card width
};

const OutletCard = ({ outlet, fullWidth }: OutletCardProps) => {
  return (
    <div
      className={`bg-[#CBEBF2] hover:bg-primayPink rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 ${
        fullWidth ? "w-full" : "w-full max-w-xs md:max-w-sm"
      }`}
    >
      <div className="h-auto md:h-[200px] lg:h-[240px] px-4 py-6 flex flex-col justify-between gap-y-4 md:gap-y-0">
        <h3 className="text-lg lg:text-xl font-semibold text-gray-600">
          {outlet.name}
        </h3>

        <p className="text-sm xl:text-base text-gray-600">{outlet.address}</p>

        <div className="flex gap-x-2">
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
  );
};
