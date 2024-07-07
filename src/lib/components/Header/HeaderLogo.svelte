<script lang="ts">
	import { siteTheme } from '$lib/stores/theme-toggle';
	import { ThemeEnum } from '$lib/stores/theme-enum';
	import TLDLogoLight from '$lib/assets/svg/TLDLogoLight.svelte';
	import TLDLogoDark from '$lib/assets/svg/TLDLogoDark.svelte';
</script>

<div class="min-w-40 w-60">
	{#if $siteTheme === ThemeEnum.Light}
		<TLDLogoDark />
	{:else}
		<TLDLogoLight />
	{/if}
</div>