<style>

    @import url('https://fonts.googleapis.com/css?family=Lato');

    .accordion {
        -max-width: 400px;
        font-family: Lato;
        -margin-bottom: 20px;

        background-color: #2a2a2e;
        -border-radius: 6px;
    }

    .accordion .header {
        height: 2.5em;
        line-height: 3em;
        padding: 0 3em 0 8px;
        position: relative;
        color: #fff;
        cursor: pointer;
    }

    .accordion .header-icon {
        position: absolute;
        top: 5px;
        right: 8px;
        transform: rotate(0deg);
        transition-duration: 0.3s;
    }

    .accordion .body {
        /*   display: none; */
        overflow: hidden;

        min-height:400px;

        background-color:  #1e1e21 ;
        color:  black ;
        -border: 10px solid #ec5366;
        border-top: 0;
        -border-bottom-left-radius: 6px;
        -border-bottom-right-radius: 6px;
        transition: 150ms ease-out;
    }

    .accordion .body-inner {
        padding: 8px;
        overflow-wrap: break-word;
        /*   white-space: pre-wrap; */
    }

    .accordion .header-icon.rotate {
        transform: rotate(180deg);
        transition-duration: 0.3s;
    }

    .accordion.purple {
        background-color: #8c618d;
    }

    .accordion.purple .body {
        border-color: #8c618d;
    }

</style>

<template>
    <div class="accordion" v-bind:class="theme">
        <div class="header" v-on:click="toggle">
            <slot name="header">HINT</slot>
            <i class="fa fa-2x fa-angle-down header-icon" v-bind:class="{ rotate: visible }"></i>
        </div>
        <transition name="accordion"
                    v-on:before-enter="beforeEnter" v-on:enter="enter"
                    v-on:before-leave="beforeLeave" v-on:leave="leave">
            <div class="body" v-show="visible">
                <div class="body-inner">
                    <slot></slot>
                </div>
            </div>
        </transition>
    </div>
</template>


<script>

    // continue with https://stackoverflow.com/questions/47063420/insert-named-slot-inside-v-for-loop-vuejs

    export default {
        props: ['theme'],

        data() {
            return {
                visible: false
            };
        },

        methods: {
            toggle: function() {
                this.visible = !this.visible;
            },
            // enter: function(el, done) {
            //   $(el).slideDown(150, done);
            // },
            // leave: function(el, done) {
            //   $(el).slideUp(150, done);
            // },
            beforeEnter: function(el) {
                el.style.height = '0';
            },
            enter: function(el) {
                el.style.height = el.scrollHeight + 'px';
            },
            beforeLeave: function(el) {
                el.style.height = el.scrollHeight + 'px';
            },
            leave: function(el) {
                el.style.height = '0';
            }
        }
    }
</script>
