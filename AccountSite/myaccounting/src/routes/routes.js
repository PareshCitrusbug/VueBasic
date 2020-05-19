import HomePage from '@/components/HomePage.vue';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import Copyright from '@/components/Copyright.vue';
import AboutPage from '@/components/AboutUs/AboutPage.vue';
import PortfolioPage from '@/components/Portfolio/PortfolioPage.vue';
import ContactUsPage from '@/components/ContactUs/ContactUsPage.vue';



export const routes = [
    {
        path: '', name: 'home', components: {
        default: HomePage,
        'header-top': Header,
        'footer-bottom':Footer,
        'copyright-bottom':Copyright,

    }
    },

    {
        path: '/about', components: {
        default: AboutPage,
        'header-top': Header,
        'footer-bottom':Footer,
        'copyright-bottom':Copyright,
    }
    },

    {
        path: '/portfolio', components: {
        default: PortfolioPage,
        'header-top': Header,
        'footer-bottom':Footer,
        'copyright-bottom':Copyright,
    }
    },
    {
        path: '/contact', components: {
        default: ContactUsPage,
        'header-top': Header,
        'footer-bottom':Footer,
        'copyright-bottom':Copyright,
    }
    },
    {path: '/redirect-me', redirect: {name: 'home'}},
    {path: '*', redirect: '/'}
];