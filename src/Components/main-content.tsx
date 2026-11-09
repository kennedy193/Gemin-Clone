import addIcon from"../assets/Gemini-Add-icon.png"

export default function MainContent(){
    return (
        <>
        <main className="bg-[#F3F7FB] min-h-screen h-full flex flex-col items-center pt-52">

            <h1 className="text-[#444746] text-3xl font-semibold mb-5">Hi, I'm Gemini. Where should we start?</h1>
            <div className="w-full max-w-xl rounded-4xl px-4 py-3 bg-white flex items-center justify-between">
                {/*plus icon*/}
                <div className="w-full flex items-center gap-3">
                    <button className="flex items-center justify-center p-1 rounded-full">
                        <img src={addIcon} alt="add icon" className="w-10 h-10 object-contain " />
                        
                    </button>
                    <input type="text" placeholder="Ask Gemini" className="text-[#9C9EA2] bg-transparent outline-none placeholder-gray-500" />
                </div>
              {/*mic button*/}
              <div>

              </div>
            </div>
        </main>
    </>
    )
}