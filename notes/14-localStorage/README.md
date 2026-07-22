# LocalStorage in React

## What is LocalStorage?

`LocalStorage` is a built-in browser feature that allows you to store data as **key-value pairs**. The data remains stored even if:

- The page is refreshed
- The browser is closed and reopened
- The computer is restarted

Unlike React state, LocalStorage stores data **persistently**.

---

## Why Do We Need LocalStorage?

Normally, when you refresh a React application, all the data stored in variables or state is lost.

Example:

```jsx
const [count, setCount] = useState(0);
```

If the page is refreshed, `count` becomes `0` again.

To keep the data even after refreshing the page, we use **LocalStorage**.

Common use cases:

- Notes App
- Todo List
- Theme Preference (Dark/Light Mode)
- User Preferences
- Shopping Cart
- Recently Viewed Products

---

# Syntax

### Store Data

```javascript
localStorage.setItem(key, value);
```

### Get Data

```javascript
localStorage.getItem(key);
```

### Remove One Item

```javascript
localStorage.removeItem(key);
```

### Remove Everything

```javascript
localStorage.clear();
```

---

# Example 1 : Storing a String

```jsx
localStorage.setItem("user", "shivam");
```

### What happens?

A new key-value pair is created.

| Key | Value |
|------|-------|
| user | shivam |

---

## Retrieving the Value

```jsx
const user = localStorage.getItem("user");
console.log(user);
```

Output

```
shivam
```

---

## Removing the Value

```jsx
localStorage.removeItem("user");
```

Now the key `user` no longer exists.

---

# Understanding Your Code

## Step 1

```jsx
localStorage.setItem('user','shivam');
```

Stores a string.

Storage becomes

| Key | Value |
|------|-------|
| user | shivam |

---

## Step 2

```jsx
const user = localStorage.getItem('user');
console.log(user);
```

Retrieves the value associated with the key `user`.

Output

```
shivam
```

---

## Step 3

```jsx
localStorage.removeItem('user');
```

Deletes the key from LocalStorage.

Now Storage is empty again.

---

# Problem While Storing Objects

Suppose we have

```jsx
const user1 = {
    username: "shivam",
    age: 21,
    city: "deoghar"
}
```

If we directly do

```jsx
localStorage.setItem("user", user1);
```

The browser **cannot store objects directly**.

Since LocalStorage stores only **strings**, the object is converted automatically to

```
[object Object]
```

This is **not useful**.

---

# Correct Way

Convert the object into a JSON string.

```jsx
localStorage.setItem("user", JSON.stringify(user1));
```

Now LocalStorage stores

```
{
    "username":"shivam",
    "age":21,
    "city":"deoghar"
}
```

internally as a string.

---

# Retrieving the Object

If you simply retrieve it

```jsx
const user = localStorage.getItem("user");

console.log(user);
```

Output

```
{"username":"shivam","age":21,"city":"deoghar"}
```

Notice that it is still a **string**.

---

# Convert Back into an Object

Use

```jsx
const user = JSON.parse(localStorage.getItem("user"));

console.log(user);
```

Output

```javascript
{
    username: "shivam",
    age: 21,
    city: "deoghar"
}
```

Now you can access properties normally.

```jsx
console.log(user.username);
```

Output

```
shivam
```

---

# JSON.stringify()

Converts

```
Object
```

↓

into

```
String
```

Example

```jsx
const student = {
    name: "Rahul",
    age: 20
};

const data = JSON.stringify(student);

console.log(data);
```

Output

```
'{"name":"Rahul","age":20}'
```

Type

```
String
```

---

# JSON.parse()

Converts

```
String
```

↓

into

```
Object
```

Example

```jsx
const data = '{"name":"Rahul","age":20}';

const student = JSON.parse(data);

console.log(student);
```

Output

```javascript
{
    name: "Rahul",
    age: 20
}
```

---

# Storing Arrays

Arrays must also be converted into strings.

```jsx
const skills = [
    "React",
    "Java",
    "SQL"
];

localStorage.setItem(
    "skills",
    JSON.stringify(skills)
);
```

Retrieving

```jsx
const skills = JSON.parse(
    localStorage.getItem("skills")
);

console.log(skills);
```

Output

```javascript
["React","Java","SQL"]
```

---

# Important Methods

### Check if a Key Exists

```jsx
const user = localStorage.getItem("user");

if(user){
    console.log("User Found");
}
else{
    console.log("User Not Found");
}
```

---

### Remove All Data

```jsx
localStorage.clear();
```

This deletes **every key** stored by your website.

Example

Before

```
user
theme
cart
notes
```

After

```
Nothing remains.
```

Use carefully.

---

### Update Existing Data

Simply call `setItem()` again with the same key.

```jsx
localStorage.setItem("user", "Shivam");
localStorage.setItem("user", "Rahul");
```

Final value

```
Rahul
```

The old value gets replaced.

---

# Best Practice in React

❌ Avoid writing LocalStorage code directly inside the component body.

```jsx
const App = () => {

    localStorage.setItem("user","shivam");

    return <div>App</div>;
}
```

Why?

Every time the component re-renders, this code runs again.

Instead, use `useEffect`.

```jsx
import { useEffect } from "react";

useEffect(() => {
    localStorage.setItem("user", "shivam");
}, []);
```

The empty dependency array (`[]`) ensures the code runs only once when the component mounts.

---

# Example: Saving Notes

```jsx
const notes = [
    "Learn React",
    "Practice DSA",
    "Go to Gym"
];

localStorage.setItem(
    "notes",
    JSON.stringify(notes)
);
```

Later

```jsx
const notes = JSON.parse(
    localStorage.getItem("notes")
);

console.log(notes);
```

Output

```javascript
[
    "Learn React",
    "Practice DSA",
    "Go to Gym"
]
```

Even after refreshing the page, the notes remain available.

---

# LocalStorage vs React State

| React State | LocalStorage |
|-------------|--------------|
| Temporary | Persistent |
| Lost after refresh | Remains after refresh |
| Used for UI updates | Used for saving data |
| Doesn't survive browser restart | Survives browser restart |

---

# Limitations of LocalStorage

- Stores only **strings**.
- Storage limit is around **5–10 MB** (depends on the browser).
- Data is **not encrypted**, so never store passwords, JWTs, API secrets, or sensitive personal information.
- Synchronous API: excessive reads/writes can affect performance in large applications.

