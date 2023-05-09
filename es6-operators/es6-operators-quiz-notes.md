# es6-operators-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the `&&` (logical AND) and `||` (logical OR) operators and how can they be used outside of `if` statements?
  The && will execute code on the right side of operand if the left side value is not falsey, while the || operator will execute if the
  left side operand is falsey
- What is "short-circuit evaluation" and how does it apply to `&&` and `||`?
  It applies by returning a boolean value as soon as it finds a condition evaluated to be true
- What is the `??` (nullish coalescing) operator and how does it differ from `||`?
  It will only trigger if the left hand value is null or undefined compared to || operator triggering for all undefined values on the left side of operand
- What is the `?:` (ternary) operator? How does it differ from `if/else`?
  It functions the same as an if else statement but with a different syntax and less code to write, it is also an expression that can be assigned to a variable
- What is the `?.` (optional chaining) operator? When would you use it?
  It checks if an object variables and if it doesnt it stops the chain and returns undefined, It would be useful if youre not sure an object variable is undefined,
  an object has a property and it's espescially useful as it doesnt cause in error in the console
- What is `...` (spread) syntax? How do you use it with arrays and objects?
  The spread operator functions by copying an entire object or an array into a new object
- What data types can be spread into an array? Into an object?
  All data types
  - You can only spread iterables into an array
  - with arrays, you use it inside `[]`, like `[...foo]`
    with objects you use it inside `{}`, like `{..foo}`
- How does spread syntax differ from rest syntax?
  The spread syntax creats a new array & rest adds values to an existing array
  Spread takes an existing object and spreads it out into another object, rest is using during destructuring

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```js
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
