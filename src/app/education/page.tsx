import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Contact() {

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

          <Button
            variant="ghost"
            className="px-4 py-2 rounded text-black-400 text-lg bg-white">
              Education
          </Button>

          <Link href="/hobbies" passHref>
          <Button
            variant="ghost"
            className="px-4 py-2 rounded text-white text-lg hover:bg-white/20 hover:text-yellow-400">
              Hobbies
          </Button>
          </Link>
        </div>
      </div>
      
      {/* Main Screen */}

      <div className="w-full max-w-screen-2xl mx-auto px-5 md:px-10 lg:px-20 flex flex-col py-3 text-center">
        
        {/* Education Header */}
        <div className="w-full text-center mt-10 mb-12">
          <div className="inline-block text-4xl md:text-6xl font-sans font-bold text-white bg-transparent ring-2 ring-yellow-400 rounded-lg px-3 py-5">
            Education <span className="text-yellow-400"> Background </span>
          </div>
        </div>
        
        {/* Educational History */}
        <div className="w-full text-left mb-5">
          <div className="max-w-xl mx-auto p-6 bg-gray-900 rounded-lg shadow-2xl overflow-hidden relative">
            <div className="absolute top-0 left-0 h-full w-3 bg-yellow-400"></div>
            <div className="pl-4">
              <p className="text-gray-300 text-lg font-semibold">
                2024 - Present</p>
              <h3 className="text-white text-2xl font-bold mt-1">
                Naga College Foundation, Inc.</h3>
              <h4 className="text-yellow-400 text-xl font-extrabold mt-1 mb-4">
                Bachelor of Science in Information Technology
              </h4>
              <ul className="space-y-3 text-gray-200">
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2 text-lg">╰┈➤</span>
                  <p>Website Development</p>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2 text-lg">╰┈➤</span>
                  <p>Python Basics</p>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2 text-lg">╰┈➤</span>
                  <p>C Basics</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="w-full text-left mb-5">
          <div className="max-w-xl mx-auto p-6 bg-gray-900 rounded-lg shadow-2xl overflow-hidden relative">
            <div className="absolute top-0 left-0 h-full w-3 bg-yellow-400"></div>
            <div className="pl-4">
              <p className="text-gray-300 text-lg font-semibold">
                2022 - 2024</p>
              <h3 className="text-white text-2xl font-bold mt-1">
                Quipayo National High School</h3>
              <h4 className="text-yellow-400 text-xl font-extrabold mt-1 mb-4">
                GAS - General Academic Strand
              </h4>
              <ul className="space-y-3 text-gray-200">
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2 text-lg">╰┈➤</span>
                  <p>Top 4 in the entire batch</p>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2 text-lg">╰┈➤</span>
                  <p>With High Honors</p>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2 text-lg">╰┈➤</span>
                  <p>Award on Outstanding Performance in Mathematics</p>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2 text-lg">╰┈➤</span>
                  <p>Battle of the Wise Participant (Mathematics)</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="w-full text-left mb-5">
          <div className="max-w-xl mx-auto p-6 bg-gray-900 rounded-lg shadow-2xl overflow-hidden relative">
            <div className="absolute top-0 left-0 h-full w-3 bg-yellow-400"></div>
            <div className="pl-4">
              <p className="text-gray-300 text-lg font-semibold">
                2018 - 2022</p>
              <h3 className="text-white text-2xl font-bold mt-1">
                Quipayo National High School</h3>
              <h4 className="text-yellow-400 text-xl font-extrabold mt-1 mb-4">
                Junior High School
              </h4>
              <ul className="space-y-3 text-gray-200">
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2 text-lg">╰┈➤</span>
                  <p>Consistent Honor Student</p>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2 text-lg">╰┈➤</span>
                  <p>Rank 9 Battle of the Wise (Agri-Fishery Arts)</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="w-full text-left mb-5">
          <div className="max-w-xl mx-auto p-6 bg-gray-900 rounded-lg shadow-2xl overflow-hidden relative">
            <div className="absolute top-0 left-0 h-full w-3 bg-yellow-400"></div>
            <div className="pl-4">
              <p className="text-gray-300 text-lg font-semibold">
                2013 - 2018</p>
              <h3 className="text-white text-2xl font-bold mt-1">
                Bombon Central School</h3>
              <h4 className="text-yellow-400 text-xl font-extrabold mt-1 mb-4">
                Elementary School
              </h4>
              <ul className="space-y-3 text-gray-200">
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2 text-lg">╰┈➤</span>
                  <p>Consistent Honor Student</p>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2 text-lg">╰┈➤</span>
                  <p>Active Partipant:</p>
                  <ul className="space-y-3 text-gray-200">
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-2 text-lg">*</span>
                      <p>Drum n Lyre</p>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-2 text-lg">*</span>
                      <p>Flute Ensemble</p>
                    </li>
                  </ul>
                </li>
              </ul>
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