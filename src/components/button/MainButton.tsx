type MainButtonProps = {
  title: string;
  className?: string;
  onClick?: () => void;
  ahref?: string;
};
export default function MainButton({ title, onClick }: MainButtonProps) {
  return (
    <div className="">
      <button
        onClick={onClick}
        className="cursor-pointer relative inline-flex items-center px-12 py-4 overflow-hidden text-lg font-medium bg-transparent text-gray-200 border-2 border-gray-600 rounded-full hover:text-black group hover:bg-gray-50"
      >
        <span className="absolute left-0 block w-full h-0 transition-all bg-gray-100 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
        <span className="relative">{title ? title : "Click me"}</span>
      </button>
    </div>
  );
}
