# dom-events-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Why do we log things to the console?
  For troubleshooting problems and checking certain things
- What is the purpose of events and event handling?
  To run a specific code under if certain conditions are met
- Are all possible parameters required to use a JavaScript method or function?

- What method of element objects lets you set up a function to be called when a specific type of event occurs?
  addEventListener method
- What is a callback function?
  A function passed into another function as an argument
- What object is passed into an event listener callback when the event fires?

- What is the `event.target`? If you weren't sure, how would you check? Where could you get more information about it?
  MDN, it is an object that can receive events and may have listeners for them typically an element and its children but it can also be a document or window.
- What is the difference between these two snippets of code?
    ```js
    element.addEventListener('click', handleClick)
    ```
    ```js
    element.addEventListener('click', handleClick())
    ```
  The second snippet has a function with no argument, causing the code to run as the web page loads

## Notes

All student notes should be written here.


How to write `Code Examples` in markdown

for JS:

```javascript
const data = "Howdy";
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
