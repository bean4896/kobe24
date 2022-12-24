import MomentItem from "./MomentItem";
import Marquee from "react-fast-marquee";
import { useTheme } from "next-themes";

const MomentsList = (props) => {
  let marqueeBg = "";
  const currentTheme = useTheme();
  if (currentTheme.theme === "dark") {
    marqueeBg = [0, 0, 0];
  } else {
    marqueeBg = [255, 255, 255];
  }
  return (
    <div className="momentList m-auto">
      <Marquee gradientColor={marqueeBg} speed={30} pauseOnHover={true}>
        {props.moments.map((moment) => (
          <MomentItem
            key={moment.id}
            image={moment.image}
            title={moment.title}
            description={moment.description}
          />
        ))}
      </Marquee>

      <Marquee gradientColor={marqueeBg} speed={30} pauseOnHover={true} direction={'right'}>
        {props.moments.map((moment) => (
          <MomentItem
            key={moment.id}
            image={moment.image}
            title={moment.title}
            description={moment.description}
          />
        ))}
      </Marquee>
    </div>
  );
};

export default MomentsList;
