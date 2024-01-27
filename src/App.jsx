import "./App.css";
import Globe from "./componets/globe/Globe";
import { Sphere } from "./componets/globe/Sphere";
import { Planet } from "./componets/globe/Planet2";
import { Football } from "./componets/globe/Football";
import Header from "./componets/Header";
import Layout from "./pages/Layout";
function App() {
  return (
    <div className="h-full w-full  bg-black ">
      <Layout />
    </div>
  );
}

export default App;
