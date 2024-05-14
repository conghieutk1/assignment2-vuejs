export default {
    addNewUser(state, payload) {
        state.users.push(payload);
    },
    editUser(state, payload) {
        const index = state.users.findIndex((user) => user.id === payload.id);
        console.log('index', index);
        if (index !== -1) {
            state.users.splice(index, 1, payload);
        } else {
            console.error('User not found for editing');
        }
    },
    deleteUser(state, payload) {
        const index = state.users.findIndex((user) => user.id === payload.id);
        if (index !== -1) {
            state.users.splice(index, 1);
        } else {
            console.error('User not found for delete');
        }
    },
    setUsers(state, payload) {
        state.users = payload;
    },
    addPaginatedUsers(state, payload) {
        state.paginatedUsers.push(payload);
    },
    setPaginatedUsers(state, payload) {
        state.paginatedUsers = payload;
    },
    setFetchTimestamp(state) {
        state.lastFetch = new Date().getTime();
    },
};
