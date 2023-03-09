export const questions = [
    {
        id: 1,
        text: "Explain event delegation.",
        status:"NOK",
        subquestions: [
            {
                id: 1.1,
                text: "Explain how this works in JavaScript.",
                status:"NOK",
            },
            {
                id: 1.2,
                text:"Can you give an example of one of the ways that working with this has changed in ES6?",
                status:"NOK",
            },
        ],
    },
    {
        id: 2,
        text: "Explain how prototypal inheritance works.",
        status:"NOK",
    },
    {
        id: 3,
        text: "What's the difference between a variable that is: null, undefined or undeclared?",
        status:"NOK",
        subquestions: [
            {
                id: 3.1,
                text: "How would you go about checking for any of these states?",
                status:"NOK",
            },
        ],
    },
    {
        id: 4,
        text: "What is a closure, and how/why would you use one?",
        status:"NOK",
    },
    {
        id: 5,
        text: "What language constructions do you use for iterating over object properties and array items?",
        status:"NOK",
        subquestions: [
            {
                id: 5.1,
                text: "Can you describe the main difference between the Array.forEach() loop and Array.map() methods and why you would pick one versus the other?",
                status:"NOK",
            },
        ],
    },
    {
        id: 6,
        text: "What's a typical use case for anonymous functions?",
        status:"NOK",
    },
    {
        id: 7,
        text: "What's the difference between host objects and native objects?",
        status:"NOK",
    },
    {
        id: 8,
        text: "Explain the difference between: function Person(){}, var person = Person(), and var person = new Person()?",
        status:"NOK",
    },
    {
        id: 9,
        text: "Explain the differences on the usage of foo between function foo() {} and var foo = function() {}",
        status:"NOK",
    },
    {
        id: 10,
        text: "Can you explain what Function.call and Function.apply do? What's the notable difference between the two?",
        status:"NOK",
    },
    {
        id: 11,
        text: "Explain Function.prototype.bind.",
        status:"NOK",
    },
    {
        id: 12,
        text: "What's the difference between feature detection, feature inference, and using the UA string?",
        status:"NOK",
    },
    {
        id: 13,
        text: "Explain 'hoisting'.",
        status:"NOK",
    },
    {
        id: 14,
        text: "Describe event bubbling.",
        status:"NOK",
    },
    {
        id: 15,
        text: "Describe event capturing.",
        status:"NOK",
    },
    {
        id: 16,
        text: "What's the difference between an 'attribute' and a 'property'?",
        status:"NOK",
    },
    {
        id: 17,
        text: "What are the pros and cons of extending built-in JavaScript objects?",
        status:"NOK",
    },
    {
        id: 18,
        text: "What is the difference between == and ===?",
        status:"NOK",
    },
    {
        id: 19,
        text: "Explain the same-origin policy with regards to JavaScript.",
        status:"NOK",
    },
    {
        id: 20,
        text: "Why is it called a Ternary operator, what does the word 'Ternary' indicate?",
        status:"NOK",
    },
    {
        id: 21,
        text: "What is strict mode? What are some of the advantages/disadvantages of using it?",
        status:"NOK",
    },
    {
        id: 21,
        text: "What is strict mode? What are some of the advantages/disadvantages of using it?",
        status:"NOK",
        subquestions: []
    },
    {
        id: 22,
        text: "What are some of the advantages/disadvantages of writing JavaScript code in a language that compiles to JavaScript?",
        status:"NOK",
        subquestions: []
    },
    {
        id: 23,
        text: "What tools and techniques do you use debugging JavaScript code?",
        status:"NOK",
        subquestions: []
    },
    {
        id: 24,
        text: "Explain the difference between mutable and immutable objects.",
        status:"NOK",
        subquestions: [
            {
                id: 24.1,
                text: "What is an example of an immutable object in JavaScript?",
                status:"NOK",
            },
            {
                id: 24.2,
                text: "What are the pros and cons of immutability?",
                status:"NOK",
            },
            {
                id: 24.3,
                text: "How can you achieve immutability in your own code?",
                status:"NOK",
            }
        ]
    },
    {
        id: 25,
        text: "Explain the difference between synchronous and asynchronous functions.",
        status:"NOK",
        subquestions: []
    },
    {
        id: 26,
        text: "What is event loop?",
        status:"NOK",
        subquestions: [
            {
                id: 26.1,
                text: "What is the difference between call stack and task queue?",
                status:"NOK",
            }
        ]
    },
    {
        id: 27,
        text: "What are the differences between variables created using let, var or const?",
        status:"NOK",
        subquestions: [
            {
                id: 27.1,
                text: "How do scoping rules differ between these variable declarations?",
                status:"NOK",
            },
            {
                id: 27.2,
                text: "What is the temporal dead zone and how does it apply to let and const?",
                status:"NOK",
            },
        ],
    },
    {
        id: 28,
        text: "What are the differences between ES6 class and ES5 function constructors?",
        status:"NOK",
        subquestions: [
            {
                id: 28.1,
                text: "What new features are introduced in ES6 classes?",
                status:"NOK",
            },
            {
                id: 28.2,
                text: "What are the advantages of using classes over function constructors?",
                status:"NOK",
            },
        ],
    },
    {
        id: 29,
        text: "Can you offer a use case for the new arrow => function syntax? How does this new syntax differ from other functions?",
        status:"NOK",
        subquestions: [
            {
                id: 29.1,
                text: "How does the arrow function handle 'this' differently than traditional functions?",
                status:"NOK",
            },
            {
                id: 29.2,
                text: "What are the benefits of using arrow functions for concise code?",
                status:"NOK",
            },
        ],
    },
    {
        id: 30,
        text: "What advantage is there for using the arrow syntax for a method in a constructor?",
        status:"NOK",
        subquestions: [
            {
                id: 30.1,
                text: "How can the arrow syntax be used to bind methods to the class instance?",
                status:"NOK",
            },
            {
                id: 30.2,
                text: "What are the potential pitfalls of using arrow functions in a class?",
                status:"NOK",
            },
        ],
    },
    {
        id: 31,
        text: "What is the definition of a higher-order function?",
        status:"NOK",
        subquestions: [
            {
                id: 31.1,
                text: "Can you provide an example of a higher-order function in JavaScript?",
                status:"NOK",
            },
            {
                id: 31.2,
                text: "What are some of the benefits of using higher-order functions in your code?",
                status:"NOK",
            },
        ],
    },
    {
        id: 32,
        text: "Can you give an example for destructuring an object or an array?",
        status:"NOK",
        subquestions: [
            {
                id: 32.1,
                text: "What are some of the common use cases for destructuring in JavaScript?",
                status:"NOK",
            },
            {
                id: 32.2,
                text: "How can destructuring be used to assign default values to function parameters?",
                status:"NOK",
            },
        ],
    },
    {
        id: 33,
        text: "Can you give an example of generating a string with ES6 Template Literals?",
        status:"NOK",
        subquestions: [
            {
                id: 33.1,
                text: "What are some of the benefits of using Template Literals over traditional string concatenation?",
                status:"NOK",
            },
            {
                id: 33.2,
                text: "How can Template Literals be used to interpolate variables and expressions into a string?",
                status:"NOK",
            },
        ],
    },
    {
        id: 34,
        text: "Can you give an example of a curry function and why this syntax offers an advantage?",
        status:"NOK",
        subquestions: [
            {
                id: 34.1,
                text: "What is the definition of a curry function?",
                status:"NOK",
            },
            {
                id: 34.2,
                text: "How can a curry function be used to create reusable and composable functions?",
                status:"NOK",
            },
        ],
    }
];
