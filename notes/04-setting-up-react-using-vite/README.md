# Setting Up React Using Vite

## Introduction

Before building React applications, we need a development environment that can efficiently compile, serve, and update our code during development.

**Vite** is a modern frontend build tool that provides a fast and lightweight development experience for React applications.

---

## Why Vite?

Vite was created to solve performance issues found in traditional build tools.

### Benefits of Vite

* Extremely fast development server.
* Instant Hot Module Replacement (HMR).
* Optimized production builds.
* Minimal configuration required.
* Excellent React support.

---

## Prerequisites

Before creating a React project, ensure that the following tools are installed:

### Node.js

Node.js allows JavaScript to run outside the browser and provides access to npm.

Verify installation:

```bash
node -v
```

### npm (Node Package Manager)

npm is installed automatically with Node.js.

Verify installation:

```bash
npm -v
```

---

## Creating a React Project Using Vite

Navigate to the directory where you want to create the project.

### Step 1: Create a New Vite Project

```bash
npm create vite@latest
```

You will be prompted to answer a few questions.

### Project Name

```text
first-react-project
```

### Framework

```text
React
```

### Variant

```text
JavaScript
```

After selecting the options, Vite will generate the project structure.

---

## Step 2: Navigate to the Project Directory

```bash
cd first-react-project
```

---

## Step 3: Install Dependencies

Install all required packages listed in the `package.json` file.

```bash
npm install
```

This command downloads all project dependencies into the `node_modules` folder.

---

## Step 4: Start the Development Server

```bash
npm run dev
```

Expected output:

```text
VITE v8.x.x ready

➜ Local: http://localhost:5173/
```

Open the URL in your browser to view the React application.

---

## Understanding the Project Structure

When Vite creates a React project, it generates a standard folder structure.

```text
first-react-project/
│
├── node_modules/
├── public/
├── src/
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── eslint.config.js
```

---

## Important Folders and Files

### `src/`

The most important folder in a React application.

Contains:

```text
src/
├── assets/
├── App.jsx
├── App.css
├── main.jsx
└── index.css
```

#### App.jsx

The root React component where application UI is created.

#### main.jsx

The entry point of the React application.

It connects React with the browser DOM.

Example:

```jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
```

---

### `public/`

Stores static files such as:

* Images
* Icons
* PDFs
* Static assets

Files inside this folder can be accessed directly by the browser.

---

### `package.json`

Contains:

* Project metadata
* Installed dependencies
* Available scripts

Example scripts:

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview"
}
```

---

### `vite.config.js`

Configuration file for Vite.

Used for:

* Custom build settings
* Aliases
* Plugins
* Development server configuration

---

### `.gitignore`

Specifies files and folders that should not be tracked by Git.

Common examples:

```text
node_modules/
dist/
.env
```

---

## Understanding ESLint

ESLint is a static code analysis tool that helps maintain code quality.

### Benefits

* Detects potential bugs.
* Enforces coding standards.
* Improves code consistency.
* Reduces issues in team projects.

Example:

```javascript
const name = "Shivam"
```

ESLint can warn developers if the project's coding standards are not followed.

---

## Common npm Commands

### Start Development Server

```bash
npm run dev
```

### Create Production Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

---

## Best Practices

* Keep the `src` folder organized.
* Use meaningful file and folder names.
* Avoid modifying configuration files unless necessary.
* Follow ESLint recommendations.
* Commit code regularly using Git.


## How React Renders Your Application

When a React application starts, three important files work together:

```text
index.html
    ↓
main.jsx
    ↓
App.jsx
```

Let's understand how these files are connected.

---

### Step 1: `index.html`

The browser first loads the `index.html` file.

```html
<body>
  <div id="root"></div>

  <script type="module" src="/src/main.jsx"></script>
</body>
```

#### What Happens Here?

* The browser creates an empty `<div>` with the id `root`.
* It then loads the `main.jsx` file.
* At this point, nothing is visible on the screen because the `root` div is empty.

Think of the `root` div as an empty container waiting for React to inject content.

---

### Step 2: `main.jsx`

The `main.jsx` file acts as the entry point of the React application.

```jsx
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

ReactDOM.createRoot(
  document.getElementById("root")
).render(
  <App />
);
```

#### What Happens Here?

1. React finds the element with id `root`.
2. React creates a React Root.
3. React renders the `App` component inside that root.

In simple words:

```text
main.jsx
      ↓
Loads App.jsx
      ↓
Injects it into the root div
```

---

### Step 3: `App.jsx`

The `App` component contains the UI that we want to display.

```jsx
function App() {
  return (
    <div>
      <h1>Hello</h1>
      <h2>Kaise Ho?</h2>
    </div>
  );
}

export default App;
```

This component is imported by `main.jsx` and rendered inside the `root` div.

---

## Complete Flow

### Files

#### index.html

```html
<div id="root"></div>
<script type="module" src="/src/main.jsx"></script>
```

#### main.jsx

```jsx
import App from "./App.jsx";

ReactDOM.createRoot(
  document.getElementById("root")
).render(
  <App />
);
```

#### App.jsx

```jsx
function App() {
  return <h1>Hello React</h1>;
}

export default App;
```

---

## What the Browser Finally Sees

Initially:

```html
<div id="root"></div>
```

After React renders:

```html
<div id="root">
  <h1>Hello React</h1>
</div>
```

---

## Visual Representation

```text
index.html
┌─────────────────────┐
│ <div id="root">     │
│ </div>              │
└──────────┬──────────┘
           │
           ▼

main.jsx
┌─────────────────────┐
│ import App          │
│ render(<App />)     │
└──────────┬──────────┘
           │
           ▼

App.jsx
┌─────────────────────┐
│ <h1>Hello React</h1>│
└──────────┬──────────┘
           │
           ▼

Browser Output
┌─────────────────────┐
│ Hello React         │
└─────────────────────┘
```

---



