import {TestProps } from "../types/TestType"


// Function with return type
function multiply(a: number, b: number): number {
  return a * b;
}
console.log(multiply(4, 10)); // Output: 40

const Test = (props: TestProps) => {
  return (
    <div>
      <p>Name: {props.name} </p>
      <p>Age: {props.age}</p>
      <div>
        <p>Job: {props.job}</p>
      </div>
      <div>
        <p>Salary : {props.salary} </p>
      </div>
    </div>
  );
};

export default Test;
