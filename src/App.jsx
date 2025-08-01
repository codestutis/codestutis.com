import MyDock from "./components/Navbar";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import { Separator } from "@/components/ui/separator";

import workData from "@/assets/work.json";
import educationData from "@/assets/education.json";
import projectsData from "@/assets/projects.json"

function App() {

  return (
    <div id="top" className="flex min-h-screen flex-col items-center bg-gray-950 w-full py-8 mb-12">
      <Header />

      <Separator className="w-4/5 max-w-[690px] bg-gray-800 my-5"></Separator>

      <section className="w-4/5 max-w-[690px]">
        <h2 className="flex text-white text-2xl font-bold mb-6">About</h2>
        <p className="text-white my-2">
          these are a bunch of words and stuff
        </p>
      </section>

      <Separator id="skills" className="w-4/5 max-w-[690px] bg-gray-800 my-5"></Separator>

      <section className="w-4/5 max-w-[690px]">
        <h2 className="flex text-white text-2xl font-bold mb-6">Skills</h2>
        <Skills />

      </section>

      <Separator id="work" className="w-4/5 max-w-[690px] bg-gray-800 my-5"></Separator>

      <section className="w-4/5 max-w-[690px]">
        <h2 className="flex text-white text-2xl font-bold mb-6">Work Experience</h2>
        {Object.values(workData).map((job, idx) => (
          <Experience
            key={job.company + job.title + idx}
            title={job.title}
            organization={job.company}
            location={job.location}
            startDate={job.startDate}
            endDate={job.endDate}
            description={job.description}
            responsibilities={job.responsibilities}
            technologies={job.technologies}
          />
        ))}

      </section>

      <Separator id="education" className="w-4/5 max-w-[690px] bg-gray-800 my-5"></Separator>

      <section className="w-4/5 max-w-[690px]">
        <h2 className="flex text-white text-2xl font-bold mb-6">Education</h2>
        {Object.values(educationData).map((edu, idx) => (
          <Experience
            key={edu.school + edu.degree + idx}
            title={edu.degree + (edu.major ? `, ${edu.major}` : "")}
            organization={edu.school}
            location={edu.location}
            startDate={edu.startDate}
            endDate={edu.endDate}
            description={edu.description}
          />
        ))}
      </section>

      <Separator className="w-4/5 max-w-[690px] bg-gray-800 my-5"></Separator>

      <section id="projects" className="w-4/5 max-w-[690px]">
        <h2 className="flex text-white text-2xl font-bold mb-6">Projects</h2>
        {/* {Object.values(projectsData).map((project, idx) => (
            <Experience
              key={project.title + idx}
              title={project.title}
              organization={project.organization}
              location={project.location}
              startDate={project.startDate}
              endDate={project.endDate}
              description={project.description}
              responsibilities={project.responsibilities}
              technologies={project.technologies}
            />
          ))} */}
      </section>


      <MyDock />
    </div>
  )
}

export default App;
