import React from 'react'

const Top = () => {
    return (
        <div className='top h-screen'>
            <div className='flex flex-row w-100'>
                <div className='basis-3/4  mt-4 justify-center mx-8 '>
            <button className='mx-8 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 text-lg hover:bg-red-300 text-gray-800 font-semibold py-2 px-4 border hover:border-gray-400 rounded shadow'>Home</button>
            <button  className='mx-8 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 text-lg hover:bg-red-300 text-gray-800 font-semibold py-2 px-4 border hover:border-gray-400 rounded shadow'>Products</button>
            </div>
            <div className='basis-1/4 mt-4'>
            <button className='w-64 mr-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 text-lg hover:bg-fuchsia-400 text-gray-800 font-bold py-2 px-4 border rounded-full  shadow'>Download Now!</button>
            </div>
            </div>
        </div>
    )
}

export default Top
