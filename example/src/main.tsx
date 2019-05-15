import Vue from 'vue'



import AppRouter from './router/AppRouter.vue'

window['app'] = new Vue({
    el: '#app',
    render: function(createElement) {
        return createElement(AppRouter);
    }
})




