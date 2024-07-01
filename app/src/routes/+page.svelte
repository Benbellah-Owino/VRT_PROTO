<script lang="ts">
	import HomeMenuTile from "$lib/components/major/tiles/home_menu_tile.svelte";
    import esports_image from "$lib/assets/images/menu/esports_tile.jpg"

</script>


<main>
    <!-- <h3 class="test bg-white text-black text-4xl">Virtual Tribe</h3> -->
    <section class="menu_tiles">
        <HomeMenuTile details= {{source:esports_image, alt:"Generic"}}/>
    </section>
</main>

<style>

</style>