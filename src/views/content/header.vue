<template>
    <div class="header">
        <div class="overlay">
            <div class="text">
                <h1 v-html="responseData.banner.slogan[$i18n.locale]"></h1>
                <vue-typed-js :strings="responseData.banner.texts[$i18n.locale]" data-period="2000">
                    <div class="code"> &lt;<i>code</i>&gt; {{ responseData.banner.code_start[$i18n.locale] }} <span class="typing"></span> &lt;/<i>code</i>&gt;</div>
                </vue-typed-js>
                <div class="meta">
                    <el-button class="yellow" type="warning" @click="newBlankPage(responseData.cv_path)">
                        {{ $t('download_cv') }}
                    </el-button>
                </div>
            </div>
            <img :src="responseData.content_profile_image_path" :alt="responseData.name" class="media">
        </div>
    </div>
</template>

<script>
import {mapState} from "vuex";

export default {
    name: 'ContentHeader',
    computed: mapState(['responseData']),
}
</script>