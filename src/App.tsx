import "./App.css";

let name: string;
let age: number | string;
let isStudent: boolean;
let hobbies: string[];
let role: [number, string];
let printName: (name: string) => never;

let personName: unknown;

// type Person={
//   name:string;
//   age?:number;
// }

// let person : Person = {
//   name:"SR"
// };

// let lotsOfPeople:Person[]

interface Person {
  name: string;
  age?: number;
}

interface Guy extends Person {
  profession?: string;
  salary?: number;
}

let sr: Guy = {
  name: "SR",
};

function App() {
  return <div className="App">Hello world</div>;
}

export default App;
