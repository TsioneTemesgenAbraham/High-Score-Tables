import "./App.css";
import allCountryScores from "./score";

function App() {
  return (
    <div className="App">
      <h1>High Score Per Country</h1>
      <MakeList />
    </div>
  );
}

function PLayerScore(props) {
  return (
    <div>
      <table className="table">
        <tbody>
          <tr>
            <td>{props.n}</td>
            <td>{props.s}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function MakeList() {
  return (
    <div>
      {allCountryScores
        .sort((a, b) => a.name.localeCompare(b.name))
        .map((element) => (
          <>
            <h3>High Scores: {element.name}</h3>
            {element.scores
              .sort((a, b) => b.s - a.s)
              .map((el) => (
                <PLayerScore n={el.n} s={el.s} />
              ))}
          </>
        ))}
    </div>
  );
}

export default App;
