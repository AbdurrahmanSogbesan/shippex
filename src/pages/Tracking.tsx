import MainLayout from "../components/MainLayout";
import EmptyIcon from "../assets/icons/empty.svg";
import PackagePlus from "../assets/icons/package-plus.svg";
import { useState } from "react";
import {
  ArrowDownToDot,
  ArrowUpRight,
  MapPin,
  Receipt,
  Truck,
  User,
} from "lucide-react";

import "react-vertical-timeline-component/style.min.css";

const Tracking = () => {
  const [data, setData] = useState([]);

  const shippingDetailStyles = { size: 16, color: "#6B7280" };

  const shipmentDetails = [
    {
      label: "Sender",
      value: "Mohamamd Manaa",
      icon: <ArrowUpRight {...shippingDetailStyles} />,
    },
    {
      label: "Consignee",
      value: "Beshouy Ezzat",
      icon: <User {...shippingDetailStyles} />,
    },
    {
      label: "Origin Address",
      value: "Ahmed Hassan 25, Nile Street, Zamalek Cairo Egypt",
      icon: <ArrowDownToDot {...shippingDetailStyles} />,
    },
    {
      label: "Destination Address",
      value: "Fatima Ali 10, Corniche Road, Gleem Alexandria Egypt",
      icon: <MapPin {...shippingDetailStyles} />,
    },
    {
      label: "Shipping Service",
      value: "Express Service",
      icon: <Truck {...shippingDetailStyles} />,
    },
  ];
  return (
    <MainLayout>
      {data ? (
        <div className="flex mt-6 gap-8 flex-col md:flex-row md:gap-0 md:justify-between">
          <div className="w-full md:max-w-[500px] border border-[#E5E7EB] rounded-[12px]">
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
                    <p className="text-[#6B7280] font-medium">{label}</p>
                  </div>
                  <div className="w-full md:max-w-[255px]">
                    <p className="text-[#1F2937] font-medium px-4 w-full md:max-w-[223px]">
                      {value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-[#F8FAFC] py-[10px] px-5 rounded-b-[12px]">
              <div className="py-[14px] flex flex-col md:flex-row items-start">
                <div className="w-full md:max-w-[205px] flex items-center gap-x-[10px] px-4 mb-2 md:mb-0">
                  <Receipt {...shippingDetailStyles} />
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
          <div className="w-full md:max-w-[600px]">
            <p className="font-bold text-[18px] text-[#1F2937] mt-5 mb-[19px]">
              TIMELINE
            </p>
            <div className="max-w-[357px] w-full"></div>
          </div>
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
