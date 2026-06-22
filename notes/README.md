# Props in React

## Introduction

Props (short for **Properties**) are a mechanism for passing data from a **Parent Component** to a **Child Component**.

They make components dynamic and reusable by allowing different data to be supplied to the same component.

Without props, components would contain hardcoded content and would be difficult to reuse across an application.

---

## Why Do We Need Props?

Consider the following component:

```jsx
function UserCard() {
  return (
    <div>
      <h2>Shivam Gupta</h2>
      <p>Frontend Developer</p>
    </div>
  );
}
```

The data is hardcoded.

Every time you need a new user card, you would have to create another component with different values.

This approach is inefficient and difficult to maintain.

---

## What Are Props?

Props allow data to be passed to a component when it is called.

Think of a component as a template and props as the data that fills that template.

### Real-Life Analogy

Imagine a college ID card template:

```text
Name: _______
Roll No: _______
Department: _______
```

The template remains the same.

Only the values change for each student.

Similarly:

```text
Component = Template
Props = Data
```

---

## Passing Props

A parent component passes data to a child component through attributes.

### Parent Component

```jsx
import UserCard from "./UserCard";

function App() {
  return (
    <UserCard
      username="Shivam Gupta"
      profession="Frontend Developer"
    />
  );
}
```

Here:

```jsx
username="Shivam Gupta"
profession="Frontend Developer"
```

are props.

---

## Receiving Props

Props are received as an object inside the child component.

### Child Component

```jsx
function UserCard(props) {
  return (
    <div>
      <h2>{props.username}</h2>
      <p>{props.profession}</p>
    </div>
  );
}

export default UserCard;
```

### Output

```text
Shivam Gupta
Frontend Developer
```

---

## Understanding the Props Object

When React passes data to a component:

```jsx
<UserCard
  username="Shivam Gupta"
  profession="Frontend Developer"
/>
```

React internally creates an object:

```javascript
{
  username: "Shivam Gupta",
  profession: "Frontend Developer"
}
```

This object is received as:

```jsx
function UserCard(props)
```

and accessed using:

```jsx
props.username
props.profession
```

---

## Multiple Props Example

### Parent Component

```jsx
<UserCard
  username="Shivam Gupta"
  age={20}
  profession="Frontend Developer"
/>
```

### Child Component

```jsx
function UserCard(props) {
  return (
    <div>
      <h2>{props.username}</h2>
      <p>Age: {props.age}</p>
      <p>{props.profession}</p>
    </div>
  );
}
```

### Output

```text
Shivam Gupta
Age: 20
Frontend Developer
```

---

## Building Reusable Components

One of the biggest advantages of props is component reusability.

### UserCard Component

```jsx
function UserCard(props) {
  return (
    <div>
      <h2>{props.username}</h2>
      <p>{props.profession}</p>
    </div>
  );
}
```

### App Component

```jsx
function App() {
  return (
    <>
      <UserCard
        username="Shivam Gupta"
        profession="Frontend Developer"
      />

      <UserCard
        username="Rahul Sharma"
        profession="UI/UX Designer"
      />

      <UserCard
        username="Priya Singh"
        profession="Backend Developer"
      />
    </>
  );
}
```

### Output

```text
Shivam Gupta      - Frontend Developer
Rahul Sharma      - UI/UX Designer
Priya Singh       - Backend Developer
```

Notice that the same component is reused multiple times with different data.

---

## Dynamic User Card Example

Props are commonly used to render dynamic UI elements.

### Parent Component

```jsx
<UserCard
  image="profile.jpg"
  username="Shivam Gupta"
  profession="Frontend Developer"
/>
```

### Child Component

```jsx
function UserCard(props) {
  return (
    <div>
      <img
        src={props.image}
        alt={props.username}
        width="100"
      />

      <h2>{props.username}</h2>

      <p>{props.profession}</p>
    </div>
  );
}
```

The same card template can now display different users simply by changing the props.

---

## Benefits of Props

### Reusability

Create a component once and use it multiple times with different data.

### Maintainability

Changes to the component structure only need to be made in one place.

### Dynamic UI

Allows the same component to display different content.

### Cleaner Code

Reduces duplication and improves readability.

---

## Best Practices

* Treat components as reusable templates.
* Pass only the data required by the component.
* Use meaningful prop names.
* Avoid hardcoding values inside reusable components.
* Keep components focused on a single responsibility.

---

## Parent-Child Data Flow

Props follow a **one-way data flow**.

```text
Parent Component
        │
        ▼
      Props
        │
        ▼
Child Component
```

Data flows from the parent to the child.

A child component cannot directly modify the props it receives.

---

## Summary

* Props (Properties) are used to pass data from a parent component to a child component.
* Props make components dynamic and reusable.
* Props are received as an object inside a component.
* Individual values can be accessed using dot notation such as `props.username`.
* Components become powerful reusable templates when combined with props.
* Props follow a one-way data flow from parent to child.

### Key Formula

```text
Parent Component → Props → Child Component
```

Props are one of the most important concepts in React because they allow components to communicate and display dynamic data efficiently.
