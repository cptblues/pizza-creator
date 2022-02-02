<script>
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
</script>

<pizza-view size="awesome"></pizza-view>
<pizza-configurator></pizza-configurator>
<h1 class="text-3xl font-bold underline bg-blue-500">
	Hello world!
</h1>
