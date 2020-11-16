<template>
    <div class="section-box">
        <div class="section-box-title">{{ $t('works') }}</div>
        <div class="body">
            <el-row :gutter="24">
                <el-col :span="6" v-for="(item, index) in responseData.works" :key="index">
                    <div class="work-item">
                        <a :href="item.url" target="_blank" :title="item.name">
                            <img :src="item.cover" :alt="item.name">
                        </a>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
import {mapState} from "vuex";

export default {
    name : 'ContentWork',
    computed: mapState(['responseData']),
}
</script>