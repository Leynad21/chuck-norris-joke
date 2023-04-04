import React, { useState } from 'react'
import axios from 'axios'

const AxiosMethod = () => {

    const [joke, setJoke] = useState("Chucking Network...")

    const axiosRequest = async () => {
        try {
            const res = await axios.get("https://api.chucknorris.io/jokes/random")
            console.log(res);
            setJoke(res.data.value)

        } catch (err) {
            console.error('error:' + err)
        }


    }

    return (
        <div className='flex flex-col items-center m-10 gap-6'>
            <h1 className='text-7xl'>Axios Method</h1>
            <img className='w-1/5 rounded-md' src="https://images01.military.com/sites/default/files/styles/full/public/2021-04/chucknorris.jpeg.jpg" alt="" />
            <div className='bg-white p-8 rounded-xl m-4 border-2 border-cyan-700 max-w-4xl'>
                <h1>{joke}</h1>
            </div>

            <button className='bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded-md' onClick={axiosRequest}>Chuck me a joke</button>

        </div>
    )
}

export default AxiosMethod