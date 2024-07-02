<script lang="ts">
    // Type definition
    interface Details{
        source: string,
        alt: string,
        title: string,
        desc: string
    }

    export let details: Details;
</script>
<div class="epst_tile overflow-hidden m-8 bg-red-200">
    <span class="hm_tile_title absolute mx-auto my-auto top-1.5 left-1.5 tertiary_txt text-3xl font-extrabold">{details.title}</span>
    <img  class="w-full h-full" src="{details.source}" alt="{details.alt}">
    <p class="epst_tile_desc">{details.desc}</p>
</div>

<style>
    .epst_tile{
        width: 30rem;
        height: 15rem;
        padding: 0%;
    }

    /* .epst_tile img{
        width: 30rem;
        height: 15rem;
    } */
</style>