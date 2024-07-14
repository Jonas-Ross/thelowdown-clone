<script lang="ts">
	import HeaderLogo from '$lib/components/Header/HeaderLogo.svelte';
	import HamburgerIcon from '$lib/components/Header/HamburgerIcon.svelte';
</script>

<header class="w-full z-10 bg-white dark:bg-opacity-0">
 	<div class="w-auto mx-4 flex justify-between items-center py-4">
		<HeaderLogo />
		<HamburgerIcon />
	</div>
</header>