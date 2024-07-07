<script>
	import { siteTheme } from '$lib/stores/theme-toggle';
	import Header from '$lib/components/Header/Header.svelte';

	$: dark = $siteTheme
</script>

<div class="{dark} dark:bg-black dark:text-white min-h-screen flex flex-col">
	<Header/>
</div>
