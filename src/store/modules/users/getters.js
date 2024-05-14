export default {
    users(state) {
        return state.users;
    },
    paginatedUsers(state) {
        return state.paginatedUsers;
    },
    shouldUpdate(state) {
        const lastFetch = state.lastFetch;
        if (!lastFetch) {
            return true;
        }
        const currentTimeStamp = new Date().getTime();
        return (currentTimeStamp - lastFetch) / 1000 > 60;
    },
};
