<template>
    <el-container>
        <el-main>
            <div class="top-curtain"></div>
            <div class="top-bg">
                <div class="overlay"></div>
            </div>
            <div class="el-main__wrap">
                <ContentHeader />
                <ContentCounter style="display: none" />
                <ContentService />
                <ContentPrice style="display: none"/>
                <ContentTestimonial style="display: none"/>
                <ContentCode style="display: none"/>
                <ContentWorkHistory />
                <ContentWork />
                <ContentEducationHistory />
                <ContentTechnology />
                <ContentContact />
            </div>
        </el-main>
    </el-container>
</template>

<script>
import {mapState} from "vuex";
import ContentHeader from "@/views/content/header";
import ContentCounter from "@/views/content/counter";
import ContentService from "@/views/content/service";
import ContentPrice from "@/views/content/price";
import ContentTestimonial from "@/views/content/testimonial";
import ContentWork from "@/views/content/work";
import ContentEducationHistory from "@/views/content/education-history";
import ContentWorkHistory from "@/views/content/work-history";
import ContentContact from "@/views/content/contact";
import ContentCode from "@/views/content/code";
import ContentTechnology from "@/views/content/technology";

export default {
    name: 'Content',
    components: {
        ContentTechnology,
        ContentCode,
        ContentContact,
        ContentWorkHistory,
        ContentEducationHistory,
        ContentWork,
        ContentTestimonial,
        ContentPrice,
        ContentService,
        ContentCounter,
        ContentHeader
    },
    computed: mapState(['responseData']),
}
</script>