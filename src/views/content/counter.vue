<template>
    <el-row :gutter="24" class="pt-30">
        <el-col :span="6" v-for="(item, index) in responseData.counter_frame" :key="index">
            <div class="counter-frame">
                <div class="counter">{{ item.counter }}</div>
                <div class="text">{{ item.text[$i18n.locale] }}</div>
            </div>
        </el-col>
    </el-row>
</template>

<script>
import {mapState} from "vuex";

export default {
    name: 'ContentCounter',
    computed: mapState(['responseData']),
}
</script>