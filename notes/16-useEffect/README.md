# useEffect Hook in React

# Introduction

React components go through different phases during their lifetime.

1. Component is created.
2. Component is rendered on the screen.
3. State or props change.
4. Component re-renders.
5. Component is removed from the screen.

Sometimes, we need to perform some work **outside of rendering the UI**.

Examples:

- Fetch data from an API
- Save data to LocalStorage
- Add event listeners
- Update the page title
- Start a timer
- Subscribe to WebSockets

These tasks are called **Side Effects**, and React provides the **useEffect()** hook to handle them.

---

# What is useEffect?

`useEffect()` is a React Hook that allows us to perform **side effects** inside functional components.

Syntax

```jsx
useEffect(() => {

    // Side Effect

}, [dependencies]);
```

---

# What are Side Effects?

A side effect is any operation that affects something **outside the React component**.

Examples

✅ API Calls

```jsx
fetch(...)
```

---

✅ Saving to LocalStorage

```jsx
localStorage.setItem(...)
```

---

✅ Updating the Browser Title

```jsx
document.title = "React";
```

---

✅ Event Listeners

```jsx
window.addEventListener(...)
```

---

✅ Timers

```jsx
setInterval(...)
```

---

Without `useEffect`, these operations may execute multiple times unnecessarily.

---

# Why Do We Need useEffect?

Consider this component.

```jsx
function App(){

    console.log("Component Rendered");

    return <h1>Hello</h1>

}
```

Every time the component renders,

```
Component Rendered
```

will be printed.

Now imagine making an API call here.

```jsx
function App(){

    fetch(API_URL);

    return <h1>Hello</h1>

}
```

Every render would send another API request.

That is inefficient.

Instead,

React allows us to control **when** a side effect should run using `useEffect()`.

---

# Syntax Breakdown

```jsx
useEffect(() => {

    console.log("Running");

}, []);
```

There are two important parts.

### 1. Callback Function

```jsx
() => {

}
```

This contains the side effect.

---

### 2. Dependency Array

```jsx
[]
```

This decides **when the callback should execute**.

This is the most important concept in `useEffect`.

---

# Three Ways to Use useEffect

## 1. No Dependency Array

```jsx
useEffect(() => {

    console.log("Running");

});
```

Runs

✅ After the first render

AND

✅ After every re-render

Example

```jsx
const [count, setCount] = useState(0);

useEffect(() => {

    console.log("Effect");

});
```

Every click

```
Render

↓

useEffect

↓

Render

↓

useEffect

↓

Render

↓

useEffect
```

This is rarely used.

---

## 2. Empty Dependency Array

```jsx
useEffect(() => {

    console.log("Running");

}, []);
```

Runs

✅ Only once

When?

Immediately after the component mounts.

Example

```jsx
useEffect(() => {

    console.log("App Loaded");

}, []);
```

Output

```
App Loaded
```

No matter how many times state changes,

the effect will never run again.

---

## 3. Dependency Array with Variables

```jsx
useEffect(() => {

    console.log("Running");

}, [count]);
```

Runs

✅ On the first render

AND

✅ Whenever `count` changes.

If another state changes,

the effect does not run.

---

# Understanding Code

```jsx
const [num, setNum] = useState(0);

const [num2, setNum2] = useState(100);
```

Initially

```
num = 0

num2 = 100
```

---

Your Effect

```jsx
useEffect(() => {

    console.log("use effect is running");

}, [num]);
```

Dependency Array

```
[num]
```

Meaning

Run this effect

- After the first render
- Every time `num` changes

Ignore every other state.

---

# Initial Render

React executes

```jsx
const [num, setNum] = useState(0);

const [num2, setNum2] = useState(100);
```

React renders

```
num = 0

num2 = 100
```

After rendering,

React checks the effect.

Since this is the first render,

the effect executes.

Console

```
use effect is running
```

---

# Mouse Enter

```jsx
onMouseEnter={() => {

    setNum(num + 1);

}}
```

Suppose

```
num = 0
```

After moving the mouse,

```
setNum(1)
```

React notices that state changed.

So,

```
Render Again
```

New UI

```
num = 1

num2 = 100
```

React checks

```
[num]
```

Old value

```
0
```

New value

```
1
```

Changed?

✅ Yes

Therefore,

```
useEffect runs.
```

Console

```
use effect is running
```

---

# Mouse Leave

```jsx
onMouseLeave={() => {

    setNum2(num2 + 10);

}}
```

Suppose

```
num2 = 100
```

Now

```
num2 = 110
```

React re-renders.

Updated UI

```
num = 1

num2 = 110
```

Now React checks

```
[num]
```

Old value

```
1
```

New value

```
1
```

Did it change?

❌ No

So,

```
useEffect DOES NOT RUN.
```

Console

Nothing.

---

# Timeline of Code

### App Loads

```
Render

↓

useEffect Runs
```

---

### Mouse Enter

```
setNum()

↓

Render

↓

num changed

↓

useEffect Runs
```

