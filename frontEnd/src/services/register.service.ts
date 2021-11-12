import {Register} from '../models/Register.model'
import axios from 'axios'


export class UserService{
    async profile(){
        const data=await axios.get(process.env.VUE_APP_BASE_URL + "profile")
        return data

    }

    async siqnup(user: Register){

        const data=await axios.post(process.env.VUE_APP_BASE_URL + "signup", user)
        return data

    }
    async siqnip(user: Register){

        const data=await axios.post(process.env.VUE_APP_BASE_URL + "signin", user)
        return data


    }
}