<script lang="ts">
	import HomeMenuTile from "$lib/components/major/tiles/home_menu_tile.svelte";
    import esports_image from "$lib/assets/images/menu/esports_tile.jpg"
    import blog_image from "$lib/assets/images/menu/blog_tile.jpg"
    import games_image from "$lib/assets/images/menu/games_tile.jpeg"
    import store_image from "$lib/assets/images/menu/store_tile.jpeg"
    
    let desc_esports: string = "VRT esports division is our core division since it started as an esports org";
    let desc_blog: string = "Read our blogs on geek topics like gaming, comics, animations and movies";
    let desc_store: string = "Browse through our merch and also our streaming service(coming soon)";
    let desc_games: string = "See the games that our organization particpate in either recreatively or compentitvely";
</script>


<main>
    <!-- <h3 class="test bg-white text-black text-4xl">Virtual Tribe</h3> -->
    <section class="menu_tiles flex flex_col">
        <!-- TODO: Add descriptions for each tile -->
        <HomeMenuTile details= {{source:esports_image, alt:"Esports image", title:"Esports", desc: desc_esports}}/> 
        <HomeMenuTile details= {{source:blog_image, alt:"Blog image", title: "Blog", desc: desc_blog}}/> 
        <HomeMenuTile details= {{source:games_image, alt:"Games image", title: "Games", desc: desc_games}}/> 
        <HomeMenuTile details= {{source:store_image, alt:"Store image", title: "Store", desc: desc_store}}/> 
    </section>

</main>

<style>

</style>