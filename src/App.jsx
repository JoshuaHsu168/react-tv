import { tvShows } from "./shows/data";
import ShowSelection from "./shows/ShowSelection";
import ShowDetails from "./shows/ShowDetails";
import { useState } from "react";

/**
 * React TV is an web streaming platform that allows users to browse
 * through the episodes of a variety of different shows.
 */
export default function App() {
  const [allShows, setAllShows] = useState(tvShows);
  const [selectedShow, setSelectedShow] = useState(tvShows[0]);
  return (
    <>
      <header>
        <p>React TV</p>
        <ShowSelection shows={allShows} setSelectedShow={setSelectedShow} />
      </header>
      <main>
        <ShowDetails show={selectedShow} />
      </main>
    </>
  );
}
