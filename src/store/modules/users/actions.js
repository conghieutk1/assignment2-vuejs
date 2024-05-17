export default {
    async addNewUser(context, data) {
        const userId = new Date().getTime();
        const userData = {
            id: userId,
            userName: data.name,
            email: data.email,
            dob: data.dob,
            phoneNumber: data.phone,
            avatar: data.avatar,
        };

        const response = await fetch(
            `https://vue-project-assignmentw2-4-default-rtdb.asia-southeast1.firebasedatabase.app/users/${userId}.json`,
            {
                method: 'PUT',
                body: JSON.stringify(userData),
            }
        );

        if (response.ok) {
            console.log('Create new user successfully!!!');
        }

        context.commit('addNewUser', {
            ...userData,
            id: userId,
        });
    },
    async editUser(context, data) {
        const userId = data.id;
        const userData = {
            id: userId,
            userName: data.name,
            email: data.email,
            dob: data.dob,
            phoneNumber: data.phone,
            avatar: data.avatar,
        };
        const response = await fetch(
            `https://vue-project-assignmentw2-4-default-rtdb.asia-southeast1.firebasedatabase.app/users/${userId}.json`,
            {
                method: 'PATCH', // Sử dụng PATCH để cập nhật một phần dữ liệu
                body: JSON.stringify(userData),
            }
        );
        if (response.ok) {
            context.commit('editUser', userData);
            console.log('User updated successfully');
        } else {
            console.error('Failed to update user:', response.statusText);
        }
    },
    async deleteUser(context, data) {
        let userId = data.id;
        try {
            const response = await fetch(
                `https://vue-project-assignmentw2-4-default-rtdb.asia-southeast1.firebasedatabase.app/users/${userId}.json`,
                {
                    method: 'DELETE', // Sử dụng phương thức DELETE để xoá user
                }
            );
            if (response.ok) {
                console.log('User deleted successfully');
                context.commit('deleteUser', { id: userId });
            } else {
                console.error('Failed to delete user:', response.statusText);
            }
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    },
    async getAllUsers(context) {
        const response = await fetch(
            `https://vue-project-assignmentw2-4-default-rtdb.asia-southeast1.firebasedatabase.app/users.json`
        );
        const responseData = await response.json();
        if (!response.ok) {
            const error = new Error(responseData.message || 'Failed to fetch!');
            throw error;
        }
        const users = [];

        for (const key in responseData) {
            const user = {
                id: responseData[key].id,
                userName: responseData[key].userName,
                email: responseData[key].email,
                dob: responseData[key].dob,
                phoneNumber: responseData[key].phoneNumber,
                avatar: responseData[key].avatar,
            };
            users.push(user);
        }

        context.commit('setUsers', users);
    },
    async getUsersForPage(context, payload) {
        const response = await fetch(
            `https://vue-project-assignmentw2-4-default-rtdb.asia-southeast1.firebasedatabase.app/users.json`
        );

        const responseData = await response.json();
        if (!response.ok) {
            const error = new Error(responseData.message || 'Failed to fetch!');
            throw error;
        }
        const data = Object.values(responseData);

        // Lấy chỉ 10 sản phẩm từ vị trí bắt đầu là 0
        const startIndex =
            payload.pageNumber * payload.itemsPerPage - payload.itemsPerPage;
        const endIndex = payload.pageNumber * payload.itemsPerPage;
        const tempData = data.slice(startIndex, endIndex);
        // console.log('itemsPerPage = ', payload.itemsPerPage);
        // console.log('tempData = ', tempData);

        const paginatedUsers = [];
        for (const key in tempData) {
            const user = {
                id: tempData[key].id,
                userName: tempData[key].userName,
                email: tempData[key].email,
                dob: tempData[key].dob,
                phoneNumber: tempData[key].phoneNumber,
                avatar: tempData[key].avatar,
            };
            paginatedUsers.push(user);
        }
        context.commit('setPaginatedUsers', paginatedUsers);
    },
    searchInfoUser() {},
};
