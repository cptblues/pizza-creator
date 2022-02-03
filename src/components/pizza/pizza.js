import { html, css, LitElement } from 'lit';

export class PizzaView extends LitElement {
	static properties = {
    active: {type: Boolean, reflect: true},
		activePizza: {type: Boolean},
  };

	attributeChangedCallback(name, oldVal, newVal) {
		if (name === 'active') {
			this.addPizzaLayer();
		}
  }

	addPizzaLayer() {
		setTimeout(() => {
			this.activePizza = true;
		}, 1500);
	}

	constructor() {
		super();
		this.active = false;
		this.activePizza = false;
	}

	static styles = css`
		@keyframes move-plate {
			from {
				transform: translateX(0px);
			}
			to {
				transform: translateX(50%) translateY(10%);
			}
		}

		@keyframes move-pizza {
			from {
				transform: translateY(-100px);
			}
			to {
				transform: translateY(10%);
			}
		}

		.pizza {
			z-index: 1;
			transform: translateX(50%) translateY(10%);
		}

		.board {
			background: url("/images/board.svg") no-repeat 0 20px;
			background-size: contain;
			width: 400px;
			height: 274px;
			position: absolute;
			z-index: 1;
			top: 30px;
			left: 0;
		}

		.base {
			background: url("/images/base.svg") no-repeat;
			background-size: contain;
			width: 312px;
			height: 258px;
			position: absolute;
			left: 70px;
			top: 35px;
			z-index: 2;
			display: none;
			transform: translateY(-100px);
		}

		.active {
			animation: move-plate;
  		animation-duration: 2s;
		}

		.active-pizza {
			display: block;
			animation: move-pizza;
  		animation-duration: 2s;
			animation-delay: 2s;
		}
  `;

	render() {
		return html`
		${this.activePizza}
			<div class="pizza ${this.active ? 'active' : ''}">
				<div class="base ${this.activePizza ? 'active-pizza' : ''}"></div>
				<div class="board"></div>
			</div>
			
		`;
	}
}

customElements.define('pizza-view', PizzaView);
