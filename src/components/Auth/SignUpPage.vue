<template>
    <div class="login-container">
        <div class="form-group ttlab-logo text-center">
            <img src="../../assets/ttlab-logo.svg" alt="Logo" />
        </div>
        <div class="form-group txt-login">Đăng ký</div>
        <!-- action="/login" method="post" -->
        <div name="login">
            <div class="form-group">
                <label class="label-input">Email</label>
                <input
                    type="email"
                    name="email"
                    class="form-control"
                    id="email"
                    placeholder="Nhập email"
                    v-model.trim="email"
                    required
                />
            </div>
            <div class="form-group">
                <label class="label-input">Mật khẩu</label>
                <input
                    type="password"
                    name="password"
                    class="form-control"
                    id="password"
                    placeholder="Nhập mật khẩu"
                    v-model.trim="password"
                    required
                />
            </div>
            <div class="form-group error-message" v-if="!formIsValid">
                <label>{{ errMessage }}</label>
            </div>
            <div class="form-group text-center">
                <button class="tx-tfm" @click="handleSignUp">Đăng ký</button>
            </div>

            <div class="form-group">
                <p class="text-center isHaveAccount">
                    Bạn đã có tài khoản?
                    <a id="signin" class="signin" @click="gotoLogin"
                        >Đăng nhập</a
                    >
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import Swal from 'sweetalert2';
export default {
    data() {
        return {
            email: '',
            password: '',
            formIsValid: true,
            isLoading: false,
            errMessage: '',
        };
    },
    methods: {
        async handleSignUp() {
            this.formIsValid = true;
            if (this.email === '' || !this.email.includes('@')) {
                this.errMessage = 'Email không hợp lệ';
                this.formIsValid = false;
                return;
            }
            if (this.password.length < 6) {
                this.errMessage = 'Mật khẩu phải có ít nhất 6 ký tự';
                this.formIsValid = false;
                return;
            }
            await this.$store.dispatch('auth/handleSignUp', {
                email: this.email,
                password: this.password,
            });
            Swal.fire({
                titleText: 'Đăng ký',
                text: 'Đăng ký thành công',
                icon: 'success',
                showConfirmButton: 'false',
            });
            const redirectUrl = '/' + (this.$route.query.redirect || 'login');
            this.$router.replace(redirectUrl);
        },
        gotoLogin() {
            this.$router.replace('/login');
        },
    },
};
</script>

<style scoped>
body {
    /* padding: auto; */
    /* padding-top: 4.2rem !important;
  padding-bottom: 4.2rem; */
    background: rgba(0, 0, 0, 0.4);
}
a {
    text-decoration: none !important;
}
h1,
h2,
h3 {
    font-family: 'Public Sans', cursive;
}

.login-container {
    padding-top: 100px;
}
.form-control {
    max-width: 425px;
    min-width: 300px;
    width: 100%;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    outline: none !important;
    text-align: left;
    border: 1px solid #bcc2ce;
}
.tx-tfm {
    /* text-transform: uppercase; */
    /* max-width: 425px; */
    width: 100%;
    min-width: 300px;
    /* margin: 0px auto; */
    padding: 10px 0px;
    outline: none;
    border: 1px solid transparent;
    background-color: #0f60ff;
    color: white;
    border-radius: 6px;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    text-align: center;
}
.form-group {
    width: 25%;
    max-width: 425px;
    min-width: 300px;
    margin: 0px auto;
    padding: 10px 0px;
}
.label-input {
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0.02em;
    text-align: left;
}
.txt-login {
    font-size: 32px;
    font-weight: 600;
    line-height: 48px;
    text-align: center;
}
.forPassword {
    display: flex;
    /* align-content: center; */
    align-items: center;
}
.checkbox {
    width: 16px;
    height: 16px;
    border-radius: 10px;
    border: 1px solid #bfc4ea;
    opacity: 40%;
    margin-right: 5px;
}
.txtRememberPw {
    padding-top: 5px;
    width: fit-content;
    text-align: left;
    font-size: 15px;
    font-weight: 400;
    line-height: 20px;
}
.forgotPw {
    /* padding-left: 115px; */
    margin-left: auto;
    width: fit-content;
    text-align: right;
    font-size: 15px;
    font-weight: 700;
    line-height: 20px;
}
.error-message {
    padding: 0 !important;
    color: #ff0000;
}
.isHaveAccount {
    /* font-family: 'Public Sans'; */
    color: #5a5c6f;
    font-size: 15px;
    font-weight: 400;
    line-height: 20px;
    text-align: center;
}
.signin {
    font-size: 15px;
    font-weight: 700;
    line-height: 20px;
    text-align: center;
    cursor: pointer;
    color: #0f60ff !important;
}
form .error {
    color: #ff0000;
}
#second {
    display: none;
}
</style>
