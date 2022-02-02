import { html, css, LitElement } from 'lit';

export class PizzaView extends LitElement {
	static get properties() {
		return {
			size: {
				type: String
			}
		};
	}

	createRenderRoot() {
    return this; // turn off shadow dom to access external styles
  }

	render() {
		return html`
		<h1 class="text-3xl font-bold underline bg-blue-500">
			Hello world!
		</h1>	
		`;
	}
}

customElements.define('pizza-view', PizzaView);
