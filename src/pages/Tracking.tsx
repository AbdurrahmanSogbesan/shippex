import MainLayout from "../components/MainLayout";
import EmptyIcon from "../assets/icons/empty.svg";
import { useState } from "react";
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
import CustomTimeline from "../components/Timeline";

const Tracking = () => {
  const [data] = useState([]);

  const iconStyles = {
    shippingDetail: { size: 16, color: "#6B7280" },
    timeline: { size: 16, color: "#1F2937" },
  };

  const shipmentDetails = [
    {
      label: "Sender",
      value: "Mohamamd Manaa",
      icon: <ArrowUpRight {...iconStyles.shippingDetail} />,
    },
    {
      label: "Consignee",
      value: "Beshouy Ezzat",
      icon: <User {...iconStyles.shippingDetail} />,
    },
    {
      label: "Origin Address",
      value: "Ahmed Hassan 25, Nile Street, Zamalek Cairo Egypt",
      icon: <ArrowDownToDot {...iconStyles.shippingDetail} />,
    },
    {
      label: "Destination Address",
      value: "Fatima Ali 10, Corniche Road, Gleem Alexandria Egypt",
      icon: <MapPin {...iconStyles.shippingDetail} />,
    },
    {
      label: "Shipping Service",
      value: "Express Service",
      icon: <Truck {...iconStyles.shippingDetail} />,
    },
  ];

  const timelineData = [
    {
      title: "Package Picked Up",
      description: "Package has been picked up by courier",
      time: "09:00 AM Dec 16, 2023",
      user: "John Doe",
      icon: <PackagePlus {...iconStyles.timeline} />,
    },
    {
      title: "Shipment picked-up",
      time: "02:30 PM Dec 16, 2023",
      user: "Charles John",
      icon: <PackageCheck {...iconStyles.timeline} />,
    },
    {
      title: "Proof of pick-up",
      description: "Proof of pick-up description",
      time: "08:45 AM Dec 17, 2023",
      user: "James Collins",
      icon: <PackageSearch {...iconStyles.timeline} />,
    },
    {
      title: "Shipment on delivery",
      description: "Description goes here",
      time: "10:15 AM Dec 18, 2023",
      icon: <Truck {...iconStyles.timeline} />,
    },
  ];

  const renderShipmentDetails = () => (
    <div className="w-full md:max-w-[500px] border border-[#E5E7EB] rounded-[12px] h-fit">
      <div className="p-5">
        <p className="text-[18px] text-[#1F2937] font-bold mb-[5px]">
          4515645646466
        </p>
        <p className="text-[14px] text-[#6B7280] mb-4">
          Last updated 16/12/2023 11:33 AM
        </p>

        {shipmentDetails.map(({ icon, label, value }) => (
          <div
            key={label}
            className="py-[14px] flex flex-col md:flex-row items-start"
          >
            <div className="w-full md:max-w-[205px] flex items-center gap-x-[10px] px-4 mb-2 md:mb-0">
              {icon}
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
              499.55 EGP
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderTimeline = () => (
    <div className="w-full md:max-w-[600px] md:ml-4 h-fit">
      <p className="font-bold text-[18px] text-[#1F2937] mt-5 mb-[19px]">
        TIMELINE
      </p>
      <div className="max-w-[357px]">
        <CustomTimeline data={timelineData} />
      </div>
    </div>
  );

  return (
    <MainLayout>
      {data ? (
        <div className="flex mt-6 gap-8 flex-col md:flex-row md:gap-0 md:justify-between h-fit">
          {renderShipmentDetails()}
          {renderTimeline()}
        </div>
      ) : (
        <div className="items-center h-[85%] flex flex-col justify-center">
          <EmptyIcon />
          <p className="text-[#6B7280] mt-10">
            Enter a valid AWB ID to display details
          </p>
        </div>
      )}
    </MainLayout>
  );
};

export default Tracking;
