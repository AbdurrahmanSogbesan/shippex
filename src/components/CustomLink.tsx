interface ICustomLink {
  text: string;
}

const CustomLink = ({ text }: ICustomLink) => {
  return (
    <p className="text-[14px] text-[#2563EB] font-semibold cursor-pointer hover:underline">
      {text}
    </p>
  );
};

export default CustomLink;
