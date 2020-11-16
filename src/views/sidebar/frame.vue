<template>
    <div class="frame">
        <div class="information capsule">
            <div class="item">
                <div class="title">
                    {{ $t('country') }}:
                </div>
                <div class="description">
                    {{ responseData.contact.residence }}
                </div>
            </div>
            <div class="item">
                <div class="title">
                    {{ $t('city') }}:
                </div>
                <div class="description">
                    {{ responseData.contact.city }}
                </div>
            </div>
            <div class="item">
                <div class="title">
                    {{ $t('age') }}:
                </div>
                <div class="description">
                    {{ responseData.contact.age }}
                </div>
            </div>
        </div>
        <div class="divider"></div>
        <div class="progress-skills capsule">
            <div class="item" v-for="(item, index) in responseData.skills" :key="index">
                <div class="text">{{ item.name }}</div>
                <el-progress :percentage="item.percentage" />
            </div>
        </div>
        <div class="divider"></div>
        <div class="text-skills capsule">
            <div class="item" v-for="(item, index) in responseData.text_skills" :key="index">
                <icon source="check" />
                {{ item }}
            </div>
        </div>
        <div class="divider"></div>
        <div class="download-cv capsule">
            <a :href="responseData.cv_path" target="_blank" :title="$t('download_cv')">
                {{ $t('download_cv') }}
                <icon source="download" />
            </a>
        </div>
    </div>
</template>

<script>
import {mapState} from "vuex";

export default {
    name: 'SidebarFrame',
    computed: mapState(['responseData']),
}
</script>