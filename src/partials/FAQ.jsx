import React from "react";
import Collapse from "./Collapse";
import links from "../constants/links";

const questions = [
  {
    question: "What do I get out of this group?",
    answer:
      "Strong connections, development & training, job opportunities and referrals, online directory, monthly newsletter, digital or physical events, slack channels, and LinkedIn channel.",
  },
  {
    question: "How can someone be part of the XWizeliners community?",
    answer:
      "Be an XWizeliner. Enter the LinkedIn Group and Slack Channel. Post & participate whenever you can. Go to the events. Share the group with your fellow XWizeliners.",
  },
  {
    question:
      "How much does it cost to be part of the group? Does it require a compromise? Is it voluntary?",
    answer:
      "The XWizeliners community is a free and open (for XWizeliners) community that welcomes members from all walks of life. There are no membership fees for entry, and there is no expectation of compromise on the part of community members.",
  },
  {
    question: "Why is the linkedin group closed/private?",
    answer:
      "Because it's only for XWizeliners, all XWizeliners can join the group.",
  },
  {
    question: "From where/whom comes the initiative? Why are you doing this?",
    answer:
      "Here's a video where Matthew Pasienski explains the purpose of this group.",
    link: links.videoLinkedin,
  },
];

function FAQ() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div className="py-12 md:py-20 border-t border-gray-800">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">FAQ</h2>
            <p className="md:text-xl text-gray-400">
              Find the answers to common questions.
            </p>
          </div>
          {questions.map((question, index) => (
            <Collapse
              key={`question-${index}`}
              title={question.question}
              content={question.answer}
              link={question.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
