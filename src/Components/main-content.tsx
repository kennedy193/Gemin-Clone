export default function MainContent(){
    return (
        <>
        <main className="bg-[#F3F7FB] min-h flex flex-col items-center pt-52">
            <h1 className="text-xl font-semibold">Hi, I'm Gemini. Where should we start?</h1>
            <div className="w-full max-w-xl rounded-4xl p-5 mt-5 shadow-sm bg-white">
<input  type="text" placeholder="Ask Gemini " className="w-full rounded-2xl mr-2" /> 
            </div>
        </main>
    </>
    )
}