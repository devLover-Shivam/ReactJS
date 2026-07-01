# React Hooks

> Hooks are one of the biggest reasons why modern React is so powerful and enjoyable to work with.
>
> Before Hooks, developers had to write **Class Components** to use state, lifecycle methods, and many advanced React features. Hooks brought all of those capabilities into **Functional Components**, making React applications easier to write, understand, and maintain.

---
# What are Hooks?

Hooks are **special functions provided by React** that allow Functional Components to use features like:

- State
- Lifecycle methods
- Context
- Refs
- Performance optimizations

without writing Class Components.

Think of Hooks as tools that allow your component to "hook into" React's internal features.

```jsx
import { useState } from "react";
```

Here,

`useState` is a Hook.

Similarly,

```jsx
import { useEffect } from "react";
```

`useEffect` is also a Hook.

---

# Real Life Analogy — The Smart House 🏠

Imagine your component is a normal house.

Without Hooks,

it's just a simple building.

```
House

Door
Window
Roof

Nothing Smart
```

Now imagine installing smart devices.

```
House
│
├── Smart Lights
├── Smart AC
├── Smart Door Lock
├── Security Camera
└── Motion Sensors
```

Now your house can

- remember settings
- detect movement
- automatically switch lights
- notify you when someone arrives

Hooks are exactly like these smart devices.

They give ordinary functional components powerful capabilities.

---

# Why Were Hooks Introduced?

Initially React had two types of components.

## Functional Components

```jsx
function App() {
    return <h1>Hello</h1>;
}
```

They could only display UI.

No state.

No lifecycle methods.

---

## Class Components

```jsx
class App extends React.Component {

    state = {
        count: 0
    };

    render() {
        return <h1>{this.state.count}</h1>;
    }
}
```

Only Class Components could

- store state
- fetch APIs
- manage lifecycle
- update data

Class Components became large and difficult to maintain.

Hooks solved this problem.

Today,

almost every React application uses Functional Components with Hooks.

---

# Life Before Hooks

```
Need State?
        │
        ▼
Write Class Component

Need Lifecycle?
        │
        ▼
Write Class Component

Need API?
        │
        ▼
Write Class Component
```

Now

```
Need State?
        │
        ▼
useState()

Need API?
        │
        ▼
useEffect()

Need Lifecycle?
        │
        ▼
useEffect()
```

Much simpler.

---

# Rules of Hooks

Hooks follow strict rules.

## Rule 1

Always call Hooks at the top level.

✅ Correct

```jsx
const [count, setCount] = useState(0);
```

❌ Wrong

```jsx
if (true) {
    useState(0);
}
```

---

## Rule 2

Hooks can only be called

- inside Functional Components
- inside Custom Hooks

Not inside

- loops
- conditions
- nested functions
- normal JavaScript functions

---

# Types of Hooks

React provides many Hooks.

Some commonly used ones are

| Hook | Purpose |
|-------|----------|
| useState | Store local state |
| useEffect | Handle side effects |
| useContext | Share data globally |
| useRef | Access DOM elements or store mutable values |
| useMemo | Optimize expensive calculations |
| useCallback | Prevent unnecessary function recreation |
| useReducer | Manage complex state |
| useLayoutEffect | Run effects before browser paint |

Among these,

the first Hooks every React developer learns are

- useState
- useEffect

---

# Understanding State

Before learning `useState`, let's understand **state**.

State is simply **data that can change over time**.

Examples

- Counter value
- User name
- Login status
- Shopping cart
- Theme
- Notifications
- Search input

---

## Real Life Analogy — Whiteboard

Imagine a classroom.

A teacher writes

```
Students = 40
```

Now two more students enter.

The teacher erases

```
40
```

and writes

```
42
```

The whiteboard always displays the latest value.

React State works exactly like that.

Whenever state changes,

React erases the old UI

and redraws the updated UI.

---

# The useState Hook

Syntax

```jsx
const [state, setState] = useState(initialValue);
```

Example

```jsx
const [count, setCount] = useState(0);
```

Breaking it down

```
count
│
Current State

setCount
│
Function to update state

0
│
Initial Value
```

---

## Real Life Analogy — TV Remote 📺

Imagine a television.

Current Channel

```
Sony
```

Remote

```
Change Channel
```

When you press

```
Next
```

The TV changes.

```
Sony

↓

Star Sports
```

The remote doesn't directly modify the screen.

Instead,

it sends a signal.

React works exactly the same.

```
setCount()

↓

React receives update

↓

Updates state

↓

Re-renders UI
```

---

# Example

```jsx
import { useState } from "react";

function App() {

    const [count, setCount] = useState(0);

    return (

        <div>

            <h1>{count}</h1>

            <button
                onClick={() => setCount(count + 1)}
            >
                Increase
            </button>

        </div>

    );
}
```

Flow

```
Click Button

↓

setCount()

↓

State Updated

↓

Component Re-rendered

↓

Updated Count Visible
```

---

# Why Can't We Update Normal Variables?

Wrong

```jsx
let count = 0;

function increase() {
    count++;
}
```

Nothing changes on screen.

Why?

Because React doesn't monitor ordinary variables.

React only watches **state**.

Correct

```jsx
const [count, setCount] = useState(0);
```

---

# Why is setState Asynchronous?

One of the most confusing topics.

Example

```jsx
setCount(count + 1);

console.log(count);
```

Output

```
Old Value
```

Why?

Because React **schedules** the update instead of applying it immediately.

