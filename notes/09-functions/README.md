# Functions in React

> Functions are one of the most important building blocks in React. Every React application—from a simple counter to a large production-level application—relies heavily on functions.
>
> Functions are responsible for:
>
> - Rendering UI
> - Handling user interactions
> - Updating state
> - Performing calculations
> - Communicating with APIs
> - Organizing reusable logic

---



# What are Functions in React?

In React, almost everything revolves around functions.

A React component itself is simply a JavaScript function.

Example:

```jsx
function App() {
  return <h1>Hello React!</h1>;
}
```

or using an arrow function

```jsx
const App = () => {
  return <h1>Hello React!</h1>;
};
```

When React renders your application, it simply calls this function.

Think of it like this:

```
React
   │
   │ calls
   ▼
App()
   │
   ▼
Returns JSX
   │
   ▼
Displayed on Screen
```

---

# Why Functions are Important

Functions allow React to respond to user actions.

Whenever a user:

- clicks a button
- types inside an input
- submits a form
- hovers over an element
- scrolls
- presses a key

React executes a function.

Without functions, your application would only display static content.

---

# Functions Inside Functional Components

Functions can be created inside components.

Example

```jsx
function App() {

    function greet() {
        console.log("Hello User");
    }

    return (
        <button onClick={greet}>
            Click Me
        </button>
    );
}
```

Here

```
Component
    │
    ├── greet()
    │
    └── JSX
          │
          └── Button
                │
                └── onClick → greet
```

When the button is clicked,

React calls

```
greet()
```

---

# Event Handling in React

One of the primary uses of functions is handling events.

In normal JavaScript, event handling requires multiple steps.

Example (Vanilla JavaScript)

```html
<button id="btn">Click Me</button>
```

```javascript
const btn = document.querySelector("#btn");

btn.addEventListener("click", function () {
    alert("Button Clicked");
});
```

Process

```
Select Element
      │
      ▼
Attach Event Listener
      │
      ▼
Write Callback Function
      │
      ▼
User Clicks
      │
      ▼
Callback Executes
```

---

## React Approach

React removes all the manual DOM manipulation.

Instead,

```jsx
function App() {

    function btnClicked() {
        alert("Button Clicked");
    }

    return (
        <button onClick={btnClicked}>
            Click Me
        </button>
    );
}
```

That's it.

No

- querySelector()
- getElementById()
- addEventListener()

React handles everything internally.

Flow

```
User Clicks Button
        │
        ▼
React Detects Event
        │
        ▼
Calls btnClicked()
```

---

# Understanding Function Reference vs Function Call

This is one of the most common beginner mistakes.

## Correct

```jsx
<button onClick={btnClicked}>
```

Here,

React stores the function reference.

The function runs only when the button is clicked.

```
Button Created
      │
      ▼
Stores Reference
      │
      ▼
Waits...
      │
User Clicks
      │
      ▼
btnClicked()
```

---

## Incorrect

```jsx
<button onClick={btnClicked()}>
```

Here,

the function executes immediately while rendering.

```
React Rendering
      │
      ▼
btnClicked()
      │
      ▼
Function Executes Immediately
      │
      ▼
Nothing Left For Click Event
```

This often produces unexpected behavior.

---

## Visual Comparison

### Correct

```
onClick={btnClicked}

Store function
      │
      ▼
User Clicks
      │
      ▼
Function Executes
```

---

### Incorrect

```
onClick={btnClicked()}

Render
   │
   ▼
Function Executes
   │
   ▼
Click Does Nothing
```

---

# Passing Parameters to Functions

Sometimes you want to send data to a function.

Wrong way

```jsx
<button onClick={deleteUser(id)}>
```

Again,

this executes immediately.

Correct way

```jsx
<button onClick={() => deleteUser(id)}>
```

Example

```jsx
function App() {

    function greet(name) {
        alert(`Hello ${name}`);
    }

    return (
        <button onClick={() => greet("Shivam")}>
            Say Hello
        </button>
    );
}
```

Flow

```
Click
   │
   ▼
Arrow Function
   │
   ▼
greet("Shivam")
```

---

# Arrow Functions in React

Modern React heavily uses arrow functions.

Traditional Function

```javascript
function add(a, b) {
    return a + b;
}
```

Arrow Function

```javascript
const add = (a, b) => {
    return a + b;
};
```

