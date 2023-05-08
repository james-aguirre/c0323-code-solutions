# es6-arrow-functions-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the syntax for defining an arrow function?
  The function name or function keyword unless creating an anonymous function followed by paranthesis/parameters if any followed by => followed by the function codeblock
- When an arrow function's body is not surrounded in curly braces (_concise body syntax_), what changes in its functionality?
  You don't need to call the return keyword
- When using _concise body syntax_, how do you return an object literal?
  By wrapping the object literal in parathesis
- In the expression
  ```js
  foo(() => 42);
  ```
  - Identify the arrow function
    It's an arrow function with no parameters
  - How many arguments does the arrow function take?
    1
  - What value does it return?
    42
  - How many arguments are passed to the function `foo`?
    1
  - What type of argument is passed to the function `foo`?
    a variable
- In the expression
  ```js
  bar((y) => {
    console.log(`4y = ${4 * y}`);
  });
  ```
  - Identify the arrow function
    An arrow function with a single parameter of 'y'
  - How many arguments does the arrow function take?
    1
  - What value does it return?
    It returns a string logging the value of the argument \* 4
  - How many arguments are passed to the function `bar`?
    1
  - What type of argument is passed to the function `bar`?
    A number value
  - When does the arrow function's code get executed?
    When its called with an argument
- How does the value of `this` differ between standard functions and arrow functions?
  In standard functions the value of this is derived from the calling object, in arrow functions this refers to the window object

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
