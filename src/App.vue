<template>
    <!-- <notifications group="foo" /> -->
    <router-view></router-view>
</template>

<script>
export default {
    components: {},
    computed: {
        didAutoLogout() {
            return this.$store.getters.didAutoLogout;
        },
    },
    created() {
        this.$store.dispatch('auth/tryLogin');
    },
    watch: {
        didAutoLogout(curValue, oldValue) {
            if (curValue && curValue !== oldValue) {
                this.$router.replace('/manage-user');
            }
        },
    },
    methods: {},
};
</script>

<style>
* {
    box-sizing: border-box;
}

html {
    font-family: 'Public Sans', sans-serif;
}

body {
    margin: 0;
}
</style>
