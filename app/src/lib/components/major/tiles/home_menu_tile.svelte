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
<div class="hm_tile w-96 h-48 overflow-hidden m-8 bg-red-200">
    <span class="hm_tile_title absolute mx-auto my-auto top-1.5 left-1.5 tertiary_txt text-3xl font-extrabold">{details.title}</span>
    <img height="192px" width="384px" src="{details.source}" alt="{details.alt}">
    <p class="hm_tile_desc">{details.desc}</p>
</div>

<style>
</style>