import { html, css, LitElement } from 'lit';

export class PizzaConfigurator extends LitElement {
	render() {
		return html`<div>Pizza configurator!</div>`;
	}
}

customElements.define('pizza-configurator', PizzaConfigurator);
