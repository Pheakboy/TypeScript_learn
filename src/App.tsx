// // import { useState } from "react"
// import Button from "./components/Button"
// import Greet from "./components/Greet"
// import Heading from "./components/Heading"
// // import Increment from "./components/Increment"
// import { Name } from "./components/Name"
// import Oscas from "./components/Oscas"
// import Person from "./components/Person"
// import PersonList from "./components/PersonList"
// import { Counter } from "./components/state/Counter"
// import Loggin from "./components/state/Loggin"
// import Users from "./components/state/Users"
// import Status from "./components/Status"
// import Test from "./components/Test"
// // import Test, {test} from "./components/Test"


// // enum if we don't assign the value to the first element, it will start from 0 and increment by 1. 
// // if we give the value to the first element, the next element will start from the value of the first element and increment by 1
// //  example: number1 = 6 so  number2 = 7, number3 = 8

// enum Number {
//   number1 = 6,
//   number2 =9,
//   number3,
// }
// console.log(Number.number1)
// console.log(Number.number2)
// console.log(Number.number3)

// const App = () => {
//   // const [testData,setTest]= useState(test)
//   // personName is an object that has two properties: first and last
//   const personName  = {
//     first: "pheak",
//     last: "dey",
//   }
//   // nameList is an array of objects that has two properties: first and last
//   const nameList = [
//     {
//       first: "pheak",
//       last: "dey",
//     },
//     {
//       first: "pheak2",
//       last: "dey",
//     },
//     {
//       first: "pheak3",
//       last: "dey",
//       age: [12]
//     }
//   ]
//   return (
//     <div>
//       <Name age={14} name="pheak" num1={5} num2={3} num3={8} num4={2} isStudent = {true} />
//       {/* <Test name={testData.name} age={testData.age} job={testData.job} salary={testData.salary} /> */}
//       <Test name="pheak" age={14} job="Tester" salary={100} />
//       <Greet name = "pheak"  messageCount={58} isLoggedIn = {true}  age = {21} message="I wish you all the best this years" gift="Iphone 13 pro" />
//       {/* <Increment/> */}
//       <Person name = {personName} />
//       <PersonList name= {nameList} />
//       <Status status="success"/>
//       <Heading>Placeholder text</Heading>
//       <Oscas>
//         <Heading>Osca go to the caprio</Heading>
//       </Oscas>
//       <Button handelClick={(event, id) => {
//         console.log("Button clicked", event, id);
//       }} />
//       <Loggin/>
//       <Users/>
//       <Counter/>
//     </div>
//   )
// }

// export default App

// // Type Inference is the ability of  "guesses" the type based on the assigned value or how a variable is used.
// // example: const number = 12 // number is a number type

// // Union Type is a type that can be one of several types. We use the pipe operator (|) to separate the types.
// // example: let number: number | string = 12 // number can be a number or a string

// // Intersection Type is a type that combines multiple types into one. We use the ampersand operator (&) to separate the types.
// // example:
// // interface Person {
// //   name: string;
// // }

// // interface Employee {
// //   employeeId: number;
// // }

// // type EmployeeDetails = Person & Employee;

// // const employee: EmployeeDetails = {
// //   name: "Alice",
// //   employeeId: 1234,
// // };

// // let numbers: number[] = [1, 2, 3]; // Array of numbers
// // let person: { name: string; age: number } = { name: "John", age: 30 }; // Object with name and age properties

// // Function with multiple parameters
// // function add(a: number, b: number): number {
// //   return a + b;
// // }
// // console.log(add(5, 10)); // Output: 15

// // Function with return type
// // function multiply(a: number, b: number): number {
// //   return a * b; // The return type is `number`
// // }
// // console.log(multiply(5, 10)); // Output: 50

// // Type and interface 
// // Use type for building application logic and use interface for defining shapes of objects or libraries.



import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";


const App = () => {
  return (
   <BrowserRouter>
   <Navbar/>
    <Routes>  
      <Route index element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About/>} />
      <Route path="/services" element={<Services/>} />
      <Route path="/pricing" element={<Pricing/>} />
      <Route path="/contact" element={<Contact/> } />
    </Routes>
    <Footer />
   </BrowserRouter>
  )
}

export default App