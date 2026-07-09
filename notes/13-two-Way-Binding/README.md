# React Two-Way Binding 

## Example Code

``` jsx
import React, { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('')

  const submitHandler = (e)=>{
    e.preventDefault();
    console.log('Form Submitted By',title);
    setTitle('');
  }

  return (
    <div>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}>
        <input
          type="text"
          placeholder='Enter Name'
          value={title}
          onChange={(e)=>{
            setTitle(e.target.value)
          }}
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
```

------------------------------------------------------------------------

# What is Two-Way Binding?

Two-way binding means there is a **two-way connection** between the
React state and the input field.

-   The **state controls the input**.
-   The **input updates the state**.

Both stay synchronized all the time.

------------------------------------------------------------------------

# Visual Diagram

``` text
             User Types
                  │
                  ▼
        +-------------------+
        |   <input> Field   |
        +-------------------+
                  │
          onChange Event
                  │
                  ▼
      setTitle(e.target.value)
                  │
                  ▼
        +-------------------+
        | React State       |
        | title = "Shivam"  |
        +-------------------+
                  │
          value={title}
                  │
                  ▼
        +-------------------+
        |   <input> Field   |
        +-------------------+

State updates the input,
Input updates the state.
```

------------------------------------------------------------------------

# Step 1: Creating State

``` jsx
const [title, setTitle] = useState('');
```

`useState()` creates a state variable.

-   `title` stores the current text.
-   `setTitle()` updates that text.

Initially:

``` text
title = ""
```

So the input is empty.

------------------------------------------------------------------------

# Step 2: Connecting the Input to State

``` jsx
value={title}
```

This is the first half of two-way binding.

Instead of storing its own value, the input displays whatever is inside
`title`.

``` text
React State
-------------
title = "Rahul"

        │
        ▼

Input Box
-------------
Rahul
```

If the state changes, the input changes automatically.

------------------------------------------------------------------------

# Step 3: Updating the State

``` jsx
onChange={(e)=>{
    setTitle(e.target.value)
}}
```

Whenever the user types:

1.  `onChange` fires.
2.  React gives an event object.
3.  `e.target` is the input element.
4.  `e.target.value` is the latest text.
5.  `setTitle()` updates the state.

Example:

User presses:

``` text
S
```

React receives

``` text
e.target.value = "S"
```

Then

``` jsx
setTitle("S")
```

Now

``` text
title = "S"
```

Because the input's value is `title`, the input also becomes:

``` text
S
```

------------------------------------------------------------------------

# Complete Typing Flow

Suppose the user types:

``` text
Shivam
```

### User types "S"

``` text
Input
-----
S

↓

onChange

↓

setTitle("S")

↓

State
-----
title = "S"

↓

value={title}

↓

Input shows "S"
```

------------------------------------------------------------------------

### User types "h"

``` text
Input
------
Sh

↓

onChange

↓

setTitle("Sh")

↓

State
------
title = "Sh"

↓

value={title}

↓

Input shows "Sh"
```

The same process repeats for every key.

------------------------------------------------------------------------

# Why Both `value` and `onChange` Are Needed

If you write only:

``` jsx
<input value={title} />
```

The input becomes read-only because React controls it but never updates
the state.

``` text
State → Input

Input ✗ State
```

If you write only:

``` jsx
<input onChange={...} />
```

The input updates itself, but React is not controlling what is
displayed.

``` text
Input → State

State ✗ Input
```

Using both creates synchronization.

``` text
State ⇄ Input
```

------------------------------------------------------------------------

# What Happens on Submit?

``` jsx
const submitHandler = (e)=>{
    e.preventDefault();
    console.log("Form Submitted By", title);
    setTitle('');
}
```

Execution:

``` text
Click Submit
      │
      ▼
preventDefault()
      │
      ▼
Console prints:
Form Submitted By Shivam
      │
      ▼
setTitle("")
      │
      ▼
State becomes empty
      │
      ▼
value={title}
      │
      ▼
Input becomes empty
```

------------------------------------------------------------------------

# Another Visual Representation

``` text
            ┌─────────────────────────┐
            │     React State         │
            │     title = "John"      │
            └──────────┬──────────────┘
                       │
                value={title}
                       │
                       ▼
            ┌─────────────────────────┐
            │      Input Field        │
            │         John            │
            └──────────┬──────────────┘
                       ▲
                       │
                  onChange
                       │
             setTitle(e.target.value)
                       │
                 User Typing
```

------------------------------------------------------------------------

# Why React Uses This Pattern

Keeping the value in state allows React to:

-   Validate input instantly.
-   Limit character count.
-   Convert text to uppercase/lowercase.
-   Enable or disable buttons.
-   Show live previews.
-   Send the value to APIs.
-   Clear the form with a single state update.

------------------------------------------------------------------------


