<script lang="ts">
	import { createLinkPreview, melt } from '@melt-ui/svelte';
	import type { MouseEventHandler } from 'svelte/elements';
	import { fly } from 'svelte/transition';
	import { cn } from 'utils';
	const {
		elements: { trigger, content, arrow },
		states: { open }
	} = createLinkPreview({ forceVisible: true });

	export let href: string;
	export let buttonClass: string = '';
	export let contentClass: string = '';
</script>

<a
	use:melt={$trigger}
	class={cn(buttonClass, 'py-2 px-3 border rounded-md  hover:text-accent duration-300 group')}
	{href}
>
	<slot name="label" />
</a>

{#if $open}
	<div
		use:melt={$content}
		class={cn(contentClass, 'z-10 rounded-md bg-background shadow-sm')}
		transition:fly={{ y: -5, duration: 200 }}
	>
		<slot name="content" />
		<div use:melt={$arrow} />
	</div>
{/if}
