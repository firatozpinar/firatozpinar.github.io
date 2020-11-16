<template>
    <div class="socials">
        <div class="item" v-for="(item, index) in responseData.socials" :key="index">
            <a :href="item.url" target="_blank" :title="item.name">
                <icon :source="item.name" alias="fab" />
            </a>
        </div>
    </div>
</template>

<script>
import {mapState} from "vuex";

export default {
    name: 'SidebarSocial',
    computed: mapState(['responseData']),
}
</script>