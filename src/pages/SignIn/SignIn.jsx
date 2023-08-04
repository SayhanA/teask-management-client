import { useContext, useState } from 'react';
import { FaExclamationTriangle, FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider/AuthProvider';


const SignIn = () => {
    const [show, setShow] = useState(false);
    const [error, setError] = useState(null);
    const [showCon, setShowCon] = useState(false);
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const [confirmPassword, setConfirmPassword] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");
    
    const { createUser } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleSubmit = event => {
        setError('')
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        console.log(name, photo, email, password, confirmPassword)
        if (password !== confirmPassword) {
            alert("You password and confirm password are not same");
            return;
        }
        
        
        // signUp user
        createUser(email, password)
        .then(result => {
            const user = result.user;
            // updateUser(name, photo)
            
            console.log(user)
            if(user){
                form.reset();
                setPassword('')
                setConfirmPassword('');
                navigate('/')
            }
        })
        .catch(error => {
            console.log(error)
            setError(error.message)
        })
    }

    

    const handlePassword = e => {
        const inputPassword = e.target.value;
        setPassword(inputPassword);
        if (inputPassword.length === 0) {
            setPasswordError("")
        }
        else if (inputPassword.length < 6) {
            setPasswordError("Password must be at least 6 character long.");
        }
        else if (!/(?=.*?[A-Z])/.test(inputPassword)) {
            setPasswordError("Password must contain at least one capital letter")
        }
        else if (!/(?=.*?[a-z])/.test(inputPassword)) {
            setPasswordError("Password must contain at least one small letter")
        }
        else if (!/(?=.*?[0-9])/.test(inputPassword)) {
            setPasswordError("Password must contain at least one number")
        }
        else if (!/(?=.*?[#?!@$%^&*-])/.test(inputPassword)) {
            setPasswordError("Password must contain al least one special character")
        }
        else {
            setPasswordError("");
        }
    }

    const handleConfirmPassword = e => {
        const inputConfirmPassword = e.target.value;
        setConfirmPassword(inputConfirmPassword)

        //  validation
        if (inputConfirmPassword.length === 0) {
            setConfirmPasswordError("")
        }
        else if (inputConfirmPassword.length < 6) {
            setConfirmPasswordError("Password must be at least 6 character long.");
        }
        else if (!/(?=.*?[A-Z])/.test(inputConfirmPassword)) {
            setConfirmPasswordError("Password must contain at least one capital letter")
        }
        else if (!/(?=.*?[a-z])/.test(inputConfirmPassword)) {
            setConfirmPasswordError("Password must contain at least one small letter")
        }
        else if (!/(?=.*?[0-9])/.test(inputConfirmPassword)) {
            setConfirmPasswordError("Password must contain at least one number")
        }
        else if (!/(?=.*?[#?!@$%^&*-])/.test(inputConfirmPassword)) {
            setConfirmPasswordError("Password must contain al least one special character")
        }
        else {
            setConfirmPasswordError("");
        }
    }


    return (
        <div className='w-full text-white h-screen flex justify-center items-center' style={{background: "url('https://wallpapercave.com/wp/wp9764009.jpg')"}}>
            <form onSubmit={handleSubmit} style={{backdropFilter: "blur(20px"}} className='border rounded-xl bg-[#ffffff10] border-gray-300 p-10 mx-auto  lg:w-[540px]'>
                <p className='font-bold text-2xl leading-7 '>Register</p>
                {/* <div className="mt-9 relative nameContainer">
                    <input className="nameField border-2 border-gray-300 border-t-0 border-l-0 border-r-0 w-full placeholder-black font-semibold" name='firstName' id="firstName" type="text" placeholder='First Name' />
                </div> */}
                <div className="relative z-0 w-full mb-6 group mt-7">
                    <input type="text" name="name" id="name" className="block py-2.5 px-0 w-full bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="name" className="ml-3  peer-focus:font-medium absolute font-semibold  dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
                </div>
                <div className="relative z-0 w-full mb-6 mt-7 group text-md">
                    <input type="text" name="photo" id="photo" className="block py-2.5 px-0 w-full bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="photo" className="ml-3  peer-focus:font-medium absolute font-semibold  dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">User Photo</label>
                </div>
                <div className="relative z-0 w-full mb-6 mt-7 group text-md">
                    <input type="email" name="email" id="email" className="block py-2.5 px-0 w-full  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="email" className="ml-3  peer-focus:font-medium absolute font-semibold  dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                </div>

                {/* Password handle */}
                <div className="mt-9 relative nameContainer">

                    <div className="relative z-0 w-full group text-md">
                        {
                            show ? <FaEye onClick={() => setShow(!show)} className='text-gray-500 absolute right-3 top-4 z-30' /> : <FaEyeSlash onClick={() => setShow(!show)} className='text-gray-500 absolute right-3 top-4' />
                        }
                        <input onChange={handlePassword} type={show ? "text" : "password"} name="password" id="password" value={password} className={`block py-2.5 px-0 w-full bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer ${ passwordError ? "focus:border-red-600" : "" }`} placeholder=" " required />
                        <label htmlFor="password" className="peer-focus:font-medium absolute  font-semibold ml-3 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">Password</label>
                    </div>
                    {passwordError && <div className='flex items-center gap-2 text-red-500'> <FaExclamationTriangle /><span>{passwordError}</span> </div>}
                </div>

                {/* Confirm password handle */}
                <div className="mt-9 relative nameContainer">

                    <div className="relative z-0 w-full group text-md">
                        {
                            showCon ? <FaEye onClick={() => setShowCon(!showCon)} className='text-gray-500 absolute right-3 top-4 z-30' /> : <FaEyeSlash onClick={() => setShowCon(!showCon)} className='text-gray-500 absolute right-3 top-4' />
                        }
                        <input onChange={handleConfirmPassword} type={showCon ? "text" : "password"} name="confirmPassword" id="confirmPassword" value={confirmPassword} className={`block py-2.5 px-0 w-full bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer ${confirmPasswordError ? "focus:border-red-600" : "focus:border-green-500" }`} placeholder=" " required />
                        <label htmlFor="confirmPassword" className="pl-3 peer-focus:font-medium absolute  font-semibold dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8 text-bold">Confirm Password</label>
                    </div>
                    {confirmPasswordError && <div className='flex items-center gap-2 text-red-500'> <FaExclamationTriangle /><span>{confirmPasswordError}</span> </div>}
                </div>

                <div className="">
                    <label className="btn btn-warning w-full rounded-none mt-9" htmlFor="submit">
                        Register
                    </label>
                    <input className="text-transparent" id='submit' type="submit" />
                </div>
                <div className='text-center font-semibold'>Already have an account? <Link to='/' className='text-yellow-400 underline'>Login</Link></div>
                {error && <p className='text-red-500 flex items-center gap-2 justify-center'><FaExclamationTriangle />{error}</p>}
            </form>

            {/* <div className='lg:w-[540px] mx-auto p-4'>
                <div className='p-5 w-full flex gap-5 justify-center items-center'>
                    <div className=' border-2 border-gray-300 w-[40%] h-0'></div>
                    <span className=' font-bold'>OR</span>
                    <div className=' border-2 border-gray-300 w-[40%] h-0'></div>
                </div>
                <div className='mx-5'>
                    <div className='relative border border-gray-300 h-[51px] flex justify-center items-center rounded-full cursor-pointer transition-all hover:bg-[#ffffff30] hover:scale-105'>
                        <img className='w-[37px] absolute left-2 rounded-full' src="https://w7.pngwing.com/pngs/914/758/png-transparent-github-social-media-computer-icons-logo-android-github-logo-computer-wallpaper-banner-thumbnail.png" alt="" />
                        <p className='text-center font-semibold'>Continue with GitHub</p>
                    </div>
                    <div className='mt-3 relative border border-gray-300 h-[51px] flex justify-center items-center rounded-full cursor-pointer transition-all hover:bg-[#ffffff30] hover:scale-105'>
                        <img className='w-[37px] absolute left-2' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2008px-Google_%22G%22_Logo.svg.png" alt="" />
                        <p className='text-center font-semibold'>Continue with Google</p>
                    </div>
                </div>
            </div> */}

        </div>
    );
};

export default SignIn;