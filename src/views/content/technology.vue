<template>
    <div class="section-box">
        <div class="body">
            <el-row :gutter="24">
                <el-col :span="4" v-for="(item, index) in responseData.technology" :key="index">
                    <div class="technology-item">
                        <img :src="item.cover" :alt="item.name">
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
import {mapState} from "vuex";

export default {
    name : 'ContentTechnology',
    computed: mapState(['responseData']),
}
</script>