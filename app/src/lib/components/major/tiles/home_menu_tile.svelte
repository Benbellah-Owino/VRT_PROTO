<script lang="ts">
    // Type definition
    interface Details{
        source: string,
        alt: string
    }
    export let details: Details;
    console.log(details)

    
</script>
<div class="hm_tile w-96 h-96">
    <img src="{details.source}" alt="{details.alt}">
</div>