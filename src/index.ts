// let a = 1 + 2;
// let b = a + 3;
// let c = {
//   apple: a,
//   banana: b,
// };
// let d = c.apple * 4;

// function squareOf(n: number) {
//   return n * n;
// }

// console.log(squareOf(2));

// let v: unknown = 20;
// let n = a === 123;

// if (typeof a === "number") {
//   let d = a + 10;
// }
// console.log(d);

// let h = {
//   b: "x",
// };
// console.log(h.b);

// let r = {
//   c: {
//     d: "f",
//   },
// };

// let l: {
//   firstName: string;
//   lastName: string;
// } = {
//   firstName: "jon",
//   lastName: "coale",
// };
// console.log(l);

// class Person {
//   constructor(public firsName: string, public lastName: string) {}
// }

// let cla = new Person("matt", "lokeve");
// console.log(cla);

// type Age = number;
// type Oerson = {
//   name: string;
//   age: Age;
// };

// let age: Age = 55;
// let driver: Oerson = {
//   name: "James May",
//   age: age,
// };
// console.log(driver);

// type Color = "red";
// let x = Math.random() < 0.5;
// if (x) {
//   type Color = "blue"; // Здесь перекрывается Color, объявленный выше.
//   let b: Color = "blue";
// } else {
//   let c: Color = "red";
// }

// function buildArray() {
//   let a = [];
//   a.push(1);
//   a.push("x");
//   return a;
// }
// console.log(buildArray());

// type A = readonly string[];
// type B = ReadonlyArray<string>;
// type C = Readonly<string[]>;

// type D = readonly [number, string];
// type E = Readonly<[number, string]>;

// enum Language {
//   English,
//   Russia,
//   Spanish,
// }
// let myFirstLanguage = Language.Russia;
// console.log(myFirstLanguage);

// let mySecondaryLanguage = Language["English"];
// console.log(mySecondaryLanguage);

// enum Colors {
//   Red = "#c10000",
//   Blue = "#007ac1",
//   Pink = 0xc10050,
//   White = 255,
// }

// let red = Colors.Red;
// let pink = Colors.Pink;
// console.log(red);
// console.log(pink);

// type Context = {
//   appId?: string;
//   userId?: string;
// };
// let Context = {
//   appId: "01",
//   userId: "0x15dssd",
// };

// function log(message: string, context: Context = {}) {
//   let time = new Date().toISOString();
//   return typeof [context.userId, time, message];
// }

// console.log(log("Hello", Context));

// function sum(...numbers: number[]): number {
//   return numbers.reduce((total, n) => total + n, 0);
// }
// let a = sum();

// console.log(a);
// function* createFibonacciGenerator() {
//   let a = 0;
//   let b = 1;
//   while (true) {
//     yield a;
//     [a, b] = [b, a + b];
//   }
// }
// let fibonacciGenerator = createFibonacciGenerator();
// fibonacciGenerator.next();
// fibonacciGenerator.next();
// fibonacciGenerator.next();

// console.log(fibonacciGenerator.next());

// function* createNumbers(): IterableIterator<number> {
//   let n = 0;
//   while (1) {
//     yield n++;
//   }
// }
// let numbers = createNumbers();

// let numbers = {
//   *[Symbol.iterator]() {
//     for (let n = 1; n <= 10; n++) {
//       yield n;
//     }
//   },
// };

// function sum(a: number, b: number): number {
//   return a + b;
// }

// type Log = (message: string, userId?: string) => void;
// let log: Log = (message, userId = "Not signed in") => {
//   let time = new Date().toISOString;
//   console.log(time, message, userId);
// };

// function times(f: (index: number) => void, n: number) {
//   for (let i = 0; i < n; i++) {
//     f(i);
//   }
// }
// times((n) => console.log(n), 4);

// type Reserve = {
//   (from: Date, to: Date, destination: string): Reservation;
//   (from: Date, destination: string): Reservation;
// };

// let reserve: Reserve = (
//   from: Date,
//   toOrDestination: Date | string,
//   destination?: string
// ) => {
//   if (toOrDestination instanceof Date && destination !== undefined) {
//     // Book a one-way trip
//   } else if (typeof toOrDestination === "string") {
//     // Book a round trip
//   }
// };

// warnUser.wasCalled = false;
// type WarnUser = {
//   (warning: string): void;
//   wasCalled: boolean;
// };

// function warnUser(warning) {
//   if (warnUser.wasCalled) {
//     return;
//   }
//   warnUser.wasCalled = true;
//   alert(warning);
// }

// type TreeNode = {
//   value: string;
// };
// type LeafNode = TreeNode & {
//   isLeaf: true;
// };
// type InnerNode = TreeNode & {
//   children: [TreeNode] | [TreeNode, TreeNode];
// };

// let a: TreeNode = { value: "a" };
// let b: LeafNode = { value: "b", isLeaf: true };
// let c: InnerNode = { value: "c", children: [b] };

// let a1 = mapNode(a, (_) => _.toUpperCase()); // TreeNode
// let b1 = mapNode(b, (_) => _.toUpperCase()); // LeafNode
// let c1 = mapNode(c, (_) => _.toUpperCase()); // InnerNode

// function mapNode<T extends TreeNode>(node: T, f: (value: string) => string): T {
//   return {
//     ...node,
//     value: f(node.value),
//   };
// }

// type HasSides = { numberOfSides: number };
// type SidesHaveLength = { sideLength: number };

// function logPerimeter<Shape extends HasSides & SidesHaveLength>(
//   s: Shape
// ): Shape {
//   console.log(s.numberOfSides * s.sideLength);
//   return s;
// }

// type Square = HasSides & SidesHaveLength;
// let square: Square = { numberOfSides: 4, sideLength: 3 };
// logPerimeter(square);
