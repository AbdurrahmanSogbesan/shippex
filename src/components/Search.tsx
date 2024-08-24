import { useSearch } from "../context/SearchContext";
import { useNavigate, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import Button from "./Button";
import { Input } from "./Input";

const Search: React.FC = () => {
  const { searchShipment } = useSearch();
  const navigate = useNavigate();
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const initialTrackingId = searchParams.get("trackingId") || "";

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<{ trackingId: string }>({
    mode: "onBlur",
    defaultValues: { trackingId: initialTrackingId },
  });

  const handleTrack = handleSubmit(({ trackingId }) => {
    searchShipment(trackingId);
    navigate(`/app?trackingId=${trackingId}`);
  });

  return (
    <div className="flex justify-center gap-x-6 bg-[#F8FAFC] rounded-lg py-8 px-4 max-h-[137px]">
      <Input
        {...register("trackingId", {
          required: "Please enter an AWB ID",
          minLength: {
            value: 13,
            message: "Please enter a valid AWB",
          },
        })}
        className="max-w-[600px] w-full"
        placeholder="Enter AWB ID"
        errorText={errors.trackingId?.message}
      />
      <Button customWidth={120} onClick={handleTrack} disabled={!isValid}>
        Track
      </Button>
    </div>
  );
};

export default Search;
