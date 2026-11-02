// const student = (name: string, age: number, isStudent: boolean) => {
    // console.log(name, age, isStudent); 
// }
// student("julie", 22, true);

const addNumbers = (a: number, b: number) => {
    return a + b;
} 
// console.log(addNumbers(10, 20));

const famyli: string[] = [
    "julie",
    "karima",
    "yeasmin"
];
famyli.push("karisma")
// console.log(famyli)

// Tuple
const student: [string, number] = ["julie", 22];
// console.log(student) 


// Optional Parameter 
const greet = (name: string, geeeting?: string) => {
   if (!geeeting) {
    return "Hello"+ " " + name;
   }
    return geeeting + " " + name;
};

// console.log(greet ("julie"))


// Default Parameter practice
const welcome = (name: string, message = "Welcome") => {
    console.log(message+ " " + name)
}
welcome("Julie")


// Rest Parameter ...args 
const sum = (...numbers: number[]) => {
    return numbers.reduce((total, currentNumber) => {
        return total + currentNumber; 
    }, 0);
};
// console.log(sum(10, 20, 30))


// topic: Object + Type Alias
type Product = {
    name: string;
    price: number;
    inStock: boolean;
};

const product1: Product ={
    name: "Phone",
    price: 1500,
    inStock: true
};
const product2: Product ={
    name: "HeadPhone",
    price: 1600,
    inStock: true,
}; 
// console.log(product1, product2) 


interface User {
    name: string;
    age: number;
    isActive: boolean;
     sayHello: () => void;
}
const user: User ={
    name: "Juli",
    age: 22, 
    isActive: true,
    sayHello: () => {
        console.log("Hello Julie");
    }
    
}
user.sayHello() 

interface Book {
    title: string;
    price: number;
    available: boolean; 
};
const book: Book ={
    title: "vocabulary",
    price: 300, 
    available: true,
}
console.log(book)