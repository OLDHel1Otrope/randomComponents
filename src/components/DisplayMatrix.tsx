import TextGenerator from "./TextGenerator";

const DisplayMatrix = ({ size }: { size: string }) => {
  // const gridItems = Array.from({ length: 1000 }, (_, i) => i + 1);

  return (
    <div className="flex flex-col p-4 text-white bg-stone-800 w-full rounded-3xl shadow-[inset_0px_0px_8px_rgba(0,0,0,0.4)] font-semibold">
      <h1 className="text-4xl font-bold">
        The <i className="italic">most honest</i> website about me
      </h1>
      <p className="text-lg text-gray-400">
        A little about who I am and what I do.
      </p>
      <div className="bg-stone-950 flex flex-col gap-2 p-2">
        <TextGenerator data="Who am I ?" size={"small"} />
        <div className="w-full h-30 bg-stone-950"></div>
      </div>

      <p className="mt-2 text-gray-300">
        I love solving problems, whether it's debugging tricky JavaScript issues
        or optimizing SQL queries. Web development isn't just something I
        do—it's something I genuinely enjoy.
      </p>
      <p className="mt-2 text-gray-300">
        From building 3D web apps in Three.js to creating efficient backend
        systems, I’m always exploring new ways to improve and grow. Every
        project is a learning experience, and every challenge is an opportunity.
      </p>
      <p className="mt-2 text-gray-300">
        At the end of the day, I just want to build great things, share
        knowledge, and keep improving. If that resonates with you, welcome
        aboard!
      </p>
    </div>
  );
};

export default DisplayMatrix;
