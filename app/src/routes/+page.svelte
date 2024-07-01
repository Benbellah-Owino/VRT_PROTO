<script lang="ts">
	import HomeMenuTile from "$lib/components/major/tiles/home_menu_tile.svelte";
    import esports_image from "$lib/assets/images/menu/esports_tile.jpg"
    import blog_image from "$lib/assets/images/menu/blog_tile.jpg"
    import games_image from "$lib/assets/images/menu/games_tile.jpeg"
    import store_image from "$lib/assets/images/menu/store_tile.jpeg"
</script>


<main>
    <!-- <h3 class="test bg-white text-black text-4xl">Virtual Tribe</h3> -->
    <section class="menu_tiles flex flex_col">
        <!-- TODO: Add descriptions for each tile -->
        <HomeMenuTile details= {{source:esports_image, alt:"Esports image", title:"Esports"}}/> 
        <HomeMenuTile details= {{source:blog_image, alt:"Blog image", title: "Blog"}}/> 
        <HomeMenuTile details= {{source:games_image, alt:"Games image", title: "Games"}}/> 
        <HomeMenuTile details= {{source:store_image, alt:"Store image", title: "Store"}}/> 
    </section>

</main>

<style>

</style>