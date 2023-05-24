import React from "react";
import resume from "../assets/Resume.pdf"; //gets to the above level to reach the assets folder
import Skills from "./Skills";
function Resume() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
        I've been working as a creative for over 10 years. I specialize in web
        development, video editing, graphic design and marketing.
      </h1>
      <br></br>
      <br></br>

      <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        I've been working as a creative for over 10 years. I specialize in web
        development, video editing, graphic design and marketing.
      </h2>
      <br></br>
      <p className="mt-6 text-lg leading-8 text-gray-600">
        Below is a list of my skills.
      </p>
      <Skills />
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <a
          href={resume}
          className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          download
        >
          Download resume
        </a>
        <a
          href="https://www.behance.net/aaronagraz"
          className="text-sm font-semibold leading-6 text-gray-900"
        >
          Creative work<span aria-hidden="true">→</span>
        </a>
      </div>
    </div>
  );
}

export default Resume;
