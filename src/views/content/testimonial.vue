<template>
    <div class="section-box">
        <div class="section-box-title">{{ $t('recommendations') }}</div>
        <div class="body">
            <el-row :gutter="24">
                <el-col :span="12" v-for="(item, index) in responseData.testimonials" :key="index">
                    <div class="section-item testimonial-item">
                        <img class="face" :src="item.face" :alt="item.name">
                        <div class="title">{{ item.name }}</div>
                        <div class="role">{{ item.role }}</div>
                        <div class="description">{{ item.message[$i18n.locale] }}</div>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
import {mapState} from "vuex";

export default {
    name : 'ContentTestimonial',
    computed: mapState(['responseData']),
}
</script>