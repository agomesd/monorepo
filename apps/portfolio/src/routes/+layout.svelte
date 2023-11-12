<script>
	import '../app.css';
	import '../theme.css';
	import Header from '../components/Header.svelte';
	import Footer from '../components/Footer.svelte';
	import { onMount } from 'svelte';
	export let data;

	onMount(() => {
		const { hash } = document.location;
		const scrollTo = hash && document.getElementById(hash.slice(1));
		if (scrollTo) scrollTo.scrollIntoView();
	});
</script>

<div class="h-screen flex flex-col">
	<Header />
	<div class="flex-1 bg-background overflow-y-auto">
		<slot />
	</div>
	<Footer />
</div>
