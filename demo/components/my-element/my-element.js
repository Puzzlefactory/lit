import {LitElement, html} from 'lit';

export class MyElement extends LitElement {
  static properties = {
    version: {},
    name: {}
  };

  constructor() {
    super();
    this.version = 'STARTING';
    this.name = 'Your name here';
  }

  changeName(event) {
    const input = event.target;
    this.name = input.value;
  }

  handleClick($event) {
    this.version = 'UPDATING';
    setTimeout(() => {
      this.version = 'UPDATED';
    }, 1000);
    this.dispatchEvent(new CustomEvent('my-event', {
      detail: {
        name: this.name
      }
    }));
  }

  render() {
    return html`
        <button @click=${this.handleClick}>Click me!</button>
        <p>Hello, ${this.name}</p>
        <input @input=${this.changeName} placeholder="Enter your name">
        
        <p>Version: ${this.version}</p>
    `;
  }
}
customElements.define('my-element', MyElement);
