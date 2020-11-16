<template>
    <el-aside>
        <SidebarHeader />
        <SidebarFrame />
        <SidebarSocial />
    </el-aside>
</template>

<script>
import {mapState} from "vuex";
import SidebarHeader from "@/views/sidebar/header";
import SidebarFrame from "@/views/sidebar/frame";
import SidebarSocial from "@/views/sidebar/social";

export default {
    name: 'Sidebar',
    components: {
        SidebarSocial,
        SidebarFrame,
        SidebarHeader
    },
    computed: mapState(['responseData']),
}
</script>