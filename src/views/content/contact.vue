<template>
    <div>
        <div class="section-box">
            <div class="section-box-title">{{ $t('contact_information') }}</div>
            <div class="body">
                <el-row :gutter="24">
                    <el-col :span="8">
                        <div class="section-item contact-info">
                            <div class="item">
                                <div class="name">{{ $t('email') }}:</div>
                                <div class="description">{{ responseData.contact.email }}</div>
                            </div>
                            <div class="item">
                                <div class="name">{{ $t('phone') }}:</div>
                                <div class="description">{{ responseData.contact.phone }}</div>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="8">
                        <div class="section-item contact-info">

                            <div class="item">
                                <div class="name">Telegram:</div>
                                <div class="description">{{ responseData.contact.telegram }}</div>
                            </div>
                            <div class="item">
                                <div class="name">Skype:</div>
                                <div class="description">{{ responseData.contact.skype }}</div>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="8">
                        <div class="section-item contact-info">
                            <div class="item">
                                <div class="name">{{ $t('country') }}:</div>
                                <div class="description">{{ responseData.contact.residence }}</div>
                            </div>
                            <div class="item">
                                <div class="name">{{ $t('city') }}:</div>
                                <div class="description">{{ responseData.contact.city }}</div>
                            </div>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </div>

        <div class="section-box" style="margin-bottom: 80px">
            <div class="section-box-title">{{ $t('contact_form') }}</div>
            <div class="body">
                <div class="section-item">
                    <el-form ref="form" :model="form" label-position="top">
                        <el-form-item :class="{ 'is-error': submitted && $v.form.name.$error }">
                            <el-input v-model="form.name" prefix-icon="el-icon-user" :placeholder="$t('name')" />
                        </el-form-item>
                        <el-form-item :class="{ 'is-error': submitted && $v.form.email.$error }">
                            <el-input v-model="form.email" prefix-icon="el-icon-message" :placeholder="$t('email')" />
                        </el-form-item>
                        <el-form-item :class="{ 'is-error': submitted && $v.form.message.$error }">
                            <el-input v-model="form.message" prefix-icon="el-icon-chat-line-square"
                                      :placeholder="$t('message')" type="textarea" rows="4" />
                            <div class="prefix-icon">
                                <i class="el-icon-chat-line-square"></i>
                            </div>
                        </el-form-item>
                        <el-button type="warning" @click="handleSubmit" :loading="submitLoading">
                            {{ $t('send_message')}}
                        </el-button>
                    </el-form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapState} from "vuex";
import {email, minLength, required} from "vuelidate/lib/validators";

export default {
    name: 'ContentContact',
    computed: mapState(['responseData']),
    data() {
        return {
            submitLoading: false,
            submitted: false,
            form: {
                apikey: '0d7fe0e26f3902831890fbda1221a97a',
                form_id: '203093855084054'
            }
        }
    },
    validations: {
        form: {
            name: {required},
            email: {required, email},
            message: {required, minLength: minLength(25)},
        }
    },
    methods: {
        handleSubmit() {
            this.submitted = true;

            this.$v.$touch();

            if (this.$v.$invalid) {
                return;
            }

            this.submitLoading = true;

            let submissions = new Object();
            submissions['7'] = this.form.name;
            submissions['4'] = this.form.email;
            submissions['5'] = this.form.message;

            this.$http.post('https://api.jotform.com/form/' + this.form.form_id + '/submissions?apiKey=' + this.form.apikey, {
                apikey: this.form.apikey,
                id: this.form.form_id,
                submission: submissions,
            }).then(response => {
                this.submitLoading = false;
            }, response => {
                this.submitLoading = false;
            });
        }
    }
}
</script>