---

### Mouse Leave

```
setNum2()

↓

Render

↓

num unchanged

↓

useEffect Doesn't Run
```

---

# Why Does useEffect Run After Rendering?

React follows this order:

```
State Changes

↓

Component Renders

↓

Browser Updates UI

↓

useEffect Executes
```

This ensures the user sees the updated UI first, then side effects happen.

---

# Multiple Dependencies

```jsx
useEffect(() => {

    console.log("Running");

}, [num, num2]);
```

Now the effect runs whenever

- num changes
- num2 changes

---

# Multiple useEffects

A component can have multiple effects.

```jsx
useEffect(() => {

    console.log("Fetching Data");

}, []);

useEffect(() => {

    console.log("Updating Title");

}, [count]);

useEffect(() => {

    console.log("Saving Data");

}, [user]);
```

Each effect is independent.

This keeps the code clean and easier to maintain.

---

# Real-World Example: API Calling

Without `useEffect`

```jsx
function App(){

    fetch(API_URL);

    return <h1>Hello</h1>

}
```

Every render

↓

Another API call

↓

Bad Performance

---

Correct Way

```jsx
useEffect(() => {

    fetch(API_URL);

}, []);
```

Now

```
Component Loads

↓

API Call

↓

Never called again
```

unless the component unmounts and mounts again.

---

# Real-World Example: LocalStorage

```jsx
useEffect(() => {

    localStorage.setItem("theme", "dark");

}, []);
```

Runs only once.

---

# Real-World Example: Page Title

```jsx
useEffect(() => {

    document.title = "Dashboard";

}, []);
```

---

# Real-World Example: Watching a State

```jsx
useEffect(() => {

    console.log("Count Changed");

}, [count]);
```

Runs only when

```
count
```

changes.

---

# Cleanup Function (Very Important)

Some side effects continue running even after the component is removed.

Examples

- Event Listeners
- Timers
- WebSockets
- Subscriptions

React allows us to clean them up.

Syntax

```jsx
useEffect(() => {

    console.log("Mounted");

    return () => {

        console.log("Cleanup");

    };

}, []);
```

The returned function is called the **Cleanup Function**.

It runs

- Before the effect runs again (if dependencies changed)
- When the component unmounts

---

## Example with Event Listener

```jsx
useEffect(() => {

    function handleResize() {
        console.log(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    return () => {
        window.removeEventListener("resize", handleResize);
    };

}, []);
```

Why?

Without cleanup,

every mount would add another event listener, causing duplicate events and memory leaks.

---

## Example with setInterval

```jsx
useEffect(() => {

    const id = setInterval(() => {

        console.log("Running...");

    }, 1000);

    return () => {

        clearInterval(id);

    };

}, []);
```

Without `clearInterval()`, the timer would continue running even after the component is removed.

---

# Common Mistakes

### 1. Forgetting the Dependency Array

```jsx
useEffect(() => {

    fetch(API_URL);

});
```

This calls the API after **every render**.

---

### 2. Wrong Dependency

```jsx
useEffect(() => {

    fetch(API_URL);

}, [count]);
```

Now every change in `count` triggers another API call.

Sometimes this is intended, but often it's not.

---

### 3. Updating the Same State You're Watching

```jsx
useEffect(() => {

    setCount(count + 1);

}, [count]);
```

Flow

```
count changes

↓

Effect runs

↓

count changes again

↓

Effect runs again

↓

Infinite Loop
```

This causes an infinite re-render loop.

---

# Best Practices

- Use `useEffect` only for side effects.
- Always think carefully about the dependency array.
- Keep different responsibilities in separate `useEffect` hooks.
- Always clean up event listeners, intervals, subscriptions, and sockets.
- Don't put normal calculations or derived values inside `useEffect`; compute them directly during render if possible.
- Avoid unnecessary effects—if something can be done without `useEffect`, prefer that approach.

---

# Interview Questions

### What is useEffect?

A React Hook used to perform side effects in functional components.

---

### What are Side Effects?

Operations that interact with something outside the component, such as APIs, LocalStorage, timers, or the DOM.

---

### Difference Between [] and No Dependency Array?

| Empty Dependency Array `[]` | No Dependency Array |
|-----------------------------|---------------------|
| Runs once after mount | Runs after every render |

---

### When Does useEffect Execute?

After React finishes rendering and updates the DOM.

---

### What is a Cleanup Function?

A function returned from `useEffect` that cleans up side effects before re-running the effect or when the component unmounts.

---

# Summary

- `useEffect` is used to handle side effects.
- Side effects include API calls, LocalStorage, timers, DOM updates, subscriptions, and event listeners.
- The callback runs **after** React renders the component.
- No dependency array → runs after every render.
- Empty array `[]` → runs once after the initial render.
- `[dependency]` → runs after the initial render and whenever that dependency changes.
- A cleanup function prevents memory leaks by removing listeners, intervals, or subscriptions when they are no longer needed.