# 🚀 Advanced React Router DOM Guide

> A complete guide covering the advanced routing concepts used in this
> project.

------------------------------------------------------------------------

# Table of Contents

1.  Introduction
2.  Project Structure
3.  Nested Routing
4.  `<Outlet />`
5.  Dynamic Routing (`:id`)
6.  `useParams()`
7.  `useNavigate()`
8.  Relative vs Absolute Links
9.  404 Page
10. Flow Diagrams
11. Real-world Examples

------------------------------------------------------------------------

# 1. Introduction

React Router DOM is the standard routing library for React web
applications.

Instead of requesting a new HTML page from the server whenever the URL
changes, React Router updates only the component that needs to change.
This is called **Client-Side Routing**.

### Benefits

-   Faster navigation
-   No full page refresh
-   Better user experience
-   Reusable layouts
-   Dynamic URLs
-   Nested page structure

------------------------------------------------------------------------

# 2. Project Structure

``` text
src
│
├── components
│   ├── Navbar.jsx
│   └── Footer.jsx
│
├── pages
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Product.jsx
│   ├── Men.jsx
│   ├── Women.jsx
│   ├── Kids.jsx
│   ├── Courses.jsx
│   ├── CourseDetails.jsx
│   └── NotFound.jsx
│
├── App.jsx
├── main.jsx
└── index.css
```

### Responsibility

  File             Purpose
  ---------------- ------------------------------
  Navbar           Navigation links
  Footer           Common footer
  Product          Parent route
  Men/Women/Kids   Child routes
  Courses          Navigation using useNavigate
  CourseDetails    Dynamic route
  NotFound         404 page

------------------------------------------------------------------------

# 3. Nested Routing

Nested routing allows one route to contain multiple child routes.

Example:

``` jsx
<Route path="/product" element={<Product />}>
    <Route path="men" element={<Men />} />
    <Route path="women" element={<Women />} />
    <Route path="kids" element={<Kids />} />
</Route>
```

Notice that the child paths **do not begin with `/`**.

### URL Structure

``` text
/product
/product/men
/product/women
/product/kids
```

### How it works

``` text
User visits /product/men

↓

React matches /product

↓

Product Component renders

↓

Outlet found

↓

Men Component rendered inside Outlet
```

### Advantages

-   Shared layout
-   Cleaner code
-   Better organization
-   Avoid repeated Navbar/Sidebar code

------------------------------------------------------------------------

# 4. `<Outlet />`

`<Outlet />` is a placeholder used inside a parent component.

Without it, nested routes cannot appear.

``` jsx
import { Outlet } from "react-router-dom";

function Product(){
    return (
        <>
            <h1>Products</h1>

            <Outlet />
        </>
    );
}
```

### Visualization

``` text
Product.jsx

--------------------------

Products Heading

Outlet

--------------------------
```

If URL becomes

``` text
/product/women
```

React replaces the Outlet with

``` jsx
<Women />
```

------------------------------------------------------------------------

# 5. Dynamic Routing (`:id`)

Dynamic routes allow part of the URL to change.

``` jsx
<Route path="/courses/:id" element={<CourseDetails />} />
```

Examples

``` text
/courses/react

/courses/java

/courses/python
```

Instead of writing three routes, one route handles all.

------------------------------------------------------------------------

# 6. useParams()

`useParams()` extracts URL parameters.

``` jsx
import { useParams } from "react-router-dom";

const { id } = useParams();
```

If URL is

``` text
/courses/react
```

then

``` text
id = react
```

Typical API usage

``` jsx
const { id } = useParams();

useEffect(() => {
    fetch(`/api/courses/${id}`);
}, []);
```

------------------------------------------------------------------------

# 7. useNavigate()

`useNavigate()` allows navigation through JavaScript.

``` jsx
const navigate = useNavigate();
```

Navigate to another page

``` jsx
navigate("/");
```

Go back

``` jsx
navigate(-1);
```

Go forward

``` jsx
navigate(1);
```

Replace history

``` jsx
navigate("/dashboard", { replace: true });
```

### Common Uses

-   Login
-   Logout
-   Payment Success
-   Form Submission
-   Wizard Forms

Flow

``` text
Button Click

↓

navigate("/")

↓

URL Changes

↓

Route Matches

↓

Component Changes
```

------------------------------------------------------------------------

# 8. Relative vs Absolute Links

## Absolute

``` jsx
<Link to="/product/men" />
```

Starts from the application root.

## Relative

``` jsx
<Route path="men" element={<Men />} />
```

Automatically becomes

``` text
/product/men
```

### Comparison

  Relative                Absolute
  ----------------------- ------------------
  Depends on parent       Starts from root
  Used in nested routes   Used anywhere

------------------------------------------------------------------------

# 9. 404 Page

Unknown URLs should display a friendly page.

``` jsx
<Route path="*" element={<NotFound />} />
```

Example

``` text
/about

↓

About Page
```

``` text
/random-page

↓

404 Page
```

Simple component

``` jsx
const NotFound = () => (
    <h1>404 - Page Not Found</h1>
);
```

------------------------------------------------------------------------

# 10. Flow Diagrams

## Routing

``` text
BrowserRouter

↓

Routes

↓

Matching Route

↓

Render Component
```

## Nested Routing

``` text
/product

↓

Product Component

↓

Outlet

↓

Men / Women / Kids
```

## Dynamic Routing

``` text
URL

↓

courses/react

↓

:id

↓

useParams()

↓

Course Details
```

------------------------------------------------------------------------

# 11. Real-world Examples

## Amazon

``` text
Products

↓

Electronics

↓

Mobiles

↓

Product Details
```

Nested routing keeps the category layout while only changing the
content.

------------------------------------------------------------------------

## Netflix

``` text
Movies

↓

Action

↓

Movie Details
```

------------------------------------------------------------------------

## Udemy

``` text
Courses

↓

React

↓

Lessons

↓

Videos
```

Dynamic Route

``` text
/courses/react
```

Nested Route

``` text
/lesson/5
```

------------------------------------------------------------------------

## GitHub

``` text
github.com/facebook/react
```

Dynamic values:

-   facebook
-   react

------------------------------------------------------------------------

# Best Practices

-   Use `Link` instead of `<a>`.
-   Always place `<Outlet />` inside parent routes.
-   Use relative paths for nested child routes.
-   Keep shared UI outside `<Routes>`.
-   Add a wildcard (`*`) route for 404 pages.
-   Use `useNavigate()` for programmatic navigation.
-   Use `useParams()` only with dynamic routes.

------------------------------------------------------------------------

# Summary

After completing this project you understand:

-   Client-side routing
-   Nested routing
-   Outlet
-   Dynamic routes
-   useParams
-   useNavigate
-   Relative vs absolute routing
-   404 pages
-   Route hierarchy
-   Practical routing patterns used in modern React applications.
