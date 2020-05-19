<template>
    <div>

         <app-home></app-home>
         <app-divider></app-divider>
         <app-about></app-about>
         <app-portfolio></app-portfolio>

    </div>
</template>

<script>

// import Footer from './Footer.vue';
// import Header from './Header.vue';
import About from '@/components/About.vue';
import Divider from '@/components/Divider.vue';
import Home from '@/components/Home.vue';
import Portfolio from '@/components/Portfolio.vue';
// import Copyright from './Copyright.vue';
export default {
   components:{
    //    'user-name':UserName,
    //    'app-footer':Footer,
    //    'app-header':Header,
       'app-about':About,
       'app-divider':Divider,
       'app-home':Home,
       'app-portfolio':Portfolio,
    //    'app-copyright':Copyright,
   }
}
// export default {
//   name: "HelloWorld",
//   props: {
//     msg: String
//   }
// };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
