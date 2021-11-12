<template>
    <section>
    

        <b-field label="Email">
            <b-input v-model="user.Email" maxlength="30"></b-input>
        </b-field>

        <b-field label="Password">
            <b-input v-model="user.Password" type="password" maxlength="30"></b-input>
        </b-field>
           <b-button @click="create()">Click Me</b-button>
    </section>
</template>

<script>
import Vue from 'vue'
import {Register}  from '../models/Register.model'
import {UserService} from '../services/register.service'

    export default Vue.extend({
        data(){
            return{
                user: new Register(),
                service: new UserService()
            }
        },

        methods:{
            async create(){
                console.log(this.user.Password)
               // const data = await this.service.siqnip(this.user)
               // console.log(data)
            }
        }     

        
    })
</script>