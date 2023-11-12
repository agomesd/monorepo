<script>
	import meltHref from '$lib/assets/melt-logo.png';
	import svelteHref from '$lib/assets/svelte-logo.png';
	import tailwindHref from '$lib/assets/tailwind-logo.svg';
	import flyHref from '$lib/assets/fly-logo.svg';
	import { cn } from 'utils';
	const links = [
		{
			href: 'https://svelte.dev/',
			logo: svelteHref,
			name: 'Svelte',
			neon: 'group-hover:drop-shadow-svelte'
		},
		{
			href: 'https://tailwindcss.com/',
			logo: tailwindHref,
			name: 'tailwindcss',
			neon: 'group-hover:drop-shadow-tailwind'
		},
		{
			href: 'https://www.melt-ui.com',
			logo: meltHref,
			name: 'melt',
			neon: 'group-hover:drop-shadow-melt'
		},
		{ href: 'https://fly.io/', logo: flyHref, name: 'fly.io', neon: 'group-hover:drop-shadow-fly' }
	];
</script>

<footer class="flex items-center justify-center gap-8 p-4 md:p-8 bg-black border-t-2 border-border">
	<p class="text-xs md:text-base">
		Website <span class="text-accent font-semibold">built with</span>
	</p>
	{#each links as link}
		<a
			href={link.href}
			target="_blank"
			rel="noopener noreferrer"
			class="flex items-center gap-2 group group hover:brightness-150 duration-200 hover:scale-105"
		>
			<img src={link.logo} alt={`${link.name} logo}`} class="w-6 md:w-8" />
			<span class={cn(link.neon, 'hidden md:block duration-700 text-white')}>{link.name}</span>
		</a>
	{/each}
</footer>
