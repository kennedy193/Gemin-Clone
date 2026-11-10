import addIcon from"../assets/Gemini-Add-icon.png"
import micIcon from "../assets/Gemini-mic-icon.jpg"
import keyBoard from "../assets/keyboard_arrow_down_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.png"
export default function MainContent(){
    return (
        <>
        <main className=" w-full h-full flex flex-1 flex-col items-center pt-56">

            <h1 className="text-[#444746] text-3xl font-semibold mb-10">Hi, I'm Gemini. Where should we start?</h1>
            <div className="w-full max-w-xl rounded-full px-5 py-4 bg-white flex items-center justify-between">
                {/*plus icon*/}
                <div className="flex flex-1 min-w-0 items-center gap-3">
                    <button className="flex items-center justify-center p-1 rounded-full">
                        <img src={addIcon} alt="add icon" className="w-10 h-10 object-contain " />
                        
                    </button>
                    <input type="text" placeholder="Ask Gemini" className="text-[#9C9EA2] bg-transparent outline-none
                     placeholder-gray-500 flex-1 min-w-0" />
                </div>
            
              {/*mic button*/}
              <div className="flex items-center gap-2 ">
                {/*model*/}

                <button className="flex items-center gap-1.5 text-black text-sm whitespace-nowrap shrink-0">
                Flash-Lite
               <img  src= {keyBoard} alt="dropdown-icon"/>
                </button>
             <button className="flex items-center justify-center shrink-0">
            <img src={micIcon} alt="mic icon"  className="w-5 h-5 "/>
             </button>
              </div>
            </div>
        </main>
    </>
    )
}