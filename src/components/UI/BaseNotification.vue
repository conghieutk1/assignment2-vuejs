<template>
    <div v-if="isVisible" class="notification">
        {{ message }}
        <button @click="hideNotification">Đóng</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isVisible: false,
            message: '',
        };
    },
    methods: {
        showNotification(message) {
            this.message = message;
            this.isVisible = true;
        },
        hideNotification() {
            this.isVisible = false;
        },
    },
};
</script>

<style>
.notification {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: #f0f0f0;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
}
.notification button {
    margin-left: 10px;
    cursor: pointer;
}
</style>
