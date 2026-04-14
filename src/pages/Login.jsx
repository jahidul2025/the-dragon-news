import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {

    const {signIn}=use(AuthContext);

    const handleLogin = (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const Password = form.Password.value
        console.log({ email, Password });
        signIn(email,Password)
        .then((result)=>{
            const user = result.user;
            console.log(user);
            
        })
        .catch((error)=>{
            const errorCode = error.Code;
            const errorMassage = error.message;
            alert(errorCode,errorMassage);
        })
    }
    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <h2 className='font-bold text-2xl text-center'>Login your account</h2>
                <form onSubmit={handleLogin} className="card-body">
                    <fieldset className="fieldset">
                        {/* email */}
                        <label className="label">Email</label>
                        <input name='email' type="email" className="input" placeholder="Email" />
                        {/* password */}
                        <label className="label">Password</label>
                        <input name='Password' type="password" className="input" placeholder="Password" />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button type='submit' className="btn btn-neutral mt-4">Login</button>
                        <p className='font-semibold  text-center pt-5'>Dont’t Have An Account ? <Link className=' text-secondary' to='/auth/register'>register</Link></p>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Login;