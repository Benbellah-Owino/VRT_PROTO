<script lang="ts">
    import fortnite from "$lib/assets/images/esports/fortnite.jpeg"
	import EsportMenuTile from "$lib/components/major/tiles/esport_menu_tile.svelte";
</script>


<main>
    <!-- <h3 class="test bg-white text-black text-4xl">Virtual Tribe</h3> -->
    <section class="menu_tiles flex flex_col">
        <EsportMenuTile details = {{title:"Fortnite", source: fortnite, desc:"I am the GREATEST ALIVE", alt:"De"}}/>
    </section>

</main>

<style>

</style>