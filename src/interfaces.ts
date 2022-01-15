// User имеет одно поле, name
interface User {
  name: string;
}
// Теперь User имеет два поля, name и age
interface User {
  age: number;
}

let a: User = {
  name: "Aleksey",
  age: 32,
};

// interface Animal {
//   eat(food: string): void;
//   sleep(hours: number): void;
// }

// class Cat implements Animal {
//   eat(food: string) {
//     console.info("Ate some", food, ". Mmm!");
//   }
//   sleep(hours: number) {
//     console.info("Slept for", hours, "hours");
//   }
// }

interface Animal {
  readonly name: string;
  eat(food: string): void;
  sleep(hours: number): void;
}

interface Animal {
  readonly name: string;
  eat(food: string): void;
  sleep(hours: number): void;
}

interface Feline {
  meow(): void;
}

class Cat implements Animal, Feline {
  name = "Whiskers";
  eat(food: string) {
    console.info("Ate some", food, ". Mmm!");
  }
  sleep(hours: number) {
    console.info("Slept for", hours, "hours");
  }
  meow() {
    console.info("Meow");
  }
}
