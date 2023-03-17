export const questions = [
    {
        text: "Explain event delegation.",
        status: false,
        subquestions: [
            {
                text: "Explain how this works in JavaScript.",
                status: false,
            },
            {
                text: "Can you give an example of one of the ways that working with this has changed in ES6?",
                status: false,
            },
        ],
    },
    {
        text: "Explain how prototypal inheritance works.",
        status: false,
    },
    {
        text: "What's the difference between a variable that is: null, undefined or undeclared?",
        status: false,
        subquestions: [
            {
                text: "How would you go about checking for any of these states?",
                status: false,
            },
        ],
    },
    {
        text: "What is a closure, and how/why would you use one?",
        status: false,
    },
    {
        text: "What language constructions do you use for iterating over object properties and array items?",
        status: false,
        subquestions: [
            {
                text: "Can you describe the main difference between the Array.forEach() loop and Array.map() methods and why you would pick one versus the other?",
                status: false,
            },
        ],
    },
    {
        text: "What's a typical use case for anonymous functions?",
        status: false,
    },
    {
        text: "What's the difference between host objects and native objects?",
        status: false,
    },
    {
        text: "Explain the difference between: function Person(){}, var person = Person(), and var person = new Person()?",
        status: false,
    },
    {
        text: "Explain the differences on the usage of foo between function foo() {} and var foo = function() {}",
        status: false,
    },
    {
        text: "Can you explain what Function.call and Function.apply do? What's the notable difference between the two?",
        status: false,
    },
    {
        text: "Explain Function.prototype.bind.",
        status: false,
    },
    {
        text: "What's the difference between feature detection, feature inference, and using the UA string?",
        status: false,
    },
    {
        text: "Explain 'hoisting'.",
        status: false,
    },
    {
        text: "Describe event bubbling.",
        status: false,
    },
    {
        text: "Describe event capturing.",
        status: false,
    },
    {
        text: "What's the difference between an 'attribute' and a 'property'?",
        status: false,
    },
    {
        text: "What are the pros and cons of extending built-in JavaScript objects?",
        status: false,
    },
    {
        text: "What is the difference between == and ===?",
        status: false,
    },
    {
        text: "Explain the same-origin policy with regards to JavaScript.",
        status: false,
    },
    {
        text: "Why is it called a Ternary operator, what does the word 'Ternary' indicate?",
        status: false,
    },
    {
        text: "What is strict mode? What are some of the advantages/disadvantages of using it?",
        status: false,
    },
    {
        text: "What is strict mode? What are some of the advantages/disadvantages of using it?",
        status: false,
        subquestions: []
    },
    {
        text: "What are some of the advantages/disadvantages of writing JavaScript code in a language that compiles to JavaScript?",
        status: false,
        subquestions: []
    },
    {
        text: "What tools and techniques do you use debugging JavaScript code?",
        status: false,
        subquestions: []
    },
    {
        text: "Explain the difference between mutable and immutable objects.",
        status: false,
        subquestions: [
            {
                text: "What is an example of an immutable object in JavaScript?",
                status: false,
            },
            {
                text: "What are the pros and cons of immutability?",
                status: false,
            },
            {
                text: "How can you achieve immutability in your own code?",
                status: false,
            }
        ]
    },
    {
        text: "Explain the difference between synchronous and asynchronous functions.",
        status: false,
        subquestions: []
    },
    {
        text: "What is event loop?",
        status: false,
        subquestions: [
            {
                text: "What is the difference between call stack and task queue?",
                status: false,
            }
        ]
    },
    {
        text: "What are the differences between variables created using let, var or const?",
        status: false,
        subquestions: [
            {
                text: "How do scoping rules differ between these variable declarations?",
                status: false,
            },
            {
                text: "What is the temporal dead zone and how does it apply to let and const?",
                status: false,
            },
        ],
    },
    {
        text: "What are the differences between ES6 class and ES5 function constructors?",
        status: false,
        subquestions: [
            {
                text: "What new features are introduced in ES6 classes?",
                status: false,
            },
            {
                text: "What are the advantages of using classes over function constructors?",
                status: false,
            },
        ],
    },
    {
        text: "Can you offer a use case for the new arrow => function syntax? How does this new syntax differ from other functions?",
        status: false,
        subquestions: [
            {
                text: "How does the arrow function handle 'this' differently than traditional functions?",
                status: false,
            },
            {
                text: "What are the benefits of using arrow functions for concise code?",
                status: false,
            },
        ],
    },
    {
        text: "What advantage is there for using the arrow syntax for a method in a constructor?",
        status: false,
        subquestions: [
            {
                text: "How can the arrow syntax be used to bind methods to the class instance?",
                status: false,
            },
            {
                text: "What are the potential pitfalls of using arrow functions in a class?",
                status: false,
            },
        ],
    },
    {
        text: "What is the definition of a higher-order function?",
        status: false,
        subquestions: [
            {
                text: "Can you provide an example of a higher-order function in JavaScript?",
                status: false,
            },
            {
                text: "What are some of the benefits of using higher-order functions in your code?",
                status: false,
            },
        ],
    },
    {
        text: "Can you give an example for destructuring an object or an array?",
        status: false,
        subquestions: [
            {
                text: "What are some of the common use cases for destructuring in JavaScript?",
                status: false,
            },
            {
                text: "How can destructuring be used to assign default values to function parameters?",
                status: false,
            },
        ],
    },
    {
        text: "Can you give an example of generating a string with ES6 Template Literals?",
        status: false,
        subquestions: [
            {
                text: "What are some of the benefits of using Template Literals over traditional string concatenation?",
                status: false,
            },
            {
                text: "How can Template Literals be used to interpolate variables and expressions into a string?",
                status: false,
            },
        ],
    },
    {
        text: "Can you give an example of a curry function and why this syntax offers an advantage?",
        status: false,
        subquestions: [
            {
                text: "What is the definition of a curry function?",
                status: false,
            },
            {
                text: "How can a curry function be used to create reusable and composable functions?",
                status: false,
            },
        ],
    }
];