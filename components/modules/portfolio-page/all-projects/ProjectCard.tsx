import { IProject } from "@/types/portfolio";
import Image from "next/image";

interface ProjectProps {
  project: IProject;
}
const ProjectCard = ({ project }: ProjectProps) => {
  return (
    <div className="p-2.5 flex flex-col gap-6 border border-[rgba(255,255,255,0.1)] backdrop-blur-[20px] bg-[linear-gradient(180deg,rgba(255,255,255,0.6),rgba(255,255,255,0.5))] shadow-[0_10px_10px_rgba(0,0,0,0.1),0_4px_4px_rgba(0,0,0,0.05),0_1px_0_rgba(0,0,0,0.05)] rounded-xl w-full min-h-[400px]">
      <div className="relative w-full h-[220px] sm:h-[241px]">
        <Image
          src={project.img}
          alt={project.title}
          fill
          className="object-cover rounded-md"
        />
      </div>

      <div className="flex flex-col gap-1.5 px-2.5">
        <h2 className="font-semibold text-2xl sm:text-3xl -tracking-[0.04em] capitalize">
          {project.title}
        </h2>
        <p className="text-base leading-[150%] text-black/70">{project.desc}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
