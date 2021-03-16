import React from "react";
import "./styles.css";
export default class BMICalculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 0,
      weight: 0,
      bmi: null,
      bmiClass: ""
    };
    // code here

    this.handleHeightChange = this.handleHeightChange.bind(this);
    this.handleWeightChange = this.handleWeightChange.bind(this);
    this.computeBMI = this.computeBMI.bind(this);
    this.getBMI = this.getBMI.bind(this);
  }

  handleWeightChange(weightValue) {
    // code here
    this.setState({ weight: weightValue });
    console.log("Weight: " + this.state.weight);
  }

  handleHeightChange(heightValue) {
    // code here
    this.setState({ height: heightValue });
    console.log("Height: " + this.state.height);
  }

  computeBMI() {
    console.log("c bmi");
    let bmiValue = this.state.weight / this.state.height / this.state.height;
    // code here
    this.setState({ bmiClass: this.getBMI(bmiValue) });
    this.setState({ bmi: bmiValue });
  }

  getBMI(bmi) {
    // code here
    console.log("g bmi");

    if (bmi < 18.5) return "Underweight";
    else if (bmi >= 18.5 && bmi < 25) return "Normal Weight";
    else if (bmi >= 25 && bmi < 30) return "Overweight";
    else if (bmi > 30) return "Obese";
  }

  render() {
    return (
      <div className="block">
        <div className="row">
          <TextInput
            id="height"
            class="textinput"
            label="Height"
            placeholder="Enter height in meters"
            onChange={this.handleHeightChange}
          />
        </div>
        <div className="row">
          <TextInput
            id="weight"
            class="textinput"
            label="Weight"
            placeholder="Enter weight in kg"
            onChange={this.handleWeightChange}
          />
        </div>
        <div className="row">
          <Button label="SUBMIT" onClick={this.computeBMI} />
        </div>
        <div className="row">
          <Display bmi={this.state.bmi} bmiClass={this.state.bmiClass} />
        </div>
      </div>
    );
  }
}

class TextInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    // code here
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const inputValue = event.target.value;
    // code here
    this.setState({ value: inputValue });
    this.props.onChange(inputValue);
  }

  render() {
    return (
      <div class="input">
        <label class="lbl">{this.props.label}</label>
        &nbsp;&nbsp;&nbsp;
        <input
          type="number"
          class="ip"
          value={this.state.value}
          placeholder={this.props.placeholder}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <button class="btn" onClick={this.props.onClick}>
        {this.props.label}
      </button>
    );
  }
}

class Display extends React.Component {
  render() {
    return (
      <div class="dis">
        <h3 id="bmi">
          BMI ={" "}
          {typeof this.props.bmi === "number"
            ? this.props.bmi.toFixed(2)
            : "N/A"}
        </h3>
        <h3 id="bmi-class">
          BMI Class = {!!this.props.bmiClass ? this.props.bmiClass : "N/A"}
        </h3>
      </div>
    );
  }
}
