import { motion, useScroll, useTransform, useInView } from "motion/react";
import { Link } from "react-router-dom";
import Grafiti from "../assets/grafiti.png";
export default function Home() {
  const { scrollYProgress } = useScroll();
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const yNameParallax = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const xFirstNameParallax = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const xLastNameParallax = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <main className="min-h-screen">
      <section className="h-[120vh]">
        <motion.div
          style={{ y: yNameParallax }}
          className="text-7xl lg:text-7xl whitespace-nowrap 2xl:text-9xl text-white text-center w-full font-minecraft font-bold absolute top-2/3 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center gap-8"
        >
          <motion.div style={{ x: xFirstNameParallax }}>IGNATIUS</motion.div>
          <motion.div style={{ x: xLastNameParallax }}>NOBEL</motion.div>
        </motion.div>

        <motion.img
          initial={{ y: 30 }}
          animate={{ y: -20 }}
          transition={{ duration: 1, delay: 0.3 }}
          style={{ y: yParallax }}
          className="w-2/5 absolute top-3/5 left-1/2 -translate-x-1/2 -translate-y-1/3"
          src={Grafiti}
          alt="grafiti"
        />
      </section>

      <motion.section
        whileInView={{ opacity: [0.25, 0.5, 0.75, 1] }}
        transition={{ duration: 1 }}
        className="text-white px-16 flex flex-col gap-4 font-minecraft mt-20"
      >
        <div className="text-5xl 2xl:text-5xl">
          Turning Ideas Into Scalable, Elegant Web Solutions
        </div>
        <div className="text-md">
          Hi, I&#x2019;m Ignatius — a full-stack developer who loves crafting fast,
          user-focused web apps using tools like React, Django, and Node.js.
        </div>
        <div className="text-sm flex justify-center gap-8 text-black mt-6">
          <Link
            className="px-4 py-2 rounded-lg bg-white hover:bg-neutral-600 hover:text-white"
            to="/about"
          >
            About
          </Link>
          <Link
            className="px-4 py-2 rounded-lg bg-white hover:bg-neutral-600 hover:text-white"
            to="projects"
          >
            Projects
          </Link>
        </div>
      </motion.section>

      <motion.section whileInView={{ opacity: [0.25, 0.5, 0.75, 1] }}
        transition={{ duration: 1 }} className="text-white font-minecraft px-40 mt-30 flex gap-6 flex-col justify-center">
        <div className="text-xl text-center">About Me</div>
        <div className="text-sm">
          I&#x2019;m a developer passionate about building intuitive, high-performance
          web applications that solve real-world problems. With hands-on
          experience in both frontend and backend development, I bridge design
          and logic to create seamless digital experiences.
        </div>
      </motion.section>

      <section className="grid grid-cols-2 font-minecraft mt-20 w-11/12 mx-auto gap-6 text-white">

        <motion.div initial={{x:-50}} whileInView={{x:0}} transition={{duration:0.5}} className="flex justify-center rounded-lg p-4 flex-col gap-6">
          <div className="border py-2 text-center rounded-md">
            What I Can Help You With
          </div>
          <ul className="text-xs flex flex-col gap-4">
            <li>
              Web Development: End-to-end development using modern tech stacks.
            </li>
            <li>Backend Engineering: Scalable APIs and database design.</li>
            <li>
              Automation & AI Tools: Streamlining tasks with smart, AI-driven
              tools.
            </li>
          </ul>
        </motion.div>

        <motion.div initial={{x:50}} whileInView={{x:0}} transition={{duration:0.5}} className="flex justify-center rounded-lg p-4 flex-col gap-6">
          <div className="border py-2 text-center rounded-md">
            Recent Projects
          </div>

          <ul className="text-xs flex flex-col gap-4">
            <li>
              E-Commerce Site &#x2014; A Django-powered store with cart & order flow.
            </li>
            <li>Blog Generator &#x2014; Converts YouTube videos into blog articles using OpenAI + Assembly AI.</li>
            <li>
              Penguin &#x2014; Desktop-Audio-Transcriber.
            </li>
          </ul>
        </motion.div>

      </section>
    </main>
  );
}
