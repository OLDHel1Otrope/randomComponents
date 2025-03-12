const Dock = () => {
  const gridItems = Array.from({ length: 6 }, (_, i) => i + 1);

  return (
    <div className="flex  h-screen w-full bg-stone-800 flex-col-reverse">
      <div className="flex items-center overflow-hidden justify-center w-full h-20 bg-stone-700">
        <img
          src="/thumbs.svg"
          alt="Dock Logo"
          className="h-16 w-16 object-contain"
        />
      </div>
      <div className="flex flex-col p-2 gap-2">
        {gridItems.map((item) => (
          <div
            key={item}
            className="flex items-center overflow-hidden justify-center rounded-2xl w-16 h-16 bg-stone-700"
          >
            <img
              src="/thumbs.svg"
              alt="Dock Logo"
              className="h-16 w-16 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dock;
