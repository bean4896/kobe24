import NewMoment from "../components/moments/NewMoment";
import { useState } from "react";
import MomentsList from "../components/moments/MomentsList";
import { connectToDatabase } from "../lib/db";

const Moments = (props) => {
  const [isAddingMoment, setIsAddingMoment] = useState(false);

  async function addMomentHandler(momentData) {
    const response = await fetch("/api/new-moment", {
      method: "POST",
      body: JSON.stringify(momentData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    if (data.message === "moments inserted!") {
      alert("moment inserted successfully");
      window.location.reload();
    }
    // go back to home page after submit new moment
    // router.push("/");
  }

  const modalHandler = () => {
    setIsAddingMoment(!isAddingMoment);
  }; 

  return (
    <>
      <div className="w-full mx-auto my-10 ">
        <button className="momentBtn bg-purple-700 px-4 text-yellow-400" onClick={modalHandler}>
          Moment
        </button>
        {isAddingMoment && (
          <NewMoment onClose={modalHandler} onAddMoment={addMomentHandler} />
        )}
        <MomentsList moments={props.moments} /> 
      </div>
    </>
  );
};

export async function getStaticProps() {
  const client = await connectToDatabase();
  const db = client.db();
  const momentsCollection = db.collection("moments");
  const moments = await momentsCollection.find().toArray();
  client.close();

  return {
    props: {
      moments: moments.map((moment) => ({
        title: moment.title,
        image: moment.image,
        description: moment.description,
        id: moment._id.toString(),
      })),
    },
  };
}

export default Moments;
