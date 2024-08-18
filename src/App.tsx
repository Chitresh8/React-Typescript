import "./App.css";
import { Learn } from "./components/Learn";
import { PowerProps } from "./components/Power";
import { Rangers } from "./components/Rangers";

function App() {
  const rangerType = {
    firstName: "Power",
    lastName: "Rangers",
  };

  const powerType = [
    {
      firstName: "Red",
      lastName: "Ranger",
    },
    {
      firstName: "Blue",
      lastName: "Ranger",
    },
    {
      firstName: "Yellow",
      lastName: "Ranger",
    },
  ];
  return (
    <div className="App">
      <header className="App-header">
        {/* <Learn/> */}
        <Learn
          name={"Chitresh"}
          date={"09-04-2024"}
          isLoggedIn={true}
        />
        <div className="rangersDiv">
          <Rangers win={rangerType} />
          <PowerProps wins={powerType} />
        </div>
      </header>
    </div>
  );
}

export default App;
