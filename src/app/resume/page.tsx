export default function Resume() {
  return (
    <div className="flex h-screen flex-row resume-container p-8 ">
      <div className="w-7xl ml-16 h-full bg-stone-300 shadow-lg p-8 pr-20 text-stone-900 overflow-y-scroll font-serif">
        <h1 className="text-4xl font-bold">Utkarsh Pathak</h1>
        <p className="text-lg">
          <a href="mailto:uppathak42@gmail.com" className=" hover:underline">
            uppathak42@gmail.com
          </a>
          |{" "}
          <a
            href="https://www.linkedin.com/in/utkarsh-pathak-1a193a241/"
            className=" hover:underline"
          >
            LinkedIn
          </a>{" "}
          |{" "}
          <a
            href="https://github.com/OLDHel1Otrope"
            className=" hover:underline"
          >
            GitHub
          </a>
        </p>
        <hr />

        <section className="education mt-6">
          <h2 className="text-2xl font-semibold">Education</h2>
          <ul className="mt-4 space-y-2">
            <li>
              <strong>
                Banarsidas Chandiwala Institute of Information Technology
              </strong>
              <br />
              <div className="flex justify-between">
                <i>Masters in Computer Applications</i>{" "}
                <i className="text-gray-600">Sep 2023 -- Present</i>
              </div>
            </li>
            <li>
              <strong>University Of Lucknow</strong>
              <br />
              <div className="flex justify-between">
                <i>Bachelors in Computer Applications</i>{" "}
                <i className="text-gray-600">Aug 2018 -- May 2021</i>
              </div>
            </li>
          </ul>
        </section>

        <section className="experience mt-6">
          <h2 className="text-2xl font-semibold">Experience</h2>
          <ul className="mt-4 space-y-4">
            <li>
              <div className="flex justify-between">
                <strong>Remotestate | Development Trainee</strong>
                <i className="text-gray-600">Jan 2025 -- Present</i>
              </div>
              {/* <br /> */}
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>
                  Developed a strong foundation in HTML, CSS, and JavaScript.
                </li>
                <li>Worked with Tailwind CSS for efficient styling.</li>
                <li>Gained experience with React, TypeScript, and Next.js.</li>
              </ul>
            </li>
          </ul>
        </section>

        <section className="projects mt-6">
          <h2 className="text-2xl font-semibold">Projects</h2>
          <ul className="mt-4 space-y-4">
            <li>
              <div className="flex justify-between">
                <strong>
                  Terminatad | React, Python, Flask, Selenium, MongoDB
                </strong>
                <i className="text-gray-600">April 2024 -- May 2024</i>
              </div>
              {/* <br /> */}
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>
                  Developed an application to remove advertisements from images
                  using a U-Net segmentation model.
                </li>
                <li>
                  Created a full-stack web application using Flask for the API
                  and React for the frontend.
                </li>
              </ul>
            </li>
            <li>
              <div className="flex justify-between">
                <strong>
                  Terminatad | React, Python, Flask, Selenium, MongoDB
                </strong>
                <i className="text-gray-600">April 2024 -- May 2024</i>
              </div>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>
                  Developed an application to remove advertisements from images
                  using a U-Net segmentation model.
                </li>
                <li>
                  Created a full-stack web application using Flask for the API
                  and React for the frontend.
                </li>
              </ul>
            </li>
            <li>
              <div className="flex justify-between">
                <strong>
                  Terminatad | React, Python, Flask, Selenium, MongoDB
                </strong>
                <i className="text-gray-600">April 2024 -- May 2024</i>
              </div>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>
                  Developed an application to remove advertisements from images
                  using a U-Net segmentation model.
                </li>
                <li>
                  Created a full-stack web application using Flask for the API
                  and React for the frontend.
                </li>
              </ul>
            </li>
          </ul>
        </section>

        <section className="technical-skills mt-6">
          <h2 className="text-2xl font-semibold">Technical Skills</h2>
          <ul className="mt-4 space-y-2">
            <li>
              <strong>Languages</strong>: Java, SQL, JavaScript, HTML/CSS
            </li>
            <li>
              <strong>Frameworks</strong>: NEXT.js, Node.js, Flask, Selenium
            </li>
            <li>
              <strong>Libraries</strong>: React, pandas, NumPy, Matplotlib
            </li>
            <li>
              <strong>Others</strong>: Data Structures, Algorithms, Machine
              Learning, Image Processing
            </li>
          </ul>
        </section>
      </div>
      <div className="px-2 ">
        <div className="text-xl bg-clip-text text-transparent bg-gradient-to-r from-stone-500 to-stone-600 font-sans hover:cursor-pointer hover:text-stone-400">
          D O W N L O A D
        </div>
      </div>
    </div>
  );
}
