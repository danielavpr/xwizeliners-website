import React from "react";
import TeamCard from "./TeamCard";
import Rene from "../images/rene.jpeg";
import Mat from "../images/mat.jpeg";
import Luis from "../images/luis.jpeg";
import Martin from "../images/martin.jpeg";
import Daniela from "../images/daniela.jpg";

const teamMembers = [
  {
    name: "Matthew Pasienski",
    imageSrc: Mat,
    role: "Ambassador San Francisco",
    link: "https://www.linkedin.com/in/matthew-pasienski-06a55a33/",
  },
  {
    name: "Luis Aranguren",
    imageSrc: Luis,
    role: "Group Administrator",
    link: "https://www.linkedin.com/in/luis-aranguren/",
  },
  {
    name: "Rene Nevarez",
    imageSrc: Rene,
    role: "Group Administrator",
    link: "https://www.linkedin.com/in/rene-nevarez-a91b20188/",
  },
  {
    name: "Martin Moscosa",
    imageSrc: Martin,
    role: "Ambassador Guadalajara",
    link: "https://www.linkedin.com/in/mmoscosa/",
  },
  {
    name: "Daniela Ramón",
    imageSrc: Daniela,
    role: "Ambassador Guadalajara",
    link: "https://www.linkedin.com/in/danielavpr/",
  },
];

function Team() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Who we are</h2>
            <p className="md:text-xl text-gray-400">
              Meet the team behind this initiative.
            </p>
          </div>

          {/* Team */}
          <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none">
            {teamMembers.map((member, index) => (
              <TeamCard
                key={`team-${index}`}
                imageSrc={member.imageSrc}
                name={member.name}
                role={member.role}
                link={member.link}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
