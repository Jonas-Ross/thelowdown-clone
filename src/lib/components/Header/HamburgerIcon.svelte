<script lang="ts">
	let isHovered = false;
</script>

<div class="w-8 h-8 relative flex justify-center items-center bg-transparent"
		 on:mouseenter={() => isHovered = true}
		 on:mouseleave={() => isHovered = false}
		 role="navigation">
	<svg class="w-full h-full fill-none stroke-white stroke-[7] stroke-round" viewBox="0 0 100 56">
		<path class="transition-all duration-120 ease-linear delay-200"
					class:hovered-1={isHovered}
					d="M48.33,45.6H18a14.17,14.17,0,0,1,0-28.34H78.86a17.37,17.37,0,0,1,0,34.74H42.33l-21-21.26L47.75,4" />
		<path class="animated-path"
					class:hovered={isHovered}
					d="M48.33,45.6H18a14.17,14.17,0,0,1,0-28.34H78.86a17.37,17.37,0,0,1,0,34.74H42.33l-21-21.26L47.75,4" />
	</svg>
</div>

<style>
    path:nth-of-type(1) {
        opacity: 1;
        stroke-dashoffset: 221;
        stroke-dasharray: 46 249;
    }

    .hovered-1 {
        stroke-dashoffset: 175 !important;
        stroke-dasharray: 0 295 !important;
        opacity: 0 !important;
        transition: stroke-dashoffset 0.07s linear 0.07s, stroke-dasharray 0.07s linear 0.07s, opacity 0s linear 0.14s !important;
    }

    .animated-path {
        stroke-dashoffset: 290;
        stroke-dasharray: 25 270;
        transition: stroke-dashoffset .8s ease-out, stroke-dasharray .8s ease-out;
    }

    .animated-path.hovered {
        stroke-dashoffset: 68;
        stroke-dasharray: 59 236;
    }
</style>