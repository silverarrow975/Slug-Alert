import App from './ResponderPage.svelte'

const app = new mapHolder({
	target: document.body,
	props: {
		ready: false,
	}
});

window.initMap = function ready() {
	app.$set({ ready: true });
}

export default app;