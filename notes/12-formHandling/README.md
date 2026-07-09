# React Form Handling 

## The Code

``` jsx
import React from 'react'

const App = () => {

  const submitHandler = (e)=>{
    e.preventDefault();
    console.log('Form Submitted');
  }

  return (
    <div>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}>
        <input type="text" placeholder='Enter Name' />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
```

------------------------------------------------------------------------

# What is Form Handling?

Form handling is the process of capturing, validating, and processing
user input.

Whenever a user fills out a form and clicks **Submit**, React lets us
decide what should happen next.

Examples: - Save data to a database - Send data to an API - Validate
user input - Display success or error messages

------------------------------------------------------------------------

# Step 1: The `<form>` Element

``` jsx
<form onSubmit={(e)=>{
    submitHandler(e)
}}>
```

Normally, when a form is submitted, the browser:

1.  Collects the form data.
2.  Reloads the page.
3.  Sends the data to the URL mentioned in the `action` attribute.

In React, we usually **don't want the page to reload**.

Instead, React handles everything using JavaScript.

The `onSubmit` event tells React:

> "Whenever this form is submitted, run this function."

------------------------------------------------------------------------

# Step 2: What is `onSubmit`?

``` jsx
<form onSubmit={(e)=>{
    submitHandler(e)
}}>
```

`onSubmit` is an event listener.

It waits until:

-   The user clicks the Submit button, or
-   The user presses Enter inside an input.

When that happens, React automatically calls the function.

The parameter `e` is the **event object**.

------------------------------------------------------------------------

# Step 3: The Event Object (`e`)

``` jsx
(e)=>{
    submitHandler(e)
}
```

`e` contains information about the event.

Examples:

-   Which element triggered it
-   Current target
-   Default browser behavior
-   Keyboard and mouse information

Think of it as a report card describing what just happened.

------------------------------------------------------------------------

# Step 4: Calling `submitHandler`

``` jsx
submitHandler(e)
```

This passes the event object to another function.

Instead of writing all the logic inside `onSubmit`, we keep it in a
separate function.

Benefits:

-   Cleaner code
-   Easier to read
-   Easier to reuse
-   Better for debugging

------------------------------------------------------------------------

# Step 5: The Handler Function

``` jsx
const submitHandler = (e)=>{
    e.preventDefault();
    console.log("Form Submitted");
}
```

This function runs whenever the form is submitted.

Execution order:

1.  User clicks Submit.
2.  `onSubmit` fires.
3.  `submitHandler()` is called.
4.  `preventDefault()` stops the browser's default behavior.
5.  `"Form Submitted"` is printed.

------------------------------------------------------------------------

# Step 6: Why `preventDefault()`?

Without it:

``` jsx
const submitHandler = (e)=>{
    console.log("Submitted");
}
```

The browser reloads the page immediately after submission.

That means:

-   React state is lost.
-   Console messages disappear quickly.
-   Your application restarts.

With:

``` jsx
e.preventDefault();
```

The page stays where it is, letting React handle the form.

This is why `preventDefault()` is used in almost every React form.

------------------------------------------------------------------------

# Step 7: The Input

``` jsx
<input type="text" placeholder="Enter Name" />
```

Currently, this input is **uncontrolled**.

React does not know what the user is typing because its value is not
connected to React state.

Typing works, but React cannot access the text yet.

Later, you'll usually connect it with `useState`.

------------------------------------------------------------------------

# Step 8: The Button

``` jsx
<button>Submit</button>
```

Inside a form, a button without a `type` defaults to:

``` html
type="submit"
```

So clicking it automatically submits the form.

Equivalent code:

``` jsx
<button type="submit">Submit</button>
```

------------------------------------------------------------------------

# Flow of Execution

``` text
User types in input
        │
        ▼
Clicks Submit
        │
        ▼
onSubmit event fires
        │
        ▼
submitHandler(e)
        │
        ▼
preventDefault()
        │
        ▼
Browser does NOT reload
        │
        ▼
Your custom JavaScript executes
```

------------------------------------------------------------------------

# A Cleaner Way to Write It

Instead of:

``` jsx
<form onSubmit={(e)=>{
    submitHandler(e)
}}>
```

You can directly pass the function:

``` jsx
<form onSubmit={submitHandler}>
```

Why does this work?

Because React automatically passes the event object to event handler
functions.

React internally behaves like:

``` jsx
submitHandler(event)
```

This is the preferred and cleaner approach.

------------------------------------------------------------------------

# Final Version

``` jsx
import React from 'react'

const App = () => {

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type="text" placeholder="Enter Name" />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App
```

------------------------------------------------------------------------

# Key Takeaways

-   `onSubmit` listens for form submission.
-   React automatically passes an event object.
-   `preventDefault()` stops the browser from refreshing the page.
-   Keep your logic inside a separate handler function.
-   `<button>` inside a form behaves as a submit button by default.
-   Your current input is uncontrolled because it is not connected to
    React state.
-   A cleaner approach is `onSubmit={submitHandler}` instead of wrapping
    it in another arrow function.
