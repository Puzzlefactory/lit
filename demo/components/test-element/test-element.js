import {LitElement, html, css} from 'lit';

export class TestElement extends LitElement {
  static properties = {
    version: {},
    name: {}
  };

  static styles = css`
    :host {
      display: block;
      border: solid thin rgba(0,0,0,0.25);
      padding: 1em;
    }
  `;

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
    this.dispatchEvent(new CustomEvent('menu-open', {
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
customElements.define('test-element', TestElement);
