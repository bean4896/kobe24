import MomentItem from './MomentItem';
import Masonry from "react-masonry-css";

const MomentsList = (props) => {
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {props.moments.map((moment) => (
            <MomentItem
            key={moment.id}
            image={moment.image}
            title={moment.title}
            description={moment.description}
            />
        ))}
        </div>
        </Masonry>
    );
    }

export default MomentsList;