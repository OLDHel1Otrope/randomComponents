import DisplayMatrix from "./DisplayMatrix";

const AboutComponent = () => {
  return (
    <div className="px-120 py-20 h-full bg-stone-900 ">
      <div className="bg-stone-300 shadow-[inset_0px_0px_8px_rgba(0,0,0,0.4)] p-2 rounded-4xl">
        <DisplayMatrix/>
      </div>
    </div>
  );
};
export default AboutComponent;
