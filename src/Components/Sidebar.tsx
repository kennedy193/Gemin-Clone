import {
    // Sparkles,
    PanelLeftClose,
    Pencil,
    Images,
    CircleExclamationPoint,
    Settings
} from "lucide-react";
import geminiLogo from "../assets/Gemini-logo.jpg";
export default function Sidebar() {
    return (
        <aside className="w-67.5 h-screen bg-white text-black border-r border-gray-200 px-3 py-4 flex flex-col">

            {/* Header */}
            <div className="flex items-center justify-between px-2 mb-7">

                <div className="flex items-center gap-2">
                   <img  src= {geminiLogo} className="w-6 h-6"/>
                    <h1 className="text-lg font-medium">
                        Gemini
                    </h1>
                </div>

                <PanelLeftClose
                    size={19}
                    className="text-gray-500 cursor-pointer"
                />

            </div>

            {/* Nav */}
            <nav className="space-y-1">

                
                <a href="#"
                    className="flex items-center gap-4 px-2 py-2.5 text-gray-400 ">

                    <Pencil size={19} />
                    <span className="text-sm">New chat</span>

                </a>

                {/* Images */}
                <a href="#"
                    className="flex items-center gap-4 px-2 py-2.5 hover:bg-gray-100 rounded-full">

                    <Images size={19} />
                    <span className="text-sm">Images</span>

                </a>

                {/* Sign In */}
                <a href="#"
                    className="flex items-center gap-4 px-2 py-2.5 ">

                    <CircleExclamationPoint size={19} />

                    <span className="text-sm">
                        <span className="underline">
                            Sign in
                        </span>{" "}
                        to save activity
                    </span>
                    </a>
                <a href="#"
                    className="flex items-center gap-3  px-2 py-3 hover:bg-gray-100 rounded-full mt-72">
                    <Settings size={19}  />
                    <span className="text-sm  ">
                        <span >
                            Settings
                        </span> </span>
                
                </a>
             <div className="flex  flex-col gap-2 mt-3">
            <button className="bg-gray-200 rounded-full px-5 py-2 hover:bg-gray-400  ">Get App</button>
            <button className=" bg-blue-500 rounded-full  px-5 py-2 text-black hover:bg-blue-600">Sign in </button>
           </div>
            </nav>

        </aside>
    );
}