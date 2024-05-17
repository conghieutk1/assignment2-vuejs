<template>
    <div class="manage-user-container">
        <Sidebar :txtPage="sectionName" :current-page="currentPageFromProps" />

        <div class="body-container">
            <div class="title-section">
                <p class="title-section-txt">Danh sách sản phẩm</p>
                <div class="btn-notification">
                    <img src="../../assets/items/Notification.svg" alt="SVG" />
                </div>
                <div class="btn-avatar">
                    <img
                        src="../../assets/items/Avatar.svg"
                        alt="SVG"
                        @click="btnUser"
                    />
                </div>
            </div>
            <div class="action">
                <div class="search">
                    <input
                        class="input-search"
                        placeholder="Tìm kiếm"
                        v-model.trim="searchProduct"
                    />
                    <img
                        class="search-icon"
                        src="../../assets/items/mingcute_search-line.svg"
                        alt="SVG"
                    />
                </div>

                <BaseModalAddItem v-model:active.sync="show">
                    <p class="title-modal">Tạo mới sản phẩm</p>
                    <form class="body-modal" @submit.prevent="submitForm">
                        <div class="input-add-item">
                            <label class="label-name">Tên sản phẩm *</label>
                            <input
                                class="input-data"
                                type="text"
                                placeholder="Nhập tên sản phẩm"
                                v-model="formData.productName"
                            />
                        </div>
                        <div class="input-add-item">
                            <label class="label-name">Giá *</label>
                            <input
                                class="input-data"
                                type="text"
                                placeholder="Nhập giá sản phẩm"
                                v-model="formData.price"
                            />
                        </div>
                        <div class="input-add-item">
                            <label class="label-name">Số lượng *</label>
                            <input
                                class="input-data"
                                type="number"
                                placeholder="Nhập số lượng sản phẩm"
                                v-model="formData.amount"
                            />
                        </div>
                        <div class="input-add-item">
                            <label class="label-name">Mô tả</label>
                            <textarea
                                class="input-data text-area"
                                id="description"
                                style="height: 130px"
                                placeholder="Nhập mô tả"
                                v-model="formData.description"
                            />
                        </div>
                        <div class="input-add-item">
                            <label class="label-name">Ảnh sản phẩm *</label>
                            <input
                                class="input-data"
                                type="text"
                                placeholder="Nhập link ảnh sản phẩm"
                                v-model="formData.image"
                            />
                        </div>
                    </form>

                    <div class="footer-modal">
                        <button
                            class="cancel-add"
                            type="button"
                            @click="show = !show"
                        >
                            Huỷ
                        </button>
                        <button
                            class="add-new-modal"
                            type="button"
                            @click="submitForm"
                        >
                            Tạo mới
                        </button>
                    </div>
                </BaseModalAddItem>
                <BaseModalAddItem v-model:active.sync="showEdit">
                    <p class="title-modal">Sửa thông tin sản phẩm</p>
                    <form class="body-modal" @submit.prevent="submitForm">
                        <div class="input-add-item">
                            <label class="label-name">Tên sản phẩm *</label>
                            <input
                                class="input-data"
                                type="text"
                                placeholder="Nhập tên sản phẩm"
                                v-model="formData.productName"
                            />
                        </div>
                        <div class="input-add-item">
                            <label class="label-name">Giá *</label>
                            <input
                                class="input-data"
                                type="text"
                                placeholder="Nhập giá sản phẩm"
                                v-model="formData.price"
                            />
                        </div>
                        <div class="input-add-item">
                            <label class="label-name">Số lượng *</label>
                            <input
                                class="input-data"
                                type="number"
                                placeholder="Nhập số lượng sản phẩm"
                                v-model="formData.amount"
                            />
                        </div>
                        <div class="input-add-item">
                            <label class="label-name">Mô tả</label>
                            <textarea
                                class="input-data text-area"
                                id="description"
                                style="height: 130px"
                                placeholder="Nhập mô tả"
                                v-model="formData.description"
                            />
                        </div>
                        <div class="input-add-item">
                            <label class="label-name">Ảnh sản phẩm *</label>
                            <input
                                class="input-data"
                                type="text"
                                placeholder="Nhập link ảnh sản phẩm"
                                v-model="formData.image"
                            />
                        </div>
                    </form>

                    <div class="footer-modal">
                        <button
                            class="cancel-add"
                            type="button"
                            @click="showEdit = !showEdit"
                        >
                            Huỷ
                        </button>
                        <button
                            class="add-new-modal"
                            type="button"
                            @click="submitFormEdit"
                        >
                            Sửa
                        </button>
                    </div>
                </BaseModalAddItem>
                <button class="add-new" type="button" @click="show = !show">
                    Tạo mới
                </button>
            </div>
            <div class="table-manage">
                <!-- <BaseTable
                    :type="0"
                    :arrItems="getProductsFromStore"
                    :titleTable="titleTable"
                /> -->

                <BaseTable
                    :arrItems="getProductsFromStore"
                    :totalItems="getTotalItems"
                    :titleTable="titleTable"
                    @goto-page="handleGotoPage"
                    ref="BaseTable"
                >
                    <template v-slot:renderColumn="{ item }">
                        <td class="column1">
                            {{ item.productName }}
                        </td>
                        <td class="column2">
                            {{ formatNumber(item.price) }}
                        </td>
                        <td class="column3">
                            {{ item.amount }}
                        </td>
                        <td class="column4">
                            {{ item.description }}
                        </td>
                        <td class="column5">
                            <img class="avatar" :src="item.image" alt="SVG" />
                        </td>

                        <td class="column6">
                            <button class="btn-action">
                                <img
                                    class="edit-icon"
                                    src="../../assets/items/edit.svg"
                                    alt="SVG"
                                    @click="handleEditUser(item)"
                                />
                            </button>
                            <button class="btn-action">
                                <img
                                    class="delete-icon"
                                    src="../../assets/items/trash.svg"
                                    alt="SVG"
                                    @click="handleDeleteUser(item)"
                                />
                            </button>
                        </td>
                    </template>
                </BaseTable>
            </div>
        </div>
    </div>