Short Version

```javascript
const add = (a, b) => a + b;
```

---

## Why Arrow Functions?

They

- are shorter
- improve readability
- are widely used in modern React
- have lexical `this` (mainly beneficial in class-based JavaScript, though functional React rarely deals with `this`)

---

Example

```jsx
const btnClicked = () => {
    alert("Clicked");
};
```

---

# Using Functions to Update State

React state changes happen through functions.

Example

```jsx
import { useState } from "react";

function App() {

    const [count, setCount] = useState(0);

    function increase() {
        setCount(count + 1);
    }

    return (
        <>
            <h1>{count}</h1>

            <button onClick={increase}>
                Increase
            </button>
        </>
    );
}
```

Flow

```
Button Click
      │
      ▼
increase()
      │
      ▼
setCount(count + 1)
      │
      ▼
State Updated
      │
      ▼
React Re-renders
      │
      ▼
UI Updates
```

---

# Why Doesn't React Let Us Change Variables Directly?

Wrong

```jsx
let count = 0;

function increase() {
    count++;
}
```

React doesn't know the value changed.

No re-render happens.

Correct

```jsx
const [count, setCount] = useState(0);

setCount(count + 1);
```

Now React knows

```
State Changed
      │
      ▼
Component Re-renders
      │
      ▼
Updated UI
```

---

# Multiple Functions in One Component

Example

```jsx
function App() {

    function greet() {
        alert("Hello");
    }

    function bye() {
        alert("Goodbye");
    }

    function thankYou() {
        alert("Thank You");
    }

    return (
        <>
            <button onClick={greet}>Hello</button>

            <button onClick={bye}>Bye</button>

            <button onClick={thankYou}>Thanks</button>
        </>
    );
}
```

Each button has its own responsibility.

This makes code modular.

---

# Keeping JSX Clean

Bad

```jsx
<button
onClick={()=>{
console.log("Clicked");
alert("Hello");
console.log("Finished");
}}>
Click
</button>
```

This works but becomes difficult to read.

---

Better

```jsx
function handleClick() {

    console.log("Clicked");

    alert("Hello");

    console.log("Finished");
}

return (
    <button onClick={handleClick}>
        Click
    </button>
);
```

Now

- easier to read
- easier to debug
- easier to reuse
- easier to maintain

---

# Real World Example

Imagine an E-Commerce application.

```
Add to Cart
      │
      ▼
handleAddToCart()
      │
      ▼
Update Cart State
      │
      ▼
React Re-renders
      │
      ▼
Cart Count Changes
```

Example

```jsx
function App() {

    const [cart, setCart] = useState(0);

    function addToCart() {
        setCart(cart + 1);
    }

    return (
        <>
            <h2>Cart Items : {cart}</h2>

            <button onClick={addToCart}>
                Add Product
            </button>
        </>
    );
}
```

Every click updates the UI automatically.

---

# Common Mistakes

## ❌ Calling the function immediately

```jsx
<button onClick={handleClick()}>
```

✅ Correct

```jsx
<button onClick={handleClick}>
```

---

## ❌ Writing large logic inside JSX

```jsx
<button
onClick={()=>{
...
20 lines of code
...
}}>
```

✅ Better

```jsx
function handleClick() {

    // all logic here

}

<button onClick={handleClick}>
```

---

## ❌ Updating normal variables

```jsx
let score = 0;

score++;
```

React will not update the UI.

Always use state.

---

## ❌ Creating duplicate logic

Instead of

```jsx
function increase1(){}

function increase2(){}

function increase3(){}
```

Create reusable functions whenever possible.

---



# Complete Example

```jsx
import { useState } from "react";

function App() {

    const [count, setCount] = useState(0);

    const increase = () => {
        setCount(count + 1);
    };

    const decrease = () => {
        setCount(count - 1);
    };

    const reset = () => {
        setCount(0);
    };

    return (
        <div>

            <h1>{count}</h1>

            <button onClick={increase}>
                +
            </button>

            <button onClick={decrease}>
                -
            </button>

            <button onClick={reset}>
                Reset
            </button>

        </div>
    );
}
```

Flow

```
+ Button
    │
    ▼
increase()
    │
    ▼
setCount()
    │
    ▼
State Updated
    │
    ▼
Component Re-renders
    │
    ▼
New Count Visible
```

---

