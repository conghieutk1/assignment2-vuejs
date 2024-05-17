<template>
    <table class="w3-table w3-bordered">
        <tr>
            <th class="column1">{{ titleTable.c1 }}</th>
            <th class="column2">{{ titleTable.c2 }}</th>
            <th class="column3">{{ titleTable.c3 }}</th>
            <th class="column4">{{ titleTable.c4 }}</th>
            <th class="column5">{{ titleTable.c5 }}</th>
            <th class="column6">{{ titleTable.c6 }}</th>
        </tr>

        <tr v-for="(item, index) in arrItems" :key="index">
            <slot name="renderColumn" v-bind="{ item }"></slot>
        </tr>
    </table>
    <div class="bottom-row">
        <p class="show-option">
            Showing
            <select class="box-select" v-model="itemsPerPage">
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="30">30</option>
                <option value="40">40</option>
                <option value="50">50</option>
            </select>
            of {{ totalItems }}
        </p>
        <div class="nav-page">
            <nav aria-label="Page navigation example">
                <ul class="pagination">
                    <li class="page-item">
                        <a
                            class="page-link lr"
                            @click="goToPage(currentPage - 1, itemsPerPage)"
                            :style="{
                                'pointer-events':
                                    currentPage > 1 ? 'auto' : 'none',
                                opacity: currentPage > 1 ? 1 : 0.4,
                            }"
                        >
                            <svg
                                class="left"
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M10 4L6 8L10 12"
                                    stroke="#8B909A"
                                    stroke-width="1.75"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        </a>
                    </li>
                    <li
                        class="page-item"
                        v-for="pageNumber in visiblePages"
                        :key="pageNumber"
                        @click="goToPage(pageNumber, itemsPerPage)"
                    >
                        <a
                            class="page-link page"
                            :class="{
                                'current-page': pageNumber == currentPage,
                            }"
                            >{{ pageNumber }}</a
                        >
                    </li>

                    <li class="page-item">
                        <a
                            class="page-link lr"
                            @click="goToPage(currentPage + 1, itemsPerPage)"
                            :style="{
                                'pointer-events':
                                    currentPage < totalPages ? 'auto' : 'none',
                                opacity: currentPage < totalPages ? 1 : 0.4,
                            }"
                            ><svg
                                class="left"
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M6 4L10 8L6 12"
                                    stroke="#8B909A"
                                    stroke-width="1.75"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<script>
export default {
    created() {
        // this.fetchDataForPage(this.currentPage);
    },
    data() {
        return {
            itemsPerPage: 10, // Số lượng mục trên mỗi trang
            currentPage: 1, // Trang hiện tại
            // totalItems: 50, // Tổng số mục
            pageNumber: 1,
            maxVisiblePages: 5,
        };
    },
    props: ['titleTable', 'arrItems', 'totalItems'],
    watch: {
        async itemsPerPage() {
            // newValue, oldValue
            // Thực hiện các thao tác bạn muốn khi itemsPerPage thay đổi
            await this.fetchDataForPage(this.pageNumber, this.itemsPerPage);
        },
    },
    computed: {
        visiblePages() {
            const totalVisiblePages = 5;
            let startPage, endPage;

            if (this.totalPages <= totalVisiblePages) {
                startPage = 1;
                endPage = this.totalPages;
            } else {
                startPage = Math.max(
                    1,
                    this.currentPage - Math.floor(totalVisiblePages / 2)
                );
                endPage = startPage + totalVisiblePages - 1;

                if (endPage > this.totalPages) {
                    endPage = this.totalPages;
                    startPage = endPage - totalVisiblePages + 1;
                }
            }

            let pages = [];
            for (let i = startPage; i <= endPage; i++) {
                pages.push(i);
            }
            return pages;
        },

        totalPages() {
            return Math.ceil(this.totalItems / this.itemsPerPage);
        },
    },
    methods: {
        async fetchDataForPage(pageNumber, itemsPerPage) {
            this.$emit('goto-page', pageNumber, itemsPerPage);
        },
        // Chuyển đến trang cụ thể
        async goToPage(pageNumber, itemsPerPage) {
            if (pageNumber >= 1 && pageNumber <= this.totalPages) {
                this.currentPage = pageNumber;
                // Gọi hàm để lấy dữ liệu cho trang mới ở đây
                await this.fetchDataForPage(pageNumber, itemsPerPage);
            }
        },
        async fetchDataWhenChanged() {
            await this.$emit('goto-page', this.currentPage, this.itemsPerPage);
        },
    },
};
</script>

<style>
.w3-table {
    /* border-collapse: collapse;
  border-spacing: 0; */
    width: 100%;
    display: table;
}
.w3-bordered tr {
    border-bottom: 3px solid #f3f4f8;
}
.w3-table th {
    font-size: 13px;
    font-weight: 500;
    line-height: 15.28px;
    text-align: left;
    color: #8b909a;
    padding: 15px 20px;
    text-transform: uppercase;
}
.w3-table td {
    font-size: 15px;
    font-weight: 600;
    line-height: 22px;
    text-align: left;
    color: #23272e;
    padding: 7px 20px;
}

.avatar {
    width: 36px;
    height: 36px;
}
.delete-icon {
    cursor: pointer;
}
.edit-icon {
    cursor: pointer;
}
.btn-action {
    border: 1px solid transparent;
    background-color: white;
}
.btn-action:hover {
    background-color: #f3f4f8;
    border-radius: 5px;
}
.bottom-row {
    border-bottom: 3px solid transparent !important;
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 20px 20px;
    margin-top: auto;
}

.show-option {
    text-align: left;
    font-size: 15px;
    font-weight: 500;
    line-height: 17.63px;
    letter-spacing: 0.4300000071525574px;
    text-align: left;
    color: #8b909a;
}
.box-select {
    width: 78px;
    height: 38px;
    padding-left: 15px;
    border-radius: 6px;
    border: 1px solid #e9e7fd;
    outline: none;
    cursor: pointer;
}
.box-select:hover {
    border: 1px solid black;
}

.nav-page {
    text-align: right;
}
.left {
    padding-top: 5px;
}
.page-item {
    padding: 0px 1.5px;
}
.page {
    outline: none;
}
.page-link {
    border-radius: 6px;
    color: #8b909a;
    background-color: #f1f2f6;
    font-size: 18px;
    font-weight: 400;
    line-height: 20px;
    text-align: center;
    width: 40px;
    border: 1px solid transparent;
}
.page:hover {
    color: white !important;
    background-color: #0f60ff;
}
.lr:hover {
    color: white !important;
    background-color: orange;
}
.text-area {
    height: 128px !important;
}
.current-page {
    background-color: #0f60ff;
    color: white !important;
}
.current-page:hover {
    background-color: blue;
}
</style>
