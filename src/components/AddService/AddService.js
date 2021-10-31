import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddService.css'

const AddService = () => {
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data =>{
         console.log(data);
         axios.post('https://grim-phantom-33520.herokuapp.com/addservice',data)
         .then(res =>{
             if(res.data.insertedId){
                 alert('Service has been added successfully')
                 reset()
             }
         })
        };
    return (
        <div className ="add-services">
            <h2 className="text-center mt-2">Add Services</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("firstName", { required: true, maxLength: 20 })}placeholder ="name" />
                <textarea {...register("description")} placeholder="description" />
                <input type="number" {...register("price")}placeholder="price" />
                <input {...register("img")}placeholder ="img url" />
                <input type="submit" className="btn btn-primary" />
            </form>
        </div>
    );
};

export default AddService;