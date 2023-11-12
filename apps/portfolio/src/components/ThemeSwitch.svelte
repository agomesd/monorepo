<script lang="ts">
	import { onMount } from 'svelte';
	import { createSwitch, melt } from '@melt-ui/svelte';
	const {
		elements: { input, root }
	} = createSwitch();
	import { Moon, Sun } from 'lucide-svelte';

	let current_theme = '';

	onMount(() => {
		if (typeof window !== 'undefined') {
			const theme = window.localStorage.getItem('theme') || 'light';
			document.documentElement.setAttribute('class', theme);
			current_theme = theme;
		}
	});

	function setTheme(theme: 'dark' | 'light') {
		const oneYear = 60 * 60 * 24 * 365;
		window.localStorage.setItem('theme', theme);
		document.cookie = `theme=${theme}; max-age=${oneYear}; path=/; SameSite=Lax;`;
		document.documentElement.setAttribute('class', theme);
		current_theme = theme;
	}
</script>

<div class="flex items-center">
	<button
		on:click={() => setTheme(current_theme === 'dark' ? 'light' : 'dark')}
		use:melt={$root}
		class="relative h-6 cursor-default rounded-full bg-accent transition-colors data-[state=checked]:bg-foreground hover:cursor-pointer"
	>
		{#if current_theme === 'light'}
			<span
				class="thumb rounded-full bg-white transition flex items-center justify-center text-foreground"
			>
				<Sun size="18" />
			</span>
		{:else}
			<span
				class="thumb rounded-full bg-background transition flex items-center justify-center text-foreground"
			>
				<Moon size="18" />
			</span>
		{/if}
	</button>
	<input use:melt={$input} />
</div>

<style>
	button {
		--w: 2.75rem;
		--padding: 0.125rem;
		width: var(--w);
	}

	.thumb {
		--size: 1.25rem;
		width: var(--size);
		height: var(--size);
		transform: translateX(var(--padding));
	}

	:global([data-state='checked']) .thumb {
		transform: translateX(calc(var(--w) - var(--size) - var(--padding)));
	}
</style>
