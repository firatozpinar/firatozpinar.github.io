<template>
    <div class="section-box">
        <div class="section-box-title">{{ $t('work_history') }}</div>
        <div class="body history-body">
            <div class="history-item-content" v-for="(item, index) in responseData.work_history" :key="index">
                <div class="mark-light"></div>
                <div class="mark"></div>
                <div class="section-item history-item">
                    <div class="head">
                        <div class="title">{{ item.title[$i18n.locale] }}</div>
                        <div class="date">{{ item.date }}</div>
                    </div>
                    <div class="sub-title">{{ item.sub_title[$i18n.locale] }}</div>
                    <div class="description">{{ item.description[$i18n.locale] }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapState} from "vuex";

export default {
    name : 'ContentWorkHistory',
    computed: mapState(['responseData']),
}
</script>