<template>
    <div>
        <LoadingPlugin :active.sync="isLoading" :is-full-page="true" :width=50 :height=50></LoadingPlugin>

        <div class="app-content content">
            <div class="content-wrapper">
                <div class="content-header row">
                </div>

                <div class="content-body m-0 w-50 m-auto">
                    <!-- Form wizard with icon tabs section start -->
                    <section id="icon-tabs">
                        <div class="row">
                            <div class="col-12">
                                <div class="card">
                                    <div class="card-header">
                                        <h4 class="card-title">Setup Your Account</h4>
                                        <a class="heading-elements-toggle"><i class="la la-ellipsis-h font-medium-3"></i></a>
                                        <div class="heading-elements">
                                            <ul class="list-inline mb-0">
                                                <li><a data-action="collapse"><i class="ft-minus"></i></a></li>
                                                <li><a data-action="reload"><i class="ft-rotate-cw"></i></a></li>
                                                <li><a data-action="expand"><i class="ft-maximize"></i></a></li>
                                                <li><a data-action="close"><i class="ft-x"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="card-content collapse show">
                                        <div class="card-body">
                                            <form @submit.prevent="save()">
                                                <!-- Step 1 -->
<!--                                                <h6><i class="step-icon la la-home"></i> Step 1</h6>-->
                                                <fieldset>
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <div class="form-group">
                                                                <label for="single-select-box">Select Bank :</label>
<!--                                                                <select class="single-select-box selectivity-input" id="single-select-box" data-placeholder="No city selected"-->
<!--                                                                        name="traditional[single]">-->
<!--                                                                    <option v-for="bank in bankList" :key="bank.id" :value="bank.id">{{ bank.name }}</option>-->
<!--                                                                </select>-->

                                                                <select class="custom-select form-control" id="bank-name" v-model="bank_account.bank_id" required>
                                                                    <option value="">Select Bank</option>
                                                                    <option v-for="bank in bankList" :key="bank.id" :value="bank.id">{{ bank.name }}</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <div class="form-group">
                                                                <label for="account-type">Account Type :</label>
                                                                <select class="custom-select form-control" id="account-type" v-model="bank_account.type" required>
                                                                    <option value="savings">Not Sure</option>
                                                                    <option value="savings">Savings</option>
                                                                    <option value="current">Current</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <div class="form-group">
                                                                <label for="account-name">Account Name :</label>
                                                                <input type="text" class="form-control" id="account-name" v-model="bank_account.name" required>
                                                            </div>
                                                        </div>

                                                        <div class="col-md-6">
                                                            <div class="form-group">
                                                                <label for="account-number">Account Number :</label>
                                                                <input type="text" class="form-control" id="account-number" v-model="bank_account.number" min="10" max="10" required>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </fieldset>

                                                <div class="pull-right text-right">
                                                    <button type="submit" class="btn btn-primary">Save <i class="fa fa-save"></i></button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- Form wizard with icon tabs section end -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import http from "../http-common";
    import helpers from "../../helpers";
    import LoadingPlugin from 'vue-loading-overlay'

    export default {
        name: "AccountSetupComponent",
        components: {LoadingPlugin},
        data() {
            return {
                isLoading: false,
                bank_account: {
                    type: null,
                    name: '',
                    number: '',
                    bank_id: null,
                },
                bankList: []
            }
        },

        mounted() {
            this.fetchBanks();
        },

        methods: {
            fetchBanks() {
                http.get('banks/list')
                .then(response => {
                    this.bankList = response.data.data;
                })
                .catch(err => console.log(err));
            },

            save() {
                this.isLoading = true;

                http.post('user/bank/account', this.bank_account)
                    .then(response => {
                        helpers.toast(response.data.message);
                        this.isLoading = false;

                        setTimeout(() => this.$emit('bank-account-saved', true), 2000);
                    })
                    .catch(err => {
                        let msg = err.response.status + ": " + err.response.data.error + ". Try again";
                        helpers.toast(msg, "error");

                        this.isLoading = false;
                    })
            }
        },
    }

</script>

<style scoped>

</style>