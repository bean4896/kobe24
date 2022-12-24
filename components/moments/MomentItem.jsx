import Image from "next/image";

const myLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

const MomentItem = (props) => {
  return (
    <div className="momentCard my-10 sm:min-w-[80vw] lg:min-w-[20vw]">
      <div className="relative h-48 w-full">
        <Image
          loader={myLoader}
          className="rounded-lg relative bottom-6 "
          src={props.image}
          alt={props.title}
          fill="fill"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="m-5">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default MomentItem;
