# Real DOM vs Virtual DOM

One of the main reasons React applications are fast is its use of the **Virtual DOM**, which minimizes direct updates to the browser's actual DOM.

---

## What is the Real DOM?

The **Real DOM (Document Object Model)** is the tree-like structure created by the browser from an HTML document.

When a change occurs, the browser may need to recalculate and re-render large parts of the page, even if only a small element has changed. This can impact performance in large applications.

### Example

If a notification count changes from **5** to **6**, traditional DOM manipulation may trigger unnecessary updates to other parts of the page.

---

## What is the Virtual DOM?

The **Virtual DOM** is a lightweight JavaScript representation of the Real DOM maintained by React.

Instead of updating the browser directly, React first updates the Virtual DOM.

---

## How React Uses the Virtual DOM

When a state change occurs:

1. React creates an updated version of the Virtual DOM.
2. It compares the new Virtual DOM with the previous version (**Diffing**).
3. React identifies the exact elements that have changed.
4. Only those specific changes are applied to the Real DOM.

This process is known as **Reconciliation**.

---

## Benefits of the Virtual DOM

* Faster UI updates.
* Improved application performance.
* Reduced direct DOM manipulation.
* Better user experience in large applications.


