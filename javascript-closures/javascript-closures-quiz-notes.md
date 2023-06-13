# javascript-conditionals-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- In JavaScript, when is scope determined?
  At parse time (lexical scope) (where can i legally access the variable)
- What allows JavaScript functions to "remember" variables from their surroundings?
  JavaScript creates a closure that
- What values does a closure contain?
  variables that were in scope of it at the time of creation/ and variables that get accessed/referenced outside of a function
- When is a function is referenced that accesses an outside variable
  When a function definition is evaluated
- How can you tell if a function will be created as a closure?
  Because it contains references to variables in its surrounding scope (outside its own scope), everytime a function is referenced a closure gets created
- In React, what is one important case where you need to know if a closure was created?
  When adding a function as a `useEffect` dependency

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
