import Container from "@/components/shared/Container";
import Image from "next/image";

const workflowData = [
  {
    id: 1,
    title: "Upload your footage",
    desc: "Share your footage and any relevant media assets via the upload portal",
    img: "/images/home-page/workflow-3.png",
  },
  {
    id: 2,
    title: "Track progress",
    desc: "Our team of editors cuts, polishes, and optimizes a video to match your goals and audience.",
    img: "/images/home-page/workflow-2.png",
  },
  {
    id: 3,
    title: "Experience success",
    desc: "Your video is given an eye-catching thumbnail, tags, optimized for success and posted using our full service process.",
    img: "/images/home-page/workflow-3.png",
  },
];

const WorkflowSection = () => {
  return (
    <Container className=" w-full flex flex-col items-center gap-10 px-4 mb-16 lg:mb-[150px]">
      <h1 className="font-semibold text-[34px] sm:text-[42px] md:text-[54px] -tracking-[0.04em] text-center">
        A Simple Powerful Workflow
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
        {workflowData.map((item) => (
          <div
            key={item.id}
            className="p-2.5 flex flex-col gap-6 border border-[rgba(255,255,255,0.1)] backdrop-blur-[20px] bg-[linear-gradient(180deg,rgba(255,255,255,0.6),rgba(255,255,255,0.5))] shadow-[0_10px_10px_rgba(0,0,0,0.1),0_4px_4px_rgba(0,0,0,0.05),0_1px_0_rgba(0,0,0,0.05)] rounded-xl w-full"
          >
            <div className="relative w-full h-[220px] sm:h-[241px]">
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-cover rounded-md"
              />
            </div>

            <div className="flex flex-col gap-1.5 px-2.5">
              <h2 className="font-semibold text-2xl sm:text-3xl -tracking-[0.04em] capitalize">
                {item.title}
              </h2>
              <p className="text-base leading-[150%] text-black/70">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default WorkflowSection;
