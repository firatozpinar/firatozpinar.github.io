<template>
    <div class="section-box">
        <div class="section-box-title">{{ $t('code_example') }}</div>
        <div class="body">
            <el-row :gutter="24">
                <el-col :span="12" v-for="(item, index) in responseData.code_examples" :key="index">
                    <div class="section-item section-media-item" >
                        <div class="media">
                            <img :src="item.image" alt="logo">
                        </div>
                        <div class="text">
                            <div class="title">{{ item.title[$i18n.locale] }}</div>
                            <div class="description">{{ item.description[$i18n.locale] }}</div>
                            <a class="go" :href="item.url" target="_blank">{{ $t('go_link') }}</a>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
import {mapState} from "vuex";

export default {
    name : 'ContentCode',
    computed: mapState(['responseData']),
}
</script>