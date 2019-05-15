<template>
    <sidebar-menu style="position:relative" :menu="menu" :collapsed="true">
        <div>test</div>
    </sidebar-menu>
</template>

<script>
    import Vue from 'vue'
    import VueSidebarMenu from 'vue-sidebar-menu'
    import 'vue-sidebar-menu/dist/vue-sidebar-menu.css' // TODO scss import from vue file possible?
    Vue.use(VueSidebarMenu)


    export default {
        data() {
            return {
                menu: [
                    {
                        header: true,
                        title: 'Main Navigation',
                        // component: componentName
                        // visibleOnCollapse: true
                    },
                    {
                        href: '/',
                        title: 'Dashboard',
                        icon: 'fa fa-user',
                        child: [
                            {
                                href: '/wizzard',
                                title: 'R U A Wizzard?',
                            }
                        ]
                        /*
                        disabled: true
                        badge: {
                            text: 'new',
                            // class:''
                        }
                        */
                    },
                    {
                        href: '/preview',
                        title: 'Preview',
                        icon: 'fa fa-eye',
                        /*
                        disabled: true
                        badge: {
                            text: 'new',
                            // class:''
                        }
                        */
                    },
                    {
                        href: '/editor',
                        title: 'Editor',
                        icon: 'fa fa-edit',
                        child: [
                            {
                                href: '#',
                                title: 'Scenes',
                            },
                            {
                                href: '#',
                                title: 'Templates',
                            },
                            {
                                href: '#',
                                title: 'Keyframes',
                            }
                        ]
                    }, {
                        href: '/progress',
                        title: 'Progress/Results',
                        icon: 'fa fa-eye',
                    }, {
                        href: '/files',
                        title: 'Filemanager',
                        icon: 'fa fa-eye',
                    }
                ]
            }
        }
    }
</script>
