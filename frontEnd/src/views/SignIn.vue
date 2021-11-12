<template>
    <section>


        <b-field label="Email"
            type="is-danger"
            message="This email is invalid">
            <b-input type="email"
                v-model="user.Email"
                maxlength="30">
            </b-input>
        </b-field>

        <b-field label="Username"
            type="is-success"
            message="This username is available">
            <b-input
             v-model="user.UserName"  maxlength="30"></b-input>
        </b-field>

         <b-field label="LastName"
            type="is-success"
            message="This username is available">
            <b-input
             v-model="user.LastName"  maxlength="30"></b-input>
        </b-field>

         <b-field label="Name"
            type="is-success"
            message="This username is available">
            <b-input
             v-model="user.Name"  maxlength="30"></b-input>
        </b-field>

        <b-field label="Password"
            type="is-warning"
            :message="['Password is too short', 'Password must have at least 8 characters']">
            <b-input   v-model="user.Password" type="password" maxlength="30"></b-input>
        </b-field>
           <b-button @click="create()">Click Me</b-button>

    </section>
</template>


<script>
import Vue from 'vue';
import {UserService} from '../services/register.service'
import {Register} from '../models/Register.model'

export default Vue.extend({
    data(){
        return{
            service: new UserService(),
            user: new Register()
        }
    },

    methods:{
        async create(){
            const data = await this.service.siqnup(this.user).data
            console.log(data)
            console.log(this.user)
        }
    }
})

</script>