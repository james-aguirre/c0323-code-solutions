# dom-query-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Why do we log things to the console?
  To check functionality
- What is a "model"?, a recreation of data that already exists
  The html/css we are searching through
- Which "document" is being referred to in the phrase Document Object Model?
  The webpages html/css
- What is the word "object" referring to in the phrase Document Object Model?
  The DOM tree, because it is made up of objects representing each different part of the page
- What is a DOM Tree?
  The way in which the browsers structures the model html page
- Give two examples of `document` methods that retrieve a single element from the DOM.
  document.getElementById(), document.querySelector()
- Give one example of a `document` method that retrieves multiple elements from the DOM at once.
  document.querySelectAll()
- Why might you want to assign the return value of a DOM query to a variable?
  So you can retrieve the value of it later without having to search through the page again
- What `console` method allows you to inspect the properties of a DOM element object?
  console.dir()
- Why would a `<script>` tag need to be placed at the bottom of the HTML content instead of at the top?
  So all of the content of a page can be loaded before the scripts
- What does `document.querySelector()` take as its argument and what does it return?
  It takes an a string form of a css selector and returns the first match it finds within the document
- What does `document.querySelectorAll()` take as its argument and what does it return?
  A css selector in string format and it returns the nodelist of all matching elements

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
