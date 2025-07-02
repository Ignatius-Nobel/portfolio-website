import React from "react";

export default function About() {
  const techStack = ["Python", "Java", "Django", "React", "Javascript", "Typescript","Fast API","Astro JS","Tailwind","HTML","CSS","Postgres"]
  return (
    <main className="min-h-screen font-minecraft">
      <section className="text-white flex flex-col gap-4 w-11/12 mx-auto mt-20">
        <div className="text-3xl 2xl:text-5xl">About Me</div>
        <div className=" text-sm w-3/5">
          Hey there! <br /> I'm Ignatius Nobel, a full-stack developer with a
          passion for building efficient, user-centric web applications. I love
          turning ideas into digital products that solve real problems and
          improve daily workflows. Whether it's a powerful AI-powered automation
          tool or a scalable eCommerce platform, I thrive in environments where
          code meets creativity.
        </div>
      </section>
      <section className="text-white flex flex-col gap-4 w-11/12 mx-auto mt-20">
        <div className="text-3xl 2xl:text-4xl text-right">What I Do</div>
        <div className=" text-sm w-3/5 text-right ml-auto">
          I'm experienced in both frontend and backend development, working with
          technologies like React, Django, FastAPI, TypeScript, Node.js, and
          more. I enjoy crafting responsive UIs, building robust APIs, and
          integrating third-party tools to enhance product functionality.
        </div>
      </section>

      <section className="grid grid-cols-2 gap-8 mt-20 w-10/12 mx-auto text-white ">
        <div className="border rounded-lg p-4 text-xs">
          <div className="text-2xl  text-center">Education</div>
          <ul className="mt-4 flex flex-col gap-4">
            <li>
              <div className="text-sm font-bold">
                Bachelors Degree in Computer Science
              </div>
              <div className="italic">
                Vidya Academy of Science and Technology - 2024
              </div>
            </li>
            <li>
              <div className="text-sm font-bold">Grade XII</div>
              <div className="italic">
                Kulapati Munshi Bhavans Vidya Mandir - 2020
              </div>
            </li>
            <li>
              <div className="text-sm font-bold">Grade X</div>
              <div className="italic">India International School - 2018</div>
            </li>
          </ul>
        </div>

        <div className="border rounded-lg p-4 flex flex-col text-xs">
          <div className="text-2xl text-center">Experience</div>
          <ul className="mt-4 flex flex-col gap-4 grow justify-center">
            <li>
              <div className="text-sm font-bold">
                Full Stack Developer -{" "}
                <span className="italic font-semibold">American Inference</span>
              </div>
              <div className="italic">Sep 2024 - Present</div>
            </li>
            <li>
              <div className="text-sm font-bold">
                Intern -{" "}
                <span className="italic font-semibold">American Inference</span>
              </div>
              <div className="italic">Jun 2024 - Sep 2024</div>
            </li>
          </ul>
        </div>
      </section>

      <section className="mt-20 w-10/12 mx-auto flex flex-col gap-4 ">
      <div className="text-white text-xl text-center">Tech Stack</div>
        <div>
          <ul className="grid grid-cols-6 overflow-x-auto gap-2">
            {techStack.map((stack) => {
              return(
                <li key={stack} className="bg-white rounded-lg p-2 font-bold text-xs text-center">{stack}</li>
              )
            })}
          </ul>
        </div>
      </section>
    </main>
  );
}
