export default function Resume() {
  return (
    <div className="resume-container p-8 font-serif">
      <h1 className="text-4xl font-bold">Utkarsh Pathak</h1>
      <p className="text-lg">
        {/* +91 8574984096 |{" "}
        <a href="mailto:uppathak42@gmail.com" className="text-blue-400 hover:underline">
          uppathak42@gmail.com
        </a>{" "}
        |{" "} */}
        <a
          href="https://www.linkedin.com/in/utkarsh-pathak-1a193a241/"
          className="text-blue-400 hover:underline"
        >
          LinkedIn
        </a>{" "}
        |{" "}
        <a href="https://github.com/OLDHel1Otrope" className="text-blue-400 hover:underline">
          GitHub
        </a>
      </p>

      <section className="education mt-6">
        <h2 className="text-2xl font-semibold">Education</h2>
        <ul className="mt-4 space-y-2">
          <li>
            <strong>Banarsidas Chandiwala Institute of Information Technology</strong><br />
            <i>Masters in Computer Applications</i> <span className="text-gray-600">Sep 2023 -- Present</span>
          </li>
          <li>
            <strong>University Of Lucknow</strong><br />
            <i>Bachelors in Computer Applications</i> <span className="text-gray-600">Aug 2018 -- May 2021</span>
          </li>
        </ul>
      </section>

      <section className="experience mt-6">
        <h2 className="text-2xl font-semibold">Experience</h2>
        <ul className="mt-4 space-y-4">
          <li>
            <strong>Remotestate | Development Trainee</strong><br />
            <span className="text-gray-600">Jan 2025 -- Present</span>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Developed a strong foundation in HTML, CSS, and JavaScript.</li>
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
            <strong>Terminatad | React, Python, Flask, Selenium, MongoDB</strong><br />
            <span className="text-gray-600">April 2024 -- May 2024</span>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Developed an application to remove advertisements from images using a U-Net segmentation model.</li>
              <li>Created a full-stack web application using Flask for the API and React for the frontend.</li>
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
            <strong>Others</strong>: Data Structures, Algorithms, Machine Learning, Image Processing
          </li>
        </ul>
      </section>
    </div>
  );
}
