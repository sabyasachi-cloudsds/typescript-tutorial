let name: string = "srikanth";
let age: number | string;
let isStudent: boolean;
let hobbies: string[];
let role: [number, string];
let printName: (name: string) => never;

printName(name: string) {
  console.log(name);
};

let name1: any = "srikanth";
name1 = 25;

enum Color {
  RED,
  GREEN,
  BLUE,
} 
  

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
