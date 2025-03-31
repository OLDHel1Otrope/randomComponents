import TextGenerator from "./TextGenerator";
// import RandomLines from "./RandomLines";

const DisplayMatrix = () => {
  // const gridItems = Array.from({ length: 1000 }, (_, i) => i + 1);

  return (
    <>
      {/* <RandomLines /> */}
      <div className="flex flex-col p-8 text-white bg-gradient-to-br from-stone-800/80 to-stone-900/80 w-full rounded-3xl shadow-[inset_0px_0px_15px_rgba(0,0,0,0.5)] font-semibold relative overflow-hidden group hover:shadow-[inset_0px_0px_20px_rgba(0,0,0,0.6)] transition-all duration-300 backdrop-blur-sm">
        {/* Decorative background elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_0%,transparent_50%)] opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
        
        {/* Header section */}
        <div className="relative z-10 mb-8">
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-stone-300 group-hover:from-white group-hover:to-stone-200 transition-all duration-300">
            The <i className="italic text-stone-400">Matrix</i> website
          </h1>
          <p className="text-xl text-stone-400 mt-2 group-hover:text-stone-300 transition-colors duration-300">
            A glimpse into my digital journey
          </p>
        </div>

        {/* Matrix effect section */}
        <div className="bg-stone-950/50 backdrop-blur-sm flex flex-col gap-4 p-6 rounded-2xl border border-stone-700/30 group-hover:border-stone-600/40 transition-colors duration-300">
          <TextGenerator data="Who am I ?" size={"small"} />
          <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-stone-500 to-transparent group-hover:via-stone-400 transition-colors duration-300"></div>
        </div>

        {/* Content sections */}
        <div className="relative z-10 mt-8 space-y-6">
          <p className="text-lg text-stone-300 leading-relaxed group-hover:text-stone-200 transition-colors duration-300">
            I&apos;m a web developer who enjoys tackling coding challenges and learning new
            technologies. While I&apos;m still growing in my journey, I find satisfaction in
            writing clean code and building useful applications.
          </p>
          
          <p className="text-lg text-stone-300 leading-relaxed group-hover:text-stone-200 transition-colors duration-300">
            I&apos;ve worked on various projects using React and Node.js, and I&apos;m currently
            exploring other technologies to expand my skill set. Each project teaches
            me something new, and I value these learning opportunities.
          </p>
          
          <p className="text-lg text-stone-300 leading-relaxed group-hover:text-stone-200 transition-colors duration-300">
            I believe in continuous learning and collaboration. I enjoy being part of
            the developer community and hope to contribute meaningfully to projects
            while growing alongside others.
          </p>
        </div>

        {/* Decorative corner accents */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-stone-500/30 rounded-tl-3xl group-hover:border-stone-400/40 transition-colors duration-300"></div>
        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-stone-500/30 rounded-tr-3xl group-hover:border-stone-400/40 transition-colors duration-300"></div>
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-stone-500/30 rounded-bl-3xl group-hover:border-stone-400/40 transition-colors duration-300"></div>
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-stone-500/30 rounded-br-3xl group-hover:border-stone-400/40 transition-colors duration-300"></div>

        {/* Hover effect overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-stone-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
      </div>
    </>
  );
};

export default DisplayMatrix;
