# react-rendering-lists-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- When would we want to dynamically create a list of React components?
  If someone wanted to filter an API search
- Why is it important for React components to be data-driven?
  So we dont have to hardcode stuff and we can decide what we want to show on the webpage, pulling it from a source rather than hardcoding, reacts to data and updates accordingly,
  and re useable components having to write less code
- Where in the component code would a list of React components typically be built?
  In a data.js file, most the time they are built in the jsx {} using Array.map()
- What `Array` method is commonly used to create a list of React components?
  Map and filter
- Why do components in a list need to have unique keys?
  So you can match them up later if your array of items gets changed
- What is the best value to use as a "key" prop when rendering lists?
  id

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
