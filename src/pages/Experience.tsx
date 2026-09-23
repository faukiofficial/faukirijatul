import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaComputer } from 'react-icons/fa6';
import { FaBook } from 'react-icons/fa';
import { experienceData } from '@/data/experienceData';
import { TIMELINE_ICON_STYLE } from '@/constants/experience';

const ICON_MAP = {
  computer: <FaComputer />,
  book: <FaBook />,
} as const;

export function Experience() {
  return (
    <div className="bg-[#dedede] pb-12">
      <h1 className="mb-8 pt-20 text-center text-2xl font-semibold text-gray-900 sm:text-3xl md:pt-28 md:text-4xl">
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
            <h3 className="vertical-timeline-element-title text-lg font-semibold text-gray-900 sm:text-xl md:text-2xl">
              {item.title}
            </h3>
            <h4 className="vertical-timeline-element-subtitle text-sm font-semibold text-gray-800 sm:text-base">
              {item.subtitle}
            </h4>
            <p className="!text-xs !font-normal text-gray-700 sm:!text-sm md:!text-base">
              {item.description}
            </p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
}