---

## Real Life Analogy — Restaurant Order 🍕

Imagine

You order pizza.

```
Order Placed
```

The waiter says

```
Okay
```

But the pizza isn't instantly ready.

The kitchen starts preparing it.

```
Order

↓

Kitchen

↓

Cooking

↓

Pizza Ready
```

Similarly,

```
setCount()

↓

React Schedules Update

↓

Component Re-renders

↓

New State Available
```

That's why logging immediately after `setCount()` still shows the old value.

---

# Functional Updates

Sometimes state depends on its previous value.

Instead of

```jsx
setCount(count + 1);
```

use

```jsx
setCount(previous => previous + 1);
```

This guarantees you're working with the latest state.

Example

```jsx
setCount(previous => previous + 1);

setCount(previous => previous + 1);
```

Final result

```
+2
```

instead of accidentally applying stale values.

---

# Two-Way Data Binding

One of the most practical uses of `useState`.

Example

```jsx
import { useState } from "react";

function App() {

    const [name, setName] = useState("");

    return (

        <>

            <input

                value={name}

                onChange={(e) => setName(e.target.value)}

            />

            <h2>Hello {name}</h2>

        </>

    );

}
```

Flow

```
User Types

↓

Input Value Changes

↓

setName()

↓

State Updates

↓

Heading Updates
```

---

## Real Life Analogy — Mirror 🪞

Imagine writing on a whiteboard.

A mirror instantly reflects every letter.

```
Whiteboard

↓

Mirror

↓

Always Same
```

Similarly,

Input

↓

State

↓

UI

Everything stays synchronized.

---

# The useEffect Hook

`useEffect` is used for **side effects**.

A side effect is any work that happens **outside of rendering the UI**.

Examples

- Fetching APIs
- Updating document title
- Timers
- Event listeners
- LocalStorage
- WebSocket connections

---

## Real Life Analogy — Security Guard 🚪

Imagine entering a shopping mall.

The guard always performs some actions.

```
You Enter

↓

Checks Bag

↓

Allows Entry
```

Every time someone enters,

the guard performs a side effect.

React behaves similarly.

Whenever something changes,

`useEffect` can perform additional work.

---

# Syntax

```jsx
useEffect(() => {

    // side effect

}, []);
```

---

# Dependency Array

This is the second argument of `useEffect`.

It decides **when** the effect should run.

---

## Case 1

```jsx
useEffect(() => {

    console.log("Runs Once");

}, []);
```

Runs only once when the component mounts.

---

### Real Life Analogy

Imagine installing a fan.

It only happens once when moving into a new house.

```
Move In

↓

Install Fan

↓

Done Forever
```

---

## Case 2

```jsx
useEffect(() => {

    console.log("Runs Every Time Count Changes");

}, [count]);
```

Runs

- on first render
- whenever `count` changes

---

### Real Life Analogy

Imagine a bank account.

Every time money changes,

the bank sends an SMS.

```
Balance Changed

↓

SMS Sent
```

Only balance changes trigger the message.

---

## Case 3

```jsx
useEffect(() => {

    console.log("Runs Every Render");

});
```

Runs after every render.

Usually not recommended unless you specifically need it.

---

# API Fetching

One of the most common uses of `useEffect`.

```jsx
import { useEffect, useState } from "react";

function App() {

    const [users, setUsers] = useState([]);

    useEffect(() => {

        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(data => setUsers(data));

    }, []);

    return (

        <>

            {

                users.map(user => (

                    <p key={user.id}>
                        {user.name}
                    </p>

                ))

            }

        </>

    );

}
```

Flow

```
Component Loads

↓

useEffect Runs

↓

API Called

↓

Data Received

↓

State Updated

↓

UI Displays Users
```

---

# LocalStorage

Suppose we want the counter value to survive a page refresh.

```jsx
useEffect(() => {

    localStorage.setItem("count", count);

}, [count]);
```

Every time `count` changes,

LocalStorage updates.

---

## Real Life Analogy — Locker 🔐

Imagine keeping important documents in a locker.

Even if you leave the office,

they remain safe.

Similarly,

LocalStorage keeps data even after refreshing the browser.

---

# Cleanup Function

Some effects need cleanup.

Example

```jsx
useEffect(() => {

    const interval = setInterval(() => {

        console.log("Running");

    }, 1000);

    return () => {

        clearInterval(interval);

    };

}, []);
```

React executes the cleanup

- before the component unmounts
- before re-running the effect (if dependencies change)

---

## Real Life Analogy — Renting a Hotel Room 🏨

You check into a hotel.

```
Stay

↓

Use Room

↓

Check Out

↓

Room Cleaned
```

The cleanup function is like housekeeping.

It removes timers, listeners, or subscriptions so they don't continue running after the component is gone.

---

# Common Mistakes

### ❌ Updating state directly

```jsx
count = count + 1;
```

Always use

```jsx
setCount(count + 1);
```

---

### ❌ Forgetting dependency array

```jsx
useEffect(() => {

    fetchData();

});
```

This fetches data after every render, which can lead to unnecessary network requests or even infinite loops if the effect updates state.

---

### ❌ Using stale state

```jsx
setCount(count + 1);
setCount(count + 1);
```

Prefer

```jsx
setCount(prev => prev + 1);
setCount(prev => prev + 1);
```

---

### ❌ Calling Hooks inside conditions

```jsx
if (loggedIn) {
    useState();
}
```

Hooks must always be called in the same order.

---

