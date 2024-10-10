export const TabContent = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <img
      src={imageUrl}
      alt="tab content"
      className="w-full h-full object-contain rounded-xl"
      style={{ maxHeight: '100%', maxWidth: '100%' }}
    />
  );
};
