# React Router DOM - Client Side Routing in React

This project demonstrates how to implement **Client-Side Routing** in a React application using **React Router DOM**. It explains how React applications can navigate between multiple pages **without refreshing the browser**, resulting in a faster and smoother user experience.

Unlike traditional websites where every navigation requests a new HTML page from the server, React Router DOM updates only the required component while keeping the rest of the application intact.

---

# Features

- Client-side routing using React Router DOM.
- Navigation between multiple pages without browser refresh.
- Reusable Navbar component.
- Persistent layout (Navbar & Footer remain unchanged).
- Home, About, and Contact pages.
- Clean project structure.
- Navigation using the `Link` component.
- Uses BrowserRouter and Routes.

---

# Project Structure

```
src
│
├── components
│   └── Navbar.jsx
│
├── pages
│   ├── Home.jsx
│   ├── About.jsx
│   └── Contact.jsx
│
├── App.jsx
├── main.jsx
└── index.css
```

---

# Concepts Used

# 1. What is Routing?

Routing means deciding **which page or component should be displayed** when the URL changes.

Example

```
/

↓

Home Page
```

```
/about

↓

About Page
```

```
/contact

↓

Contact Page
```

Without routing, every application would have only one page.

---

# 2. What is React Router DOM?

React Router DOM is the official routing library for React web applications.

It maps different URLs to different React components.

Instead of loading a completely new HTML page, React Router simply replaces the required component.

Example

```
User clicks About

↓

URL changes

↓

React loads About component

↓

Navbar remains same

↓

Footer remains same
```

This process is called **Client-Side Routing**.

---

# 3. Why React Router DOM?

Imagine an application having

- Home
- About
- Contact
- Login
- Dashboard
- Profile

Without React Router,

every click would

```
Reload Browser

↓

Reload HTML

↓

Reload CSS

↓

Reload JavaScript

↓

Load Page Again
```

This is slower.

With React Router,

```
URL Changes

↓

Component Changes

↓

No Browser Refresh
```

Much faster.

---

# 4. Installation

Install React Router DOM using npm.

```bash
npm install react-router-dom
```

Verify installation

```bash
npm list react-router-dom
```

---

# 5. BrowserRouter

BrowserRouter is the root router of a React application.

It enables routing by listening to URL changes.

```jsx
import { BrowserRouter } from "react-router-dom";
```

Inside `main.jsx`

```jsx
createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
```

---

## Why BrowserRouter?

Without BrowserRouter,

React cannot understand routes.

The following components will not work

- Routes
- Route
- Link
- useNavigate
- useLocation
- useParams

Think of BrowserRouter as the **routing engine** of the application.

---

# 6. Browser History API

BrowserRouter internally uses the browser's **History API**.

Normally,

when visiting

```
/about
```

the browser requests

```
about.html
```

With BrowserRouter

```
Home

↓

About

↓

Contact

↓

Profile
```

No new HTML file is loaded.

Only React components change.

---

# 7. Routes Component

```jsx
<Routes>
</Routes>
```

Routes acts as a container for all routes.

Think of it like a switchboard.

Whenever the URL changes,

Routes checks

```
Current URL

↓

Find Matching Route

↓

Render Corresponding Component
```

---

# 8. Route Component

Each Route represents one page.

Example

```jsx
<Route path="/" element={<Home />} />
```

Meaning

```
/

↓

Render Home Component
```

Similarly

```jsx
<Route path="/about" element={<About />} />
```

```
/about

↓

Render About Component
```

---

# 9. Route Props

Every Route mainly has two important props.

### path

Represents the URL.

Example

```jsx
path="/contact"
```

### element

Represents the component to display.

```jsx
element={<Contact />}
```

---

# 10. Complete Routing Flow

```
User Types URL

↓

BrowserRouter

↓

Routes

↓

Matching Route

↓

Component Rendered
```

Example

```
localhost:5173/about

↓

Routes

↓

Matches

↓

<Route path="/about">

↓

About Component
```

---

# 11. Link Component

Instead of HTML

```html
<a href="/about">About</a>
```

React Router provides

```jsx
<Link to="/about">About</Link>
```

---

## Why not use anchor tag?

Anchor tag

```
Click

↓

Browser Refresh

↓

Entire Application Reloads
```

Link

```
Click

↓

URL Changes

↓

Component Changes

↓

No Refresh
```

Hence,

always use

