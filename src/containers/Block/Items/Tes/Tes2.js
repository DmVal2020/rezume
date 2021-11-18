import React from 'react';
import { useForm } from 'react-hook-form';



export default function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors)

  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Last name" {...register("Last name",{ 
          required: "This input is required.",
          pattern: {
            value: /\d+/,
            message: "This input is number only."
          },
          minLength: {
            value: 11,
            message: "This input must exceed 10 characters"
          }
        })} 
        />
     <input {...register("errorMessage", { required: "This is required" })} />
      {errors.errorMessage?.message}
      <input type="text" placeholder="Email" {...register("Email",{required: true, pattern: /^\S+@\S+$/i})} />
      <input type="tel" placeholder="Mobile number" {...register("Mobile number",{required: true, minLength: 6, maxLength: 12})} />

      <input type="submit" />
    </form>
  );
}