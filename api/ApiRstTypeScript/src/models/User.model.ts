import { Schema, model, Document } from 'mongoose'

const schema = new Schema({
    Name: String,
    LastName: String,
    imagePath: String
});

export interface IUser extends Document {
    Name: string;
    LastName: string;
    imagePath: string;
}

export default model<IUser>('User', schema);