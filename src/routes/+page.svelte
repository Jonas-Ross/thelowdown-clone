<script>
	import { siteTheme } from '$lib/stores/theme-toggle';
	import Header from '$lib/components/Header/Header.svelte';
	import StartButton from '$lib/components/start-flow/StartButton.svelte';
	import StartVideoBackground from '$lib/components/start-flow/StartVideoBackground.svelte';

	$: dark = $siteTheme;
</script>

<div class="{dark} dark:bg-black dark:text-white min-h-screen flex flex-col">
	<StartVideoBackground src="/videos/start-vid.mp4" />
	<Header />
	<main class="flex-grow w-full z-10 flex justify-center items-center">
		<div class="flex justify-center items-center min-h-full -mt-16">
			<StartButton />

		</div>
	</main>
</div>
