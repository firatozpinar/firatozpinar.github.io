<template>
    <div class="header">
        <div class="media">
            <div class="media-wrp">
                <img :src="responseData.sidebar_profile_image_path" :alt="responseData.name" />
                <el-tooltip popper-class="status-tooltip" effect="dark" :content="responseData.work_status[[$i18n.locale]]" placement="right">
                    <div class="status"></div>
                </el-tooltip>
            </div>
        </div>
        <div class="name">{{ responseData.name }}</div>
        <div class="role" v-html="responseData.role[$i18n.locale]"></div>
    </div>
</template>

<script>
import {mapState} from "vuex";

export default {
    name : 'SidebarHeader',
    computed: mapState(['responseData'])
}
</script>