<template>
    <div>
        <app-portfolio-header/>
        <app-portfolio-section></app-portfolio-section>
    </div>
</template>

<script>

    import PortfolioHeader from '@/components/Portfolio/Portfolio-Header.vue';
    import PortfolioSection from '@/components/Portfolio/Portfolio-Section.vue';
    export default {
        components:{
            'app-portfolio-header':PortfolioHeader,
            'app-portfolio-section':PortfolioSection,
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
