# react-state-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are _hooks_ in React?
  Hooks give the developer the ability to re render react componenets, with _useState_ and _hooks_
- What are the "Rules of Hooks"? (if necessary, re-read the "Pitfall" box in [State](https://react.dev/learn/state-a-components-memory))
  A rule of using hooks is that they can only be used a the "top level" of your componenets,
  meanning they can't be nested inside other functions such as conditionals, loops or other nested
  functions
- What is the purpose of state in React?
  useState() is used to tell react that you want the components to remember something such as a boolean or a count such as an integer
- Why can't we just maintain state in a local variable?
  Local variables dont persist between renders and changes to local variables by themselfs wont trigger a re render
- What two actions happen when you call a `state setter` function?
  A variabe gets updated and it calls react to re render the component with the new variable value
- When does the local `state variable` get updated with the new value?
  Once an event occurs

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
