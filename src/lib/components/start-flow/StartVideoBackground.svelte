<script lang="ts">
	import { onMount } from 'svelte';

	interface BackgroundVideoProps {
		src: string;
		poster: string;
	}

	export let { src, poster }: BackgroundVideoProps = { src: '', poster: '' };

	let video: HTMLVideoElement;

	onMount(() => {
		if (video) {
			video.play().catch(error => console.error('Video playback failed:', error));
		}
	});

	function handleCanPlay(): void {
		if (video) {
			video.play().catch(error => console.error('Video playback failed:', error));
		}
	}
</script>

<div class="video-background">
	<video
		bind:this={video}
		loop
		muted
		on:canplay={handleCanPlay}
		playsinline
		{poster}
		{src}
	>
		Your browser does not support the video tag.
	</video>
</div>

<style>
    .video-background {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        z-index: 1;
    }

    video {
        position: absolute;
        top: 50%;
        left: 50%;
        min-width: 100%;
        min-height: 100%;
        width: auto;
        height: auto;
        transform: translateX(-50%) translateY(-50%);
        object-fit: cover;
    }
</style>