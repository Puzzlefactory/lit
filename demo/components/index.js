export * from './test-element/test-element.js';
export * from './display-element/display-element.js';

const testButton = document.getElementById("test-button");
const displayElement = document.getElementById("display-element");

// This demonstrates a regular old event listener listening for a click event
// testButton.addEventListener("click", () => {
//   console.log("test - I was clicked");
// });

// Listening for a custom event, this is what you will want to use
testButton.addEventListener("menu-open", (event) => {
  // console.log("test - my-event", event.detail);
  displayElement.message = event.detail.name;
});