```jsx
<Link>
```

inside React applications.

---

# 12. to Property

```jsx
<Link to="/about">
```

The `to` prop tells React Router

where the user should navigate.

Examples

```jsx
<Link to="/">
```

Home

```jsx
<Link to="/about">
```

About

```jsx
<Link to="/contact">
```

Contact

---

# 13. Navbar Component

Navbar is created separately.

```jsx
<Navbar />
```

Since Navbar is outside `<Routes>`,

it never changes.

```
Navbar

↓

Page Changes

↓

Navbar Still Visible
```

---

# 14. Footer

```jsx
<h2>This is footer</h2>
```

Footer is also outside Routes.

Therefore,

```
Navbar

↓

Routes

↓

Footer
```

Only the middle section changes.

---

# 15. Layout Concept

Current Layout

```
--------------------
Navbar
--------------------

Page Content

--------------------
Footer
--------------------
```

Whenever route changes,

only

```
Page Content
```

changes.

Navbar and Footer remain fixed.

---

# 16. Component-Based Routing

Instead of loading HTML pages,

React Router loads components.

```
URL

↓

Component

↓

Rendered UI
```

Example

```
/

↓

<Home />

------------------

/about

↓

<About />

------------------

/contact

↓

<Contact />
```

---

# 17. Importing Components

```jsx
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
```

Each page is an independent React component.

This improves

- Reusability
- Maintainability
- Readability

---

# 18. Separation of Concerns

Project is divided into

```
Components

↓

Navbar
```

and

```
Pages

↓

Home

↓

About

↓

Contact
```

This follows a clean architecture.

---

# 19. Different Types of Routers in React Router DOM

React Router provides multiple router implementations depending on your application.

---

## A. BrowserRouter (Most Common)

```jsx
<BrowserRouter>
```

Uses the browser's History API.

Example URL

```
https://example.com/about
```

No hash (`#`) appears in the URL.

### Best for

- React + Vite
- React + CRA
- Production web applications
- SEO-friendly websites (when server is configured)

---

## B. HashRouter

```jsx
<HashRouter>
```

Uses the URL hash.

Example

```
https://example.com/#/about
```

Useful when the server cannot be configured to support client-side routing.

### Best for

- GitHub Pages
- Static hosting
- Older web servers

---

## C. MemoryRouter

```jsx
<MemoryRouter>
```

Does not use the browser URL.

Stores navigation history in memory.

### Best for

- Unit testing
- React Native
- Embedded widgets

---

## D. StaticRouter

```jsx
<StaticRouter>
```

Used for **Server-Side Rendering (SSR)**.

It renders routes on the server before sending HTML to the browser.

### Best for

- Next.js-like SSR applications
- SEO-heavy websites
- Faster initial page load

---

# 20. Advanced Routing Concepts

## Nested Routes

Used when pages have child pages.

Example

```
/products

      |

------------------

/products/men

/products/women

/products/kids
```

Example

```jsx
<Route path="/products" element={<Products />}>
    <Route path="men" element={<Men />} />
    <Route path="women" element={<Women />} />
</Route>
```

---

## Dynamic Routes

Used when the URL contains dynamic values.

Example

```
/user/10

/user/15

/user/28
```

Route

```jsx
<Route path="/user/:id" element={<User />} />
```

Inside the component

```jsx
const { id } = useParams();
```

---

## useNavigate()

Used to navigate using JavaScript.

Example

```jsx
const navigate = useNavigate();

navigate("/about");
```

Useful after

- Login
- Logout
- Form submission
- Payment success

---

## useLocation()

Returns information about the current URL.

Example

```jsx
const location = useLocation();
```

Useful for

- Highlighting active navigation links
- Analytics
- Conditional rendering based on the current route

---

## 404 Page

Unknown routes can be handled using

```jsx
<Route path="*" element={<NotFound />} />
```

Example

```
/abc

↓

No Route Found

↓

404 Page
```

---

# Project Flow

```
Application Starts
        │
        ▼
BrowserRouter
        │
        ▼
App Component
        │
        ▼
Navbar Renders
        │
        ▼
Routes Checks Current URL
        │
        ▼
Matching Route Found
        │
        ▼
Corresponding Page Renders
        │
        ▼
Footer Remains Visible
```

---

# 🛠️ Technologies Used

- React
- React Router DOM
- JavaScript (ES6+)
- JSX
- CSS



