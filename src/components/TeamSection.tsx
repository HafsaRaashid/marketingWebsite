import React from "react";
import { MapPin, Mail } from "lucide-react";

const teamMembers = [
  {
    name: "Oshadha Fernando",
    role: "Fullstack Developer",
    image: "https://i.imgur.com/sFUpUta.jpeg",
    github: " http://github.com/oshadhafernando2005",
    linkedin: "https://www.linkedin.com/in/oshadha-fernando-a8b39b30a/",
    bio: "An undergraduate pursuing their first degree in Software Engineering, and a passionate Full Stack Developer with a keen interest in AI and Machine Learning projects that make an impact in the real world.",
  },
  {
    name: "Hafsa Raashid",
    role: "Fullstack Developer",
    image: "https://i.imgur.com/YjtWIt9.jpeg",
    github: "https://github.com/HafsaRaashid",
    linkedin: "https://www.linkedin.com/in/hafsaraashid00/",
    bio: "Software Engineering Undergraduate with strong pssion for web development. Interested in on machine learning and animal health applications.",
  },
  {
    name: "Sanjana Sanjeevan",
    role: "Fullstack Developer",
    image: "https://i.imgur.com/icrxdqI.jpeg",
    github: "https://github.com/Sanjana-Sanjeevan",
    linkedin:
      "https://www.linkedin.com/in/sanjana-sanjeevan/?originalSubdomain=lk",
    bio: "Creative Software Engineering Undergraduate with hands on experience in Full Stack Deveoplement. Pssionate in frontend development, UI designing, and Video Editing.",
  },
  {
    name: "Sanuli Gehara",
    role: "Fullstack Developer",
    image: "https://i.imgur.com/TeN3Czw.jpeg",
    github: "https://github.com/SanuliGehara",
    linkedin: "https://www.linkedin.com/in/sanuli-gehara-71210b295/",
    bio: "Passionate Software Developer who likes working on backend systems and exploring machine learning. Always excited to learn new things and build real-world  projects",
  },

  {
    name: "Sahlah Sheriff",
    role: "Fullstack Developer",
    image: "https://i.imgur.com/QcMUeTH.jpeg",
    linkedin: "https://www.linkedin.com/in/sahlah-sheriff/",
    github: "https://github.com/Sahlah-Sheriff",
    bio: "Software Engineering student who enjoys backend development and design. Interested in building smart systems using AI and machine learning. Likes solving problems with simple and clean solutions.",
  },
];

const TeamSection = () => {
  return (
    <section id="team" className="section bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-petblue-dark mb-4">
            Meet Our Team
          </h2>
          <p className="text-gray-600 text-lg">
            Passionate professionals dedicated to improving the lives of pets
            and their humans through innovation and compassion.
          </p>
        </div>

        <div className="grid grid-cols-5 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-48 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-petblue-dark">
                  {member.name}
                </h3>
                <p className="text-petorange font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                <div className="flex justify-center space-x-4">
                  <a
                    href={member.linkedin}
                    className="text-gray-500 hover:text-petorange"
                  >
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8.9h4V24h-4V8.9zM7.5 8.9h3.6v2.05h.05c.5-.95 1.7-1.95 3.5-1.95 3.75 0 4.45 2.4 4.45 5.5V24h-4v-7.95c0-1.9-.05-4.35-2.65-4.35-2.65 0-3.05 2.05-3.05 4.2V24h-4V8.9z"
                      />
                    </svg>
                  </a>
                  <a
                    href={member.github}
                    className="text-gray-500 hover:text-petorange"
                  >
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-500 hover:text-petorange">
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
