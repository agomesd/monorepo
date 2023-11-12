<script lang="ts">
	import Link from './Link.svelte';
	import ThemeSwitch from './ThemeSwitch.svelte';
</script>

<header class=" py-2 px-0 md:p-4 bg-background border-b-2 border-border">
	<div class="container flex justify-between items-center">
		<Link href="#about" buttonClass="border-none">
			<button slot="label">
				<h1 class="font-bold text-sm md:text-base">Alex Gomes</h1>
			</button>
		</Link>
		<nav class="flex items-center gap-4">
			<Link href="#portfolio" buttonClass="border-none">
				<button slot="label">
					<span class="text-sm md:text-base group-hover:underline group-hover:underline-offset-4"
						>Portfolio</span
					>
				</button>
			</Link>
			<Link href="#contact" buttonClass="border-none">
				<button slot="label">
					<span class="text-sm md:text-base group-hover:underline group-hover:underline-offset-4"
						>Contact</span
					>
				</button>
			</Link>
			<ThemeSwitch />
		</nav>
	</div>
</header>
