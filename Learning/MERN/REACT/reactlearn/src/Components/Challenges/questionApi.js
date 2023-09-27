export const questions = [
    {
        id: 1,
        question: 'What is React?',
        answer: 'React is a front-end JavaScript library developed by Facebook in 2011. It follows the component based approach which helps in building reusable UI components. It is used for developing complex and interactive web and mobile UI.'
    },
    {
        id: 2,
        question: 'What is Real-DOM?',
        answer: '1. It updates slow; 2. Can directly update HTML; 3. Creates a new DOM if element updates; 4. DOM manipulation is very expensive; 5. Too much of memory wastage.'
    },
    {
        id: 3,
        question: 'What is Virtual-DOM?',
        answer: "Copy of Real DOM; 1. It updates faster; 2. Can't directly update HTML; 3. Updates the JSX if element updates; 4. DOM manipulation is very easy; 5. No memory wastage."
    },
    {
        id: 4,
        question: 'Features of React?',
        answer: 'It uses the virtual DOM instead of the real DOM. It uses server-side rendering. It follows uni-directional data flow or data binding.'
    },
    {
        id: 5,
        question: 'Advantages of React?',
        answer: "It increases the application's performance. It can be conveniently used on the client as well as server side. Because of JSX, code's readability increases. React is easy to integrate with other frameworks like Meteor, Angular, etc. Using React, writing UI test cases become extremely easy"
    },
    {
        id: 6,
        question: 'Disadvantages of React?',
        answer: "React is just a library, not a full-blown framework. Its library is very large and takes time to understand. It can be little difficult for the novice programmers to understand. Coding gets complex as it uses inline templating and JSX"
    },
    {
        id: 7,
        question: 'JSX in React?',
        answer: "JSX is a shorthand for JavaScript XML. This is a type of file used by React which utilizes the expressiveness of JavaScript along with HTML like template syntax. This makes the HTML file really easy to understand. This file makes applications robust and boosts its performance."
    },
    {
        id: 8,
        question: 'purpose of render() in React?',
        answer: "Each React component must have a render() mandatorily. It returns a single React element which is the representation of the native DOM component. If more than one HTML element needs to be rendered, then they must be grouped together inside one enclosing tag such as <form>, <group>,<div> etc. This function must be kept pure i.e., it must return the same result each time it is invoked."
    },
    {
        id: 9,
        question: 'Props in React?',
        answer: "Props is the shorthand for Properties in React. They are read-only components which must be kept pure i.e. immutable. They are always passed down from the parent to the child components throughout the application. A child component can never send a prop back to the parent component. This help in maintaining the unidirectional data flow and are generally used to render the dynamically generated data."
    },
    {
        id: 10,
        question: 'State in React?',
        answer: "States are the heart of React components. States are the source of data and must be kept as simple as possible. Basically, states are the objects which determine components rendering and behavior. They are mutable unlike the props and create dynamic and interactive components. They are accessed via this.state()."
    },
];


// https://www.edureka.co/blog/interview-questions/react-interview-questions/