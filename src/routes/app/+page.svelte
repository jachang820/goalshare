<script lang="ts">
    import {signOut} from "@auth/sveltekit/client";
    import { page } from "$app/stores";
    import { onMount} from "svelte";

    onMount(() => {
        console.log($page.data.session);
    });

</script>

<nav class='bg-main flex flex-wrap items-center justify-center m-auto pt-40'>
    <h1 class="text-4xl font-extrabold leading-none tracking-tight">Welcome !</h1>
    <div class="basis-full h-3"/>
    <div class="border-1 rounded-lg border-solid shadow-2xl shadow-gray-600 p-6 mb-8">
        {#if $page.data.session?.user}
            <p>{$page.data.session.user.name ?? "User"}</p>
            <p>{$page.data.session.user.email ?? "Email"}</p>
            <img src={$page.data.session.user.image ?? ""} alt="Profile" />
        {/if}
    </div>
    <div class="basis-full h-3"/>
    <button on:click={() => signOut()} class="button">Sign out</button>
</nav>