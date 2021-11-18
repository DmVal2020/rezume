import React from 'react'
import {useForm} from 'react-hook-form'

const Input = ({ label, register, required }) => ( 
    <>
      <label>{label}</label>
      <input {...register(label,{ required })} />
    </>
  );
function Tes() {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);

    console.log(watch("example"));
    
    return (                                    
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              
                <input  {...register("example")} />
                <br/>
                <input {...register("exampleRequired",{ required: true })}/>
                <br/>
                <Input label="First Name" register={register} required />
                
            </form>
        </div>
    )
}

export default Tes

