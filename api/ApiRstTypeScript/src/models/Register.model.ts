import {Schema ,model, Document} from 'mongoose';
import bcrypt from 'bcryptjs';

export interface IUsers extends Document{
    Name: string,
    LastName: string,
    UserName:string,
    Email:string,
    Password: string,
    encryptPassword(Password: string): Promise <string>;
    validatePassword(Password: string):Promise <boolean>;
}

const userSchema = new Schema({
    UserName:{
        type:String,
required: true,
min: 4,
lowercase:true

    },
    Email:{
        type:String,
        unique: true,
        required:true,
        lowercase:true
    },
    Password:{
        type:String,
        required:true
    },
    LastName:{
        type:String,
        required:true
    },
    Name:{
        type:String,
        required:true
    }
});


userSchema.methods.encryptPassword = async (Password: string):Promise<string> => {
  const salt= await bcrypt.genSalt(10);
 return bcrypt.hash(Password,salt);
};

userSchema.methods.validatePassword = async function(Password:string):Promise<boolean>{
 return await bcrypt.compare(Password,  this.Password);
}
export default model<IUsers>('Users', userSchema);