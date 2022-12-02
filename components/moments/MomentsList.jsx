import MomentItem from "./MomentItem";
import Masonry from "react-masonry-css";

const MomentsList = (props) => {
  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    700: 2,
    500: 1,
  };
  return (
    <div className="momentList max-w-[1000px] m-auto">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {props.moments.map((moment) => (
          <MomentItem
            key={moment.id}
            image={moment.image}
            title={moment.title}
            description={moment.description}
          />
        ))}  
      </Masonry>
    </div>
  );
};

export default MomentsList;
