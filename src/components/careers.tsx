import { useState } from "react";
import DecoratedTitle from "./DecoratedTitle";
import { FadeInElement } from "./Locations";
import { ArrowRight, MapPin, MoveRightIcon, Phone } from "lucide-react";

type CareerProps = {
  openings: {
    id: string;
    designation: string;
    positions: number;
    experience: string;
    location: string;
    contact: number;
  }[];
};

const Careers = ({ openings }: CareerProps) => {
  const [search, setSearch] = useState<string>("");
  const filteredOpenings = openings.filter(
    (job) =>
      job.designation.toLowerCase().includes(search.toLowerCase()) ||
      job.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-4 md:py-8 lg:py-12">
      <FadeInElement>
        <DecoratedTitle title={"We are Hiring"} className="mb-8" />
      </FadeInElement>
      <input
        type="search"
        name="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search..."
        className="border border-black rounded-xl mb-4 px-2 py-2 w-full lg:max-w-[488px]"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {filteredOpenings.map((item, index) => (
          <FadeInElement key={`${index + 1}`} delay={index * 0.1}>
            <div className="bg-[#CBEBF2] hover:bg-primayPink rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="h-auto md:h-[200px] lg:h-[240px] px-4 py-6 flex flex-col justify-between gap-y-4 md:gap-y-0">
                <h3 className="text-lg lg:text-xl font-semibold text-gray-600">
                  Designation: {item.designation}
                </h3>
                <p className="text-sm xl:text-base text-gray-600">
                  No of Positions: {item.positions}
                </p>
                <p className="text-sm xl:text-base text-gray-600">
                  Experience: {item.experience}
                </p>
                <p className="text-sm xl:text-base text-gray-600">
                  Location: {item.location}
                </p>
                <div className="flex justify-start gap-x-2">
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=leelamohan366@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs lg:text-sm flex items-center transition-colors"
                  >
                    <span className="flex items-center bg-white hover:bg-[#CBEBF2] px-4 py-2 rounded-full gap-x-1">
                      <ArrowRight size={16} />
                      <span className="text-sm">Apply Now</span>
                    </span>
                  </a>
                  <a
                    href={`tel:${item.contact}`}
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
      <FadeInElement>
        <div className="mt-6">
          <div className="bg-[#CBEBF2] text-slate-900 rounded-2xl px-5 py-4 text-center shadow-md">
            <p className="font-semibold text-2xl">
              Walk in Interview: 10:30 AM - 06:00 PM
            </p>
            <p className="font-semibold text-xl">Harley&apos;s Ivory Lounge</p>
            <p className="text-sm sm:text-base">
              <span className="font-semibold">Hyderabad: </span> Survey No:55/E,
              Nanakramguda Rd, below Medics Healthcare, Hyderabad, Telangana -
              500032.
            </p>
            <p className="text-sm sm:text-base">
              <span className="font-semibold">Benaguluru: </span> S. No. 1316,
              9th Main Rd, Marenahalli, 2nd Phase, J. P. Nagar, Bengaluru -
              560078.
            </p>
          </div>
        </div>
      </FadeInElement>
    </div>
  );
};

export default Careers;
