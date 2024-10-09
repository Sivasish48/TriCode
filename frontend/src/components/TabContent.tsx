export const TabContent = ({ imageUrl }: { imageUrl: string }) => {
    return (
      <img
        src={imageUrl}
        alt="tab content"
        width="1100"
        height="1000"
        className="object-cover object-left-top h-[60%] md:h-[90%] absolute -bottom-10 inset-x-0 w-[100%] rounded-xl mx-auto"
      />
    );
  };