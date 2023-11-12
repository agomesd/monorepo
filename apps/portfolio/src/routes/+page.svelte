<script>
	import avatarHref from '$lib/assets/alex-avatar.webp';
</script>

<main class="container p-0 md:p-8">
	<section class="h-screen p-2 md:py-8 md:px-12" id="about">
		<div class="flex justify-center md:justify-end items-center my-4 md:m-4">
			<h2 class="text-3xl md:text-5xl text-accent font-semibold">About me.</h2>
			<img src={avatarHref} alt="" class=" w-24 md:w-32 ml-4" />
		</div>

		<div
			class="text-center md:text-left p-4 md:p-8 rounded-lg text-foreground font-semibold md:text-xl flex flex-col gap-6 md:gap-12"
		>
			<h3 class="text-2xl text-muted font-semibold">Welcome to my portfolio!</h3>
			<p class="leading-relaxed">
				I'm Alex, a dedicated <span class="font-semibold text-accent">Frontend Developer</span> with
				a fervor for crafting seamless and captivating user interfaces. While my academic journey started
				with a bachelor's degree in Finance, my heart found its true calling in the intricate dance of
				code and design. Passionate about the intersection of technology and creativity, I thrive on
				transforming data into immersive user experiences. My journey in the world of software development
				is fueled by an insatiable curiosity and a relentless pursuit of knowledge. Every line of code
				is an opportunity to create something exceptional, and I approach each project with enthusiasm
				and a commitment to excellence.
			</p>

			<a
				href="#contact"
				class="hover:translate-x-4 hover:translate-y-1 hover:scale-105 duration-300 hover:brightness-150"
				><span class="font-semibold text-accent text-2xl">Let's build</span>
				something extraordinary
				<span class="text-2xl underline">together.</span></a
			>
		</div>
	</section>
	<section id="portfolio" class="h-screen">
		<h2>Portfolio</h2>
	</section>
	<section class="h-screen" id="contact">
		<h2>Contact</h2>
	</section>
</main>
