import "./App.css";
import { Learn } from "./components/Learn";
import { Rangers } from "./components/Rangers";

function App() {
  const rangerType = {
    firstName: "Power",
    lastName: "Rangers",
  };
  return (
    <div className="App">
      <header className="App-header">
        {/* <Learn/> */}
        <Learn
          name={"Chitresh"}
          date={"09-04-2024"}
          isLoggedIn={true}
        />
        <Rangers win={rangerType} />
      </header>
    </div>
  );
}

export default App;
