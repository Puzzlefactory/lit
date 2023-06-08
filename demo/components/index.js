export * from './my-element/my-element.js';

const testButton = document.getElementById("test-button");
testButton.addEventListener("click", () => {
  console.log("test - I was clicked");
});

testButton.addEventListener("my-event", (event) => {
  console.log("test - my-event", event.detail);
});
