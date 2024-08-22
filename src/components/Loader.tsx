import { LoaderCircle } from "lucide-react";

export default function Loader() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <LoaderCircle className="animate-spin" color="#2563EB" size={72} />
    </div>
  );
}
