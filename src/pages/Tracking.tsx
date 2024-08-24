import MainLayout from "../components/MainLayout";
import EmptyIcon from "../assets/icons/empty.svg";
import {
  ArrowDownToDot,
  ArrowUpRight,
  MapPin,
  PackageCheck,
  PackagePlus,
  PackageSearch,
  Receipt,
  Truck,
  User,
} from "lucide-react";
import ShipmentTimeline from "../components/Timeline";
import { useSearch } from "../context/SearchContext";
import { Link, useLocation } from "react-router-dom";
import { Shipment } from "../types";
import NotFoundIcon from "../assets/icons/notfound.svg";

const iconStyles = {
  shippingDetail: { size: 16, color: "#6B7280" },
  timeline: { size: 16, color: "#1F2937" },
};

const shippingDetailIcons = [
  <ArrowUpRight {...iconStyles.shippingDetail} />,
  <User {...iconStyles.shippingDetail} />,
  <ArrowDownToDot {...iconStyles.shippingDetail} />,
  <MapPin {...iconStyles.shippingDetail} />,
  <Truck {...iconStyles.shippingDetail} />,
];

const timelineIcons = [
  <PackagePlus {...iconStyles.timeline} />,
  <PackageCheck {...iconStyles.timeline} />,
  <PackageSearch {...iconStyles.timeline} />,
  <Truck {...iconStyles.timeline} />,
];

const ShipmentDetails = ({ shipment }: { shipment: Shipment }) => (
  <div className="w-full md:max-w-[500px] border border-[#E5E7EB] rounded-[12px] h-fit">
    <div className="p-5">
      <p className="text-[18px] text-[#1F2937] font-bold mb-[5px]">
        {shipment?.trackingId}
      </p>
      <p className="text-[14px] text-[#6B7280] mb-4">
        Last updated {shipment?.lastUpdated}
      </p>

      {shipment?.details.map(({ label, value }, index) => (
        <div
          key={label}
          className="py-[14px] flex flex-col md:flex-row items-start"
        >
          <div className="w-full md:max-w-[205px] flex items-center gap-x-[10px] px-4 mb-2 md:mb-0">
            {shippingDetailIcons[index]}
            <p className="text-[#6B7280] font-medium text-[15px]">{label}</p>
          </div>
          <div className="w-full md:max-w-[255px]">
            <p className="text-[#1F2937] font-medium px-4 w-full md:max-w-[223px] text-[15px]">
              {value}
            </p>
          </div>
        </div>
      ))}
    </div>
    <div className="bg-[#F8FAFC] py-[10px] px-5 rounded-b-[12px]">
      <div className="py-[14px] flex flex-col md:flex-row items-start">
        <div className="w-full md:max-w-[205px] flex items-center gap-x-[10px] px-4 mb-2 md:mb-0">
          <Receipt {...iconStyles.shippingDetail} />
          <p className="text-[#6B7280] font-medium">Total COD Amount</p>
        </div>
        <div className="w-full md:max-w-[255px]">
          <p className="text-[#1F2937] font-medium px-4 w-full md:max-w-[223px]">
            {shipment?.codAmount}
          </p>
        </div>
      </div>
    </div>
  </div>
);

const TimelineSection = ({ shipment }: { shipment: Shipment }) => (
  <div className="w-full md:max-w-[600px] md:ml-4 h-fit">
    <p className="font-bold text-[18px] text-[#1F2937] mt-5 mb-[19px]">
      TIMELINE
    </p>
    <div className="max-w-[357px]">
      <ShipmentTimeline
        data={shipment?.timeline.map((item, index) => ({
          ...item,
          icon: timelineIcons[index % timelineIcons.length],
        }))}
      />
    </div>
  </div>
);

const Tracking = () => {
  const { currentShipment } = useSearch();
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const hasTrackingIdInUrl = searchParams.has("trackingId");

  return (
    <MainLayout>
      {currentShipment ? (
        <div className="flex mt-6 gap-8 flex-col md:flex-row md:gap-0 md:justify-between h-fit">
          <ShipmentDetails shipment={currentShipment} />
          <TimelineSection shipment={currentShipment} />
        </div>
      ) : (
        <div className="items-center mt-[30%] md:h-[85%] md:mt-0 flex flex-col justify-center">
          {hasTrackingIdInUrl ? (
            <>
              <NotFoundIcon />
              <p className="mt-10 font-bold text-[24px] mb-2">
                No results found
              </p>
              <p className="text-[#838282] mb-6">
                No results found. Please try again.
              </p>
              <Link
                to="/app"
                className="text-[#2563EB] text-[15px] hover:underline py-2 sm:py-[14px] font-semibold"
              >
                Retry
              </Link>
            </>
          ) : (
            <>
              <EmptyIcon />
              <p className="text-[#6B7280] mt-10">
                Enter a valid AWB ID to display details
              </p>
            </>
          )}
        </div>
      )}
    </MainLayout>
  );
};

export default Tracking;
