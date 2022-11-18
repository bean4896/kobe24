import React from "react";
import Masonry from "react-masonry-css";
import SwiperModal from '../components/ui/SwiperModal';
const kobe_shoes = [
  {
    id: 1,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
    name: "Nike Kobe 1 Protro",
    releasteDate: "2021-01-01",
    season: "All",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  },
  {
    id: 2,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
    name: "Adidas Kobe 2 Protro",
    releasteDate: "2021-01-01",
    season: "All",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  },
  {
    id: 3,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
    name: "Nike Kobe 3 Protro",
    releasteDate: "2021-01-01",
    season: "All",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  },
  {
    id: 4,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
    name: "Nike Kobe 4 Protro",
    releasteDate: "2021-01-01",
    season: "All",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  },
  {
    id: 5,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
    name: "Zoom Kobe 5",
    releasteDate: "2021-01-01",
    season: "All",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  },
  {
    id: 6,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
    name: "Zoom Kobe 6",
    releasteDate: "2021-01-01",
    season: "All",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  },
  {
    id: 7,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
    name: "Zoom Kobe 7",
    releasteDate: "2021-01-01",
    season: "All",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  },
  {
    id: 8,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
    name: "Zoom Kobe 8",
    releasteDate: "2021-01-01",
    season: "All",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  },
  {
    id: 9,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1399&q=80",
    name: "Zoom Kobe 10",
    releasteDate: "2021-01-01",
    season: "All",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  },
  {
    id: 10,
    image: "../public/images/ball.svg",
    name: "Zoom Kobe X High",
    releasteDate: "2021-01-01",
    season: "All",
    description:
      "Lorem Ipsum isdummy text of the printing and tdummy text of the printing and t simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  },
  {
    id: 11,
    image:
      "../public/images/test.jpg",
    name: "Zoom Kobe XI",
    releasteDate: "2021-01-01",
    season: "All",
    description:
      "Lorem Ipsum is simply dummy text of dummy text of the printing and tdummy text of the printing and t the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
];

function Shoes() {
  const breakpointColumnsObj = {
    default: 2,
    1100: 2,
    700: 1,
  };

  return (
     <>
    {/* <div className="flex justify-center w-full my-10">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {kobe_shoes.map((shoe) => (
          // <div className="max-w-[400px]">
          //   <div className="group relative block bg-gray-900 rounded-md">
          //     <img
          //       className="absolute rounded-md inset-0 h-full w-full object-cover group-hover:opacity-50"
          //       src={shoe.image}
          //       alt={shoe.name}
          //     />
          //     <div className="relative p-2">
          //       <div className="mt-40">
          //         <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
          //           <div className="p-2">
          //             <p className="text-sm text-white">{shoe.description}</p>
          //           </div>
          //         </div>
          //       </div>
          //     </div>
          //   </div>
          // </div>
          <div className="shoeCard" key={shoe.id}>
            <div
              className="shoeCardWrapper flex flex-col p-4"
              style={{ backgroundImage: `url(${shoe.image})` }}
              onMouseLeave={() => {
                // this.style.backgroundImage = `none`;
              }}
            >
              {shoe.name}
              <div>{shoe.description}</div>
            </div>
          </div>
        ))}
      </Masonry>
    </div> */}
    <div className="w-full m-auto ">
            <SwiperModal />
    </div>
    </>
  );
}

export default Shoes;
