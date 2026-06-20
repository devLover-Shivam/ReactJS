# Import and Export in React

As React applications grow, keeping all code in a single file becomes difficult. **Import and Export** help organize code by allowing functionality, variables, and components to be shared across multiple files.

---

## Why Use Import and Export?

* Improves code organization.
* Promotes reusability.
* Makes large projects easier to manage.
* Encourages modular development.

---

## Default Export

A file can have **only one default export**.

### Syntax

```javascript
function User() {
  return <h1>User Component</h1>;
}

export default User;
```

### Importing a Default Export

```javascript
import User from "./User";
```

You can also use any other name:

```javascript
import MyComponent from "./User";
```

### Key Point

With a **default export**, the imported name can be changed according to your preference.

---

## Named Export

A file can have **multiple named exports**.

### Syntax

```javascript
export const age = 89;
export const city = "Kolkata";
```

### Importing Named Exports

```javascript
import { age, city } from "./data";
```

### Key Point

With **named exports**, you must use the exact exported names and import them inside curly braces `{}`.

---

## Default vs Named Export

| Feature                     | Default Export  | Named Export           |
| --------------------------- | --------------- | ---------------------- |
| Number Allowed              | One per file    | Multiple per file      |
| Import Syntax               | No curly braces | Curly braces required  |
| Can Rename While Importing? | Yes             | No (unless using `as`) |

### Example

```javascript
// data.js

export default "Shivam";

export const age = 20;
export const city = "Kolkata";
```

```javascript
// app.js

import name from "./data";
import { age, city } from "./data";

console.log(name);
console.log(age);
console.log(city);
```

