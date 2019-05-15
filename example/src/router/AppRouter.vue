<style scoped>


</style>


<template>
    <div>
        <router-view></router-view>
    </div>
</template>

<script lang="ts">


    import Vue from 'vue'
    import {Component} from 'vue-property-decorator'
    import VueRouter from 'vue-router'

    // noinspection ES6UnusedImports
    import BootstrapVue from 'bootstrap-vue'


    import 'bootstrap/dist/css/bootstrap.css'
    import 'bootstrap-vue/dist/bootstrap-vue.css'
    import SideBar from "../components/navigation/SideBar.vue";
    import MainNavigation from "../components/navigation/MainNavigation.vue";

    import NavMenu from "../components/navigation/NavMenu.vue";

    Vue.use(VueRouter)
    Vue.use(BootstrapVue);
    Vue.component('SideBar', SideBar);
    Vue.component('MainNavigation', MainNavigation);
    Vue.component('NavMenu', NavMenu);



    const routes = [
        {path: '/', component: NavMenu, props: {subMenu: MainNavigation}},
          {path: '/a', component: MainNavigation},
   
    ]

    // 3. Create the router instance and pass the `routes` option
    // You can pass in additional options here, but let's
    // keep it simple for now.
    const router = new VueRouter({
        //mode:"history",
        routes // short for `routes: routes`
    })


    @Component({router})
    export default class AppRouter extends Vue {


    }

</script>
