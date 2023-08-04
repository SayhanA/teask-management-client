import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { FaFacebookF } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider/AuthProvider';

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = ({ email, password }) => {
        console.log(email, password)
        signIn(email, password)
            .then(userCredential => {
                const user = userCredential.user
                console.log(user)
                navigate('/')
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage)
            });
    }
    console.log(errors);

    return (
        <div className='flex justify-center items-center h-screen bg-[url("https://images.unsplash.com/photo-1472289065668-ce650ac443d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80")] bg-no-repeat bg-center bg-cover'>

            <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-[#ffffff50]">
                <form onSubmit={handleSubmit(onSubmit)} className="card-body mb-0 pb-0">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" placeholder="email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="text" placeholder="password" {...register("password", { required: true, maxLength: 20, minLength: 8 })} className="input input-bordered" />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-3">
                        <input type="submit" value="log In" className='btn btn-primary btn-outline normal-case' />
                    </div>
                </form>

                <p className='text-center'>New to this website? <Link to="/signIn" className='font-bold text-blue-500 underline'>Sign In</Link></p>
                <div className='flex w-[200px] mx-auto items-center gap-5 mt-5 mb-2'>
                    <hr className='border-2 w-[50%] border-black' />
                    <p className='uppercase font-bold'>or</p>
                    <hr className='border-2 w-[50%] border-black' />
                </div>
                {/* <p className='text-center font-bold text-xl'>Continue with</p> */}

                <div className='my-5 mb-10'>
                    <div className='border-2 border-black w-10/12 mx-auto rounded-full flex items-center relative hover:bg-white hover:shadow-2xl hover:border-0'>
                        <img src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png" className='w-10 h-10 m-1' alt="" />
                        <p className='font-bold absolute left-1/2 -translate-x-1/2 whitespace-nowrap'>Continue with Google</p>
                    </div>
                    {/* <div className='border-2 border-black w-10/12 mx-auto rounded-full flex items-center relative hover:bg-white hover:shadow-2xl hover:border-0 mt-3'>
                        <FaFacebookF className='text-3xl text-blue-700 m-2' />
                        <p className='font-bold absolute left-1/2 -translate-x-1/2 whitespace-nowrap'>Continue with Facebook</p>
                    </div> */}
                </div>

            </div>

        </div>
    );
}

export default Login;
