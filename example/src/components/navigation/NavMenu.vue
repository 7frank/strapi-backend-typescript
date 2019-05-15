<style scoped>

    .full-height
    {
        height:100vh;

    }



</style>


<template>
    <div>
        <b-row class="full-height">
            <b-col style="flex-grow:0.3;flex: 0 0 50px;">
                <SideBar style="position:relative;height:100%"></SideBar>
            </b-col>
            <b-col style="flex-grow:2;padding:2em">
                <component v-bind:is="subMenu"></component>
            </b-col>
        </b-row>

    </div>





</template>

<script lang="ts">

    /**
     *
     * wizzard
     *
     * TODO zu klären, ob bild/logo-dateien auf server geladen werden sollen. alternativ URLs machensich leichter aber sind wahrscheinlich nihct o praktisch. ggf auch beides kombinieren
     *
     *
     * TODO create config from wizzard pass to editor
     * !audio data refator /audio to for some test cases
     * !create the event based audio forwaring to frames
     *
     */


    import Vue from 'vue'
    import {Component, Prop} from 'vue-property-decorator'





    @Component
    export default class NavMenu extends Vue {

        @Prop()
        subMenu:Vue;

    }

</script>
