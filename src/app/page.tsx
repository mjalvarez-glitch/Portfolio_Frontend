import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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
          
          <Button
            variant="ghost"
            className="px-4 py-2 rounded text-black-400 text-lg bg-white">
              Home
          </Button>

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
      <div className="flex flex-col items-center justify-center text-center px-6 md:px-20 lg:px-40 flex-grow">
        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight bg-transparent ring-2 ring-yellow-400 rounded-lg px-6 py-3 font-sans">WELCOME TO MY PERSONAL PORTFOLIO</h1>
        <h1 className="mt-15 text-4xl md:text-6xl font-bold text-white leading-tight">It's not that we use Technology, <span className="text-yellow-400">we live Technology</span>.</h1>
        <h1 className="mt-15 text-4xl md:text-2xl font-bold text-white leading-tight font-sans">—GODFREY REGGIO—</h1>
      </div>

      {/* Footer */}
      <footer className="py-2 text-center text-gray-500 border-t border-gray-800">
          &copy; {new Date().getFullYear()} Mark Justine Portfolio. All Rights Reserved.
      </footer>
    </div>
  );
}