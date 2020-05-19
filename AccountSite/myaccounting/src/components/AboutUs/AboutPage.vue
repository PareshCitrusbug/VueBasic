<template>
    <div>
        <app-about-header/>
         <app-about-section></app-about-section>

    </div>
</template>

<script>

    import AboutHeader from '@/components/AboutUs/About-Header.vue';
    import AboutSection from '@/components/AboutUs/About-Section.vue';
    export default {
        components:{
            'app-about-header':AboutHeader,
            'app-about-section':AboutSection,
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
