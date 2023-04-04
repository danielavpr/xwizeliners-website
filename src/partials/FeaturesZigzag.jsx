import React from "react";
import FeatureCard from "./FeatureCard";
import brainstorm from "../images/brainstorm.svg";
import job from "../images/job.svg";
import group from "../images/group.svg";
import ideas from "../images/share-ideas.svg";

const features = [
  {
    image: brainstorm,
    header: "Networking",
    title: "Join the community",
    description: {
      text: "Register here",
      link: "https://forms.gle/bwyLEBzTaHbb68GQ6",
    },
    bulletPoints: [
      "Connect with some of the best talents in the tech industry",
      "Work and collaborate on interesting projects driven by the community",
      "Be aware of all the new opportunities in the group",
      "Communication via LinkedIn and Slack"
    ],
  },
  {
    image: job,
    header: "Find your next role",
    title: "Job seeking and sharing",
    description: {
      text: "Join our jobs and referrals channel in slack",
      link: "https://xwizeline.slack.com/archives/C04RM21AY57"
    },
    bulletPoints: ["Apply for your next dream job or refer a friend that could be a good fit", "Earn money from your referrals"],
    imageLeft: true,
  },
  {
    image: ideas,
    header: "Be an active part of the community",
    title: "Be an ambassador",
    description: {
      text: "Register here",
      link: "https://forms.gle/UuhBzbqEQ96zmGJ47",
    },
    bulletPoints: ["Organize virtual or in-person events in your city", "Share your ideas to enhance the operations of the group"],
  },
  {
    image: group,
    header: "Connect with other people",
    title: "Join the events",
    description: {
      text: "Events channel in slack",
      link: "https://xwizeline.slack.com/archives/C04R35Q6C5D",
    },
    bulletPoints: ["Be aware of all the next events online or in your city", "All the events are organized by the community"],
    imageLeft: true,
  }
];

function FeaturesZigzag() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:mt-6">
        <div className="py-12 md:py-20 border-t border-gray-800">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4">What you can do in this group</h1>
            <p className="md:text-xl text-gray-400">
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
