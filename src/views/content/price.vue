<template>
    <div class="section-box">
        <div class="section-box-title">{{ $t('price_plans') }}</div>
        <div class="body">
            <el-row :gutter="24">
                <el-col :span="8" v-for="(item, index) in responseData.prices" :key="index">
                    <div class="section-item price-item">
                        <div class="title">{{ item.title[$i18n.locale] }}</div>
                        <div class="price">{{ item.price }}</div>
                        <ul>
                            <li v-for="(feature, featureIndex) in item.features" :key="featureIndex" :class="{disabled : !feature.status}">
                                {{ feature.title[$i18n.locale] }}
                            </li>
                        </ul>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
import {mapState} from "vuex";

export default {
    name : 'ContentPrice',
    computed: mapState(['responseData']),
}
</script>