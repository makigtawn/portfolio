import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SocialLinks from "../components/SocialLinks";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="container mx-auto px-6 pt-24 pb-14 md:pt-28 md:pb-16 relative z-10">
        <div className="lg:grid lg:grid-cols-2 md:grid md:grid-cols-2 gap-3 lg:gap-2 items-center">
          {/* Left Column */}
          <div className="flex flex-col gap-8">
            <div className="space-y-6">
              <h1 className="text-2xl font-bold tracking-tighter md:text-6xl">
                Meklit
                <div className="pl-8"> Girmaw </div>
              </h1>

              <p className="leading-relaxed text-zinc-600  ">
                I'm Meklit Girmaw. Full-stack developer building for founders
                and teams who need clear, fast, and reliable React applications.
                No fluff, just logic.
              </p>
            </div>

            <div className="flex items-center gap-6">
              <a
                href="#contact"
                className="px-6 py-3 border-2 border-black bg-black text-white hover:bg-white hover:text-black transition-colors">
                Get in touch
              </a>
              <a
                href="/cv.pdf"
                className="relative inline-block hover:text-zinc-500 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-zinc-500 after:transition-transform after:duration-300 hover:after:scale-x-100">
                View Resume
              </a>
            </div>
          </div>

          {/* Right Column  */}

          <div className="relative hidden md:block">
            <div className="relative max-w-xs lg:max-w-sm mx-auto">
              <div className="relative bg-white p-1 rounded-3xl shadow-sm">
                <img
                  src="/profile-photo.png"
                  alt="Meklit Girmaw"
                  className="w-full max-h-[52vh] aspect-[4/5] object-cover rounded-2xl grayscale-[60%] transition-all "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// old and desktop first
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import SocialLinks from "../components/SocialLinks";

// export const Hero = () => {
//   return (
//     <section className="relative min-h-screen flex items-center overflow-hidden">
//       <div className="container mx-auto px-6 pt-24 pb-14 md:pt-28 md:pb-16 relative z-10">
//         {/* <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-8 lg:gap-10 items-center"> */}
//         <div className="grid grid-cols-2 gap-3 lg:gap-2 items-center">
//           {/* Left Column */}
//           <div className="flex flex-col gap-8 font-mono">
//             <div className="space-y-6">
//               <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
//                 Meklit
//                 <div className="pl-8"> Girmaw </div>
//               </h1>

//               <p className="max-w-md text-lg leading-relaxed text-zinc-600">
//                 I'm Meklit Girmaw. Full-stack developer building for founders
//                 and teams who need clear, fast, and reliable React applications.
//                 No fluff, just logic.

//               </p>

//             </div>

//             <div className="flex items-center gap-6">
//               <a
//                 href="#contact"
//                 className="px-6 py-3 border-2 border-black bg-black text-white hover:bg-white hover:text-black transition-colors">
//                 Get in touch
//               </a>
//               <a
//                 href="/cv.pdf"
//                 className="relative inline-block hover:text-zinc-500 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-zinc-500 after:transition-transform after:duration-300 hover:after:scale-x-100">
//                 View Resume
//               </a>
//             </div>
//             <SocialLinks />
//           </div>

//           {/* Right Column  */}

//           <div className="relative hidden md:block">
//             <div className="relative max-w-xs lg:max-w-sm mx-auto">
//               <div className="relative bg-white p-1 rounded-3xl shadow-sm">
//                 <img
//                   src="/profile-photo.png"
//                   alt="Meklit Girmaw"
//                   className="w-full max-h-[52vh] aspect-[4/5] object-cover rounded-2xl grayscale-[60%] transition-all "
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };
