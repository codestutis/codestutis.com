import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Image from "@/assets/Cookie.png"

export default function Header() {

    return (
        <header className="w-4/5 max-w-[690px] my-4">
            <div className="flex items-center justify-between w-full">
                <div className="w-full md:w-4/5">
                    <h1 className="text-white text-5xl font-extrabold my-1">Hi, I'm Kestutis <span className="inline-block animate-wave">&#128075;</span></h1>
                    <h2 className="text-gray-600 text-2xl my-1">A.K.A Codestutis</h2>
                    <p className="text-white my-1">Software Developer</p>
                    <address className="text-white not-italic">&#128205; Durham, NH</address>
                </div>
                <Avatar className="h-24 w-24 sm:h-36 sm:w-36">
                    <AvatarImage src={Image} />
                    <AvatarFallback />
                </Avatar>
            </div>
        </header>
    )
}