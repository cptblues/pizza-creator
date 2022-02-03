<script lang="ts">
	// this prevents the custom elements from being redefined when the REPL is updated and reloads, which throws an error
	// this means that any changes to the custom element won't be picked up without saving and refreshing the REPL
	const oldRegister = customElements.define;
	customElements.define = function(name, constructor, options) {
		if (!customElements.get(name)) {
			oldRegister(name, constructor, options);
		}
	}
	
	import './components/pizza/pizza';
	import './components/configurator/configurator';

	let pizzaViewActive = false;

	setTimeout(() => {
		pizzaViewActive = true;
	}, 500);
</script>

<div class="flex flex-row">
	<pizza-view active="{pizzaViewActive}" class="w-5/12 h-screen"></pizza-view>
	<pizza-configurator class="w-7/12 h-screen"></pizza-configurator>
</div>

