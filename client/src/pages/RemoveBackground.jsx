import { Eraser, Sparkles } from 'lucide-react';
import React, { useState } from 'react'
import axios from 'axios';
import { useAuth } from '@clerk/clerk-react';
import toast from 'react-hot-toast';
axios.defaults.baseURL=import.meta.env.VITE_BASE_URL;



const RemoveBackground = () => {

  const [input,setInput]=useState("");  
  const [loading,setLoading]=useState(false);
  const [content,setContent]=useState("");
  const {getToken}=useAuth();

      const onSubmitHandler=async(e)=>{
        e.preventDefault();
        try {
          setLoading(true);
          const formData=new FormData();
          formData.append('image',input);

          const {data}=await axios.post('/api/ai/remove-image-background',formData,{headers:{Authorization:`Bearer ${await getToken()}`}});

          if(data.success){
            setContent(data.content);
          }
          else{
            toast.error(data.message);
          }
        } catch (error) {
          toast.message(error.message);
        }
        setLoading(false);
      }

  return (
    <div>
      <div className='h-full overflow-y-scroll p-6 flex items-start flex-wrap gap-4 text-slate-700'>
      {/* Left Col */}
      <form onSubmit={onSubmitHandler} className='w-full max-w-lg p-4 bg-white rounded-lg border border-gray-200'>

        <div className="flex items-center gap-3 mb-5">
          <Sparkles className='w-6 text-[#FF4938]'/>
          <h1 className='text-xl font-semibold'>Background remover</h1>
        </div>

        <p className='mt-6 text-sm font-medium'>Upload Image</p>

        <input onChange={(e)=>setInput(e.target.files[0])}
        type="file" accept='image/*' className='w-full p-2 px-3 mt-2 outline-none text-sm rounded-md border border-gray-300 text-gray-600  cursor-pointer'  required/>
        <p className="text-xs text-gray-500 font-light mt-1">Supports JPG, PNG and other image formats</p>

        <button disabled={loading} className='w-full flex justify-center items-center gap-2 bg-gradient-to-r from-[#F6AB41] to-[#FF4938] text-white px-4 py-2 mt-6 text-sm rounded-lg cursor-pointer'>
          {
            loading ? (
              <>
                <span className='h-4 w-4 mt-1 rounded-full border-2 border-t-transparent animate-spin'></span>
                Removing BackGround
              </>
            ) : (
              <>
                <Eraser className='w-5'/>
                Remove Background
              </>
            )
          }
          
        </button>
      </form>
      {/* Right Col */}
      <div className='w-full max-w-lg p-4 bg-white rounded-lg flex flex-col border border-gray-200 min-h-96'>

        <div className='flex items-center gap-3'>
          <Eraser className='w-5 h-5 text-[#FF4938]'/>
          <h1 className='text-xl font-semibold'>Processed Image</h1>  
        </div>
        {
          !content ? (
            <div className='flex-1 flex justify-center items-center'>
              <div className="text-sm flex flex-col items-center gap-5 text-gray-400">
                <Eraser className='w-9 h-9'/>
                <p>Upload an image and click "Remove Background" to get started</p>
              </div>
            </div>
          ) : (  
            <img src={content} alt="image" className='mt-3 w-full h-full' />
          )
        }        
      </div>
    </div>
    </div>
  )
}

export default RemoveBackground
