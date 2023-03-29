import React from "react";
import FeatureCard from "./FeatureCard";
import brainstorm from "../images/brainstorm.svg";
import job from "../images/job.svg";
import group from "../images/group.svg";

const features = [
  {
    image: brainstorm,
    header: "Networking",
    title: "Join the community",
    description: {
      text: "Linkedin and Slack",
      link: "https://forms.gle/bwyLEBzTaHbb68GQ6",
    },
    bulletPoints: [
      "Share tools and experience",
      "Get access to new opportunities",
    ],
  },
  {
    image: job,
    header: "Find your next role",
    title: "Job seeking and sharing",
    bulletPoints: ["Find inquiries for job opennings", "Share vacancies"],
    imageLeft: true,
  },
  {
    image: group,
    header: "Organize events and connect with others",
    title: "Be an ambassador",
    description: {
      text: "Register",
      link: "https://forms.gle/UuhBzbqEQ96zmGJ47",
    },
    bulletPoints: ["Organize events", "Receive mentorship and resources"],
  },
];

function FeaturesZigzag() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:mt-6">
        <div className="py-12 md:py-20 border-t border-gray-800">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4">What you can do in this group</h1>
            <p className="text-xl text-gray-400">
              Find tools and connections to grow your professional career.
            </p>
          </div>

          {/* Items */}
          <div className="grid gap-20">
            {features.map((feature, index) => (
              <FeatureCard
                key={`feature-${index}`}
                image={feature.image}
                header={feature.header}
                title={feature.title}
                description={feature.description}
                bulletPoints={feature.bulletPoints}
                imageLeft={feature.imageLeft}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesZigzag;
