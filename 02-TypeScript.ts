//! დაწერეთ არსებული კოდი Typescript-ში:

// მაგალითი 1

let name = "Alice";
let name: string = "alice";

// მაგალითი 2

let numbers = [1, 2, 3];
let numbers: number[] = [1, 2, 3];

// მაგალითი 3

function multiply(a, b) {
  return a * b;
}
function multiply(a: number, b: number): number {
  return a * b;
}

// მაგალითი 4

const user = { id: 1, name: "Alice" };
const user: { id: number; name: string } = { id: 1, name: "alice" };
// მაგალითი 5
// რისთვის ვიყენებთ არსებული კოდში = Guest-ს :

function greet(name: string = "Guest") {}

// პასუხი:

// მაგალითი 6
// დაწერეთ ტიპი რომელიც მოერგება ყველა ქვემოთ ჩამოთვლილ ელემენტს. მაგ: type Config = {

const config1 = {
  theme: "dark",
  options: {
    fontSize: 16,
    layout: null,
  },
};

const config2 = {
  theme: "dark",
};

const config3 = {
  tester: "test",
};
type Config = {
  theme?: string;
  options?: {
    fontSize?: number;
    layout?: null;
  };
  tester?: string;
};

// მაგალითი 7
// დაწერეთ ტიპი რომელიც მოერგება ყველა ქვემოთ ჩამოთვლილ ელემენტს. მაგ: type MixedArray =
const array1 = [42, "hello", { name: "Alice" }];
const array2 = ["apple", true, { isValid: false }];
const array3 = [];
type MixedArray = (number | string | boolean | object)[];

// მაგალითი 8
// აღწერეთ რისი ტიპიზაცია ხდება არსებულ კოდში წერილობით

type Handler = {
  process?: () => string;
  validate?: (input: string) => boolean;
  log?: () => void;
};
process უკან აბრუნებს string-ს,
validate აბრუნებს true და falses
log არაფერს არ აბრუნებს.


// მაგალითი 9

// შექმენით ტიპი მონაცემისთივს:

type User = {};

const user: User = {
  id: 101,
  username: "tech_learner",
  isAdmin: false,
  profile: {
    fullName: "Alice Johnson",
    age: 25,
    interests: ["coding", "gaming", "reading"],
  },
  settings: {
    theme: "dark",
    notifications: {
      email: true,
      sms: false,
    },
  },
  metadata: undefined,
};
type User = {
  id: number;
  username: string;
  isAdmin: boolean;
  profile: {
    fullName: string;
    age: number;
    interests: string[];
  };
  settings: {
    theme: string;
    notifications: {
      email: boolean;
      sms: boolean;
    };
  };
  metadata: undefined;
};
