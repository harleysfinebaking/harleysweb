import { useState } from "react";
import DecoratedTitle from "./DecoratedTitle";
import { FadeInElement } from "./Locations";
import { ArrowRight, Phone } from "lucide-react";

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
  const [search, setSearch] = useState("");
  const [locationFilter, setLocationFilter] = useState("");

  // Get unique locations
  const locations = Array.from(
    new Set(openings.map((job) => job.location))
  );

  const filteredOpenings = openings.filter((job) => {
    const matchesSearch =
      job.designation.toLowerCase().includes(search.toLowerCase()) ||
      job.location.toLowerCase().includes(search.toLowerCase());

    const matchesLocation =
      locationFilter === "" || job.location === locationFilter;

    return matchesSearch && matchesLocation;
  });

  return (
    <div className="container mx-auto px-4 py-4 md:py-8 lg:py-12">
      <FadeInElement>
        <DecoratedTitle title={"We are Hiring"} className="mb-8" />
      </FadeInElement>

      {/* Search + Location Filter */}
      <div className="flex flex-col lg:flex-row gap-4 mb-6">
        <input
          type="search"
          name="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search..."
          className="border border-black rounded-xl px-3 py-2 w-full lg:max-w-[360px]"
        />

        <select
          value={locationFilter}
          onChange={(e) => setLocationFilter(e.target.value)}
          className="border border-black rounded-xl px-3 py-2 w-full lg:max-w-[240px]"
        >
          <option value="">All Locations</option>
          {locations.map((loc) => (
            <option key={loc} value={loc}>
              {loc}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {filteredOpenings.map((item, index) => (
          <FadeInElement key={item.id} delay={index * 0.1}>
            <div className="bg-[#CBEBF2] hover:bg-primayPink rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="px-4 py-6 flex flex-col gap-y-3">
                <h3 className="text-lg lg:text-xl font-semibold text-gray-600">
                  Designation: {item.designation}
                </h3>
                <p className="text-sm text-gray-600">
                  No of Positions: {item.positions}
                </p>
                <p className="text-sm text-gray-600">
                  Experience: {item.experience}
                </p>
                <p className="text-sm text-gray-600">
                  Location: {item.location}
                </p>

                <div className="flex gap-x-2 mt-2">
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=leelamohan366@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="flex items-center bg-white hover:bg-[#CBEBF2] px-4 py-2 rounded-full gap-x-1">
                      <ArrowRight size={16} />
                      <span className="text-sm">Apply Now</span>
                    </span>
                  </a>

                  <a href={`tel:${item.contact}`}>
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

export default Careers;
