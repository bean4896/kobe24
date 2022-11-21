import MemoryItem from "./MemoryItem";
import Masonry from "react-masonry-css";

const MemoriesList = (props) => {
  const breakpointColumnsObj = {
    default: 2,
    1100: 2,
    700: 2,
    500: 1,
  };
  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {props.memories.map((memory) => (
        // MemoryItem is a component that takes in a memory object as a prop
        <MemoryItem
          key={memory.id}
          image={memory.image}
          title={memory.title}
          date={memory.date}
          description={memory.description}
        />
      ))}
    </Masonry>
  );
};

export default MemoriesList;
