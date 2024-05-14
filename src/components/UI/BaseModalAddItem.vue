<template>
    <transition name="dialog">
        <div v-if="active" class="dialog-backdrop" @click="handleBackdropClick">
            <div class="dialog-container" @click.stop>
                <slot />
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'AddItemForm',
    data() {
        return {};
    },
    props: {
        active: { type: Boolean, default: false },
    },
    methods: {
        handleBackdropClick() {
            this.$emit('update:active', false);
        },
    },
};
</script>

<style>
.dialog-backdrop {
    z-index: 2;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
}

.dialog-container {
    max-width: 500px;
    box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.2),
        0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12);
    margin-top: 30px;
    margin-left: auto;
    margin-right: auto;
    /* padding: 15px; */
    background-color: #fff;
    border-radius: 15px;
}

.dialog-enter-active,
.dialog-leave-active {
    transition: opacity 0.2s;
}
.dialog-enter,
.dialog-leave-to {
    opacity: 0;
}

.dialog-enter-active .dialog-container,
.dialog-leave-active .dialog-container {
    transition: transform 0.4s;
}
.dialog-enter .dialog-container,
.dialog-leave-to .dialog-container {
    transform: scale(0.9);
}
.body-modal {
    border: 1px solid #ebeefa;
    background: #f7f8fa;
    padding-bottom: 10px;
}
.title-modal {
    font-family: 'Public Sans', sans-serif;
    font-size: 18px;
    font-weight: 600;
    line-height: 21.15px;
    text-align: left;
    margin: 0 !important;
    padding: 15px 20px;
}
.input-add-item {
    padding: 10px 20px 0px 20px;
    /* display: flex; */
}
.label-name {
    width: 100%;
    font-family: 'Public Sans', sans-serif;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0.02em;
    text-align: left;
}
.input-data {
    font-family: 'Public Sans', sans-serif !important;
    font-size: 14px;
    font-weight: 300;
    line-height: 20px;
    text-align: left;
    color: black !important;
    width: 100%;
    background-color: white;
    padding: 7px 10px;
    border-radius: 6px;
    border: 1px solid #ebeefa;
    outline: none;
}
.input-data:hover {
    border: 1px solid black;
}
.footer-modal {
    /* margin-top: 10px; */
    padding: 10px 20px;
    display: flex !important;
    justify-content: right;
}
.add-new-modal:hover {
    background-color: orange !important;
}
.add-new-modal {
    font-family: ' Public Sans', sans-serif !important;
    font-size: 14px !important;
    font-weight: 600 !important;
    line-height: 16px;
    text-align: center;
    background-color: #0f60ff !important;
    border: 1px solid transparent;
    color: white;
    border-radius: 5px;
    cursor: pointer;
    text-transform: none !important;
    margin-left: 0px !important;
    height: 35px !important;
    width: 100px !important;
    outline: none;
}
.cancel-add {
    /* margin-left: auto; */
    background-color: white;
    height: 35px;
    border: 1px solid #464f6029;
    margin: 0px 10px 0px 0px;
    border-radius: 5px;
    font-family: ' Public Sans', sans-serif !important;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0.02em;
    text-align: left;
    padding: 0px 17px;
    outline: none;
}
.cancel-add:hover {
    background-color: #464f6029;
}
</style>
