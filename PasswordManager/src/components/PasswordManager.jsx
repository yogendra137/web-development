import { useRef, useState  } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function PasswordManager() {
    const ref = useRef();
     const [visible, setVisible] = useState(false);


     const [formData, setFormData] = useState({website: '', username: '', password: ''})

const handleSubmit = (event) => {
  
    alert('Form submitted!');
    console.log(formData);
    event.preventDefault();

}

const handlePasswordVisibility = () => {   
   setVisible((prev) => !prev);   
}

const handleChange = (event) => {
    setFormData({...formData, [event.target.name]: event.target.value});
}

  return (   
<form className="max-w-sm mx-auto mt-5 ">
  <div className="mb-5">
    <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Website URL</label>
    <input name="website" type="url"  value={formData.website} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required  />
  </div>
  <div className="mb-5">
    <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
    <input name="username" type="text" value={formData.username} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
  </div>

  <div className="mb-5 relative">
    <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
    <input name="password" type="password" value={formData.password} onChange={handleChange} id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />

    <div className="mt-2 text-sm text-gray-500 dark:text-gray-400 absolute top-8 right-2 cursor-pointer" onClick={handlePasswordVisibility}>
       
        {visible ? <FaEyeSlash /> : <FaEye />}
    </div>
  </div>
 
  <button type="submit" onClick={handleSubmit} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>

  );
}

export default PasswordManager;