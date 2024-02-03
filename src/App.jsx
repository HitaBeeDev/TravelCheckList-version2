import "./index.css";
import Container from "./Components/Container";
import bg from "../src/assets/bg2.jpg";

function App() {
  return (
    <div
      className="bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <Container />
    </div>
  );
}

export default App;
