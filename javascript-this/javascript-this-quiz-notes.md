# javascript-this-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is `this` in JavaScript?
  It's a global implicit parameter
- What does it mean to say that `this` is an "implicit parameter"?
  Its available in a functions codeblock without ever being declared on listed as a parameter
- _When_ is the value of `this` determined in a function; **call time** or **definition time**?
  At the time it's called
- What does `this` refer to in the following code snippet?
    ```js
    const character = {
      firstName: 'Mario',
      greet: function () {
        const message = 'It\'s-a-me, ' + this.firstName + '!';
        console.log(message);
      }
    };
    ```
  The character object
- Given the above `character` object, what is the result of the following code snippet? Why?
    ```js
    character.greet();
    ```
  'It's-a-me, Mario !
   Because this is referring to the object its called inside of here
- Given the above `character` object, what is the result of the following code snippet? Why?
    ```js
    const hello = character.greet;
    hello();
    ```
  The same output as the answer above, because the greet property of the character object is a function which returns that string
- How can you tell what the value of `this` will be for a particular function or method **definition**?
  By looking for an object in where the function/method is defined
- How can you tell what the value of `this` is for a particular function or method **call**?
  By looking for an object in which the function/method is called

## Notes

All student notes should be written here.


How to write `Code Examples` in markdown

for JS:
```javascript
const data = "Howdy"
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
  width:100%
}
```
