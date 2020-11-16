<template>
    <div class="section-box">
        <div class="section-box-title">{{ $t('my_services') }}</div>
        <div class="body">
            <el-row :gutter="24">
                <el-col :span="12" v-for="(item, index) in responseData.services" :key="index">
                    <div class="section-item">
                        <div class="title">{{ item.title[$i18n.locale] }}</div>
                        <div class="description">{{ item.description[$i18n.locale] }}</div>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
import {mapState} from "vuex";

export default {
    name : 'ContentService',
    computed: mapState(['responseData']),
}
</script>