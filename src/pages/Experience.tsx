import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaComputer } from "react-icons/fa6";
import { FaBook } from "react-icons/fa";
import { experienceData } from "@/data/experienceData";
import { TIMELINE_ICON_STYLE } from "@/constants/experience";

const ICON_MAP = {
  computer: <FaComputer />,
  book: <FaBook />,
} as const;

export function Experience() {
  return (
    <div className="bg-[#dedede]">
      <h1 className="mb-8 pt-28 text-center text-4xl font-semibold text-gray-900">
        Experiences
      </h1>

      <VerticalTimeline>
        {experienceData.map((item) => (
          <VerticalTimelineElement
            key={item.id}
            className="vertical-timeline-element--work"
            date={item.date}
            iconStyle={TIMELINE_ICON_STYLE}
            icon={ICON_MAP[item.icon]}
          >
            <h3 className="vertical-timeline-element-title text-2xl font-semibold text-gray-900">
              {item.title}
            </h3>
            <h4 className="vertical-timeline-element-subtitle font-semibold text-gray-900">
              {item.subtitle}
            </h4>
            <p className="text-base">{item.description}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
}