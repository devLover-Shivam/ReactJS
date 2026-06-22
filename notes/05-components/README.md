# React Components

## Introduction

Components are the fundamental building blocks of a React application.

A React component is a reusable JavaScript function that returns JSX. Instead of writing the entire user interface in a single file, React encourages developers to divide the UI into smaller, independent, and reusable components.

---

## Why Components?

Without components, large applications become difficult to maintain because all UI code exists in a single file.

Components help by:

* Improving code reusability.
* Making applications easier to maintain.
* Encouraging modular development.
* Separating different parts of the UI into logical units.

For example, a website can be divided into:

```text
Navbar
Hero Section
Sidebar
Footer
```

Each of these can be created as a separate React component.

---

## Creating a Component

A React component is simply a JavaScript function that returns JSX.

### Example

```jsx
function App() {
  return <h1>Hello React</h1>;
}
```

The component returns JSX that React renders to the browser.

---

## Component Naming Convention

React components must start with a capital letter.

### Correct

```jsx
function Navbar() {
  return <h1>Navbar</h1>;
}
```

### Incorrect

```jsx
function navbar() {
  return <h1>Navbar</h1>;
}
```

React treats lowercase names as HTML elements rather than custom components.

---

## Organizing Components

As applications grow, components should be stored in a dedicated folder.

### Recommended Structure

```text
src/
│
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   └── Hero.jsx
│
├── App.jsx
└── main.jsx
```

This structure improves readability and project organization.

---

## Exporting Components

To use a component in another file, it must be exported.

### Navbar.jsx

```jsx
function Navbar() {
  return <h1>Navbar</h1>;
}

export default Navbar;
```

---

## Importing Components

Components can then be imported wherever they are needed.

### App.jsx

```jsx
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
    </div>
  );
}

export default App;
```

---

## Component Composition

React applications are built by combining multiple components together.

### Example

```jsx
function Navbar() {
  return <h1>Navbar</h1>;
}

function Footer() {
  return <h1>Footer</h1>;
}

function App() {
  return (
    <div>
      <Navbar />
      <Footer />
    </div>
  );
}
```

This approach is known as **Component Composition**.

---

## React Fragments

React components must return a single parent element.

### Incorrect

```jsx
return (
  <h1>Hello</h1>
  <h2>React</h2>
);
```

### Correct

```jsx
return (
  <div>
    <h1>Hello</h1>
    <h2>React</h2>
  </div>
);
```

---

## Using Fragments

Sometimes adding an extra `div` is unnecessary.

React provides **Fragments** for such situations.

```jsx
return (
  <>
    <h1>Hello</h1>
    <h2>React</h2>
  </>
);
```

Fragments group elements together without creating additional DOM nodes.

---

## VS Code Productivity Tips

Useful extensions for React development:

### Simple React Snippets

Provides shortcuts for generating React boilerplate code.

### ES7 React/Redux/React-Native Snippets

Popular extension for quickly creating components.

Example:

```text
rafce
```

Automatically generates:

```jsx
import React from 'react'

const ComponentName = () => {
  return (
    <div>ComponentName</div>
  )
}

export default ComponentName
```

---

## Best Practices

* Use meaningful component names.
* Keep components small and focused.
* Store reusable components inside a dedicated `components` folder.
* Use default exports for components.
* Avoid creating unnecessarily large components.

---

