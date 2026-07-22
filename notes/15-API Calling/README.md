# API Calling in React (Fetch API & Axios)

# Why Do We Need API Calling?

When building a full-stack application, the frontend and backend are two separate parts.

- **Frontend** is responsible for displaying the UI and interacting with the user.
- **Backend** is responsible for handling business logic, databases, authentication, payments, file storage, etc.

The frontend **cannot directly access the database**. Instead, it communicates with the backend through **APIs**.

```
        User
          │
          ▼
     React Frontend
          │
   HTTP Request (API Call)
          │
          ▼
     Backend Server
          │
          ▼
      Database
          │
          ▼
     Backend Server
          │
   HTTP Response (JSON)
          │
          ▼
     React Frontend
          │
          ▼
      Display Data
```

The API acts as a **bridge** between the frontend and backend.

Without APIs, the frontend would have no way to:

- Fetch users
- Display products
- Login users
- Register new users
- Upload images
- Save notes
- Update profiles
- Delete records

Almost every modern application uses APIs.

Examples:

- Instagram loads posts through APIs.
- YouTube fetches videos through APIs.
- Amazon loads products through APIs.
- Swiggy fetches restaurant data through APIs.
- Google Maps fetches location data through APIs.

---

# What Happens During an API Call?

Suppose a user opens Instagram.

Instead of storing millions of posts inside the React application, the app requests only the required data.

```
React App
    │
    │ "Give me all posts"
    ▼
Instagram API
    │
    ▼
Database
    │
    ▼
Instagram API
    │
    │ JSON Response
    ▼
React App
    │
    ▼
Display Posts
```

This communication between the frontend and backend is called **API Calling**.

---

# Why Do We Need API Calling in React?

React is only responsible for building the UI.

React **does not know**:

- who the users are
- what products exist
- which notes are saved
- what images are available
- whether someone is logged in

React gets all of this information by calling APIs.

Without APIs, React would only display static data like this:

```jsx
<h1>Welcome Shivam</h1>
```

But with APIs, the data becomes dynamic.

```jsx
<h1>Welcome {user.name}</h1>
```

Here, `user.name` comes from the backend through an API.

---

# What is an API?

API stands for **Application Programming Interface**.

An API is a medium through which two applications communicate.

Think of it as a messenger.

```
React App
      │
      │ Request
      ▼
      API
      │
      ▼
Backend
      │
      ▼
Database
```

The backend processes the request and sends back a response.

---

# Real-Life Analogy

Imagine you are in a restaurant.

- You → React Application
- Waiter → API
- Kitchen → Backend
- Store Room → Database

```
You
 │
 ▼
Waiter
 │
 ▼
Kitchen
 │
 ▼
Store Room
 │
 ▼
Kitchen
 │
 ▼
Waiter
 │
 ▼
You
```

You never go inside the kitchen.

Similarly,

The frontend never directly accesses the database.

Everything happens through APIs.

---

# What is JSON?

Most APIs send data in **JSON (JavaScript Object Notation)** format.

Example

```json
{
    "id": 1,
    "name": "Shivam",
    "city": "Deoghar"
}
```

JSON looks like a JavaScript object, but technically it is text.

JavaScript converts it into an object before we use it.

---

# What is a Promise?

A Promise represents a value that will be available **in the future**.

Promise States

```
Pending
   │
   ├────────► Fulfilled (Resolved)
   │
   └────────► Rejected
```

API calls always take some time.

Instead of blocking JavaScript, they return a Promise.

---

# Why Do We Use async and await?

Since API calls take time, JavaScript doesn't stop executing the rest of the program.

Instead,

```
fetch()
```

returns a Promise.

`await` waits until the Promise is resolved.

Example

```javascript
async function getUser() {

    const response = await fetch(url);

}
```

Here,

```
await
```

means

> Wait until the API finishes and then execute the next line.

---

# Fetch API

JavaScript provides a built-in function called

```javascript
fetch()
```

Syntax

```javascript
const response = await fetch(url);
```

Important:

`fetch()` does **not** return your actual data.

It returns a **Response Object**.

---

# Example 1

```javascript
async function getData() {

    const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos/1"
    );

    console.log(response);

}
```

Output

```
Response {
   status:200,
   headers:...
   ok:true,
   body:...
}
```

Notice,

The actual todo object is not returned yet.

Instead,

React receives a Response Object.

---

# Why Do We Use response.json()?

The response body contains JSON data.

JavaScript cannot directly use that JSON.

It first converts it into a JavaScript object.

```javascript
const data = await response.json();
```

Important:

`response.json()` is also asynchronous.

It also returns a Promise.

That's why we write

```javascript
await response.json();
```

Flow

```
fetch()

↓

Promise

↓

await

↓

Response Object

↓

response.json()

↓

Promise

↓

await

↓

JavaScript Object
```

---

# Example Using Code

```javascript
const getAnotherData = async () => {

    const resp = await fetch(
        "https://jsonplaceholder.typicode.com/todos/1"
    );

    console.log(resp);

    const data = await resp.json();

    console.log(data);

}
```

