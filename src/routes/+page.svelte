<script>
	import { siteTheme } from '$lib/stores/theme-toggle';
	import Header from '$lib/components/Header/Header.svelte';
	import StartButton from '$lib/components/start-flow/StartButton.svelte';
	import StartVideoBackground from '$lib/components/start-flow/StartVideoBackground.svelte';
	import { smoothScroll } from '$lib/utils/smooth-scroll';

	$: dark = $siteTheme;
</script>

<div class="{dark} dark:bg-black dark:text-white min-h-screen flex flex-col scroll-smooth" style="scroll-behavior: smooth;" use:smoothScroll>
	<section class="relative flex flex-col min-h-screen">
		<Header />
		<div class="absolute inset-0 z-10 flex justify-center items-center -mt-16">
			<StartButton />
		</div>
		<StartVideoBackground src="/videos/start-vid.mp4" />
	</section>
	
	<section id="begin-section" class="min-h-screen flex items-center justify-center z-10">
		<!-- Your begin content goes here -->
		<h1>Begin Content</h1>
	</section>
</div>