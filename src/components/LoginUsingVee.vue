<template>
    <div class="main">
        <div class="form-validate">
            <div class="ttlab-logo text-center">
                <img src="../assets/ttlab-logo.svg" alt="Logo" />
            </div>
            <div class="form-group txt-login mx-auto">Đăng nhập</div>
            <Form class="form-login" @submit="onSubmit">
                <div class="form-group">
                    <label class="label-input">Email</label>
                    <Field
                        type="email"
                        name="email"
                        class="input-field"
                        placeholder="Nhập email"
                        :rules="validateEmail"
                    />
                    <ErrorMessage class="err-mess" name="email" />
                </div>

                <div class="form-group">
                    <label class="label-input">Mật khẩu</label>
                    <Field
                        class="input-field"
                        name="password"
                        type="password"
                        placeholder="Nhập mật khẩu"
                        :rules="validatePassword"
                    />
                    <ErrorMessage class="err-mess" name="password" />
                </div>
                <div class="forPassword">
                    <input
                        class="checkbox"
                        type="checkbox"
                        id="rememberPw"
                        name="rememberPw"
                        value="Bike"
                    />
                    <label for="rememberPw" class="txtRememberPw"
                        >Ghi nhớ mật khẩu</label
                    ><br />

                    <a href="/forgot-password" id="forgotPw" class="forgotPw"
                        >Quên mật khẩu?</a
                    >
                </div>
                <div class="form-group err-mess" v-if="isHaveErrLogin">
                    {{ errMessage }}
                </div>
                <button>Đăng nhập</button>
                <div class="form-group">
                    <p class="text-center isHaveAccount">
                        Bạn chưa có tài khoản?
                        <a id="signup" class="signup" @click="gotoSignUp"
                            >Đăng ký</a
                        >
                    </p>
                </div>
            </Form>
        </div>
    </div>
</template>
<script>
// import BaseInputVue from './UI/BaseInput.vue';
// import BaseForm from './UI/BaseForm.vue';
import { Field, Form, ErrorMessage } from 'vee-validate';
export default {
    components: {
        Form,
        Field,
        ErrorMessage,
    },
    data() {
        return {
            errMessage: '',
            isHaveErrLogin: false,
        };
    },
    methods: {
        async onSubmit(values) {
            this.isHaveErrLogin = false;
            console.log(JSON.stringify(values, null, 2));
            try {
                await this.$store.dispatch('auth/handleLogin', {
                    email: values.email,
                    password: values.password,
                });
                this.$router.replace('/manage-user');
            } catch (e) {
                // console.log('e', e);
                this.isHaveErrLogin = true;
                this.errMessage = e;
            }
        },
        validateEmail(value) {
            if (!value) {
                return 'Email là bắt buộc';
            }
            const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
            if (!regex.test(value)) {
                return 'Email không hợp lệ';
            }
            return true;
        },
        validatePassword(value) {
            if (!value) {
                return 'Mật khẩu là bắt buộc';
            }
            if (value.length < 6) {
                return 'Mật khẩu phải chứa ít nhất 6 ký tự';
            }
            return true;
        },
        gotoSignUp() {
            this.$router.replace('/sign-up');
        },
    },
};
</script>

<style scoped>
.form-validate {
    width: 50%;
    height: auto;
    /* border: 1px solid gray; */
    margin: 60px auto;
    align-items: center;
    padding: 20px;
    border-radius: 15px;
    /* background-color: gainsboro; */
}
.txt-login {
    font-size: 32px;
    font-weight: 600;
    line-height: 48px;
    text-align: center;
    margin: 20px 0px;
}
.form-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 0px;
}
.form-login {
    padding: 15px 15px;
    width: 60%;
    height: auto;
    min-height: 400px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin: 0px auto;
}
.input-field {
    margin: 5px 0px 0px 0px;
    height: 36px;
    border-radius: 5px;
    padding: 0px 10px;
    border: 1px solid #868fa029;
    box-shadow: 0px 1px 2px 0px #0000000f;
    box-shadow: 0px 0px 0px 1px #868fa029;
    font-family: 'Public Sans', sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    text-align: left;
    outline: none;
    /* margin-bottom: 35px; */
}

.input-field:focus {
    outline: none;
}
button {
    background-color: #0f60ff;
    height: 48px;
    color: white;
    outline: none;
    border-radius: 5px;
    font-family: 'Public Sans', system-ui, -apple-system, BlinkMacSystemFont,
        'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
        'Helvetica Neue', sans-serif;
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    text-align: center;
}
button:hover {
    background-color: rgb(82, 82, 235);
}
label {
    margin-bottom: 0px;
    font-family: 'Public Sans', sans-serif;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0.02em;
    text-align: left;
    color: #464f60;
}
.err-mess {
    margin-top: 4px;
    color: #e31931;
}
@media (max-width: 768px) {
    .form-login {
        width: 90%;
    }
}

.forPassword {
    margin-top: -5px;
    display: flex;
    align-items: center;
}
.error-message {
    padding: 0 !important;
    width: fit-content;
    text-align: left;
    font-size: 15px;
    font-weight: 400;
    line-height: 20px;
    color: #ff0000;
}
.checkbox {
    width: 16px;
    height: 16px;
    border-radius: 10px;
    border: 1px solid #bfc4ea;
    opacity: 40%;
    margin-right: 5px;
    cursor: pointer;
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
    margin-left: auto;
    width: fit-content;
    text-align: right;
    font-size: 15px;
    font-weight: 700;
    line-height: 20px;
}
.forgotPw:hover {
    text-decoration: none;
}
.isHaveAccount {
    color: #5a5c6f;
    font-size: 15px;
    font-weight: 400;
    line-height: 20px;
    text-align: center;
}
.signup {
    font-size: 15px;
    font-weight: 700;
    line-height: 20px;
    text-align: center;
    cursor: pointer;
    color: #007bff !important;
}
.signup:hover,
.forgotPw:hover {
    color: rgb(33, 33, 190) !important;
}
</style>
