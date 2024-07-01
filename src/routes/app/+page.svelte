<script lang="ts">
    import {signOut} from "@auth/sveltekit/client";
    import type { PageData } from "./$types";

    export let data: PageData;
    $: user = data.user;

</script>

<nav class='bg-main flex flex-wrap items-center justify-center m-auto pt-40'>
    <h1 class="text-4xl font-extrabold leading-none tracking-tight">Welcome !</h1>
    <div class="basis-full h-3"/>
    <div class="border-1 rounded-lg border-solid shadow-2xl shadow-gray-600 p-6 mb-8">
        {#if user}
            <p>{user.name ?? "User"}</p>
            <p>{user.email ?? "Email"}</p>
            <img src={user.image ?? ""} alt="Profile" />
        {/if}
    </div>
    <div class="basis-full h-3"/>
    <button on:click={() => signOut()} class="button">Sign out</button>
</nav>