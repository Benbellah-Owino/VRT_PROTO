<script lang="ts">
    import {enhance} from "$app/forms";
    
    export let form;

</script>

<main class="flex_col">
    <form class="flex_col mt-6 main_border rounded " action="" method="post" use:enhance>
        <div class="form_div">
            <label for="username">username</label>
            <input type="text" name="username" id="username" required>
        </div>
        <div class="form_div">
            <label for="email">email</label>
            <input type="email" name="email" id="email" required>
        </div>
        <div class="form_div">
            <label for="role">role</label>
            <input type="text" name="role" id="role" required>
        </div>
        <div class="form_div">
            <label for="password">password</label>
            <input type="password" name="password" id="password" required>
        </div>

        <div class="form_div">
            <label for="confirm_password">confirm_password</label>
            <input type="password" name="confirm_password" id="confirm_password" requried>
        </div>
            {#if form?.error}
                <p class="error text-red-500">{form.error}</p>
            {/if}
        <button class="submit btn primary_btn tertiary_bg_hover main_shadow_hover mt-5 " type="submit">register</button>
    </form>
</main>

<style>
    .submit{
        background-color: var(--primary);
        border-color: var(--primary);
    }
</style>