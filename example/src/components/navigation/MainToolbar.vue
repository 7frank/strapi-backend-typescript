<template>

    <b-navbar toggleable="md" type="dark" variant="dark">

        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

        <b-collapse is-nav id="nav_collapse">

            <b-navbar-nav>
                <b-button-group ref="aspect"  class="mx-1">
                    <b-btn @click="updateModel"><i class="fas fa-tv"></i></b-btn>
                    <b-btn @click="updateModel"><i class="fas fa-tablet-alt"></i></b-btn>
                    <b-btn @click="updateModel"><i class="fas fa-mobile-alt"></i></b-btn>
                </b-button-group>
            </b-navbar-nav>





            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto" >
                <b-button-group class="mx-1">
                    <b-btn><i class="fas fa-undo"></i></b-btn>
                    <b-btn><i class="fas fa-redo"></i></b-btn>

                </b-button-group>
                <b-button-group class="mx-1">

                    <b-btn><i class="fas fa-search-minus"></i></b-btn>
                    <b-btn><i class="fas fa-search-plus"></i></b-btn>
                </b-button-group>

            </b-navbar-nav>

        </b-collapse>
    </b-navbar>

</template>



<script lang="ts">
    import Vue from 'vue'
    import {Component, Prop} from 'vue-property-decorator'

    @Component
    export default class MainToolbar extends Vue {


        @Prop({default:()=>{}})
        value:object;



        updateModel(e) {
            console.log("updating model",e.target)
            this.$emit('input', {
             //   month: +this.$refs.aspect.value,
              //  year: +this.$refs.yearPicker.value
            })
        }



    }
</script>

