let timer;

export default {
    async handleLogin(context, payload) {
        let url =
            'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCeW3ndjb1kjQuEC-U20MgF-n21Z8ACvD4';
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                email: payload.email,
                password: payload.password,
                returnSecureToken: true,
            }),
        });
        const responseData = await response.json();
        console.log('res =', responseData);
        if (!response.ok) {
            // const error = new Error(responseData.error.message);
            let errorMessage = responseData.error.message;
            if (errorMessage == 'INVALID_LOGIN_CREDENTIALS') {
                throw 'Email hoặc mật khẩu không chính xác';
            }
            throw 'Có lỗi xảy ra, vui lòng thử lại sau';
        }

        const expiresIn = +responseData.expiresIn * 1000;
        // 60s auto logout
        // const expiresIn = 60000;

        const expirationDate = new Date().getTime() + expiresIn;

        localStorage.setItem('token', responseData.idToken);
        localStorage.setItem('userId', responseData.localId);
        localStorage.setItem('tokenExpiration', expirationDate);

        timer = setTimeout(function () {
            context.dispatch('autoLogout');
        }, expiresIn);

        context.commit('setUser', {
            token: responseData.idToken,
            userId: responseData.localId,
        });

        // const data = Object.values(responseData);
        // console.log('data = ', data);
        // console.log('payload.username ', payload.username);
        // const user = data.find((item) => item.id == payload.username); // ở đây user.id xem là username của người dùng lưu ở db
        // if (user) {
        //     console.log('user.id = ', user.id);
        // }

        // 1715327780021
        // if (!user || user.length === 0) {
        //     return {
        //         errCode: 1,
        //         errMessage: 'Người dùng không tồn tại',
        //     };
        // } else {
        //     // ở đây user.id xem là password của người dùng lưu ở db
        //     if (user.id != payload.password) {
        //         return {
        //             errCode: 2,
        //             errMessage: 'Mật khẩu không đúng',
        //         };
        //     } else {
        //         const userData = {
        //             username: payload.username,
        //             password: payload.password,
        //             id: user.id,
        //             userName: user.userName,
        //             email: user.email,
        //             dob: user.dob,
        //             phoneNumber: user.phoneNumber,
        //             image: user.image,
        //         };
        //         console.log('user = ', userData);
        //         context.commit('setUser', userData);
        //         return {
        //             errCode: 0,
        //             errMessage: 'Đăng nhập thành công',
        //         };
        //     }
        // }
    },
    async handleSignUp(context, payload) {
        console.log('email = ', payload.email);
        console.log('password = ', payload.password);
        let url =
            'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCeW3ndjb1kjQuEC-U20MgF-n21Z8ACvD4';
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                email: payload.email,
                password: payload.password,
                returnSecureToken: true,
            }),
        });
        const responseData = await response.json();
        console.log('responseData', responseData);
        if (!response.ok) {
            const error = new Error(
                responseData.message ||
                    'Đăng ký thất bại. Kiểm tra lại thông tin đăng ký'
            );
            throw error;
        }
    },
    tryLogin(context) {
        const token = localStorage.getItem('token');
        const userId = localStorage.getItem('userId');
        const tokenExpiration = localStorage.getItem('tokenExpiration');

        const expiresIn = +tokenExpiration - new Date().getTime();

        if (expiresIn < 0) {
            return;
        }

        timer = setTimeout(function () {
            context.dispatch('autoLogout');
        }, expiresIn);

        if (token && userId) {
            context.commit('setUser', {
                token: token,
                userId: userId,
            });
        }
    },
    logout(context) {
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        localStorage.removeItem('tokenExpiration');

        clearTimeout(timer);

        context.commit('setUser', {
            token: null,
            userId: null,
        });
    },
    autoLogout(context) {
        context.dispatch('logout');
        context.commit('setAutoLogout');
    },
};
