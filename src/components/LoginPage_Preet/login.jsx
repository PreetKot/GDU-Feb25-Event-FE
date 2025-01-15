import React from 'react'



export default function Form() {
  return (
          <div class="flex justify-end  min-h-screen">
            <div className='bg-black bg-opacity-90 px-10 py-20 md:px-10 md:py-20 rounded-3xl border-2 border-yellow-500 shadow-lg max-w-md mx-auto md:ml-auto md:mr-4' style={{ fontFamily: 'HarryP' }}>
            <h1 className='text-5xl md:text-5xl font-semibold text-center text-yellow-400 mb-6' style={{ fontFamily: 'HarryP' }}>GLITCHED</h1>
            
            <div className='mt-8 '>
                <div class="mb-6">
                  <label className="text-lg font-medium text-yellow-400">Name</label>
                  <input 
                        className='w-full border-2 border-gray-300 rounded-xl p-4 mt-1 bg-transparent focus:outline-none focus:border-blue-500 text-yellow-200'
                        type="text" 
                        placeholder='Enter your name'
                  />
                </div>
                <div class="mb-6">
                  <label className="text-lg font-medium text-yellow-400">Email</label>
                  <input 
                        className='w-full border-2 border-gray-300 rounded-xl p-4 mt-1 bg-transparent focus:outline-none focus:border-blue-500 text-yellow-200'
                        type="text" 
                        placeholder='Enter the email'
                  />
                </div>

                <div>
                  <label className="text-lg font-medium text-yellow-400">Password</label>
                  <input
                        className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent focus:outline-none focus:border-blue-500 text-yellow-200'
                  
                        type="password"  
                        placeholder='Enter the password'
                  />
                </div>
                  
                <div className='mt-8 flex flex-col gap-y-4 '>
                  <button className='active:scale-[.98] active:duration-75 hover:scale-[1.2] transition-all py-3 rounded-xl bg-blue-500 text-white text-lg font-bold button hover:bg-green-600 transition-colors'>LOGIN</button>
                  <button className='active:scale-[.98] active:duration-75 hover:scale-[1.2] transition-all py-3 rounded-xl bg-blue-500 text-white text-lg font-bold button hover:bg-orange-600 transition-colors'>SIGN UP</button>
                </div>
            
            </div>
              
            </div>
          </div>
  )
}
