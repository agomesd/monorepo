<script lang="ts">
	import { createPopover, melt } from '@melt-ui/svelte';
	import { fade } from 'svelte/transition';

	const {
		elements: { arrow, close, content, trigger },
		states: { open }
	} = createPopover({
		forceVisible: true
	});
	export let ariaLabel: string;
</script>

<button
	type="button"
	use:melt={$trigger}
	aria-label={ariaLabel}
	class="inline-flex h-9 w-9 items-center justify-center rounded-full bg-background p-0"
>
	<slot name="trigger" />
	<span class="sr-only">Open Popover</span>
</button>

{#if $open}
	<div
		use:melt={$content}
		transition:fade={{ duration: 200 }}
		class="z-10 w-60 rounded-md bg-popover shadow-sm"
	>
		<div use:melt={$arrow} />
	</div>
	<slot name="content" />
{/if}
