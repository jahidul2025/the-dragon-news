import React, { use } from 'react';
import { Form } from 'react-router';
import { Link } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Register = () => {

    const { createUser, setUser } = use(AuthContext);
    const handleRegister = (e) => {
        e.preventDefault()

        // console.log(e.target);
        const form = e.target;
        const name = form.name.value;
        const photo = form.Photo.value;
        const email = form.email.value;
        const password = form.Password.value;

        // console.log({ name, photo, email, password })
        createUser(email, password)
            .then((result) => {
                const user = result.user
                // console.log(user)
                setUser(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // console.log(errorMessage)
            })
    }
    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <h2 className='font-bold text-2xl text-center'>Register your account</h2>
                <Form onSubmit={handleRegister} className="card-body">
                    <fieldset className="fieldset">
                        {/* Name */}
                        <label className="label">Name</label>
                        <input name='name' type="text" className="input" placeholder="Name" required />
                        {/* Photo URl*/}
                        <label className="label">Photo URL</label>
                        <input name='Photo' type="text" className="input" placeholder="Photo URl" required />

                        {/* Email */}
                        <label className="label">Email</label>
                        <input name='email' type="email" className="input" placeholder="Email" required />

                        {/* Password */}
                        <label className="label">Password</label>
                        <input name='Password' type="password" className="input" placeholder="Password" required />
                        <button type='submit' className="btn btn-neutral mt-4">Register</button>
                        <p className='font-semibold  text-center pt-5'>Already Have An Account ? <Link className=' text-secondary' to='/auth/login'>Login</Link></p>
                    </fieldset>
                </Form>
            </div>
        </div>
    );
};

export default Register;