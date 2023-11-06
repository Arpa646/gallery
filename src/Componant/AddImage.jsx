import React from 'react';
import { useForm } from 'react-hook-form';
// import { useQuery } from 'react-query';
 import { toast } from 'react-toastify';
// import Loading from '../shared/Loading';

const AddImage = () => {
    const { register, formState: { errors }, handleSubmit ,reset} = useForm();
  //  const { data :services, isLoading } = useQuery('services', () => fetch('http://localhost:5000/service').then(res => res.json()))
    const imageStorageKey='287356a777b9455fa16c90caa251ef35'
    const url=`https://api.imgbb.com/1/upload?key=${imageStorageKey}`
    
    
    const onSubmit = async data => {
        console.log('added expert',data)
         const image=data.image[0];
         console.log('hii',image)
       const formData=new FormData();
      formData.append('image',image)
     
       fetch(url,{

        method:'POST',
      body:formData
    })
    .then(res=>res.json())
 .then(result=>{ 
    console.log(result.data.display_url)

       
       if(result.success){
           
            const imgURL =result.data.url
            const expert={
                
             
                 image:imgURL
            }
            fetch('http://localhost:5000/image',{


     method:'POST',
    headers:{
    'content-type':'application/json',
     
    },
    body:JSON.stringify(expert)

            })
            .then(res=>res.json())
            .then(inserted=>
                
                { console.log('added ',inserted)
                    if(inserted.insertedId)
                    {
                        toast.success('expert added successfully')
                     reset();
                    }
                    else{
                        toast.error('Failed to add a expert')
                    }
                    console.log('', inserted)
                })
        }
        console.log('image',result)
       
 
    })
    
    // console.log('data',data)
    
    
     }
    // if (isLoading) {
    //     return <Loading></Loading>
    // }
    return (
        <div>
            <h1 className='text-3xl'> add service</h1>

            <form onSubmit={handleSubmit(onSubmit)}>

           

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








                <input className='btn  w-max-xs ' type="submit" value="Add Product" />
            </form>


        </div>
    );
};

export default AddImage;