### Step 1

```javascript
await fetch(...)
```

API request is sent.

---

### Step 2

Server responds.

You receive

```
Response Object
```

---

### Step 3

```javascript
await resp.json();
```

JSON is converted into a JavaScript object.

Example

```javascript
{
    userId:1,
    id:1,
    title:"delectus aut autem",
    completed:false
}
```

Now you can use

```javascript
console.log(data.title);
```

---

# What is Axios?

Axios is a popular **Promise-based HTTP Client**.

It is used for making API calls from:

- React
- Node.js
- Vue
- Angular
- JavaScript

Axios is not built into JavaScript.

We install it using npm.

```bash
npm install axios
```

---

# Why Use Axios Instead of Fetch?

Both Fetch and Axios can call APIs.

However, Axios provides several conveniences that make development easier.

Advantages:

- Less code to write.
- Automatically converts JSON into JavaScript objects.
- Better error handling.
- Cleaner syntax.
- Supports request/response interceptors.
- Easy configuration of headers and base URLs.

---

# Fetch vs Axios

## Fetch

```javascript
const response = await fetch(url);

const data = await response.json();
```

Notice that two steps are required.

---

## Axios

```javascript
const response = await axios.get(url);

console.log(response.data);
```

Only one request is needed.

Axios automatically parses the JSON.

---

# Understanding Axios Example

```javascript
async function getDataUsingAxios(){

    const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
    );

    console.log(response.data);

}
```

Step-by-step

1. Axios sends an HTTP GET request.
2. Server returns JSON.
3. Axios automatically converts JSON into a JavaScript object.
4. The converted data is available inside

```javascript
response.data
```

No need to call

```javascript
response.json()
```

because Axios already did that internally.

---

# Why response.data?

Axios returns a large response object.

Example

```
response

│

├── data
├── status
├── headers
├── config
└── request
```

The actual API data is stored inside

```javascript
response.data
```

---

# React State

```javascript
const [data, setData] = useState([]);
```

Initially,

```
data = []
```

An empty array is created because API data has not been fetched yet.

After the API call,

```
setData(response.data)
```

updates the state.

Suppose the API returns

```javascript
[
    {
        id:1,
        author:"Alejandro"
    },
    {
        id:2,
        author:"Paul"
    }
]
```

Now

```
data
```

becomes this array.

React automatically re-renders the component.

---

# Understanding setData(response.data)

```javascript
const response = await axios.get(url);

setData(response.data);
```

Initially

```
data = []
```

After API response

```
response.data

↓

[
   {...},
   {...},
   {...}
]
```

After

```javascript
setData(response.data)
```

```
data

↓

[
   {...},
   {...},
   {...}
]
```

Now React updates the UI.

---

# Understanding data.map()

This is one of the most confusing concepts for beginners.

```jsx
{data.map(function(elm, idx){

    return <h3>Hello {idx + 1}</h3>

})}
```

Let's understand it step by step.

Suppose

```javascript
data = [
    {
        id:1,
        author:"Alejandro"
    },
    {
        id:2,
        author:"Paul"
    },
    {
        id:3,
        author:"John"
    }
]
```

### First Iteration

```
elm

↓

{
    id:1,
    author:"Alejandro"
}

idx = 0
```

Returns

```jsx
<h3>Hello 1</h3>
```

---

### Second Iteration

```
elm

↓

{
    id:2,
    author:"Paul"
}

idx = 1
```

Returns

```jsx
<h3>Hello 2</h3>
```

---

### Third Iteration

```
elm

↓

{
    id:3,
    author:"John"
}

idx = 2
```

Returns

```jsx
<h3>Hello 3</h3>
```

React internally creates

```jsx
<div>
    <h3>Hello 1</h3>
    <h3>Hello 2</h3>
    <h3>Hello 3</h3>
</div>
```

`map()` executes once for **every element** in the array and returns a **new array**. In React, that new array contains JSX elements, which React renders on the screen.

---

# A Better Example

Instead of

```jsx
<h3>Hello {idx + 1}</h3>
```

you'll usually render the actual data:

```jsx
{data.map((user) => {
    return (
        <h3>{user.author}</h3>
    );
})}
```

Output

```
Alejandro

Paul

John
```

This is how React displays dynamic lists fetched from an API.

---

# Why We Use map() in React

Whenever an API returns multiple records, we don't create components manually.

Instead,

React loops over the array using `map()` and creates one JSX element for each object.

One object

↓

One JSX element

↓

Entire UI is created dynamically.

---

# Summary

- APIs connect the frontend and backend.
- The frontend never directly talks to the database.
- Most APIs return JSON.
- `fetch()` returns a Promise that resolves to a Response object.
- `response.json()` reads and parses the JSON body, and it also returns a Promise.
- Axios is a Promise-based HTTP client that automatically parses JSON, making API calls simpler.
- `useState()` stores fetched data.
- `setData()` updates the state and triggers a re-render.
- `map()` iterates over an array and returns a new array of JSX elements, allowing React to render lists dynamically.