import {connect} from 'mongoose';
export async function startConnection() {
  await connect('mongodb://localhost/CourseApi', 
  {
  }); 
    console.log('Database is connected');
}