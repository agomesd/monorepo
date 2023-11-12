<script lang='ts'>
    import { createLinkPreview, melt } from '@melt-ui/svelte'
	import { fly } from 'svelte/transition';
    import { cn }  from 'utils'
    const { elements: { trigger, content, arrow }, states: { open } } = createLinkPreview({ forceVisible: true })

    export let label: string;
    export let href: string;
    export let buttonClass: string = '';
    export let contentClass: string = '';
</script>


<a href={href} use:melt={$trigger} class={cn(buttonClass, 'py-2 px-3 border rounded-md hover:bg-accent hover:text-accent-foreground duration-300')}>
    {label}
    <span class="sr-only">Open {label} details</span>
</a>

{#if $open}
    <div use:melt={$content} class={cn(contentClass, 'z-10 rounded-md bg-background shadow-sm')} transition:fly={{ y: -5, duration: 200 }}>
        <slot />
        <div use:melt={$arrow}/>
    </div>
{/if}
