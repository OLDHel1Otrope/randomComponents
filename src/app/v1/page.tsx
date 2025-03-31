import Image from "next/image";

const Portfolio = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center  bg-stone-900 text-white p-8">
      {/* Main container with styling */}
      <div className="relative w-full max-w-4xl bg-gradient-to-br border border-stone-800  from-stone-800/80 to-stone-900/80 p-10 rounded-3xl shadow-[inset_0px_0px_15px_rgba(0,0,0,0.5)] font-semibold overflow-hidden group hover:shadow-[inset_0px_0px_20px_rgba(0,0,0,0.6)] transition-all duration-300 backdrop-blur-sm ">
        {/* Background glow effect */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_0%,transparent_50%)] opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>

        {/* Hero Section */}
        <div className="text-center relative z-10">
          <Image
            src="/profile.jpg"
            alt=""
            width={120}
            height={120}
            className="mx-auto rounded-full border-4 border-stone-500 shadow-lg"
          />
          <h1 className="text-5xl font-bold mt-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-stone-300 group-hover:from-white group-hover:to-stone-200 transition-all duration-300">
            Utkarsh Pathak
          </h1>
          <p className="text-lg text-stone-400 mt-2 group-hover:text-stone-300 transition-colors duration-300">
            Full-Stack Developer & Digital Creator{" "}
          </p>
          <a
            href="/resume"
            className="text-stone-400 hover:text-stone-300 font-serif"
          >
            <i>Resume</i>
          </a>
        </div>

        {/* Divider */}
        <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-stone-500 to-transparent my-6 group-hover:via-stone-400 transition-colors duration-300"></div>

        {/* About Section */}
        <div className="relative z-10 space-y-6">
          <p className="text-lg text-stone-300 leading-relaxed group-hover:text-stone-200 transition-colors duration-300">
            Passionate about building innovative digital experiences. My journey
            in web development is fueled by creativity, logic, and a desire to
            push boundaries.
          </p>
          <p className="text-lg text-stone-300 leading-relaxed group-hover:text-stone-200 transition-colors duration-300">
            Specialized in{" "}
            <span className="text-stone-300 hover:text-grey-200">
              React, Next.js, Node.js, and UI/UX design
            </span>
            , I thrive in creating dynamic and visually engaging applications.
          </p>
        </div>

        {/* Projects Section */}
        <div className="relative z-10 mt-10">
          <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-stone-400">
            Featured Projects
          </h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Terminatad", img: "/project1.jpg" },
              { title: "conviz", img: "/project2.jpg" },
            ].map((project, index) => (
              <div
                key={index}
                className="relative bg-stone-800/50 backdrop-blur-sm p-4 rounded-xl border border-stone-700/30 group-hover:border-stone-600/40 transition-all duration-300"
              >
                <Image
                  src={project.img}
                  alt={project.title}
                  width={400}
                  height={250}
                  className="rounded-md"
                />
                <h3 className="text-lg font-semibold mt-2 text-stone-300 group-hover:text-white transition-colors duration-300">
                  {project.title}
                </h3>
              </div>
            ))}
          </div>
          <p className="text-lg text-stone-400 mt-2 group-hover:text-stone-300 transition-colors duration-300">
            <a href="/v2" className="text-stone-400 hover:text-stone-300">
              All Projects
            </a>
          </p>
        </div>

        {/* Contact Section */}
        <div className="relative z-10 text-center mt-10">
          <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-stone-400">
            Let&apos;s Connect
          </h2>
          <p className="text-stone-400 mt-2 group-hover:text-stone-300 transition-colors duration-300">
            Reach out for collaborations or just to say hi!
          </p>
          <div className="flex justify-center mt-4 space-x-4">
            <a href="#" className="text-blue-400 hover:text-blue-300">
              LinkedIn
            </a>
            <a href="#" className="text-gray-300 hover:text-gray-200">
              GitHub
            </a>
            <a href="#" className="text-pink-400 hover:text-pink-300">
              Twitter
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
