import { html, css, LitElement } from 'lit';

export class PizzaView extends LitElement {
	static styles = css`
		.pizza {
			z-index: 1;
			transform: translateX(50%) translateX(-210px) translateY(10%);
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
		}
  `;

	render() {
		return html`
			<div class="pizza">
				<div class="base"></div>
				<div class="board"></div>
			</div>
			
		`;
	}
}

customElements.define('pizza-view', PizzaView);
