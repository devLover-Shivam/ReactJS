# JSX (JavaScript XML)

## What is JSX?

JSX stands for **JavaScript XML**.

It is a syntax extension for JavaScript that allows developers to write HTML-like code inside JavaScript files.

JSX makes React components easier to read and write by combining UI structure and logic in a single place.

---

## Why JSX?

Without JSX, React elements are created using `React.createElement()`, which can become difficult to read for complex UIs.

### Without JSX

```javascript
const element = React.createElement(
  "h1",
  null,
  "Hello React"
);
```

### With JSX

```jsx
const element = <h1>Hello React</h1>;
```

The JSX version is much cleaner and easier to understand.

---

## How JSX Works

Browsers do not understand JSX directly.

When React code is compiled, tools such as Babel convert JSX into regular JavaScript.

### JSX

```jsx
const element = <h1>Hello React</h1>;
```

### Converted JavaScript

```javascript
const element = React.createElement(
  "h1",
  null,
  "Hello React"
);
```

---

## Embedding JavaScript in JSX

JavaScript expressions can be written inside JSX using curly braces `{}`.

### Example

```jsx
const name = "Shivam";

function App() {
  return <h1>Hello, {name}</h1>;
}
```

### Output

```text
Hello, Shivam
```

---

## JSX Rules

### 1. Return a Single Parent Element

❌ Incorrect

```jsx
return (
  <h1>React</h1>
  <p>Learning JSX</p>
);
```

✅ Correct

```jsx
return (
  <div>
    <h1>React</h1>
    <p>Learning JSX</p>
  </div>
);
```

Or use a Fragment:

```jsx
return (
  <>
    <h1>React</h1>
    <p>Learning JSX</p>
  </>
);
```

---

### 2. Use `className` Instead of `class`

HTML:

```html
<h1 class="title">Hello</h1>
```

JSX:

```jsx
<h1 className="title">Hello</h1>
```

This is because `class` is a reserved keyword in JavaScript.

---

### 3. All Tags Must Be Closed

❌ Incorrect

```jsx
<img src="image.jpg">
```

✅ Correct

```jsx
<img src="image.jpg" />
```

---

## JSX Expressions

You can perform calculations directly inside JSX.

```jsx
const a = 10;
const b = 20;

function App() {
  return <h1>{a + b}</h1>;
}
```

### Output

```text
30
```

---

## Benefits of JSX

* Easier to read and write.
* Makes UI code more intuitive.
* Supports JavaScript expressions.
* Improves developer productivity.
* Encourages component-based development.


