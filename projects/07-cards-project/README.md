# Mini Project: Dynamic Job Cards using Props

## Overview

In this mini project, we build a **dynamic Job Portal UI** using React Components and Props.

Instead of hardcoding every job card manually, we create a reusable `Card` component and pass different job details through **props**. This allows us to generate multiple unique cards from a single component template.

---

## Learning Objectives

By the end of this project, you will understand:

- Creating reusable React components
- Passing data using Props
- Rendering UI dynamically
- Working with Arrays of Objects
- Using the `.map()` method in React
- Building scalable component-based applications

---

# Project Structure

```text
src/
│
├── components/
│   └── Card.jsx
│
├── App.jsx
│
└── index.css
```

---

# Understanding the Card Component

The UI is divided into three logical sections:

## Top Section

Contains:

- Company Logo
- Save Button

```text
┌────────────────────┐
│ Logo       Save 🔖 │
└────────────────────┘
```

---

## Center Section

Contains:

- Company Name
- Posted Date
- Job Title
- Job Tags

```text
Amazon          5 days ago

Senior UI/UX Designer

[ Part Time ]
[ Senior Level ]
```

---

## Bottom Section

Contains:

- Salary Information
- Location
- Apply Button

```text
$120/hr
Mumbai, India

[ Apply Now ]
```

---

# Making the Component Reusable

Instead of writing:

```jsx
Amazon
Senior UI/UX Designer
Mumbai
```

directly inside the component, we use **props**.

The Card component receives data from its parent component and displays it dynamically.

### Example

```jsx
<Card
    company="Amazon"
    designation="Senior UI/UX Designer"
    salary="$120/hr"
/>
```

The same component can now be reused for any company.

---

# Storing Data Using an Array of Objects

To avoid creating cards manually, all job information is stored inside an array.

### Example Structure

```javascript
const jobs = [
  {
    company: "Amazon",
    role: "Senior UI/UX Designer",
    salary: "$120/hr",
    location: "Mumbai, India"
  },

  {
    company: "Google",
    role: "Frontend Developer",
    salary: "$150/hr",
    location: "Bangalore, India"
  }
]
```

Each object represents a single job posting.

---

# Dynamic Rendering using map()

React allows us to loop through data using the `.map()` method.

Instead of writing:

```jsx
<Card />
<Card />
<Card />
<Card />
```

we can generate cards automatically from our data.

### Concept

```javascript
jobs.map(...)
```

React visits every object in the array and creates a Card component for it.

---

# How map() Works

### Data

```javascript
[
  { company: "Amazon" },
  { company: "Google" },
  { company: "Netflix" }
]
```

### Iteration

```text
1st Iteration → Amazon
2nd Iteration → Google
3rd Iteration → Netflix
```

### Output

```jsx
<Card company="Amazon" />
<Card company="Google" />
<Card company="Netflix" />
```

React then renders all these cards automatically.

---

# Data Flow in this Project

```text
jobs Array
     │
     ▼
   map()
     │
     ▼
<Card />
     │
     ▼
 Props
     │
     ▼
 UI Rendered
```

---

# Why Use Props?

Without props:

```text
❌ Repetitive code
❌ Difficult to maintain
❌ Not scalable
```

With props:

```text
✅ Reusable components
✅ Cleaner code
✅ Easy maintenance
✅ Dynamic UI generation
```

---

# Real World Use Case

Most modern applications use this exact pattern.

Examples:

- LinkedIn Job Listings
- Naukri Job Cards
- Internshala Internships
- Amazon Product Cards
- Netflix Movie Cards
- Instagram Posts

Data is fetched from a database/API and rendered dynamically using:

```text
Array of Objects
        +
      map()
        +
      Props
```

---

# Troubleshooting

## Images Not Loading

### Possible Causes

- Invalid image URL
- Broken image link
- Incorrect property name

### Example

```javascript
image: "wrong-url"
```

will not render properly.

Always verify image URLs before rendering.

---

## Props Showing Undefined

Example:

```jsx
<Card company="Amazon" />
```

but inside the component:

```jsx
props.comp
```

Result:

```text
undefined
```

Reason:

Property names must match exactly.

---

## Missing key Prop

Whenever using `.map()`, React expects a unique key.

Example:

```jsx
jobs.map((job) => (
    <Card key={job.id} />
))
```

Using keys helps React efficiently update the UI.

---

