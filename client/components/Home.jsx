import { Link } from "react-router-dom";
import Counter from "../src/counter";
import controlledComponent from "./ControlledComponent";
import incrementdecrement from "../src/IncrementDecrement";
import About from "../src/about";
export default function Home() {

  return (
  <div>
    <h2 class="fade-in-text">Transforming Ideas into Reality.</h2>
    <h2 class="fade-in-text">Learn more <Link to="/about">about me</Link>.</h2>
    <Counter />
    <controlledComponent />

  </div>
  );
}