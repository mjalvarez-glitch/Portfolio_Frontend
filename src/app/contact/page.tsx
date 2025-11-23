import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FacebookIcon, InstagramIcon, MailIcon, MapPinPenIcon, PhoneIcon } from "lucide-react";

export default function Contact() {

  return (
    <div className="flex flex-col font-mono bg-gradient-to-b from-[#000435] via-[#1a1c3e] to-black">
      
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
          
          <Button
            variant="ghost"
            className="px-4 py-2 rounded text-black-400 text-lg bg-white">
              Contact
          </Button>
          
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

      <div className="w-full max-w-screen-2xl mx-auto px-5 md:px-10 lg:px-20 flex flex-col py-3 text-center">
        
        {/* Get in Touch */}

        <div className="w-full text-center mt-10 mb-12">
          <div className="inline-block text-4xl md:text-6xl font-sans font-bold text-white leading-tight bg-transparent ring-2 ring-yellow-400 rounded-lg px-3 py-5">
            Get in <span className="text-yellow-400"> Touch </span>
          </div>
        </div>

        {/* Screen Column */}

        <div className="flex flex-col md:flex-row items-center gap-x-24">
          
          {/* Left Content */}
          <div className="flex-1 max-w-full text-white text-center md:text-left mb-10 md:mb-0">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Let's build something great together.</h1>
            <p className="mb-8 max-w-lg md:max-w-none mx-auto md:mx-0 text-gray-300">Thanks for stopping by! I’m currently building out my portfolio and always open to connecting,
              chatting ideas, or exploring new projects. Drop me a message anytime!
            </p>
            {/* Contact Form */}
            <form className="space-y-6 max-w-lg mx-auto md:mx-0">
              <FieldGroup>
                <FieldSet>
                  <Field className="flex flex-col">
                    <FieldLabel htmlFor="contact-full-name" className="text-sm font-medium text-gray-200">Full Name</FieldLabel>
                  </Field>
                  <Input
                    id="contact-full-name"
                    placeholder="John Doe"
                    required
                  />

                  <Field className="flex flex-col">
                    <FieldLabel htmlFor="contact-email" className="text-sm font-medium mb-1 text-gray-200">Email Address</FieldLabel>
                    <Input
                      id="contact-email"
                      type="email"
                      placeholder="john@examplemail.com"
                      required
                    />
                  </Field>

                  <Field className="flex flex-col">
                    <FieldLabel htmlFor="contact-subject" className="text-sm font-medium mb-1 text-gray-200">Subject</FieldLabel>
                    <Input
                      id="contact-subject"
                      placeholder="What's this about?"
                      required
                    />
                  </Field>

                  <Field className="flex flex-col">
                    <FieldLabel htmlFor="contact-message" className="text-sm font-medium mb-1 text-gray-200">Message</FieldLabel>
                    <Textarea
                      id="contact-message"
                      placeholder="Write your message here..."
                      className="resize-none"
                      required
                    />
                  </Field>
                </FieldSet>

                <Field className="mt-6 text-center md:text-left" orientation={"horizontal"}>
                  <Button type="submit" className="px-6 py-3 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-300 transition duration-150 w-full md:w-auto">
                    Submit
                  </Button>
                </Field>
              </FieldGroup>
            </form>
          </div>

          {/* Right Content */}
          <div className="flex-shrink-0 w-full md:w-auto">
            <div className="w-full md:min-w-80 bg-white/10 rounded-xl text-gray-200 p-8 shadow-xl">
            
            <h1 className="text-2xl font-bold mb-6 text-yellow-200">Contact Information</h1>
            
            <div className="flex items-center mb-4">
              <MailIcon className="w-6 h-6 text-yellow-400 mr-3" />
              <p className="text-lg">mjalvarez@gbox.ncf.edu.ph</p>
            </div>
            
            <div className="flex items-center mb-4">
              <PhoneIcon className="w-6 h-6 text-yellow-400 mr-3" />
              <p className="text-lg">0963 494 2126</p>
            </div>
            
            <div className="flex items-center mb-4">
              <MapPinPenIcon className="w-6 h-6 text-yellow-400 mr-3" />
              <p className="text-lg">Bombon, Camarines Sur</p>
            </div>

            <h1 className="text-2xl font-bold mb-6 text-yellow-200">Connect with me</h1>
            
            <div className="flex space-x-6 justify-center">
              
              <a
                href="https://www.facebook.com/markjustinealvarez04"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Connect on Facebook"
                className="text-white hover:text-yellow-400 transition duration-150">
                <FacebookIcon className="h-8 w-8" />
              </a>
              
              <a
                href="https://www.instagram.com/jstn_alvz/"
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Connect on Instagram"
                className="text-white hover:text-yellow-400 transition duration-150">
                <InstagramIcon className="h-8 w-8" />
              </a>
            </div>
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