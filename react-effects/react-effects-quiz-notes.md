# react-effects-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- When is a component "mounted" to the DOM?
  When it appears on the screen for the first time
- What is a React Effect?
  A part of a component that changes after the component gets rendered to the dom
- When should you use an Effect and when should you not use an Effect?
  When you need an effect to render after the jsx has been rendered and when you need it to run only conditionally
  Use an effect to sychronze react with a non react system( timers, network events ...)
- When do Effects run?
  After the intial component code gets rendered, when the dependencies change
- What function is used to declare an Effect?
  useEffect
- What are Effect dependencies and how do you declare them?
  It lets you specify when you want your Effect to re run
- Why would you want to clean up from an Effect?
  To make sure a connection closes each time you navigate away from it
- How do you clean up from an Effect?
  By returning a cleanup function in your effect
- When does the cleanup function run?
  Each time before your Effect re runs

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
