# the-event-loop-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the JavaScript Event Loop?
  A runtime model which is responsible for executing code, collecting and processing events, and executing queued sub-tasks

- What is different between "blocking" and "non-blocking" with respect to how code is executed?
  Non blocking code means that if an application is waiting for a query or some other type of request to return
  It will still be able to process other things like user input or commands, however if an error is thrown it will need to be caught or the process will crash,
  While blocking code will not execute other inputs or code below until the file has been read

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
