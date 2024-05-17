<template>
    <div
        :class="{
            sidebar: true,
            'mini-sidebar': isMiniSidebarActive,
            'big-sidebar': isMiniSidebarActive,
        }"
    >
        <div class="menu">
            <a class="sidebar-header">
                <svg
                    width="148"
                    height="24"
                    viewBox="0 0 148 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="logo"
                    :style="{ display: isMiniSidebarActive ? 'none' : 'block' }"
                >
                    <path
                        d="M49.6513 7.50327H46.7216V17.7019H45.1362V7.50327H42.2203V6.29568H49.6513V7.50327Z"
                        fill="black"
                    />
                    <path
                        d="M58.6195 13.5754C58.6195 14.928 58.268 15.9836 57.5717 16.7358C56.8756 17.4879 55.938 17.8674 54.7593 17.8674C53.6012 17.8674 52.6775 17.4879 51.9951 16.7358C51.3127 15.9836 50.968 14.928 50.968 13.5754V10.4427C50.968 9.09722 51.3127 8.04145 51.9951 7.27549C52.6844 6.51647 53.6012 6.13011 54.7524 6.13011C55.9242 6.13011 56.8549 6.50962 57.5579 7.27549C58.261 8.04145 58.6126 9.09028 58.6126 10.4427V13.5754H58.6195ZM57.041 10.4151C57.041 9.42147 56.8411 8.6694 56.4482 8.15188C56.0483 7.6412 55.49 7.37897 54.7662 7.37897C54.0493 7.37897 53.5048 7.63436 53.1187 8.15188C52.7395 8.6694 52.5466 9.42147 52.5466 10.4151V13.5754C52.5466 14.576 52.7395 15.335 53.1187 15.8526C53.5048 16.3701 54.0493 16.6254 54.7593 16.6254C55.49 16.6254 56.0552 16.3701 56.4482 15.8526C56.8411 15.3419 57.041 14.576 57.041 13.5686V10.4151Z"
                        fill="black"
                    />
                    <path
                        d="M62.4797 12.5888H61.3905V17.7019H59.7982V6.29568H61.3905V11.3122H62.3349L65.3473 6.29568H67.2429L63.6585 11.7124L67.5187 17.7088H65.5748L62.4797 12.5888Z"
                        fill="black"
                    />
                    <path
                        d="M72.5025 11.8366H72.5508L74.8807 6.29568H76.6454L73.2952 13.5962V17.7019H71.7167V13.4927L68.4079 6.29568H70.1863L72.5025 11.8366Z"
                        fill="black"
                    />
                    <path
                        d="M85.2067 13.5754C85.2067 14.928 84.8552 15.9836 84.1589 16.7358C83.4627 17.4879 82.5253 17.8674 81.3465 17.8674C80.1885 17.8674 79.2648 17.4879 78.5823 16.7358C77.8999 15.9836 77.5552 14.928 77.5552 13.5754V10.4427C77.5552 9.09722 77.8999 8.04145 78.5823 7.27549C79.2716 6.51647 80.1885 6.13011 81.3396 6.13011C82.5115 6.13011 83.442 6.50962 84.1451 7.27549C84.8483 8.04145 85.1998 9.09028 85.1998 10.4427V13.5754H85.2067ZM83.6281 10.4151C83.6281 9.42147 83.4282 8.6694 83.0353 8.15188C82.6356 7.6412 82.0772 7.37897 81.3533 7.37897C80.6365 7.37897 80.0919 7.63436 79.7059 8.15188C79.3268 8.6694 79.1338 9.42147 79.1338 10.4151V13.5754C79.1338 14.576 79.3268 15.335 79.7059 15.8526C80.0919 16.3701 80.6365 16.6254 81.3465 16.6254C82.0772 16.6254 82.6424 16.3701 83.0353 15.8526C83.4282 15.3419 83.6281 14.576 83.6281 13.5686V10.4151Z"
                        fill="black"
                    />
                    <path
                        d="M94.506 8.07595H91.9348V17.7019H89.7152V8.07595H87.1646V6.29568H94.506V8.07595Z"
                        fill="#E31931"
                    />
                    <path
                        d="M102.392 12.6992H98.566V15.9285H103.067V17.7088H96.3326V6.29568H103.047V8.07595H98.5591V10.9189H102.385V12.6992H102.392Z"
                        fill="#E31931"
                    />
                    <path
                        d="M112.263 14.0309L112.284 14.0791C112.29 15.335 111.994 16.2804 111.394 16.9152C110.788 17.55 109.899 17.8743 108.72 17.8743C107.541 17.8743 106.597 17.5155 105.894 16.791C105.19 16.0665 104.839 15.0452 104.839 13.7134V10.3047C104.839 8.98678 105.177 7.95869 105.859 7.22725C106.542 6.49582 107.451 6.13695 108.596 6.13695C109.809 6.13695 110.719 6.46129 111.339 7.10988C111.96 7.75857 112.277 8.7177 112.297 9.9873L112.277 10.0356H110.133C110.167 9.28354 110.064 8.74528 109.83 8.41409C109.595 8.08281 109.182 7.91721 108.603 7.91721C108.099 7.91721 107.72 8.11049 107.451 8.50379C107.183 8.89709 107.052 9.49051 107.052 10.2841V13.7134C107.052 14.5208 107.196 15.1142 107.479 15.5076C107.762 15.9009 108.182 16.0941 108.727 16.0941C109.264 16.0941 109.637 15.9423 109.85 15.6249C110.064 15.3143 110.154 14.783 110.126 14.0309H112.263Z"
                        fill="#E31931"
                    />
                    <path
                        d="M121.424 17.7019H119.198V12.9751H115.661V17.7019H113.428V6.29568H115.661V11.2018H119.198V6.29568H121.424V17.7019Z"
                        fill="#E31931"
                    />
                    <path
                        d="M125.326 15.9216H129.489V17.7019H123.092V6.29568H125.326V15.9216Z"
                        fill="#E31931"
                    />
                    <path
                        d="M136.658 15.2661H133.653L133.039 17.7019H130.792L134.004 6.29568H136.321L139.526 17.7019H137.279L136.658 15.2661ZM134.108 13.4858H136.203L135.176 9.44913H135.128L134.108 13.4858Z"
                        fill="#E31931"
                    />
                    <path
                        d="M140.312 17.7019V6.29568H143.669C144.841 6.29568 145.757 6.55792 146.419 7.08238C147.081 7.60675 147.411 8.37956 147.411 9.4146C147.411 9.9598 147.294 10.4428 147.054 10.8568C146.812 11.2777 146.454 11.5951 145.971 11.8022C146.571 11.9401 147.012 12.2506 147.302 12.7198C147.591 13.189 147.729 13.7411 147.729 14.376C147.729 15.4662 147.419 16.2942 146.791 16.86C146.164 17.4258 145.275 17.7088 144.11 17.7088H140.312V17.7019ZM142.545 11.1121H143.772C144.227 11.1052 144.571 10.9672 144.82 10.7188C145.061 10.4634 145.185 10.0977 145.185 9.62166C145.185 9.09035 145.061 8.69705 144.806 8.44861C144.558 8.20017 144.179 8.07595 143.669 8.07595H142.538V11.1121H142.545ZM142.545 12.6715V15.9216H144.117C144.585 15.9216 144.937 15.7905 145.171 15.5283C145.406 15.2661 145.523 14.8796 145.523 14.3621C145.523 13.817 145.426 13.403 145.227 13.1063C145.027 12.8165 144.709 12.6647 144.269 12.6647H142.545V12.6715Z"
                        fill="#E31931"
                    />
                    <path
                        d="M11.7119 8.56338C11.7119 13.0797 2.4777 23.4545 0.899082 23.4545C0.544738 23.4545 0.271179 23.1717 0.271179 22.826C0.271179 20.541 7.13292 13.5376 7.13292 9.05727C7.13292 3.93939 1.41035 2.60607 1.41035 1.23681C1.41035 0.945008 1.70635 0.549946 2.15482 0.549946C3.50921 0.545457 11.7119 3.91695 11.7119 8.56338Z"
                        fill="#E31931"
                    />
                    <path
                        d="M20.8652 8.56338C20.8652 13.0797 11.631 23.4545 10.0524 23.4545C9.6981 23.4545 9.42455 23.1717 9.42455 22.826C9.42455 20.541 16.2862 13.5376 16.2862 9.05727C16.2862 3.93939 10.5637 2.60607 10.5637 1.23681C10.5637 0.945008 10.8596 0.549946 11.3081 0.549946C12.6625 0.545457 20.8652 3.91695 20.8652 8.56338Z"
                        fill="black"
                    />
                    <path
                        d="M23.1526 15.4366C23.1526 10.9158 32.3868 0.545456 33.9654 0.545456C34.3197 0.545456 34.5933 0.828285 34.5933 1.17396C34.5933 3.45903 27.7315 10.4624 27.7315 14.9427C27.7315 20.0606 33.4542 21.3939 33.4542 22.7632C33.4542 23.055 33.1582 23.4501 32.7097 23.4501C31.3553 23.4501 23.1526 20.083 23.1526 15.4366Z"
                        fill="black"
                    />
                </svg>
                <!-- <svg
          width="12"
          height="24"
          viewBox="0 0 12 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          :style="{ display: !isMiniSidebarActive ? 'none' : 'block' }"
        >
          <path
            d="M11.7119 8.56337C11.7119 13.0796 2.4777 23.4545 0.899082 23.4545C0.544738 23.4545 0.271179 23.1717 0.271179 22.826C0.271179 20.5409 7.13292 13.5376 7.13292 9.05725C7.13292 3.93938 1.41035 2.60605 1.41035 1.2368C1.41035 0.944993 1.70635 0.549931 2.15482 0.549931C3.50921 0.545442 11.7119 3.91693 11.7119 8.56337Z"
            fill="#E31931"
          />
        </svg>
        <svg
          width="12"
          height="24"
          viewBox="0 0 12 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          :style="{ display: !isMiniSidebarActive ? 'none' : 'block' }"
        >
          <path
            d="M11.8652 8.56337C11.8652 13.0796 2.63101 23.4545 1.05238 23.4545C0.698105 23.4545 0.424545 23.1717 0.424545 22.826C0.424545 20.5409 7.28622 13.5376 7.28622 9.05725C7.28622 3.93938 1.56365 2.60605 1.56365 1.2368C1.56365 0.944993 1.85965 0.549931 2.30812 0.549931C3.66251 0.545442 11.8652 3.91693 11.8652 8.56337Z"
            fill="black"
          />
        </svg>
        <svg
          width="12"
          height="24"
          viewBox="0 0 12 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          :style="{ display: !isMiniSidebarActive ? 'none' : 'block' }"
        >
          <path
            d="M0.152603 15.4366C0.152603 10.9158 9.38676 0.54541 10.9654 0.54541C11.3197 0.54541 11.5933 0.828239 11.5933 1.17392C11.5933 3.45899 4.73154 10.4624 4.73154 14.9427C4.73154 20.0606 10.4542 21.3939 10.4542 22.7632C10.4542 23.0549 10.1582 23.45 9.7097 23.45C8.35525 23.45 0.152603 20.083 0.152603 15.4366Z"
            fill="black"
          />
        </svg> -->

                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="indent"
                    :class="{
                        'indent-decrease': true,
                        'indent-decrease-mini-sidebar': isMiniSidebarActive,
                    }"
                    @click="toggleMiniSidebar"
                >
                    <path
                        d="M20 6H13"
                        stroke="#8B909A"
                        stroke-width="1.75"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    <path
                        d="M20 12H11"
                        stroke="#8B909A"
                        stroke-width="1.75"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    <path
                        d="M20 18H13"
                        stroke="#8B909A"
                        stroke-width="1.75"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    <path
                        d="M8 8L4 12L8 16"
                        stroke="#8B909A"
                        stroke-width="1.75"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
            </a>
        </div>
        <div
            class="txt-page"
            :style="{ display: isMiniSidebarActive ? 'none' : 'block' }"
        >
            {{ txtPage }}
        </div>
        <div class="list-mamage">
            <div
                class="product"
                :class="{ 'btn-active': currentPage == 0 }"
                @click="directToManageProduct"
            >
                <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M11 2.75L18.3333 6.875V15.125L11 19.25L3.66667 15.125V6.875L11 2.75"
                        stroke="#8B909A"
                        stroke-width="1.75"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    <path
                        d="M11 2.75L18.3333 6.875V15.125L11 19.25L3.66667 15.125V6.875L11 2.75"
                        stroke="#8B909A"
                        stroke-width="1.75"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    <path
                        d="M11 11L18.3333 6.875"
                        stroke="#8B909A"
                        stroke-width="1.75"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    <path
                        d="M11 11L18.3333 6.875"
                        stroke="#8B909A"
                        stroke-width="1.75"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    <path
                        d="M11 11V19.25"
                        stroke="#8B909A"
                        stroke-width="1.75"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    <path
                        d="M11 11V19.25"
                        stroke="#8B909A"
                        stroke-width="1.75"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    <path
                        d="M11 11L3.66667 6.875"
                        stroke="#8B909A"
                        stroke-width="1.75"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    <path
                        d="M11 11L3.66667 6.875"
                        stroke="#8B909A"
                        stroke-width="1.75"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
                <p
                    class="txtButton"
                    :style="{ display: isMiniSidebarActive ? 'none' : 'block' }"
                    :class="{ 'txt-active': currentPage == 0 }"
                >
                    Sản phẩm
                </p>
            </div>
            <div
                class="user"
                :class="{ 'btn-active': currentPage == 1 }"
                @click="directToManageUser"
            >
                <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <ellipse
                        cx="8.25"
                        cy="6.41667"
                        rx="3.66667"
                        ry="3.66667"
                        stroke="#23272E"
                        stroke-width="1.75"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    <ellipse
                        cx="8.25"
                        cy="6.41667"
                        rx="3.66667"
                        ry="3.66667"
                        stroke="#23272E"
                        stroke-width="1.75"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    <path
                        d="M2.75 19.25V17.4167C2.75 15.3916 4.39162 13.75 6.41667 13.75H10.0833C12.1084 13.75 13.75 15.3916 13.75 17.4167V19.25"
                        stroke="#23272E"
                        stroke-width="1.75"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    <path
                        d="M2.75 19.25V17.4167C2.75 15.3916 4.39162 13.75 6.41667 13.75H10.0833C12.1084 13.75 13.75 15.3916 13.75 17.4167V19.25"
                        stroke="#23272E"
                        stroke-width="1.75"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    <path
                        d="M14.6667 2.86902C16.2891 3.28442 17.4239 4.74634 17.4239 6.4211C17.4239 8.09586 16.2891 9.55778 14.6667 9.97318"
                        stroke="#23272E"
                        stroke-width="1.75"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    <path
                        d="M14.6667 2.86902C16.2891 3.28442 17.4239 4.74634 17.4239 6.4211C17.4239 8.09586 16.2891 9.55778 14.6667 9.97318"
                        stroke="#23272E"
                        stroke-width="1.75"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    <path
                        d="M19.25 19.25V17.4166C19.2404 15.7525 18.1113 14.3035 16.5 13.8875"
                        stroke="#23272E"
                        stroke-width="1.75"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    <path
                        d="M19.25 19.25V17.4166C19.2404 15.7525 18.1113 14.3035 16.5 13.8875"
                        stroke="#23272E"
                        stroke-width="1.75"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
                <p
                    class="txtButton"
                    :style="{ display: isMiniSidebarActive ? 'none' : 'block' }"
                    :class="{ 'txt-active': currentPage == 1 }"
                >
                    Người dùng
                </p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            isMiniSidebarActive: false,
        };
    },
    props: ['txtPage', 'currentPage'],
    methods: {
        toggleMiniSidebar() {
            this.isMiniSidebarActive = !this.isMiniSidebarActive;
        },
        directToManageUser() {
            // có thể dùng route-link thay cho hàm này
            this.$router.replace('/manage-user');
        },
        directToManageProduct() {
            this.$router.replace('/manage-product');
        },
    },
};
</script>
<style scoped>
.sidebar {
    position: relative;
    overflow: hidden;
    top: 0;
    transition: unset;
    width: 260px;
    /* z-index: 1; */
    height: 100vh;
}
.menu {
    height: 68px;
    padding: 20px 14px 20px 18px;
}
.sidebar-header {
    display: flex;
    overflow: hidden;
    top: 0;
    transition: unset;
}
.logo {
    cursor: pointer;
}
.indent-decrease {
    cursor: pointer;
    /* position: absolute;
  top: 20px;
  left: 220px;
  z-index: 2000; */
    margin-left: auto;
}

