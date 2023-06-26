import React, { useState } from "react";


export default function Faq() {
   const [arrow1, setArrow1] = useState(false)
   const [arrow2, setArrow2] = useState(false)
   const [arrow3, setArrow3] = useState(false)
   const [arrow4, setArrow4] = useState(false)


   return (
      <section className="font-body text-center p-6 md:px-52 lg:px-80">
         <h1 className="font-semibold text-3xl">Frequently Asked Questions</h1>
         <p className="text-[#9194a1] mt-6 lg:px-36">Here are some of our FAQs. If you have any other questions you’d like
            answered please feel free to email us.</p>
         <div className="mt-10">
            <hr />

            <div className="p-4">
               <span onClick={() => setArrow1(!arrow1)} className="hover:text-[#fa5757] cursor-pointer">What is Bookmark?</span>
               <img className={`inline ml-10 lg:ml-52 ${arrow1 && 'rotate-180'}`} src='./images/icon-arrow.svg' />
               {arrow1 && <p className="py-3 px-8"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla.
                  Phasellus blandit ipsum quis quam ornare mattis.</p>}
               <hr />
            </div>

            <div className="p-4">
               <span onClick={() => setArrow2(!arrow2)} className="hover:text-[#fa5757] cursor-pointer">How can I request a new browser?</span>
               <img className={`inline ml-10 lg:ml-52 ${arrow2 && 'rotate-180'}`} src='./images/icon-arrow.svg' />
               {arrow2 && <p className="py-3 px-8">Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula.Suspendisse imperdiet.
                  Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.</p>}
               <hr />
            </div>

            <div className="p-4">
               <span onClick={() => setArrow3(!arrow3)} className="hover:text-[#fa5757] cursor-pointer">Is there a mobile app?</span>
               <img className={`inline ml-10 lg:ml-52 ${arrow3 && 'rotate-180'}`} src='./images/icon-arrow.svg' />
               {arrow3 && <p className="py-3 px-8"> Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget.
                  Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum.</p>}
               <hr />
            </div>

            <div className="p-4">
               <span onClick={() => setArrow4(!arrow4)} className="hover:text-[#fa5757] cursor-pointer">What about other Chromium browsers?</span>
               <img className={`inline ml-4 lg:ml-52 ${arrow4 && 'rotate-180'}`} src='./images/icon-arrow.svg' />
               {arrow4 && <p className="py-3 px-8"> Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui.
                  Aliquam vitae neque eget nisl gravida pellentesque non ut velit.</p>}
               <hr />
            </div>

         </div>
         <button className="mt-4 px-4 py-2 bg-[#5368df] rounded-md text-white">More info</button>
      </section>
   )
}