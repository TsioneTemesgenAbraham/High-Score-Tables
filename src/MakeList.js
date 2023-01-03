import React, { useState } from "react";
import allCountryScores from "./score";

function MakeList() {
  const [list, setList] = useState(allCountryScores);

  const [toggle, setToggle] = useState(true);

  const toggleList = (scores) => {
    setToggle(!toggle);
    return toggle
      ? scores.sort((a, b) => b.s - a.s)
      : scores.sort((a, b) => a.s - b.s);
  };

  const scores = list.flatMap((item) => item.scores).sort((a, b) => b.s - a.s);

  return (
    <div>
      <>
        <button
          onClick={() =>
            setList(
              list.map((item) => ({ ...item, scores: toggleList(item.scores) }))
            )
          }
        >
          Sort{" "}
        </button>
      </>
      <div>
        {list
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((element) => (
            <p key={element.name}>
              <h3>High Scores: {element.name}</h3>
              <ul>
                {element.scores.map((score) => (
                  <p key={score.n}>
                    {" "}
                    {score.n}
                    {score.s}{" "}
                  </p>
                ))}
              </ul>
            </p>
          ))}
      </div>
      <br></br>

      <br></br>
      <div>
        <h1>ALL SCORES</h1>
        <ul>
          {scores.map((element) => (
            <p>
              {element.n} {element.s}
            </p>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MakeList;
