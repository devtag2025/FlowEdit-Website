import Background1 from "../backgrounds/Background1";
import Background2 from "../backgrounds/Background2";
import Background3 from "../backgrounds/Background3";
import Background4 from "../backgrounds/Background4";

const Background = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-[1600px] overflow-visible">
      <Background1 />

      <Background2 />

      <Background3 />

      <Background4 />
    </div>
  );
};

export default Background;
