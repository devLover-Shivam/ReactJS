# UI Design Project (React + Tailwind CSS)

> This project was built to practice creating a production-style UI using **React** and **Tailwind CSS**. The main focus was learning how to break a design into reusable components, organize the project properly, and render dynamic content using props.

---

# Project Goals

- Learn how to convert a UI design into React components.
- Practice component-based architecture.
- Organize a scalable project structure.
- Build reusable UI components.
- Pass data between components using props.
- Render components dynamically using arrays.
- Style everything using Tailwind CSS.

---

# Tech Stack

- React
- Vite
- Tailwind CSS
- JavaScript (ES6+)
- JSX
- Remix Icons

---

# Project Structure

```
src
│
├── components
│   │
│   ├── Section1
│   │   ├── Navbar.jsx
│   │   ├── Center.jsx
│   │   ├── CenterLeft.jsx
│   │   ├── CenterRight.jsx
│   │   └── RightCard.jsx
│   │
│   └── Section2
│       └── Section2.jsx
│
├── App.jsx
├── main.jsx
└── index.css
```

### Why this structure?

Instead of writing the entire UI inside `App.jsx`, every logical section is separated into its own component.

Benefits:

- easier to read
- easier to debug
- reusable
- scalable

---

# Breaking the UI into Components

The complete page is divided into small independent components.

```
App
│
├── Section1
│      │
│      ├── Navbar
│      └── Center
│              │
│              ├── CenterLeft
│              └── CenterRight
│                         │
│                         └── RightCard
│
└── Section2
```

Every component has only **one responsibility**.

Example:

### Navbar

Responsible only for navigation.

### CenterLeft

Responsible only for

- Heading
- Description
- CTA Icon

### CenterRight

Responsible only for

- Cards
- Images
- Horizontal scrolling

### RightCard

Responsible only for displaying a single card.

---

# Data Flow

The users array is stored inside `App.jsx`.

```jsx
const users = [
  {
    img: "...",
    intro: "...",
    tag: "Satisfied",
  },
];
```

Instead of creating cards manually, the array is passed down through props.

```
App
│
▼
Section1
│
▼
Center
│
▼
CenterRight
│
▼
RightCard
```

Example

```jsx
<Section1 users={users} />
```

↓

```jsx
<Center users={props.users} />
```

↓

```jsx
<CenterRight users={props.users} />
```

↓

```jsx
<RightCard user={user} />
```

This is React's **One-Way Data Flow**.

Data always flows

```
Parent
↓

Child
```

Never the opposite.

---

# Dynamic Rendering

Instead of writing

```jsx
<RightCard />
<RightCard />
<RightCard />
```

the cards are rendered using `.map()`.

```jsx
users.map((user) => (
    <RightCard user={user} />
))
```

Advantages

- Less code
- Easy to add new cards
- No duplication
- Better scalability

---

# Importance of the key Prop

Whenever rendering components using `.map()`,

always provide a unique key.

Wrong

```jsx
users.map(user => (
    <RightCard />
))
```

Correct

```jsx
users.map((user,index)=>(
    <RightCard
        key={index}
        user={user}
    />
))
```

React uses the key to efficiently update the DOM.

---

# Props

Props are used to pass data from one component to another.

Example

Parent

```jsx
<RightCard user={user}/>
```

Child

```jsx
const RightCard = ({ user }) => {

}
```

Now the child can access

```jsx
user.img

user.tag

user.intro
```

---

# Tailwind CSS

Instead of writing CSS files,

styling is done directly inside JSX.

Example

```jsx
<div className="flex justify-between items-center px-10">
```

This makes development much faster.

Common utilities used in this project

### Layout

```
flex

grid

block

hidden
```

---

### Width

```
w-full

w-1/2

w-1/3

w-2/3
```

---

### Height

```
h-full

h-screen

min-h-screen
```

---

### Alignment

```
justify-center

justify-between

items-center

self-center
```

---

### Spacing

```
p-5

px-8

py-4

gap-10

mt-10

mb-12
```

---

### Typography

```
text-xl

text-5xl

text-7xl

font-bold

leading-none

tracking-wide
```

---

### Colors

```
bg-gray-200

text-gray-700

bg-black

text-white
```

---

### Rounded Corners

```
rounded

rounded-lg

rounded-xl

rounded-full
```

---

# Horizontal Scroll

The cards overflow horizontally.

Useful Tailwind classes

```jsx
overflow-x-auto

flex-nowrap

shrink-0
```

Example

```jsx
<div className="flex overflow-x-auto">
```

---

# Flexbox Concepts Used

Most layouts rely on Flexbox.

Example

```jsx
<div className="flex justify-between items-center">
```

Useful utilities

| Class | Purpose |
|--------|----------|
| flex | Creates flex container |
| flex-col | Vertical layout |
| justify-between | Space between children |
| justify-center | Center horizontally |
| items-center | Center vertically |
| gap-10 | Space between children |
| shrink-0 | Prevent shrinking |

---

# Common Mistakes I Encountered

## 1. Forgot to Receive Props

Wrong

```jsx
const CenterRight = () => {

}
```

Later

```jsx
props.users
```

Error

```
props is not defined
```

Correct

```jsx
const CenterRight = ({ users }) => {

}
```

---

## 2. Forgot key while using map()

Wrong

```jsx
users.map(user=>(
<RightCard />
))
```

Correct

```jsx
users.map((user,index)=>(
<RightCard
key={index}
user={user}
/>
))
```

---

## 3. Incorrect Tailwind Classes

Example

```
mb-15
```

Tailwind doesn't provide this spacing by default.

Use

```
mb-12

mb-16
```

or configure custom spacing.

---

## 4. Background Pill Behind Text

Initially used

```jsx
px-8
```

The pill became unnecessarily wide.

Better

```jsx
inline-block
bg-gray-200
rounded-full
px-5
py-1
```

---

