<script lang="ts">
    import {
        Modal,
        LoginForm,
        Hero_Tiles,
        Feature_ProductScreenshot,
        Footer_SimpleCentered,
        CTA_DarkPanel,
        Content_TiltedTiles
    } from "$lib/landing";

    import ExternalLink from "$lib/ExternalLink.svelte";
    import { CiXpr, FaRegularHandshake, OiCommentDiscussion, FaDove } from "$lib/icons";

    let modal: Modal;

</script>

<svelte:head>
    <title>Try Goalshare!</title>
</svelte:head>

<Modal bind:this={modal}>
    <LoginForm
        brand="Goalshare"
        header="Welcome to Goalshare"
        description="Log in to the app, or sign up if it's you're first time!"
        logoSrc={CiXpr}>
<!--        <span slot="fine-print">By continuing you agree to our Terms of Service and Privacy Agreement.</span>-->
    </LoginForm>
</Modal>

<Hero_Tiles
    header="Social media should motivate."
    buttonText="Try Goalshare!"
    buttonTarget={modal}>
    <span slot="description">
        Find people who share your goals and achieve them together!
    </span>
</Hero_Tiles>

<Feature_ProductScreenshot
    header="Find your people"
    subheader="Social media for positivity."
    features={[
        {
            name: "Choose an activity.",
            description: "Join an activity group or start new ones and invite your friends.",
            icon: FaRegularHandshake
        }, {
            name: "Follow people and make friends.",
            description: "Discuss your goals with like minded people, and update each other on your progress.",
            icon: OiCommentDiscussion
        }, {
            name: "Stay motivated.",
            description: "Share text, photos or videos regularly. Whether it's camaraderie or rivalry, these are your people.",
            icon: FaDove
        }
    ]}>
    <span slot="description">
        Engage with other people on the things you want to do and the goals you want to achieve. Build your future into your routine.
    </span>
</Feature_ProductScreenshot>

<CTA_DarkPanel
        header="It starts today!"
        buttonText="Join us now!"
        buttonTarget={modal}>
    <span slot="description">
        <ExternalLink href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8443045/"
                      --external-link-color="rgb(201, 224, 253)">Studies</ExternalLink>
        has shown that social reward and community support improves enjoyment and ability to achieve goals.
    </span>
</CTA_DarkPanel>

<Content_TiltedTiles
        header="Share your goals."
        subheader="Share success.">
    <span slot="description"></span>
</Content_TiltedTiles>

<Footer_SimpleCentered
    navigationLinks={[]}
    copyrightCompany="Goalshare"
/>