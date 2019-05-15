<style>
    .jsoneditor-field{
        color:white !important;

    }


</style>

<template>
    <div>
        <vue-json-editor v-model="json" :show-btns="true" @json-change="onJsonChange">

        </vue-json-editor>
    </div>
</template>

<script  lang="ts">
 //@ts-ignore
    import vueJsonEditor from 'vue-json-editor'



    import Vue from 'vue'
    import {Component, Prop} from 'vue-property-decorator'

    @Component({components: {vueJsonEditor}})
    export default class PropertyInspect extends Vue {


        @Prop({default:function () {
                return {
                    json: {
                        msg: 'demo of jsoneditor'
                    }
                }
            }})
        public json:object;

        onJsonChange(value) {
            console.log('value:', value)
        }

    }

</script>
