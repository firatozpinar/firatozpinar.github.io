<style lang="scss" rel="stylesheet/scss">
@import "./resources/scss/Bootstrap";
</style>

<template>
    <div>
        <div class="preloader" :class="{active : preloader.visible}">
            <div class="preloader-wrp">
                <h4 class="title">Fırat Özpınar</h4>
                <el-progress :percentage="preloader.percentage" />
            </div>
        </div>
        <el-container v-if="!preloader.visible" class="page-wrapper">
            <Sidebar />
            <Content />
        </el-container>
    </div>
</template>
<script>

import {mapState} from 'vuex';
import Sidebar from "@/views/sidebar";
import Content from "@/views/content";

export default {
    name: 'Provider',
    computed: mapState(['preloader']),
    components: {
        Content,
        Sidebar,
    },
    data() {
        return {
            headerCode: '&lt;code&gt; I build ios and android applications. &lt;/code&gt;',
            form: {
                //
            }
        }
    },
    mounted() {
        this.$store.commit('setPreloaderVisible', true);
        this.getResponseData();
    },
    methods: {
        getResponseData() {
            let time = setInterval(() => {
                if (this.preloader.percentage <= 96) {
                    this.$store.commit('setPreloaderPercentage', (this.preloader.percentage + 4));
                }
            }, 100);

            this.$http
                .get('/data.json')
                .then(response => {
                    this.$store.commit('setResponseData', response.body);
                    setTimeout(() => {
                        this.$store.commit('setPreloaderVisible', false);
                        clearInterval(time);
                    }, 3000)
                })
        },
    }
}
</script>
