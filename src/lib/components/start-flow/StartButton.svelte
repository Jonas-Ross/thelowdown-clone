<script lang="ts">
	let hovered = false;

	const handleHover = () => {
		hovered = !hovered;
	};
</script>

<a
	class="w-24 h-12 border-2 uppercase text-sm border-red-500 flex items-center justify-center text-red-500 hover:text-opacity-10 hover:bg-red-500"
	href="#begin-section"
	on:focus={handleHover}
	on:mouseover={handleHover}>
	Start
</a>