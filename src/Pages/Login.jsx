import { FcGoogle } from 'react-icons/fc'
import {FaGithub} from 'react-icons/fa'
import { GoogleAuthProvider, getAuth,signInWithPopup, signOut } from "firebase/auth";
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../Redux/CartSlice';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
   const handleGoogleLogin=(e)=>{
        e.preventDefault()
        signInWithPopup(auth,provider).then((res)=>{
            const user = res.user
            dispatch(addUser({id:user.uid,
            name:user.displayName,
            email:user.email,
            image:user.photoURL
            }),
            setTimeout(()=>{
                navigate('/')
            },3000)
            )
           
        }).catch((error)=>{
            console.log(error)
        })
   }
   const handleGoogleSignOut=()=>{
    const user = auth.currentUser;
    if (user) {
      signOut(auth)
        .then(() => {
          console.log('User signed out successfully');
          toast.error('Signed out successfully');
          dispatch(removeUser())
        })
        .catch((error) => {
          console.log('Error signing out:', error);
        });
    }
    console.log(user)
   }
  
   const userInfo = useSelector(state=>state.cart.userInfo)
  return (
    <div className=' bg-gray-300 py-[5rem] px-4'>
            <div className='w-[88%] lg:w-[50%] py-[7rem] rounded-md backdrop-blur-md shadow-xl opacity-85 sm:px-6 mx-auto lg:px-3 bg-yellow-100'>
            <div className="lg:text-center items-center justify-center flex gap-4">
                {
                userInfo ?
                <button onClick={handleGoogleSignOut} className='font-normal text-white tracking-tight px-5 py-3 bg-black hover:bg-slate-900  focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-indigo-500'>
                        Sign out
                    </button>
                :
                <div onClick={handleGoogleLogin} className='px-3 py-2 border shadow-lg rounded-md border-gray-900  flex gap-1 bg-white cursor-pointer'>
                <FcGoogle className='text-3xl'/>
                <p className='text-xl font-semibold tracking-tight '>Sign in with Google</p>
            </div>
        }
            </div>
       
            </div>
            <ToastContainer
    position='top-left'
         autoClose={2000}
         hideProgressBar={false}
         newestOnTop={false}
         closeOnClick
         rtl={false}
         pauseOnFocusLoss
         draggable
         pauseOnHover
         theme='dark'
    />
    </div>
  )
}

export default Login