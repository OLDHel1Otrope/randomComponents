const Dock = () => {
  const gridItems = Array.from({ length: 10 }, (_, i) => i + 1);

  return (
    <div className="flex flex-col gap-2 h-screen w-10 p-2 bg-gray-800">
      {gridItems.map((item) => (
        <div key={item} className="flex items-center overflow-hidden justify-center rounded-4xl w-8 h-8">icon</div>
      ))}
    </div>
  );
};
