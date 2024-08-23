import Button from "./Button";
import { Input } from "./Input";

const Search = () => {
  return (
    <div className="flex items-center justify-center gap-x-6 bg-[#F8FAFC] rounded-lg py-8 px-4">
      <Input className="max-w-[600px] w-full" placeholder="Enter AWB ID" />
      <Button customWidth={120}>Track</Button>
    </div>
  );
};

export default Search;
