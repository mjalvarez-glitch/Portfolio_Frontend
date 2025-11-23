import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import * as React from "react";

export default function About() {
    
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
                
                <Button
                variant="ghost"
                className="px-4 py-2 rounded text-black-400 text-lg bg-white">
                    About
                </Button>
                
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

                <Link href="/hobbies" passHref>
                <Button
                variant="ghost"
                className="px-4 py-2 rounded text-white text-lg hover:bg-white/20 hover:text-yellow-400">
                    Hobbies
                </Button>
                </Link>
            </div>
        </div>
        
        {/* Main content */}
        
        <div className="w-full max-w-screen-2xl flex flex-col md:flex-row items-center gap-x-24 px-5 md:px-10 lg:px-20 mx-auto flex-grow h-0 overflow-hidden justify-center">
            
            {/* Left Content */}
            
            <div className="flex-1 max-w-full text-white text-center md:text-left">
                
                {/* About Me */}

                <div className="inline-block text-4xl md:text-6xl font-sans font-bold text-white leading-tight bg-transparent ring-2 ring-yellow-400 rounded-lg px-3 py-5 mb-8 md:mb-12">
                    About <span className="text-yellow-400">Me</span>
                </div>
                
                <h1 className="text-4xl md:text-6xl font-bold">Hi, I'm <span className="text-yellow-200">Mark Justine Alvarez</span> </h1>
                <h1 className="mt-4 text-3xl">Information Technology Student</h1>

            </div>
            
            {/* Right Content */}
            
            <div className="flex-shrink-0">
                <Image
                src="/My_profile.png"
                alt="Mark Justine's Profile"
                width={450}
                height={450}
                className="rounded-full"
                />
            </div>
        </div>
        

        {/* Footer */}
            <footer className="py-2 text-center text-gray-500 border-t border-gray-800">
                &copy; {new Date().getFullYear()} Mark Justine Portfolio. All Rights Reserved.
            </footer>

    </div>
  );
}
