import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function SignIn() {
 const [formData, setFormData] = useState({});
 const [error, setError] = useState(null);
 const [loading, setLoading] = useState(false);
 const navigate = useNavigate();

 const handleChange = e => {
  setFormData({
   ...formData,
   [e.target.id]: e.target.value,
  });
 };

 const handleSubmit = async e => {
  e.preventDefault();
  try {
   setLoading(true);
   const res = await fetch('/api/auth/Signin', {
    method: 'POST',
    headers: {
     'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
   });
   const data = await res.json();
   if (data.success === false) {
    setError(data.message);
    setLoading(false);
    return;
   }

   setLoading(false);
   setError(null);
   navigate('/');
  } catch (error) {
   setLoading(false);
   setError(error.message);
  }
 };

 return (
  <div className="p-3 max-w-lg mx-auto">
   <h1
    className="text-3xl 
   text-center font-semibold my-7">
    Sign In
   </h1>

   <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
    <input
     type="email"
     id="email"
     placeholder="email"
     className=" outline-none
    border p-3 rounded-lg"
     onChange={handleChange}
    />
    <input
     type="password"
     id="password"
     placeholder="password"
     className="outline-none
   border p-3 rounded-lg"
     onChange={handleChange}
    />

    <button
     disabled={loading}
     type="submit"
     className="bg-slate-700
     text-white
      p-3 rounded-lg uppercase hover:opacity-95
      disabled:opacity-80">
     {loading ? 'Loading...' : 'Login'}
    </button>
   </form>

   <div className=" flex gap-2 mt-5">
    <p>Not Resgister?</p>
    <Link to={'/Signup'}>
     <span
      className=" text-blue-500 
     hover:underline">
      Sign up
     </span>
    </Link>
   </div>
   {error && <p className="text-red-500">{error}</p>}
  </div>
 );
}
