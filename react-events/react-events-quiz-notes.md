# react-events-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is an "event" in React?
  Its how we handle events in jsx code, similar to the addEventListner method in basic javascript
- What is an "event handler"? Which component declares the handler?
  Its an event listener inside of react components, declared inside the component function as a function of its own
- How do you pass an event handler to a React component?
  Declare a function inside of your component, pass it to your components using event={functionName} as a property of the component
- What is the naming convention for event handlers?
  1. having names that start with handle
  2. Then writing the name of the event
     handle then camelCase
     eg: handleClick()
- What is an "event handler prop"? Which component declares the prop?
  An event handler prop is a property of a components that handles events, the component that's executing the event handlers is where it's declared
- What are some custom event handler props a component may wish to define?
  text, click, submit, hover, keydown
- What is the naming convention for custom event handler props?
  **on** followed by a **capital letter**, eg onSmash = onClick

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
