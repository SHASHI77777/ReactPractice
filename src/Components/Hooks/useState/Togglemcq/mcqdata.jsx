export let mcqdata = [
  {
    question: "What is HTML?",
    answer:
      "HTML (HyperText Markup Language) is the standard language for creating webpages. It uses tags to structure and format content, such as text, images, and links, forming the backbone of a webpage.",
  },
  {
    question: "What is the doctype declaration in HTML?",
    answer:
      "The `<!DOCTYPE>` declaration defines the document type and version of HTML. In HTML5, it's simplified as `<!DOCTYPE html>`, telling the browser to render the page according to HTML5 standards.",
  },
  {
    question: "How is `<div>` different from `<span>`?",
    answer:
      "`<div>` is a block-level element used for grouping larger sections and creates a new line, while `<span>` is an inline element used for smaller sections without breaking the line.",
  },
  {
    question: "What are HTML attributes? Give examples.",
    answer:
      "HTML attributes provide additional information about an element, written within the opening tag. Example: `<img src='image.jpg' alt='A beautiful image' width='300'>` where `src`, `alt`, and `width` are attributes.",
  },
  {
    question: "What is the purpose of the `<meta>` tag?",
    answer:
      "`<meta>` tags provide metadata about the HTML document, such as character encoding and viewport settings, placed in the `<head>` section. Example: `<meta charset='UTF-8'>`.",
  },
  {
    question: "What are semantic HTML elements?",
    answer:
      "Semantic HTML elements clearly describe their purpose, like `<header>`, `<footer>`, `<section>`, etc. They improve readability, SEO, and accessibility.",
  },
  {
    question: "What is the difference between HTML and XHTML?",
    answer:
      "XHTML is a stricter version of HTML, following XML rules. HTML is more lenient, while XHTML requires all tags to be closed, is case-sensitive, and must be properly nested.",
  },
  {
    question: "How do you include comments in HTML?",
    answer:
      "HTML comments are added using `<!-- comment here -->`. They document the code and are ignored by the browser.",
  },
  {
    question:
      "What is the purpose of the `<a>` tag? How can you open a link in a new tab?",
    answer:
      "The `<a>` tag creates hyperlinks. To open a link in a new tab, use `target='_blank'`. Example: `<a href='https://example.com' target='_blank'>Visit Example</a>`.",
  },
  {
    question: "What is the difference between `id` and `class` attributes?",
    answer:
      "The `id` attribute is unique and used once per page to uniquely identify an element, while `class` can be used on multiple elements for styling groups of elements.",
  },
  {
    question: "What are forms in HTML, and what are some common form elements?",
    answer:
      "Forms collect user input for submission to a server. Common elements include `<input>`, `<textarea>`, `<select>`, `<button>`, and `<form>`.",
  },
  {
    question: "What are the different types of lists in HTML?",
    answer:
      "HTML supports three types of lists: Ordered list (`<ol>`) with numbers, Unordered list (`<ul>`) with bullets, and Description list (`<dl>`) for terms and descriptions.",
  },
  {
    question: "What is the purpose of the `<iframe>` tag?",
    answer:
      "`<iframe>` embeds another HTML page within the current page, often used for videos, maps, or external content. Example: `<iframe src='https://example.com' width='300' height='200'></iframe>`.",
  },
  {
    question: "How do you create a table in HTML?",
    answer:
      "A table is created using `<table>` with `<tr>` for rows, `<th>` for headers, and `<td>` for data cells. Example: `<table><tr><th>Name</th><td>Age</td></tr><tr><td>Alice</td><td>24</td></tr></table>`.",
  },
  {
    question: "What is the difference between `<head>` and `<body>` tags?",
    answer:
      "`<head>` contains meta-information like title and scripts, while `<body>` contains the visible content, such as text, images, and links.",
  },
  {
    question: "What is CSS?",
    answer:
      "CSS (Cascading Style Sheets) is a stylesheet language used to define the visual appearance and layout of HTML elements on a webpage, including colors, fonts, spacing, and positioning.",
  },
  {
    question: "What are the different types of CSS?",
    answer:
      "There are three types of CSS: Inline CSS (within HTML elements using the `style` attribute), Internal CSS (inside a `<style>` tag in the HTML `<head>`), and External CSS (linked in a separate `.css` file).",
  },
  {
    question: "What is the CSS Box Model?",
    answer:
      "The CSS Box Model is a layout model that describes how elements are displayed on the web. Each element is made up of `content`, `padding`, `border`, and `margin`.",
  },
  {
    question: "What is the difference between `padding` and `margin`?",
    answer:
      "`Padding` is the space between the element’s content and its border, while `margin` is the space outside the element's border that separates it from other elements.",
  },
  {
    question: "What is a CSS selector?",
    answer:
      "CSS selectors are patterns used to select and style HTML elements. Examples include tag selectors (`p`), class selectors (`.class`), ID selectors (`#id`), and attribute selectors (`[type='text']`).",
  },
  {
    question: "What are pseudo-classes and pseudo-elements in CSS?",
    answer:
      "Pseudo-classes define the special state of an element (e.g., `:hover`), while pseudo-elements select and style a specific part of an element (e.g., `::before` or `::after`).",
  },
  {
    question: "What is the purpose of the `z-index` property?",
    answer:
      "The `z-index` property controls the stacking order of elements along the Z-axis. Elements with higher `z-index` values appear above elements with lower values.",
  },
  {
    question: "What is Flexbox in CSS?",
    answer:
      "Flexbox is a CSS layout model that provides a flexible way to arrange elements in a row or column, with properties for aligning, distributing, and ordering items within a container.",
  },
  {
    question:
      "Explain the difference between `absolute`, `relative`, `fixed`, and `sticky` positioning in CSS.",
    answer:
      "`absolute` positions the element relative to its nearest positioned ancestor, `relative` positions it relative to its original position, `fixed` positions it relative to the viewport, and `sticky` switches between relative and fixed based on scroll.",
  },
  {
    question: "What is a CSS preprocessor? Name a few examples.",
    answer:
      "A CSS preprocessor extends CSS with additional features like variables, nesting, and mixins. Examples include SASS, LESS, and Stylus, which compile into standard CSS.",
  },
  {
    question: "What is CSS Grid?",
    answer:
      "CSS Grid is a layout system for creating complex, two-dimensional layouts on the web using rows and columns, allowing precise control over alignment, spacing, and ordering.",
  },
  {
    question: "What are media queries in CSS?",
    answer:
      "Media queries are CSS techniques used to apply styles based on the device's characteristics, such as screen size or orientation. Example: `@media (max-width: 600px) { ... }`.",
  },
  {
    question: "What is specificity in CSS?",
    answer:
      "Specificity determines which CSS rule is applied when multiple rules could apply to the same element. It is calculated based on selectors, with IDs being more specific than classes, and classes more specific than tags.",
  },
  {
    question:
      "What is the difference between `display: none` and `visibility: hidden`?",
    answer:
      "`display: none` removes the element from the document layout, while `visibility: hidden` hides the element but keeps its space in the layout.",
  },
  {
    question: "How can you center an element horizontally in CSS?",
    answer:
      "An element can be centered horizontally by setting `margin: auto` on block elements with a defined width or by using Flexbox with `justify-content: center`.",
  },
  {
    question: "What is JavaScript?",
    answer:
      "JavaScript is a high-level, dynamic programming language used to create interactive effects within web browsers. It is widely used for client-side web development and supports both procedural and object-oriented programming.",
  },
  {
    question: "What is the difference between `var`, `let`, and `const`?",
    answer:
      "`var` has function scope and can be redeclared, `let` has block scope and cannot be redeclared in the same scope, and `const` also has block scope but its value cannot be reassigned after declaration.",
  },
  {
    question: "What are arrow functions in JavaScript?",
    answer:
      "Arrow functions are a shorter syntax for writing functions, introduced in ES6. They do not have their own `this` binding, making them useful for maintaining context in callbacks and closures.",
  },
  {
    question: "What is the `this` keyword in JavaScript?",
    answer:
      "`this` refers to the object in the current context. In a method, `this` refers to the object calling the method; in the global context, it refers to the global object.",
  },
  {
    question: "What is closure in JavaScript?",
    answer:
      "A closure is a function that retains access to its lexical scope, even when the function is executed outside of its original scope, allowing it to remember variables from its outer function.",
  },
  {
    question: "What is the difference between `==` and `===` in JavaScript?",
    answer:
      "`==` performs type coercion before comparison, meaning it checks only values, while `===` is a strict equality operator that checks both the type and the value.",
  },
  {
    question: "What are callbacks in JavaScript?",
    answer:
      "A callback is a function passed as an argument to another function and executed after the completion of that function. Callbacks are often used for asynchronous operations like API calls or timers.",
  },
  {
    question: "What is `Promise` in JavaScript?",
    answer:
      "A `Promise` is an object representing the eventual completion or failure of an asynchronous operation. It has three states: `pending`, `fulfilled`, and `rejected`, allowing for more manageable asynchronous code.",
  },
  {
    question: "What is async/await in JavaScript?",
    answer:
      "`async` and `await` are syntactic sugars introduced in ES8 to work with Promises in a synchronous-like manner. `async` functions return a Promise, and `await` pauses execution until the Promise resolves.",
  },
  {
    question: "Explain event delegation in JavaScript.",
    answer:
      "Event delegation is a technique where a single event listener is added to a parent element to handle events on its children. This reduces the need to attach multiple listeners and improves performance.",
  },
  {
    question: "What is the event loop in JavaScript?",
    answer:
      "The event loop is a mechanism in JavaScript that manages the execution of asynchronous code, checking the message queue for tasks and executing them once the call stack is empty.",
  },
  {
    question: "What is hoisting in JavaScript?",
    answer:
      "Hoisting is a behavior in JavaScript where variable and function declarations are moved to the top of their scope before code execution, allowing functions and variables to be used before they are declared.",
  },
  {
    question:
      "What is the difference between null and undefined in JavaScript?",
    answer:
      "`undefined` means a variable has been declared but not assigned a value, while `null` is an assignment value that represents no value or an intentionally empty object.",
  },
  {
    question: "What is a prototype in JavaScript?",
    answer:
      "In JavaScript, every object has a prototype, which is another object that it inherits properties and methods from. Prototypes allow for property inheritance and are fundamental to JavaScript's prototype-based inheritance model.",
  },
  {
    question:
      "Explain how `map()`, `filter()`, and `reduce()` work in JavaScript.",
    answer:
      "`map()` transforms elements in an array and returns a new array, `filter()` selects elements based on a condition and returns a new array, and `reduce()` accumulates values based on a function and returns a single output.",
  },
  {
    question: "What is debouncing in JavaScript?",
    answer:
      "Debouncing is a technique to limit how often a function is executed. It ensures that a function runs only after a specified time has passed since it was last invoked, commonly used to control user-triggered events like scrolling or resizing.",
  },
  {
    question: "What is currying in JavaScript?",
    answer:
      "Currying is a technique of transforming a function with multiple arguments into a sequence of functions, each taking a single argument, making it easier to create partially applied functions.",
  },
  {
    question: "What are modules in JavaScript?",
    answer:
      "Modules are reusable pieces of code, encapsulated to avoid polluting the global namespace. Modules can export and import code between files and were officially supported in ES6 with the `import` and `export` keywords.",
  },
  {
    question: "What is JSON and how do you work with it in JavaScript?",
    answer:
      "JSON (JavaScript Object Notation) is a lightweight data-interchange format. In JavaScript, `JSON.parse()` converts JSON strings to objects, while `JSON.stringify()` converts objects to JSON strings.",

  },
  {
    question: "Explain the concept of higher-order functions in JavaScript.",
    answer:
      "A higher-order function is a function that can accept other functions as arguments or return them as results. They are widely used in functional programming for operations like `map`, `filter`, and `reduce`.",
  },

  {
    question:
      "What is React and how does it differ from other JavaScript frameworks?",
    answer:
      "React is a JavaScript library for building user interfaces, primarily for single-page applications. It allows developers to create reusable UI components. Unlike other frameworks, React focuses on the view layer and works well with other libraries or frameworks.",
  },
  {
    question: "Explain the concept of JSX in React.",
    answer:
      "JSX (JavaScript XML) is a syntax extension for JavaScript that looks similar to HTML. It allows you to write HTML elements and components in JavaScript. React then transforms JSX into JavaScript function calls to render the UI.",
  },
  {
    question: "What is the virtual DOM, and how does it work in React?",
    answer:
      "The virtual DOM is a lightweight in-memory representation of the real DOM. React uses the virtual DOM to optimize rendering by comparing the previous and new virtual DOM states and updating only the necessary parts of the real DOM, improving performance.",
  },
  {
    question: "What are components in React, and how are they used?",
    answer:
      "Components are the building blocks of a React application. A component is a JavaScript function or class that returns a part of the UI. Components allow for reusability and separation of concerns in the app.",
  },
  {
    question: "Explain the difference between functional and class components.",
    answer:
      "Functional components are simpler and are written as JavaScript functions, while class components are ES6 classes that extend React.Component. Class components can hold state and lifecycle methods, while functional components require hooks for these features.",
  },
  {
    question: "What is state in React, and how is it used?",
    answer:
      "State is a JavaScript object that holds dynamic data in a component. State can change over time and causes the component to re-render when updated. It is initialized in the component's constructor (for class components) or by using the useState hook (for functional components).",
  },
  {
    question: "How does props differ from state?",
    answer:
      "Props are immutable values passed down from a parent component to a child component, while state is mutable data that belongs to a component and can be changed using the setState function (class components) or the useState hook (functional components).",
  },
  {
    question: "What are hooks in React? Give some examples.",
    answer:
      "Hooks are functions that let you use state and other React features in functional components. Examples include useState (for state management), useEffect (for side effects), and useRef (for referencing DOM elements).",
  },
  {
    question: "Explain the useState hook and how it works.",
    answer:
      "The useState hook allows functional components to hold state. It returns an array with two values: the current state and a function to update the state. Example: const [count, setCount] = useState(0);.",
  },
  {
    question: "How does the useEffect hook work, and what is it used for?",
    answer:
      "The useEffect hook is used to perform side effects in functional components, such as fetching data, subscribing to events, or manually changing the DOM. It runs after the render and can be controlled with dependency arrays to optimize performance.",
  },
  {
    question: "What is the purpose of the useRef hook in React?",
    answer:
      "The useRef hook is used to persist values across renders without causing re-renders. It is commonly used to access DOM elements directly or to store mutable values that do not trigger re-renders.",
  },
  {
    question: "How do you optimize performance in a React application?",
    answer:
      "To optimize performance in React, you can use techniques such as memoization (using React.memo or useMemo), lazy loading, code splitting, and optimizing re-renders with useCallback or shouldComponentUpdate.",
  },
  {
    question: "What is the virtual DOM, and why is it important in React?",
    answer:
      "The virtual DOM is a lightweight representation of the actual DOM, and React uses it to optimize rendering performance. React calculates the differences between the current and previous virtual DOM and updates only the changed parts of the real DOM.",
  },
  {
    question: "Explain the concept of one-way data binding in React.",
    answer:
      "One-way data binding in React means that data flows from the parent component to the child component through props. The child component cannot modify the parent's state directly, maintaining a unidirectional flow of data.",
  },
  {
    question: "What are controlled and uncontrolled components in React?",
    answer:
      "Controlled components are components where form input values are managed by React state. Uncontrolled components are components where the DOM itself handles the form input values, and you access them through refs.",
  },
  {
    question: "How do you handle forms in React?",
    answer:
      "Forms in React can be handled with controlled components, where form inputs' values are controlled by React state, or with uncontrolled components, where refs are used to get the values.",
  },
  {
    question: "What are higher-order components (HOCs) in React?",
    answer:
      "A higher-order component is a function that takes a component and returns a new component with enhanced functionality. HOCs are used to reuse component logic without modifying the original component.",
  },
  {
    question: "What is the purpose of React’s Context API?",
    answer:
      "React’s Context API allows you to share values (like themes or user authentication) between components without passing props manually through each level of the component tree.",
  },
  {
    question: "How does React Router work?",
    answer:
      "React Router is a library for routing in React applications. It allows you to define different routes and load components based on the current URL, enabling single-page applications with navigation.",
  },
  {
    question: "What is Redux and how does it work with React?",
    answer:
      "Redux is a state management library that helps manage the state of an entire application in a single store. React-Redux is a binding library that connects React components with Redux's store and actions to update state.",
  },
  {
    question: "Explain the concept of lifting state up in React.",
    answer:
      "Lifting state up is the practice of moving state from a child component to its parent when multiple components need to access or modify the same state. The parent component manages the state, and the child components receive it as props.",
  },
  {
    question: "What is the purpose of shouldComponentUpdate lifecycle method?",
    answer:
      "The shouldComponentUpdate method allows you to optimize performance by preventing unnecessary re-renders. It is called before every render and allows you to return false if the component does not need to be updated.",
  },
  {
    question: "What are the different lifecycle methods in React?",
    answer:
      "Lifecycle methods are hooks available in class components to run code at specific times in a component’s life. Common methods include componentDidMount, componentDidUpdate, and componentWillUnmount.",
  },
  {
    question: "What is React.memo?",
    answer:
      "React.memo is a higher-order component that wraps a functional component and prevents unnecessary re-renders if the props have not changed.",
  },
  {
    question: "What is useCallback and when would you use it?",
    answer:
      "useCallback is a hook that returns a memoized version of a callback function. It helps prevent unnecessary re-renders by keeping the function reference the same unless its dependencies change.",
  },
  {
    question: "What is the difference between React and Angular?",
    answer:
      "React is a JavaScript library for building UI components, whereas Angular is a full-fledged MVC framework for building complex web applications. React focuses on the view layer, and Angular provides a more complete solution with routing, dependency injection, and more.",
  },
  {
    question: "What is code splitting in React?",
    answer:
      "Code splitting is the practice of splitting a large bundle of JavaScript code into smaller chunks, which are loaded only when necessary. It improves performance by reducing the initial load time.",
  },
  {
    question: "How does React handle events?",
    answer:
      "React handles events in a similar way to HTML, but with a few differences. React uses a synthetic event system, which is a cross-browser wrapper around the native event system. You bind events in JSX using camelCase syntax.",
  },
  {
    question: "What is useLayoutEffect and when should it be used?",
    answer:
      "useLayoutEffect is similar to useEffect, but it runs synchronously after the DOM has been updated but before the browser has painted. It is useful when you need to measure the DOM or make changes before the render is visible to the user.",
  },
  {
    question: "What is Prop drilling in React?",
    answer:
      "Prop drilling refers to the process of passing data from a parent component to deeply nested child components via props. It can lead to complex and hard-to-maintain code if too many components are involved.",
  },
  {
    question: "How do you make an API call in React?",
    answer:
      "You can make an API call in React using the fetch API or libraries like axios. API calls are typically made inside the useEffect hook to fetch data when the component mounts.",
  },
  {
    question: "What is the purpose of keys in React lists?",
    answer:
      "Keys help React identify which items in the list have changed, been added, or removed. They must be unique and stable for efficient re-rendering of lists.",
  },
  {
    question: "What is the purpose of the static keyword in React?",
    answer:
      "The static keyword is used to define methods that belong to the class itself rather than instances of the class. In React, it is commonly used in class components to define static methods.",
  },
  {
    question: "What is useEffect cleanup function?",
    answer:
      "The cleanup function is returned inside useEffect and is used to clean up any side effects when the component unmounts or before the effect is re-executed. For example, it can be used to remove event listeners or cancel API requests.",
  },
  {
    question: "What is a lazy-loaded component in React?",
    answer:
      "A lazy-loaded component is a React component that is loaded only when needed, rather than upfront. You can use React's React.lazy() function and Suspense to implement lazy loading.",
  },
  {
    question: "What is the purpose of Suspense in React?",
    answer:
      "Suspense is a component that allows you to suspend rendering of a component until certain conditions (like data fetching or lazy loading) are met. It helps improve the user experience by preventing the UI from showing incomplete content.",
  },
  {
    question: "What is a React Fragment?",
    answer:
      "A React Fragment is a wrapper that allows you to group multiple elements without adding extra nodes to the DOM. It helps in returning multiple elements from a component without introducing unnecessary divs.",
  },
  {
    question: "What are React DevTools?",
    answer:
      "React DevTools is a browser extension that helps you inspect the React component tree, view the current state and props, and measure performance. It is a useful tool for debugging React applications.",
  },
  {
    question: "What is the use of React's setState method?",
    answer:
      "setState is used to update the state in class components. It triggers a re-render of the component, and React updates the component’s view based on the new state.",
  },
  {
    question: "How do you manage side effects in React?",
    answer:
      "Side effects in React are managed using the useEffect hook. It allows you to run code after a component renders, for example, to fetch data, subscribe to events, or manipulate the DOM.",
  },
  {
    "question": "What is the difference between React and Vue.js?",
    "answer": "React is a JavaScript library primarily for building user interfaces, while Vue.js is a progressive JavaScript framework that provides a more complete solution for developing single-page applications, including routing and state management."
  },
  {
    "question": "What is the role of `render()` in React?",
    "answer": "The `render()` method is used in class components to describe the UI. It returns the JSX that represents the component's UI, and is automatically called when the component's state or props change."
  },
  {
    "question": "How do you handle error boundaries in React?",
    "answer": "Error boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI. You can implement error boundaries using the `componentDidCatch` lifecycle method or `static getDerivedStateFromError` in class components."
  },
  {
    "question": "What is the difference between `componentDidMount()` and `useEffect()`?",
    "answer": "`componentDidMount()` is a lifecycle method in class components that is called once the component has mounted. `useEffect()` is a hook in functional components that can run after the component mounts and can mimic `componentDidMount()`, `componentDidUpdate()`, and `componentWillUnmount()` in a single API."
  },
  {
    "question": "What is the purpose of the `key` prop in React lists?",
    "answer": "The `key` prop is used to uniquely identify elements in a list. It helps React optimize re-renders by identifying which elements have changed, been added, or removed, improving performance."
  },
  {
    "question": "What is the difference between `useEffect()` and `useLayoutEffect()`?",
    "answer": "`useEffect()` is asynchronous and runs after the paint, whereas `useLayoutEffect()` is synchronous and runs after the DOM is mutated but before the browser paints, useful for measuring and making DOM changes before the UI is rendered."
  },
  {
    "question": "What is the use of `React.PureComponent`?",
    "answer": "`React.PureComponent` is similar to `React.Component`, but it implements `shouldComponentUpdate()` with a shallow prop and state comparison. It helps optimize performance by preventing unnecessary re-renders when props or state have not changed."
  },
  {
    "question": "What is React's `useContext` hook?",
    "answer": "`useContext` is a hook that allows you to consume context in a functional component. It provides a way to access values in the context without having to manually pass props down through every level of the component tree."
  },
  {
    "question": "How do you handle state management in a large React application?",
    "answer": "In large React applications, state management is typically handled with libraries like Redux, Context API, or MobX. These libraries help centralize and manage the state of an application, making it easier to share data between components and handle complex state transitions."
  },
  {
    "question": `What are "render props" in React?`,
    "answer": "Render props is a technique for sharing code between components using a function that returns a React element. The function is passed as a prop to a component, allowing the component to render a UI dynamically based on the logic provided by the function."
  }
  
];
