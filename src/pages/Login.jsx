import React  from 'react'
import { useForm} from "react-hook-form"

import axios from 'axios';
 

function Login() {

    const { register, handleSubmit, formState: { errors } } = useForm();

  

    const onSub = (data) => {
        const url = "http://localhost:3001/users/login";
        apiLogin(url, data);
        console.log(data)
   
    }


    const apiLogin = async (url, body) => {

        try {
            const resp = await axios.post(url, body);
            console.log(resp.data);

        } catch (error) {

            console.log(error);
        }
    }
  

    return (
        <div className='container'>
            <form onSubmit={handleSubmit(onSub)}>
                <div className="form-group">
                    <label >Email address</label>
                    <input {...register("email")} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />

                </div>
                <div className="form-group">
                    <label >Password</label>
                    <input {...register("password", { required: true, minLength: 2 })} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                    {errors.passowrd && <h2>u must be</h2>}
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Login