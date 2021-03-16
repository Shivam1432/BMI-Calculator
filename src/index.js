import { StrictMode } from "react";
import ReactDOM from "react-dom";

//import App from "./App";
import Bmic from "./BMICalculator";
import "./styles.css";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <>
    <div class="box">
      <div class="h">BMI Calculator</div>
      <StrictMode>
        <Bmic />
      </StrictMode>
    </div>
  </>,
  rootElement
);
