import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BedIcon, CookieIcon, CookingPotIcon, DumbbellIcon, Gamepad2Icon, MusicIcon, PizzaIcon, Table2Icon, Tv2Icon, TvIcon, Watch, WatchIcon } from "lucide-react";

export default function Home() {

  return (
    <div className="flex flex-col min-h-screen font-mono bg-gradient-to-b from-[#000435] via-[#1a1c3e] to-black">
      
      {/* Header */}
      <div className="w-full h-16 flex items-center justify-between px-5 pt-2"> 
        
        {/* School Name */}
        <div className="flex items-center gap-3">
          <Image
            src="/ncf_logo.webp"
            alt="ncf_logo"
            width={40}
            height={40}
            className="rounded-full object-contain"
          />
          
          <span className="text-lg text-white">Naga College Foundation, Inc.</span>
        </div>
        
        {/* Nav Buttons */}
        <div className="flex gap-3">
          
          <Link href="/" passHref>
          <Button
            variant="ghost"
            className="px-4 py-2 rounded text-white text-lg hover:bg-white/20 hover:text-yellow-400">
              Home
          </Button>
          </Link>

          <Link href="/about" passHref>
          <Button
            variant="ghost"
            className="px-4 py-2 rounded text-white text-lg hover:bg-white/20 hover:text-yellow-400">
              About
          </Button>
          </Link>
          
          <Link href="/contact" passHref>
          <Button
            variant="ghost"
            className="px-4 py-2 rounded text-white text-lg hover:bg-white/20 hover:text-yellow-400">
              Contact
          </Button>
          </Link>
          
          <Link href="/education" passHref>
          <Button
            variant="ghost"
            className="px-4 py-2 rounded text-white text-lg hover:bg-white/20 hover:text-yellow-400">
              Education
          </Button>
          </Link>

          <Button
            variant="ghost"
            className="px-4 py-2 rounded text-black-400 text-lg bg-white">
              Hobbies
          </Button>
        </div>
      </div>
      
      {/* Main content */}

      <div className="w-full max-w-screen-2xl mx-auto px-5 md:px-10 lg:px-20 flex flex-col py-3 text-center">
        
        {/* Hobbies Header */}
        <div className="w-full text-center mt-10">
          <div className="inline-block text-4xl md:text-6xl font-sans font-bold text-white bg-transparent ring-2 ring-yellow-400 rounded-lg px-3 py-5">
            Hobbies and <span className="text-yellow-400"> Ineterest </span>
          </div>
        </div>

        {/* Hobbies Screen */}
        <div className="w-full max-w-screen-2xl mx-auto px-5 md:px-10 lg:px-20 py-10 flex flex-col text-center flex-grow">

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-10">
                {/* Hobbies Card */}
                <div className="bg-white/10 p-8 rounded-xl shadow-xl border border-transparent hover:border-yellow-400/50 transition duration-300">
                    <div className="text-center mb-6">
                        <MusicIcon className="mx-auto mb-5 w-20 h-20 text-yellow-400"/>
                        <h3 className="text-yellow-400 text-2xl font-bold font-sans">Music Listening</h3>
                    </div>
                    <p className="text-white text-base leading-relaxed text-left">
                        I enjoy listening to various genres of music, including pop, rock, and classical. Music helps me relax and boosts my creativity.
                    </p>
                </div>

                <div className="bg-white/10 p-8 rounded-xl shadow-xl border border-transparent hover:border-yellow-400/50 transition duration-300">
                    <div className="text-center mb-6">
                        <Gamepad2Icon className="mx-auto mb-5 w-20 h-20 text-yellow-400"/>
                        <h3 className="text-yellow-400 text-2xl font-bold font-sans">Playing Games</h3>
                    </div>
                    <p className="text-white text-base leading-relaxed text-left">
                        It helps reduce stress by providing an outlet for emotions and distractions from daily life. They can be a fun way to unwind and relax.
                    </p>
                </div>

                <div className="bg-white/10 p-8 rounded-xl shadow-xl border border-transparent hover:border-yellow-400/50 transition duration-300">
                    <div className="text-center mb-6">
                        <CookingPotIcon className="mx-auto mb-5 w-20 h-20 text-yellow-400"/>
                        <h3 className="text-yellow-400 text-2xl font-bold font-sans">Cooking</h3>
                    </div>
                    <p className="text-white text-base leading-relaxed text-left">
                        It is a rewarding and creative pursuit that allows individuals to express themselves, explore new flavors, and connect with others through the joy of food.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-10">
                {/* Hobbies Card */}
                <div className="bg-white/10 p-8 rounded-xl shadow-xl border border-transparent hover:border-yellow-400/50 transition duration-300">
                    <div className="text-center mb-6">
                        <TvIcon className="mx-auto mb-5 w-20 h-20 text-yellow-400"/>
                        <h3 className="text-yellow-400 text-2xl font-bold font-sans">Watching</h3>
                    </div>
                    <p className="text-white text-base leading-relaxed text-left">
                        Watching movies and series provides me with a perfect escape from the stresses of everyday life.
                    </p>
                </div>

                <div className="bg-white/10 p-8 rounded-xl shadow-xl border border-transparent hover:border-yellow-400/50 transition duration-300">
                    <div className="text-center mb-6">
                        <PizzaIcon className="mx-auto mb-5 w-20 h-20 text-yellow-400"/>
                        <h3 className="text-yellow-400 text-2xl font-bold font-sans">Eating</h3>
                    </div>
                    <p className="text-white text-base leading-relaxed text-left">
                        It is the joyful exploration of flavors, textures, and cuisines, turning every meal into a delightful adventure for the senses.
                    </p>
                </div>

                <div className="bg-white/10 p-8 rounded-xl shadow-xl border border-transparent hover:border-yellow-400/50 transition duration-300">
                    <div className="text-center mb-6">
                        <DumbbellIcon className="mx-auto mb-5 w-20 h-20 text-yellow-400"/>
                        <h3 className="text-yellow-400 text-2xl font-bold font-sans">Eating</h3>
                    </div>
                    <p className="text-white text-base leading-relaxed text-left">
                        It is a refreshing hobby that keeps the body strong, the mind clear, and the spirit energized.
                    </p>
                </div>
            </div>
        </div>
    </div>
    
    {/* Footer */}
      <footer className="py-2 text-center text-gray-500 border-t border-gray-800">
          &copy; {new Date().getFullYear()} Mark Justine Portfolio. All Rights Reserved.
      </footer>
    </div>
  );
}