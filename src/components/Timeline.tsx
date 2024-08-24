import { Timeline } from "rsuite";
import Avatar from "../assets/icons/avatar10.svg";
import { Timeline as TimelineType } from "../types";

const ShipmentTimeline = ({ data }: { data: TimelineType[] }) => {
  return (
    <Timeline align="left" endless>
      {data.map((item, index) => (
        <Timeline.Item
          key={index}
          dot={
            <div className="p-[6px] border border-[#E5E7EB] rounded-full w-[28px] h-[28px] flex items-center justify-center bg-white">
              {item.icon}
            </div>
          }
          time={item.time}
        >
          <p className="font-semibold text-[16px] text-[#1F2937] mb-1">
            {item.title}
          </p>
          {item.description && (
            <p className="font-medium text-[16px] text-[#6B7280]">
              {item.description}
            </p>
          )}
          {item.user && (
            <div className="my-[10px] flex items-center gap-x-2">
              <div className="rounded-full overflow-hidden">
                <Avatar />
              </div>
              <p className="font-semibold text-[15px] text-[#1F2937]">
                {item.user}
              </p>
            </div>
          )}
        </Timeline.Item>
      ))}
    </Timeline>
  );
};

export default ShipmentTimeline;
