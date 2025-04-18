type SecondaryButtonProps = {
  title: string;
  image?: string;
};
const SecondaryButton = (props: SecondaryButtonProps) => {
  const { title = "See More", image } = props;
  return (
    <button className="group mb-3 px-4 py-3 rounded-full inline-flex border border-white bg-[##1a1a1a] hover:bg-white hover:text-black transition-all ease-in-out">
      {image && (
        <img
          src={image}
          className="w-5 mr-2 group-hover:text-black group-hover:filter group-hover:invert"
          alt=""
        />
      )}
      {title}
    </button>
  );
};

export default SecondaryButton;
