import { useState } from "react";
import  "./Home.css"
function Home(){
    const [a,Seta] = useState(0)
    return(<>
    <h4 className="h4 bg-red-400 text-white flex justify-center">hi good afternoon</h4>

           <p className="w-full flex justify-center align-middle mt-10 text-2xl mb-4">{a}</p>
        <div className="flex justify-center align-middle ">
            <button onClick={()=>Seta(a=>a>0?a-1:a)}
                className="bg-red-400 hover:text-white px-2 py-2 hover:bg-red-500 rounded shadow-xl text-gray-200 mr-1"
            >decrement</button>
            <button onClick={()=>Seta(a=>a+1)} 
            className="bg-blue-400 hover:text-white px-2 py-2 hover:bg-blue-500 rounded shadow-xl text-gray-200 ml-1">
            increment</button>
        </div>
    </>)
}
export default Home;