</template>
<script>
import Sidebar from '../UI/MainSidebar.vue';
import BaseTable from '../UI/BaseTable.vue';
import BaseModalAddItem from '../UI/BaseModalAddItem.vue';
import Swal from 'sweetalert2';

export default {
    created() {
        this.getAllProducts();
    },
    components: {
        Sidebar,
        BaseModalAddItem,
        BaseTable,
    },
    data() {
        return {
            formData: {
                image: '',
                productName: '',
                price: '',
                amount: '',
                description: '',
            },
            searchProduct: '',
            show: false,
            showEdit: false,
            currentPageFromProps: '0',
            sectionName: 'QUẢN LÝ SẢN PHẨM',
            titleTable: {
                c1: 'Tên sản phẩm',
                c2: 'Giá',
                c3: 'Số lượng',
                c4: 'Mô tả',
                c5: 'Ảnh',
                c6: 'Hành động',
            },
        };
    },
    computed: {
        getProductsFromStore() {
            if (this.searchProduct !== '') {
                const products = this.$store.getters['products/products'];
                const keyword = this.searchProduct.toLowerCase();

                // Lọc sản phẩm dựa trên từ khóa tìm kiếm
                const filteredProducts = Object.values(products).filter(
                    (product) => {
                        console.log('product ', product);
                        return (
                            product.productName
                                .toLowerCase()
                                .includes(keyword) ||
                            product.price.toString().includes(keyword) ||
                            product.amount.toString().includes(keyword) ||
                            product.description.toLowerCase().includes(keyword)
                        );
                    }
                );

                return filteredProducts;
            }
            const paginatedProducts =
                this.$store.getters['products/paginatedProducts'];
            return paginatedProducts;
        },
        getTotalItems() {
            const products = this.$store.getters['products/products'];
            if (products) {
                return Object.keys(products).length;
            } else {
                return 0;
            }
        },
    },
    methods: {
        async getAllProducts() {
            try {
                await this.$store.dispatch('products/getAllProducts');
                await this.$store.dispatch('products/getProductsForPage', {
                    pageNumber: 1,
                    itemsPerPage: 10,
                });
            } catch (error) {
                this.error = error.message || 'Something went wrong!';
            }
        },
        async handleGotoPage(pageNumber, itemsPerPage) {
            try {
                await this.$store.dispatch('products/getProductsForPage', {
                    pageNumber: pageNumber,
                    itemsPerPage: itemsPerPage,
                });
            } catch (error) {
                this.error = error.message || 'Something went wrong!';
            }
        },
        btnUser() {
            this.$store.dispatch('auth/logout');
            this.$router.replace('/login');
        },
        formatNumber(number) {
            return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        },

        validation() {
            if (!this.formData.productName.trim()) {
                alert('Vui lòng nhập tên sản phẩm');
                return false;
            }
            if (!this.formData.price) {
                alert('Vui lòng nhập giá sản phẩm');
                return false;
            }
            if (!this.formData.amount) {
                alert('Vui lòng chọn số lượng sản phẩm');
                return false;
            }

            if (!this.formData.image.trim()) {
                alert('Vui lòng nhập link ảnh sản phẩm');
                return false;
            }
            return true;
        },
        async submitForm() {
            if (this.validation()) {
                const formData = {
                    name: this.formData.productName,
                    price: this.formData.price,
                    amount: this.formData.amount,
                    descript: this.formData.description,
                    image: this.formData.image,
                };
                await this.$store.dispatch('products/addNewProduct', formData);
                await this.$refs.BaseTable.fetchDataWhenChanged();
                // clear data
                (this.formData.productName = ''),
                    (this.formData.price = ''),
                    (this.formData.amount = ''),
                    (this.formData.description = ''),
                    (this.formData.image = ''),
                    // close modal
                    (this.show = false);
            }
        },
        async submitFormEdit() {
            if (this.validation()) {
                const formData = {
                    id: this.formData.id,
                    name: this.formData.productName,
                    price: this.formData.price,
                    amount: this.formData.amount,
                    descript: this.formData.description,
                    image: this.formData.image,
                };
                await this.$store.dispatch('products/editProduct', formData);
                await this.$refs.BaseTable.fetchDataWhenChanged();
                // close modal
                this.showEdit = false;
                Swal.fire({
                    title: 'Chỉnh sửa thông tin',
                    text: 'Thành công',
                    icon: 'success',
                    confirmButtonText: 'OK',
                });
            }
        },
        handleEditUser(item) {
            this.showEdit = !this.showEdit;
            this.formData = JSON.parse(JSON.stringify(item));
            console.log('item = ', item);
        },
        async handleDeleteUser(item) {
            const result = await Swal.fire({
                title: 'Bạn có chắc chắn?',
                text: 'Bạn sẽ không thể hoàn tác điều này!',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Đồng ý!',
                cancelButtonText: 'Huỷ',
            });

            if (result.isConfirmed) {
                try {
                    await this.$store.dispatch('products/deleteProduct', {
                        id: item.id,
                    });
                    await this.$refs.BaseTable.fetchDataWhenChanged();
                    Swal.fire({
                        title: 'Xoá sản phẩm',
                        text: 'Thành công',
                        icon: 'success',
                        confirmButtonText: 'OK',
                    });
                } catch (error) {
                    console.error('Error deleting user:', error);
                    Swal.fire({
                        title: 'Lỗi',
                        text: 'Xảy ra lỗi trong quá trình xoá người dùng',
                        icon: 'error',
                        confirmButtonText: 'OK',
                    });
                }
            }
        },
    },
};
</script>
<style scoped>
html {
    font-family: 'Public Sans', sans-serif;
}
.manage-user-container {
    display: flex;
}
.body-container {
    background-color: #f3f4f8;
    flex: 1;
    padding-bottom: 20px;
}
.title-section {
    display: flex;
}
.title-section-txt {
    font-size: 24px;
    font-weight: 600;
    line-height: 22px;
    text-align: left;
    margin: 20px 30px;
}
.btn-notification {
    margin-left: auto;
    margin-top: 20px;
    padding-right: 20px;
    align-content: center;
    cursor: pointer;
}
.btn-avatar {
    margin-top: 20px;
    padding-right: 30px;
    cursor: pointer;
}
.action {
    display: flex;
    padding: 30px 30px;
}
.search {
    position: relative;
    display: inline-block;
}

