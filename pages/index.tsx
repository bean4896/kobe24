import Head from 'next/head'
import { Fragment } from 'react';
import MemoriesList from '../components/memories/MemoriesList';
import { connectToDatabase } from '../lib/db';
import { sortDataByDate } from '../components/memories/SortData';
import { useMemo } from 'react';


function Home(props) {
  const sortedMemo = sortDataByDate(props.memories);
  const sortedMemories = useMemo(() => sortedMemo, [sortedMemo]);
  return (
    <Fragment>
    <div className="max-w-[940px] mt-10 m-auto">
      <Head>
        <title>Kobe Bryant Memories</title>
        <meta name="description"
         content="Next Memories" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <MemoriesList memories={sortedMemories} />
      </div>
    </Fragment>
  )
}

export async function getStaticProps() {
  const client = await connectToDatabase();
  const db = client.db();
  const memoriesCollection = db.collection('memories');
  const memories = await memoriesCollection.find().toArray();
  client.close();

  return {
    props: {
      memories: memories.map(memory => ({
        title: memory.title,
        image: memory.image,
        date: memory.date,
        description: memory.description,
        id: memory._id.toString()
      }))
    }
  }
}


export default Home;