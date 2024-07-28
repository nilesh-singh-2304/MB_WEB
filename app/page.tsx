'use client'
import { DockDemo } from "@/components/dock";
import Image from "next/image";
import Link from "next/link";
import { ToastContainer, toast } from 'react-toastify';
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";




export default function Home() {
  const [emblaRef] = useEmblaCarousel({loop:true}, [Autoplay({delay:2000})])
  return (
    <main className="min-h-screen px-10 pt-24 ">
     <ToastContainer
position="bottom-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
      {/* //hero section */}
      <section className="flex flex-col justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row">
        <div className="flex w-1/2 ml-10 flex-col items-center justify-center sm:text-center lg:items-start lg:py-12 lg:text-left xl:w-5/12 xl:py-24">
          <h1 className="mb-8 text-4xl font-bold text-white sm:text-5xl md:mb-8 md:text-6xl">
            Microbird <br />
            The Techno Club
          </h1>

          <p className="mb-8 leading-relaxed text-gray-500 md:mb-12 lg:w-4/5 xl:text-lg">
            This is a section of some simple filler text, also known as
            placeholder text. It shares some characteristics of a real written
            text but is random.
          </p>
          <div>
            <p className="text-lg font-bold text-center mb-4">Explore Our :</p>
            <div className="flex">
              <Link href={"/projects"}><button className="btn btn-wide text-white glass btn-primary mr-1 mb-1">
                Projects
              </button></Link>
              <Link href={"/services"}><button className="btn btn-wide text-white glass btn-secondary ml-1 mb-1">
                Services
              </button></Link>
            </div>
            <div className="flex">
              <Link href={"/events"}><button className="btn btn-wide text-white glass btn-accent mr-1 mt-1">
                Events
              </button></Link>
              <Link href={"/competitions"}><button className="btn btn-wide text-white glass btn-error ml-1 mt-1">
                Competitions
              </button></Link>
            </div>
          </div>
        </div>
        <div className=" overflow-hidden w-1/2 rounded-lg shadow-lg  mt-20 mr-7">
          <div className="mockup-browser bg-base-300 border border-gray-500">
            <div className="mockup-browser-toolbar">
              <div className="input">https://microbird.com</div>
            </div>
            <div className="bg-base-200 flex justify-center px-4 py-16">
              <div className="w-1/3">
                <ul className="steps steps-vertical">
                  <li className="step step-primary">Register</li>
                  <li className="step step-primary">Choose plan</li>
                  <li className="step step-primary">Purchase</li>
                  <li className="step">Receive Product</li>
                </ul>
              </div>
              <div className="divider lg:divider-horizontal"></div>
              <div className="w-2/3 scale-105">
                <div className="chat chat-start">
                  <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                      <img
                        alt="Tailwind CSS chat bubble component"
                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                      />
                    </div>
                  </div>
                  <div className="chat-header">
                    Obi-Wan Kenobi
                    <time className="text-xs opacity-50">12:45</time>
                  </div>
                  <div className="chat-bubble">
                    I want to grow professionally
                  </div>
                </div>
                <div className="chat chat-start">
                  <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                      <img
                        alt="Tailwind CSS chat bubble component"
                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                      />
                    </div>
                  </div>
                  <div className="chat-bubble">
                    And also wanna expand my skillset and knowledge
                  </div>
                  <div className="chat-footer opacity-50">Delivered</div>
                </div>
                <div className="chat chat-end">
                  <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                      <img
                        alt="Tailwind CSS chat bubble component"
                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                      />
                    </div>
                  </div>
                  <div className="chat-header">
                    Anakin
                    <time className="text-xs opacity-50">12:46</time>
                  </div>
                  <div className="chat-bubble">Just Follow us !!</div>
                  <div className="chat-footer opacity-50">Seen at 12:46</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* //hmare baare me jaankari */}

      <div className=" mt-5 mb-10 font-[sans-serif]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white inline-block relative after:absolute after:w-4/6 after:h-1 after:left-0 after:right-0 after:-bottom-4 after:mx-auto after:bg-pink-400 after:rounded-full">Somethings About Us</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 max-md:max-w-lg mx-auto">
          <div className="bg-gray-500 cursor-pointer rounded-lg overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative group">
            <img src="https://www.microbirdymca.in/images/home/whatwedo.jpg" alt="Blog Post 1" className="w-full h-96 object-cover" />
            <div className="p-6 absolute bottom-0 left-0 right-0 bg-gray-800 opacity-90">
              <h3 className="text-xl font-bold text-white">What we do?</h3>
              <div className="h-0 overflow-hidden group-hover:h-16 group-hover:mt-4 transition-all duration-300">
                <p className="text-white text-sm">We are an organization of budding electronics enthusiasts aiming at their motto "From Innovation to Implementation" We help students to nurture their new skill-sets by conducting various workshops and competitions. We aim to fill in the void of Electronics hobbyists in the institute by providing a platform where the theory learnt in classes can be applied in the real world..</p>
              </div>
            </div>
          </div>
          <div className="bg-white cursor-pointer rounded-lg overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative group">
            <img src="https://www.microbirdymca.in/images/home/whowe.jpg" alt="Blog Post 2" className="w-full h-96 object-cover" />
            <div className="p-6 absolute bottom-0 left-0 right-0 bg-gray-800 opacity-90">
              <h3 className="text-xl font-bold text-white">Who we are?</h3>
              <div className="h-0 overflow-hidden group-hover:h-16 group-hover:mt-4 transition-all duration-300">
                <p className="text-white text-sm">The name Microbird is symbolic of the vision of the organization where Micro reminds us of it's connection with The Electronics industry and the term bird is symbolic of the vision the founders wanted to it to progress, reaching the higher skies like a bird aiming at new successes and milestones and spreading wings of innovation all around..</p>
              </div>
            </div>
          </div>
          <div className="bg-white cursor-pointer rounded-lg overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative group">
            <img src="https://www.microbirdymca.in/images/home/whyus.jpg" alt="Blog Post 3" className="w-full h-96 object-cover" />
            <div className="p-6 absolute bottom-0 left-0 right-0 bg-gray-800 opacity-90">
              <h3 className="text-xl font-bold text-white">Why Us?</h3>
              <div className="h-0 overflow-hidden group-hover:h-16 group-hover:mt-4 transition-all duration-300">
                <p className="text-white text-sm">Microbird aims to provide a platform to explore the world of electronics through hands-on experience. We strive to aid students in acquiring practical knowledge and taking part in innovative projects which help them contemplate, discuss, debate and tackle real-life challenges. Teamwork and bonding is what runs our club and helps us strive.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* //Faculty Coordinators */}

    <div className="mt-10 font-[sans-serif]">
            <div className="lg:max-w-6xl max-w-xl  mx-auto p-4">
                <h2 className="text-white text-3xl font-extrabold text-center">Faculty Coordinators</h2>

                <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 max-md:justify-center mt-12">

                    <div className="flex items-center max-sm:flex-col bg-gray-800 border border-gray-700 gap-4 rounded-lg overflow-hidden hover:scale-[1.02] transition-all">
                        <img src="https://www.microbirdymca.in/images/home/sktomar.png" className="w-full sm:h-60 object-cover object-top" />

                        <div className="p-4">
                            <h4 className="text-white text-base font-bold">John Doe</h4>
                            <p className="text-white text-xs mt-1">Software Engineer</p>

                            <div className="mt-4">
                                <p className="text-white text-sm leading-relaxed">Eiusmod commodo aliquip laboris qui anim non voluptate consectetur.</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center max-sm:flex-col bg-gray-800 border border-gray-700 gap-4 rounded-lg overflow-hidden hover:scale-[1.02] transition-all">
                        <img src="https://www.microbirdymca.in/images/home/lakhwinder.jpeg" className="w-full sm:h-60 object-cover object-top" />

                        <div className="p-4">
                            <h4 className="text-white text-base font-bold">Simon Konecki</h4>
                            <p className="text-white text-xs mt-1">Web Designer</p>

                            <div className="mt-4">
                                <p className="text-white text-sm leading-relaxed">Eiusmod commodo aliquip laboris qui anim non voluptate consectetur.</p>
                            </div>

                        </div>
                    </div>

                    <div className="flex items-center max-sm:flex-col bg-gray-800 border border-gray-700 gap-4 rounded-lg overflow-hidden hover:scale-[1.02] transition-all">
                        <img src="https://www.microbirdymca.in/images/home/mukeshkumar.jpeg" className="w-full sm:h-60 object-cover object-top" />

                        <div className="p-4">
                            <h4 className="text-white text-base font-bold">Sophia</h4>
                            <p className="text-white text-xs mt-1">Software Developer</p>

                            <div className="mt-4">
                                <p className="text-white text-sm leading-relaxed">Eiusmod commodo aliquip laboris qui anim non voluptate consectetur.</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center max-sm:flex-col bg-gray-800 border border-gray-700 gap-4 rounded-lg overflow-hidden hover:scale-[1.02] transition-all">
                        <img src="https://www.microbirdymca.in/images/home/paulami.jpeg" className="w-full sm:h-60 object-cover object-top" />

                        <div className="p-4">
                            <h4 className="text-white text-base font-bold">Alen</h4>
                            <p className="text-white text-xs mt-1">Software Engineer</p>

                            <div className="mt-4">
                                <p className="text-white text-sm leading-relaxed">Eiusmod commodo aliquip laboris qui anim non voluptate consectetur.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* The button to open modal */}
        
        <div className="flex flex-col justify-center items-center w-fit mt-10">
        <p className="text-white text-3xl font-extrabold text-center">Our Alumni</p>
        <div className="embla " ref={emblaRef}>
          
      <div className="embla__container w-auto text-center h-auto">
        <div className="embla__slide">
        <div className="max-w-4xl bg-gray-800 rounded-xl border border-gray-700 mx-auto p-16 my-5 font-[sans-serif]">

          <div className="grid md:grid-cols-3 items-center gap-12">
              <div>
                  <img src='https://readymadeui.com/profile_5.webp' className="w-[280px] rounded-lg shadow-[-20px_20px_0px_rgba(23,219,220,1)]" />
              </div>

              <div className="md:col-span-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 fill-secondary inline rotate-180" viewBox="0 0 475.082 475.081">
                      <path d="M164.454 36.547H54.818c-15.229 0-28.171 5.33-38.832 15.987C5.33 63.193 0 76.135 0 91.365v109.632c0 15.229 5.327 28.169 15.986 38.826 10.66 10.656 23.606 15.988 38.832 15.988h63.953c7.611 0 14.084 2.666 19.414 7.994 5.33 5.325 7.994 11.8 7.994 19.417v9.131c0 20.177-7.139 37.397-21.413 51.675-14.275 14.271-31.499 21.409-51.678 21.409h-18.27c-4.952 0-9.233 1.813-12.851 5.427-3.615 3.614-5.424 7.898-5.424 12.847v36.549c0 4.941 1.809 9.233 5.424 12.848 3.621 3.613 7.898 5.427 12.851 5.427h18.271c19.797 0 38.688-3.86 56.676-11.566 17.987-7.707 33.546-18.131 46.68-31.265 13.131-13.135 23.553-28.691 31.261-46.679 7.707-17.987 11.562-36.877 11.562-56.671V91.361c0-15.23-5.33-28.171-15.987-38.828s-23.602-15.986-38.827-15.986zm294.635 15.987c-10.656-10.657-23.599-15.987-38.828-15.987H310.629c-15.229 0-28.171 5.33-38.828 15.987-10.656 10.66-15.984 23.601-15.984 38.831v109.632c0 15.229 5.328 28.169 15.984 38.826 10.657 10.656 23.6 15.988 38.828 15.988h63.953c7.611 0 14.089 2.666 19.418 7.994 5.324 5.328 7.994 11.8 7.994 19.417v9.131c0 20.177-7.139 37.397-21.416 51.675-14.274 14.271-31.494 21.409-51.675 21.409h-18.274c-4.948 0-9.233 1.813-12.847 5.427-3.617 3.614-5.428 7.898-5.428 12.847v36.549c0 4.941 1.811 9.233 5.428 12.848 3.613 3.613 7.898 5.427 12.847 5.427h18.274c19.794 0 38.684-3.86 56.674-11.566 17.984-7.707 33.541-18.131 46.676-31.265 13.134-13.135 23.562-28.695 31.265-46.679 7.706-17.983 11.563-36.877 11.563-56.671V91.361c-.003-15.23-5.328-28.171-15.992-38.827z" data-original="#000000"></path>
                  </svg>

                  <p className="text-gray-50 text-sm mt-6 leading-relaxed">Veniam proident aute magna anim excepteur et ex consectetur velit ullamco veniam minim aute sit. Elit occaecat officia et laboris Lorem minim. Officia do aliqua adipisicing ullamco in.</p>


                  <div className="mt-4">
                      <p className="text-gray-50 text-base font-semibold">Simon Konecki</p>
                      <p className="text-xs text-gray-400 mt-0.5">Founder of Labar</p>
                  </div>

                  <div className="flex justify-end mt-4 space-x-4">
                      <div className="bg-info text-white text-2xl w-10 h-10 grid items-center justify-center rounded-full shrink-0 cursor-pointer">
                      <FaLinkedin />
                      </div>
                      <div className="bg-secondary text-white text-2xl w-10 h-10 grid items-center justify-center rounded-full -rotate-90 shrink-0 cursor-pointer">
                      <FaInstagramSquare />
                      </div>
                  </div>
              </div>
          </div>
      </div>
        </div>
        <div className="embla__slide">
        <div className="max-w-4xl bg-gray-800 rounded-xl border border-gray-700 mx-auto p-16 my-5 font-[sans-serif]">

          <div className="grid md:grid-cols-3 items-center gap-12">
              <div>
                  <img src='https://readymadeui.com/profile_5.webp' className="w-[280px] rounded-lg shadow-[-20px_20px_0px_rgba(23,219,220,1)]" />
              </div>

              <div className="md:col-span-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 fill-secondary inline rotate-180" viewBox="0 0 475.082 475.081">
                      <path d="M164.454 36.547H54.818c-15.229 0-28.171 5.33-38.832 15.987C5.33 63.193 0 76.135 0 91.365v109.632c0 15.229 5.327 28.169 15.986 38.826 10.66 10.656 23.606 15.988 38.832 15.988h63.953c7.611 0 14.084 2.666 19.414 7.994 5.33 5.325 7.994 11.8 7.994 19.417v9.131c0 20.177-7.139 37.397-21.413 51.675-14.275 14.271-31.499 21.409-51.678 21.409h-18.27c-4.952 0-9.233 1.813-12.851 5.427-3.615 3.614-5.424 7.898-5.424 12.847v36.549c0 4.941 1.809 9.233 5.424 12.848 3.621 3.613 7.898 5.427 12.851 5.427h18.271c19.797 0 38.688-3.86 56.676-11.566 17.987-7.707 33.546-18.131 46.68-31.265 13.131-13.135 23.553-28.691 31.261-46.679 7.707-17.987 11.562-36.877 11.562-56.671V91.361c0-15.23-5.33-28.171-15.987-38.828s-23.602-15.986-38.827-15.986zm294.635 15.987c-10.656-10.657-23.599-15.987-38.828-15.987H310.629c-15.229 0-28.171 5.33-38.828 15.987-10.656 10.66-15.984 23.601-15.984 38.831v109.632c0 15.229 5.328 28.169 15.984 38.826 10.657 10.656 23.6 15.988 38.828 15.988h63.953c7.611 0 14.089 2.666 19.418 7.994 5.324 5.328 7.994 11.8 7.994 19.417v9.131c0 20.177-7.139 37.397-21.416 51.675-14.274 14.271-31.494 21.409-51.675 21.409h-18.274c-4.948 0-9.233 1.813-12.847 5.427-3.617 3.614-5.428 7.898-5.428 12.847v36.549c0 4.941 1.811 9.233 5.428 12.848 3.613 3.613 7.898 5.427 12.847 5.427h18.274c19.794 0 38.684-3.86 56.674-11.566 17.984-7.707 33.541-18.131 46.676-31.265 13.134-13.135 23.562-28.695 31.265-46.679 7.706-17.983 11.563-36.877 11.563-56.671V91.361c-.003-15.23-5.328-28.171-15.992-38.827z" data-original="#000000"></path>
                  </svg>

                  <p className="text-gray-50 text-sm mt-6 leading-relaxed">Veniam proident aute magna anim excepteur et ex consectetur velit ullamco veniam minim aute sit. Elit occaecat officia et laboris Lorem minim. Officia do aliqua adipisicing ullamco in.</p>


                  <div className="mt-4">
                      <p className="text-gray-50 text-base font-semibold">Simon Konecki</p>
                      <p className="text-xs text-gray-400 mt-0.5">Founder of Labar</p>
                  </div>

                  <div className="flex justify-end mt-4 space-x-4">
                      <div className="bg-info text-white text-2xl w-10 h-10 grid items-center justify-center rounded-full shrink-0 cursor-pointer">
                      <FaLinkedin />
                      </div>
                      <div className="bg-secondary text-white text-2xl w-10 h-10 grid items-center justify-center rounded-full -rotate-90 shrink-0 cursor-pointer">
                      <FaInstagramSquare />
                      </div>
                  </div>
              </div>
          </div>
      </div>
        </div>
      </div>
    </div>
        </div>
    </main>
  );
}
