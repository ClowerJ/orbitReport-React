import satData from "./components/satData";
import displaySats from "./components/App.js";
import filterByType from "./components/App.js";
import setSat from "./components/App.js";


const Buttons = () => {
  return (
    <div>
      {displaySats.map((sat, id) => {
        return (
          <button onClick={() => filterByType(sat)} key={id}>
            {sat} Orbit
          </button>
          );
          
      })}

      <button onClick={() => setSat(satData)} key={id}>
            {setSat} All Orbits</button>
    </div>
  )
};

export default Buttons;