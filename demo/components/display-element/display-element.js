import { LitElement, css, html } from "lit";

export class DisplayElement extends LitElement {
  static properties = {
    message: {}
  }
  static styles = css`
    :host {
      display: block;
      border: solid thin rgba(0,0,0,0.25);
      padding: 1em;
    }
  `;
  constructor() {
    super();
  }

  render() {
    return html`
      <section>
        <h1>The Name from the other component</h1>
        <p>${this.message}</p>
      </section>
    `;
  }
}

customElements.define('display-element', DisplayElement);