.input-search {
    padding-left: 14px;
    padding-right: 30px; /* Để tạo không gian cho biểu tượng */
    width: 316px;
    height: 37px;
    outline: none;
    border: transparent;
    background: white;
    border-radius: 5px;
}

.search-icon {
    position: absolute;
    /* top: 50%; */
    /* right: 10px; */
    /* transform: translateY(-50%); */
    left: 287px;
    top: 8px;
    width: 20px; /* Điều chỉnh kích thước của biểu tượng */
    height: auto; /* Điều chỉnh kích thước của biểu tượng */
    cursor: pointer;
}
.add-new {
    font-family: ' Public Sans', sans-serif !important;
    font-size: 14px !important;
    font-weight: 600 !important;
    line-height: 16px;
    text-align: center;
    margin-left: auto;
    width: 122px;
    height: 40px;
    background-color: #0f60ff !important;
    border: 1px solid transparent;
    color: white;
    border-radius: 5px;
    cursor: pointer;
    text-transform: none !important;
    outline: none;
}
.add-new:hover {
    background-color: orange !important;
}

.table-manage {
    margin: 0px 30px;
    /* padding: 10px 20px; */
    width: (100%) - 60px;
    height: auto;
    min-height: 700px;
    background-color: #ffffff;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
}
.btn-action {
    outline: none !important;
}
.modal {
    width: 440px !important;
    height: 614px !important;
    border-radius: 12px;
}
.number-format::after {
    content: ',';
}
</style>
