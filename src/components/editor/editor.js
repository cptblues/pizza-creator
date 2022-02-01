const template = document.createElement('template');
template.innerHTML = `
  Pizza editor here!
`;

class Editor extends HTMLElement {
  constructor() {
    super();
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {}
}

window.customElements.define('pizza-editor', Editor);