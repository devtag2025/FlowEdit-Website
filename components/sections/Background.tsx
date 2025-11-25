import Background1 from "../backgrounds/Background1";
import Background2 from "../backgrounds/Background2";
import Background3 from "../backgrounds/Background3";
import Background4 from "../backgrounds/Background4";
import Background5 from "../backgrounds/Background5";
import Background6 from "../backgrounds/Background6";
import Background7 from "../backgrounds/Background7";
import Background8 from "../backgrounds/Background8";

const Background = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-[1600px] overflow-visible">
      <Background1 />

      <Background2 />

      <Background3 />

      <Background4 />
      <Background5 />

      <Background6 />
      <Background7 />
      <Background8 />
    </div>
  );
};

export default Background;
