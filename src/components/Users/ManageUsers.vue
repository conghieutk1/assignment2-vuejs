<template>
    <div class="manage-user-container">
        <Sidebar :txtPage="sectionName" :current-page="currentPageFromProps" />
        <div class="body-container">
            <div class="title-section">
                <p class="title-section-txt">Danh sách người dùng</p>
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
                        v-model.trim="searchUser"
                    />
                    <img
                        class="search-icon"
                        src="../../assets/items/mingcute_search-line.svg"
                        alt="SVG"
                    />
                </div>
                <BaseModalAddItem v-model:active.sync="show">
                    <p class="title-modal">Tạo mới người dùng</p>
                    <form class="body-modal" @submit.prevent="submitForm">
                        <div class="input-add-item">
                            <label class="label-name">Tên người dùng *</label>
                            <input
                                class="input-data"
                                type="text"
                                v-model="formData.userName"
                                placeholder="Nhập tên người dùng"
                            />
                        </div>
                        <div class="input-add-item">
                            <label class="label-name">Email *</label>
                            <input
                                class="input-data"
                                type="email"
                                v-model="formData.email"
                                placeholder="Nhập email"
                            />
                        </div>
                        <div class="input-add-item">
                            <label class="label-name">Ngày sinh *</label>
                            <input
                                class="input-data"
                                v-model="formData.dob"
                                type="date"
                            />
                        </div>
                        <div class="input-add-item">
                            <label class="label-name">Số điện thoại *</label>
                            <input
                                class="input-data"
                                type="text"
                                v-model="formData.phoneNumber"
                                placeholder="Nhập số điện thoại"
                            />
                        </div>
                        <div class="input-add-item">
                            <label class="label-name">Avatar *</label>
                            <input
                                class="input-data"
                                type="text"
                                v-model="formData.avatar"
                                placeholder="Nhập link ảnh avatar"
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
                    <p class="title-modal">Sửa thông tin người dùng</p>
                    <form class="body-modal" @submit.prevent="submitFormEdit">
                        <div class="input-add-item">
                            <label class="label-name">Tên người dùng *</label>
                            <input
                                class="input-data"
                                type="text"
                                v-model="formData.userName"
                                placeholder="Nhập tên người dùng"
                            />
                        </div>
                        <div class="input-add-item">
                            <label class="label-name">Email *</label>
                            <input
                                class="input-data"
                                type="email"
                                v-model="formData.email"
                                placeholder="Nhập email"
                            />
                        </div>
                        <div class="input-add-item">
                            <label class="label-name">Ngày sinh *</label>
                            <input
                                class="input-data"
                                v-model="formData.dob"
                                type="date"
                            />
                        </div>
                        <div class="input-add-item">
                            <label class="label-name">Số điện thoại *</label>
                            <input
                                class="input-data"
                                type="text"
                                v-model="formData.phoneNumber"
                                placeholder="Nhập số điện thoại"
                            />
                        </div>
                        <div class="input-add-item">
                            <label class="label-name">Avatar *</label>
                            <input
                                class="input-data"
                                type="text"
                                v-model="formData.avatar"
                                placeholder="Nhập link ảnh avatar"
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
                <button
                    type="button"
                    class="add-new"
                    @click="openModalCreateUser"
                >
                    Tạo mới
                </button>
            </div>

            <div class="table-manage">
                <BaseTable
                    :arrItems="getUsersFromStore"
                    :totalItems="getTotalItems"
                    :titleTable="titleTable"
                    @goto-page="handleGotoPage"
                    ref="BaseTable"
                >
                    <template v-slot:renderColumn="{ item }">
                        <td class="column1">
                            <img class="avatar" :src="item.avatar" alt="SVG" />
                        </td>
                        <td class="column2">{{ item.userName }}</td>
                        <td class="column3">{{ item.email }}</td>
                        <td class="column4">{{ item.dob }}</td>
                        <td class="column5">{{ item.phoneNumber }}</td>

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
    components: {
        Sidebar,
        BaseTable,
        BaseModalAddItem,
    },
    created() {
        this.getAllItems();
    },
    data() {
        return {
            formData: {
                id: '',
                userName: '',
                email: '',
                dob: '',
                phoneNumber: '',
                avatar: '',
            },
            searchUser: '',
            pageNumber: 1,
            itemsPerPage: 10,
            show: false,
            showEdit: false,
            currentPageFromProps: '1',
            sectionName: 'QUẢN LÝ NGƯỜI DÙNG',
            titleTable: {
                c1: 'Avatar',
                c2: 'Tên người dùng',
                c3: 'Email',
                c4: 'Ngày sinh',
                c5: 'Số điện thoại',
                c6: 'Hành động',
            },
        };
    },
    computed: {
        getUsersFromStore() {
            if (this.searchUser !== '') {
                const users = this.$store.getters['users/users'];
                const keyword = this.searchUser.toLowerCase();

                // Lọc sản phẩm dựa trên từ khóa tìm kiếm
                const filteredUsers = Object.values(users).filter((user) => {
                    console.log('user ', user);
                    return (
                        user.userName.toLowerCase().includes(keyword) ||
                        user.email.toLowerCase().includes(keyword) ||
                        user.dob.includes(keyword) ||
                        user.phoneNumber.toString().includes(keyword)
                    );
                });
                return filteredUsers;
            }
            const paginatedUsers = this.$store.getters['users/paginatedUsers'];

            return paginatedUsers;
        },
        getTotalItems() {
            const users = this.$store.getters['users/users'];
            if (users) {
                return Object.keys(users).length;
            } else {
                return 0;
            }
        },
    },
    methods: {
        async getAllItems() {
            try {
                await this.$store.dispatch('users/getAllUsers');
                await this.$store.dispatch('users/getUsersForPage', {
                    pageNumber: 1,
                    itemsPerPage: 10,
                });
            } catch (error) {
                this.error = error.message || 'Something went wrong!';
            }
        },

        btnUser() {
            this.$store.dispatch('auth/logout');
            this.$router.replace('/login-using-vee');
        },
        async handleGotoPage(pageNumber, itemsPerPage) {
            try {
                await this.$store.dispatch('users/getUsersForPage', {
                    pageNumber: pageNumber,
                    itemsPerPage: itemsPerPage,
                });
            } catch (error) {
                this.error = error.message || 'Something went wrong!';
            }
        },
        validation() {
            if (!this.formData.userName.trim()) {
                alert('Vui lòng nhập tên người dùng');
                return false;
            }
            if (!this.formData.email.trim()) {
                alert('Vui lòng nhập email');
                return false;
            }
            if (!this.formData.dob.trim()) {
                alert('Vui lòng chọn ngày sinh');
                return false;
            }
            if (!this.formData.phoneNumber.trim()) {
                alert('Vui lòng nhập số điện thoại');
                return false;
            }
            if (!this.formData.avatar.trim()) {
                alert('Vui lòng nhập link ảnh avatar');
                return false;
            }
            return true;
        },
        openModalCreateUser() {
            this.formData = {};
            this.show = !this.show;
        },
        async submitForm() {
            if (this.validation()) {
                const formData = {
                    name: this.formData.userName,
                    email: this.formData.email,
                    dob: this.formData.dob,
                    phone: this.formData.phoneNumber,
                    avatar: this.formData.avatar,
                };
                await this.$store.dispatch('users/addNewUser', formData);
                await this.$refs.BaseTable.fetchDataWhenChanged();
                // clear data
                (this.formData.userName = ''),
                    (this.formData.email = ''),
                    (this.formData.dob = ''),
                    (this.formData.phoneNumber = ''),
                    (this.formData.avatar = ''),
                    // close modal
                    (this.show = false);
                Swal.fire({
                    title: 'Tạo mới người dùng',
                    text: 'Thành công',
                    icon: 'success',
                    confirmButtonText: 'OK',
                });
            }
        },
        async submitFormEdit() {
            if (this.validation()) {
                const formData = {
                    id: this.formData.id,
                    name: this.formData.userName,
                    email: this.formData.email,
                    dob: this.formData.dob,
                    phone: this.formData.phoneNumber,
                    avatar: this.formData.avatar,
                };
                await this.$store.dispatch('users/editUser', formData);
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
                    await this.$store.dispatch('users/deleteUser', {
                        id: item.id,
                    });
                    await this.$refs.BaseTable.fetchDataWhenChanged();
                    Swal.fire({
                        title: 'Xoá người dùng',
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
</style>
