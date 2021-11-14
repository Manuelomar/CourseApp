import {Request,Response} from 'express'
import path from 'path'
import fs from 'fs-extra'

import Course from '../models/Course.Models'

export let getCourses= async(req:Request, res:Response)=>{
    const courses = await Course.find();
     return res.json(courses);
}

export let getCourse= async(req:Request, res:Response)=>{
    const {id} = req.params;
    const  courses= await Course.findById(id);
    console.log(req.params.id)
    return res.json(courses);    
}
export let createCourse= async(req:Request, res:Response)=>{
    const{title, description}= req.body;
    const newCourses ={
        title:title,
        description:description,
    imagePath:req.file?.path
    }; 
  const courses=  new Course(newCourses);
     await courses.save();
    console.log(courses, 'saving course')
    console.log(req.body)
    return  res.json({
        message:'course save', 
        courses
    })
}; 
export let deleteCourse= async(req:Request, res:Response)=>{

    const { id } = req.params;
    const courses= await Course.findByIdAndRemove(id);
    
    if(courses){
        await fs.unlink(path.resolve( courses.imagePath))
    }
    
    return res.json({
        menssage:'course Deleted',
        courses
    })
}
export let updateCourse= async(req:Request, res:Response)=>{
    const {id} = req.params;
    const {title, description} = req.body;
    
    const updateCourse= await Course.findByIdAndUpdate(id,{
        title:title,
        description:description,
    });
    
    return res.json({
        message:'Successfully update',
        updateCourse
    })
}