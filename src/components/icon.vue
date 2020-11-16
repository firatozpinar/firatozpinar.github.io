<template>
	<font-awesome-icon class="icon" :icon="validate()" />
</template>

<script>
	export default {
		name: 'Icon',
		props: {
			alias: {
				type: String,
				default: 'fas' // fas, far, fab
			},
			source: {
				type: String,
				default: 'account'
			},
		},
		methods: {
			validate() {
				return [this.alias, this.source];
			}
		}
	}
</script>
