import Vue from "vue";
import VueRouter from 'vue-router';
import App from "@/App.vue";
import { routes } from '@/routes/routes';

Vue.use(VueRouter);

Vue.config.productionTip = false;


const router = new VueRouter({
    routes,
    mode: 'history'
});

router.beforeEach((to, from, next) => {
    console.log('global beforeEach');
    next();
});

new Vue({
    router,
    render: h => h(App),
}).$mount("#app");
