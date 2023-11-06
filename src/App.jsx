// Gallery.js
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
//import ImageUpload from './ImageUpload';
// import { useForm } from 'react-hook-form';
const App = () => {
  const { register, formState: { errors }, handleSubmit ,reset} = useForm();

  const handleImageUpload = (newImage) => {
    //setImages([...images, newImage]);
  };
  const onSubmit = async data => {

  }

  return (
    <div>
      <h2>Image Gallery</h2>
      <div class="form-control w-full max-w-xs ">
                    <label class="label ">
                        <span class="label-text">Photo</span>

                    </label>
                    <input className='m-0'
                    type="file"
                       
                        class="input input-bordered w-full max-w-xs" 
                        {...register("image", {
                            required: {
                                value: true,
                                message: 'image is required'
                            },


                        })}
                        />
                    <label class="label">
                        {errors.name?.type === 'required' && <p class="label-text-alt text-red-500">{errors.name.message}</p>}



                    </label>
                </div>


    </div>
  );
};

export default App;
