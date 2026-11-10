
export default function Header(){
    return (
        <>
                <header className="w-full bg-white px-10 py-4 ">
                    <nav className="flex items-center  justify-between pt-0 "> 
                        
                        <ul className="flex items-center  ml-auto">
            <li><a href="#" className=" text-blue-500 hover:bg-blue-100 rounded-full px-3 py-2">About Gemini</a></li>
            <li><a href="#" className=" text-blue-500 hover:bg-blue-100 rounded-full px-3 py-2">Subscriptions</a></li>
            <li><a href="#"  className="text-blue-500 hover:bg-blue-100 rounded-full px-3 py-2">For Business</a></li>
            
           </ul> 
           <div className="flex items-center gap-2">
            <button className="bg-gray-200 rounded-full px-3 py-2 hover:bg-gray-400  ">Get App</button>
            <button className=" bg-blue-500 rounded-full  px-5 py-2 text-black hover:bg-blue-600">Sign in </button>
           </div>
            
             </nav>
                </header>
        </>
    )
}