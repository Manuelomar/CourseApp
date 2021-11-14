import {Request,Response} from 'express'
import path from 'path'
import fs from 'fs-extra'

import User from '../models/User.model'

export let getUsers= async(req:Request, res:Response)=>{
    const users = await User.find();
     return res.json(users);
}

export let getUser= async(req:Request, res:Response)=>{
    const {id} = req.params;
    const  users= await User.findById(id);
    console.log(req.params.id)
    return res.json(users);    
}
export let createUser= async(req:Request, res:Response)=>{
    const{Name, LastName}= req.body;
    const newUser ={
        Name:Name,
        LastName:LastName,
    imagePath:req.file?.path
    }; 
  const user=  new User(newUser);
     await user.save();
    console.log(user, 'saving photo')
    console.log(req.body)
    return  res.json({
        message:'User save', 
        user
    })
}; 
export let deleteUser= async(req:Request, res:Response)=>{

    const { id } = req.params;
    const user= await User.findByIdAndRemove(id);
    
    if(user){
        await fs.unlink(path.resolve( user.imagePath))
    }
    
    return res.json({
        menssage:'user Deleted',
        user
    })
}
export let updateUser= async(req:Request, res:Response)=>{
    const {id} = req.params;
    const {Name, LastName} = req.body;
    
    const updateUser= await User.findByIdAndUpdate(id,{
        Name:Name,
        LastName:LastName,
    });
    
    return res.json({
        message:'Successfully update',
        updateUser
    })
}