import { IProject } from "@/types/portfolio";
import ProjectCard from "./ProjectCard";
import Container from "@/components/shared/Container";

const AllProjects = () => {
  const allProjects: IProject[] = [
    {
      img: "/images/home-page/workflow-2.png",
      title: "project name",
      desc: "Share your footage and any relevant media assets via the upload portal",
    },
    {
      img: "/images/home-page/workflow-3.png",
      title: "project name",
      desc: "Our team of editors cuts, polishes, and optimizes a video to match your goals and audience.",
    },
    {
      img: "/images/home-page/workflow-2.png",
      title: "project name",
      desc: "Your video is given an eye-catching thumbnail, tags, optimized for success and posted using our full service process.",
    },
    {
      img: "/images/home-page/workflow-3.png",
      title: "project name",
      desc: "Our team of editors cuts, polishes, and optimizes a video to match your goals and audience.",
    },
    {
      img: "/images/home-page/workflow-2.png",
      title: "project name",
      desc: "Share your footage and any relevant media assets via the upload portal",
    },
    {
      img: "/images/home-page/workflow-3.png",
      title: "project name",
      desc: "Your video is given an eye-catching thumbnail, tags, optimized for success and posted using our full service process.",
    },
    {
      img: "/images/home-page/workflow-2.png",
      title: "project name",
      desc: "Share your footage and any relevant media assets via the upload portal",
    },
    {
      img: "/images/home-page/workflow-3.png",
      title: "project name",
      desc: "Your video is given an eye-catching thumbnail, tags, optimized for success and posted using our full service process.",
    },
    {
      img: "/images/home-page/workflow-2.png",
      title: "project name",
      desc: "Our team of editors cuts, polishes, and optimizes a video to match your goals and audience.",
    },
  ];
  return (
    <Container>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {allProjects?.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </div>
    </Container>
  );
};

export default AllProjects;
