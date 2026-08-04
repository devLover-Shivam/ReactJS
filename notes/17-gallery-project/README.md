# Gallery Project

A simple React application that fetches images from the **Picsum Photos API** and displays them in a responsive gallery. The project demonstrates one of the most common real-world React workflows:

> **Fetching data from an API → Storing it in state → Rendering it dynamically → Handling pagination using React Hooks.**

---

## 🚀 Features

- Fetches images from the Picsum Photos API.
- Displays images in a responsive gallery layout.
- Shows the author's name for each image.
- Opens the original image in a new browser tab.
- Pagination using **Next** and **Prev** buttons.
- Displays a **Loading...** message until data is fetched.
- Uses **Axios** for API requests.
- Styled completely using **Tailwind CSS**.

---

# Concepts Used

## 1. Functional Components

The entire application is built using a **React Functional Component**.

```jsx
const App = () => {
    ...
}
```

Functional components are the modern way of creating React components and can use React Hooks like `useState` and `useEffect`.

---

## 2. React Hooks

### useState()

The project uses two state variables.

```jsx
const [userData, setUserData] = useState([]);
const [index, setIndex] = useState(1);
```

### Why?

#### userData

Stores the images fetched from the API.

Initially,

```jsx
[]
```

After fetching,

```jsx
[
   {
      id: "...",
      author: "...",
      download_url: "..."
   },
   ...
]
```

#### index

Stores the current page number.

Initially,

```jsx
1
```

Whenever the user clicks **Next** or **Prev**, this value changes.

---

## 3. State Updates

React state should never be modified directly.

❌ Wrong

```jsx
index++;
```

✅ Correct

```jsx
setIndex(index + 1);
```

Whenever a state changes, React automatically re-renders the component.

---

# 4. Axios

Instead of using JavaScript's built-in `fetch()`, this project uses **Axios**.

```jsx
const response = await axios.get(url);
```

### Why Axios?

- Cleaner syntax
- Automatically converts JSON
- Better error handling
- Widely used in React projects

The response object contains

```jsx
response.data
```

which stores the actual API data.

---

# 5. Async / Await

The API request is asynchronous.

```jsx
const getData = async () => {
    const response = await axios.get(...);
}
```

### Why async?

Fetching data from the internet takes time.

Without `async/await`, JavaScript would continue executing the remaining code before receiving the response.

`await` pauses execution until the API call completes.

---

# 6. Template Literals

The URL is generated dynamically.

```jsx
`https://picsum.photos/v2/list?page=${index}&limit=21`
```

Whenever `index` changes,

Example

```
Page 1

https://picsum.photos/v2/list?page=1&limit=21
```

```
Page 2

https://picsum.photos/v2/list?page=2&limit=21
```

```
Page 5

https://picsum.photos/v2/list?page=5&limit=21
```

This is called **Dynamic URL Generation**.

---

# 7. API Response

The Picsum API returns an array.

Example:

```js
[
    {
        id: "10",
        author: "Paul Jarvis",
        download_url: "https://..."
    },

    {
        id: "11",
        author: "Alejandro Escamilla",
        download_url: "https://..."
    }
]
```

This array is stored inside

```jsx
userData
```

---

# 8. useEffect()

```jsx
useEffect(() => {
    getData();
}, [index]);
```

This is one of the most important concepts in React.

### What does it do?

Runs some code after React renders the component.

Here,

Whenever

```
index
```

changes,

React automatically executes

```jsx
getData();
```

---

### First Render

```
Component loads

↓

useEffect runs

↓

API call

↓

State updates

↓

Images appear
```

---

### Clicking Next

```
Button Click

↓

setIndex(index + 1)

↓

index changes

↓

useEffect detects the change

↓

API called again

↓

New images displayed
```

---

### Dependency Array

```jsx
[index]
```

means

> Run this effect whenever `index` changes.

If it were

```jsx
[]
```

the API would run only once.

---

# 9. Conditional Rendering

Initially,

```jsx
userData = []
```

No images are available.

So,

```jsx
let printUserData =
<h3>Loading...</h3>;
```

After the API returns data,

```jsx
if(userData.length > 0)
```

the loading message is replaced by the gallery.

This technique is called **Conditional Rendering**.

---

# 10. Mapping Data

Instead of writing multiple cards manually,

React loops through the array.

```jsx
userData.map(...)
```

Each object generates one gallery card.

Example

```
Array

↓

Image 1

↓

Image 2

↓

Image 3

↓

Image 4
```

This is the most common way to render lists in React.

---

# 11. Keys

Every mapped component requires a unique key.

```jsx
key={idx}
```

Keys help React identify which items have changed, been added, or removed, making updates more efficient.

> **Note:** Using `idx` (array index) works for simple projects, but in production it's generally better to use a unique identifier like `elem.id` if available.

Example:

```jsx
key={elem.id}
```

---

# 12. Event Handling

React handles button clicks using `onClick`.

Example

```jsx
onClick={() => {
    setIndex(index + 1);
}}
```

When clicked,

```
Button

↓

State changes

↓

React re-renders

↓

API runs again

↓

New gallery appears
```

---

# 13. Preventing Invalid Page Numbers

For the Previous button,

```jsx
if(index > 1){
    setIndex(index - 1);
}
```

Without this condition,

the page number could become

```
0

-1

-2
```

which would produce invalid API requests.

---

# 14. Dynamic Rendering

Instead of hardcoding image cards,

the UI is generated directly from the API response.

```jsx
userData.map(...)
```

This makes the application scalable.

Whether the API returns

```
5 Images
```

or

```
500 Images
```

the same code works.

---

# 15. Anchor Tag

Each image is wrapped inside

```jsx
<a href={elem.url} target="_blank">
```

Clicking a card opens the original Picsum page in a new browser tab.

---

# 16. Image Rendering

```jsx
<img
    src={elem.download_url}
    alt=""
/>
```

The image URL comes directly from the API.

React automatically updates the images whenever the API response changes.

---

# 17. Tailwind CSS

The UI is styled using Tailwind utility classes.

Example

```jsx
bg-black
```

Background color.

```jsx
text-white
```

White text.

```jsx
flex
```

Flexbox layout.

```jsx
flex-wrap
```

Wrap gallery cards to the next line.

```jsx
gap-10
```

Spacing between cards.

```jsx
rounded-xl
```

Rounded corners.

```jsx
overflow-hidden
```

Prevents image overflow.

```jsx
object-cover
```

Maintains image aspect ratio while filling the container.

```jsx
active:scale-90
```

Creates a button press animation.

---

# 18. Console Logging

```jsx
console.log(response.data);
```

Used for debugging.

It helps inspect the API response and understand which properties are available before rendering them in the UI.

---

# Project Flow

```
Application Starts
        │
        ▼
Component Renders
        │
        ▼
useEffect Executes
        │
        ▼
getData() Called
        │
        ▼
Axios Sends API Request
        │
        ▼
Response Received
        │
        ▼
setUserData(response.data)
        │
        ▼
State Updates
        │
        ▼
React Re-renders
        │
        ▼
Gallery Images Displayed
        │
        ▼
User Clicks Next / Prev
        │
        ▼
index State Changes
        │
        ▼
useEffect Runs Again
        │
        ▼
New Images are Loaded
```

---

# Technologies Used

- React
- React Hooks (`useState`, `useEffect`)
- Axios
- Tailwind CSS
- JavaScript (ES6+)
- Picsum Photos API

