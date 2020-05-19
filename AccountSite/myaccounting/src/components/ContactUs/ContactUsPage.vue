<template>
    <div>
        <app-contactus-header/>
        <app-contactus-section></app-contactus-section>
    </div>
</template>

<script>

    import ContactUsHeader from '@/components/ContactUs/ContactUs-Header.vue';
    import ContactUsSection from '@/components/ContactUs/ContactUs-Section.vue';
    export default {
        components:{
            'app-contactus-header':ContactUsHeader,
            'app-contactus-section':ContactUsSection,
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