.indent-decrease-mini-sidebar {
    transform: scaleX(-1);
    /* background: white; */
    position: absolute;
    top: 20px;
    left: 31px;
    /* border: 1px solid red; */
    /* z-index: 2; */
    margin-left: 0px;
}
.mini-sidebar {
    /* display: flex; */
    gap: 20px;
    width: 86px;
}
.big-sidebar {
    /* display: flex; */
}
.txt-page {
    height: 44px;
    font-size: 14px;
    font-weight: 400;
    line-height: 14px;
    text-align: left;
    color: #8b909a;
    align-content: center;
    padding: 0px 30px;
}
.product {
    height: 40px;
    margin: 0px 10px 4px 10px;
    padding-left: 20px;
    align-items: center;
    display: flex;
    border-radius: 5px;
    cursor: pointer;
}
.product:hover {
    /* CSS áp dụng khi hover */
    background-color: #f3f4f8; /* Ví dụ: thay đổi màu nền */
}
.user:hover {
    /* CSS áp dụng khi hover */
    background-color: #f3f4f8; /* Ví dụ: thay đổi màu nền */
}

.txtButton {
    font-size: 15px;
    font-weight: 400;
    line-height: 22px;
    text-align: left;
    padding-top: 14px;
    margin-left: 10px;
    color: #8b909a;
}
.user {
    height: 40px;
    margin: 4px 10px 0px 10px;
    padding-left: 20px;
    align-items: center;
    display: flex;

    border-radius: 5px;
    cursor: pointer;
}
.btn-active {
    background-color: #f3f4f8 !important;
}
.txt-active {
    font-weight: 500;
    color: #23272e;
}
</style>
