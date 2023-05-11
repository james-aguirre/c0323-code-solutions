# es6-async-await-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the `async` and `await` keywords used for?
  To make a promise appear to happen synchronously
- How do `async` and `await` differ from `Promise.then` and `Promise.catch`?
  sytactic difference that makes it easier to write code and makes it look more synchronous which makes it easier to
  read and understand, less likely to write buggy code
- When do you use `async`?
  When a promise needs to have priority and not go to the task queue
- When do you use `await`? When do you _not_ use `await`? (What happens if you `await` a synchronous function?)
  if you ever want to use await keyword can only be used inside a function with the keyword async,
  You use await when you want to wait for a promise to settle, before your code moves on,
  you do NOT use await on synchronous functions.
- How do you handle errors with `await`?
  With 'try' and 'catch', if an error is thrown without these, your program will crash
- What do `try`, `catch` and `throw` do? When do you use them?
  Try and catch handle errors for the await keyword, _try_ goes before _await_ then catch goes after the await keyword, You use throw to create an error and stops code from executing and goes to the closet catch it can find
- What happens if you forget to use `await` on a Promise? In that case, what happens to the Promise rejection?
  It will continue to run the program and return the promise, await will return the resolved object, without await it
  will return a promise instead of an object
- Which style of asynchronous programming do you prefer — callbacks, `Promise.then`, or `async/await`? Why?
  Async and await because the code is easier to read and debug

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
