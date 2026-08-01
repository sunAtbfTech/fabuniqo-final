// import React, { useState } from 'react';
// import { ArrowRight, ShieldCheck, Star, Sparkles, Send } from 'lucide-react';

// const VIPMembershipSection = () => {
//   const [email, setEmail] = useState("");
//   const [isSubscribed, setIsSubscribed] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (email) {
//       setIsSubscribed(true);
//       // Logic for API call would go here
//     }
//   };

//   return (
//     <section className="relative py-24 px-6 bg-[#0a0a0a] overflow-hidden">
//       {/* Background Aesthetic Elements */}
//       <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
//         <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[rgb(209,167,67)]/10 blur-[120px] rounded-full"></div>
//         <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-[rgb(209,167,67)]/5 blur-[100px] rounded-full"></div>
//       </div>

//       <div className="max-w-6xl mx-auto relative z-10">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
//           {/* Left Side: The Value Proposition */}
//           <div className="space-y-8">
//             <div className="inline-flex items-center gap-2 px-3 py-1 border border-[rgb(209,167,67)]/30 rounded-full">
//               <Sparkles size={14} className="text-[rgb(209,167,67)]" />
//               <span className="text-[10px] tracking-[0.3em] text-[rgb(209,167,67)] uppercase font-bold">
//                 Priority Access
//               </span>
//             </div>

//             <h2 className="text-4xl md:text-6xl font-light text-white tracking-tighter leading-tight">
//               Join the <br />
//               <span className=" text-[rgb(209,167,67)]">Inner Circle</span>
//             </h2>

//             <p className="text-zinc-400 text-lg font-light leading-relaxed max-w-md">
//               Our most coveted pieces never reach the public. Become a member to unlock private collections and artisanal drops.
//             </p>

//             <ul className="space-y-4 pt-4">
//               {[
//                 { icon: <Star size={18} />, text: "Early access to limited 'Edition Zero' drops" },
//                 { icon: <ShieldCheck size={18} />, text: "Private 1-on-1 styling consultations" },
//                 { icon: <Send size={18} />, text: "Invitations to global runway showcases" }
//               ].map((item, i) => (
//                 <li key={i} className="flex items-center gap-4 text-zinc-300 group">
//                   <div className="text-[rgb(209,167,67)] group-hover:scale-110 transition-transform">
//                     {item.icon}
//                   </div>
//                   <span className="text-sm tracking-wide font-light">{item.text}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Right Side: The Premium "Black Box" Card */}
//           <div className="relative">
//             {!isSubscribed ? (
//               <div className="bg-zinc-900/50 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-2xl shadow-2xl relative overflow-hidden group">
//                 {/* Texture Overlay */}
//                 <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/dark-leather.png')]"></div>
                
//                 <h3 className="text-2xl text-white font-medium mb-2 tracking-tight">Create your Profile</h3>
//                 <p className="text-zinc-500 text-sm mb-10 tracking-wide uppercase">Step into the Fabuniqo Universe</p>

//                 <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
//                   <div className="space-y-2">
//                     <label className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 ml-1">Email Address</label>
//                     <input 
//                       type="email" 
//                       required
//                       value={email}
//                       onChange={(e) => setEmail(e.target.value)}
//                       placeholder="luxury@lifestyle.com"
//                       className="w-full bg-white/5 border-b border-white/20 px-4 py-4 text-white placeholder:text-zinc-700 focus:outline-none focus:border-[rgb(209,167,67)] transition-colors duration-500"
//                     />
//                   </div>

//                   <button 
//                     type="submit"
//                     className="w-full bg-[rgb(209,167,67)] hover:bg-[rgb(180,140,50)] text-black font-bold py-5 px-8 rounded-sm tracking-[0.2em] uppercase text-xs flex items-center justify-center gap-3 transition-all active:scale-[0.98]"
//                   >
//                     Request Invitation <ArrowRight size={16} />
//                   </button>
//                 </form>

//                 <p className="mt-8 text-[10px] text-zinc-600 text-center uppercase tracking-widest leading-relaxed">
//                   By joining, you agree to our <span className="text-zinc-400 underline cursor-pointer">Privacy Policy</span>. <br />
//                   Exclusivity is our promise.
//                 </p>
//               </div>
//             ) : (
//               <div className="bg-zinc-900/50 backdrop-blur-xl border border-[rgb(209,167,67)]/30 p-12 rounded-2xl text-center animate-in zoom-in duration-500">
//                 <div className="w-16 h-16 bg-[rgb(209,167,67)]/20 rounded-full flex items-center justify-center mx-auto mb-6">
//                   <ShieldCheck size={32} className="text-[rgb(209,167,67)]" />
//                 </div>
//                 <h3 className="text-2xl text-white font-light mb-2">Registration Received</h3>
//                 <p className="text-zinc-400 text-sm font-light">A concierge will review your application and reach out shortly via email.</p>
//               </div>
//             )}

//             {/* Decorative "Member" Watermark */}
//             <div className="absolute -bottom-6 -right-6 text-[80px] font-bold text-white/[0.03] select-none pointer-events-none">
//               MEMBER
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default VIPMembershipSection;

















// import React, { useState } from "react";
// import { ArrowRight, ShieldCheck, Star, Sparkles, Send, Gem } from "lucide-react";

// const VIPMembershipSection = () => {
//   const [email, setEmail] = useState("");
//   const [isSubscribed, setIsSubscribed] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (email) {
//       setIsSubscribed(true);
//     }
//   };

//   return (
//     <section className="relative py-24 px-6 bg-[#0a0a0a] overflow-hidden">

//       {/* Gold Glow Background */}
//       <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
//         <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[rgb(209,167,67)]/20 blur-[140px] rounded-full animate-pulse"></div>
//         <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-[rgb(209,167,67)]/10 blur-[120px] rounded-full animate-pulse"></div>
//       </div>

//       <div className="max-w-6xl mx-auto relative z-10">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

//           {/* LEFT SIDE */}
//           <div className="space-y-8">

//             <div className="inline-flex items-center gap-2 px-3 py-1 border border-[rgb(209,167,67)]/30 rounded-full">
//               <Sparkles size={14} className="text-[rgb(209,167,67)]" />
//               <span className="text-[10px] tracking-[0.3em] text-[rgb(209,167,67)] uppercase font-bold">
//                 Fabuniqo Exclusive
//               </span>
//             </div>

//             <h2 className="text-4xl md:text-6xl font-light text-white tracking-tighter leading-tight">
//               Enter the <br />
//               <span className="text-[rgb(209,167,67)]">Fabuniqo Circle</span>
//             </h2>

//             <p className="text-zinc-400 text-lg font-light leading-relaxed max-w-md">
//               Discover handcrafted jewellery pieces before the world sees them.
//               Our private members enjoy early access to rare collections,
//               diamond drops, and bespoke jewellery experiences.
//             </p>

//             <ul className="space-y-4 pt-4">
//               {[
//                 {
//                   icon: <Gem size={18} />,
//                   text: "Early access to limited diamond & gold collections",
//                 },
//                 {
//                   icon: <ShieldCheck size={18} />,
//                   text: "Private jewellery styling consultations",
//                 },
//                 {
//                   icon: <Star size={18} />,
//                   text: "Exclusive member-only jewellery drops",
//                 },
//                 {
//                   icon: <Send size={18} />,
//                   text: "Invitations to luxury jewellery launches",
//                 },
//               ].map((item, i) => (
//                 <li key={i} className="flex items-center gap-4 text-zinc-300 group">
//                   <div className="text-[rgb(209,167,67)] group-hover:scale-110 transition-transform">
//                     {item.icon}
//                   </div>
//                   <span className="text-sm tracking-wide font-light">{item.text}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* RIGHT SIDE CARD */}
//           <div className="relative">

//             {!isSubscribed ? (
//               <div className="bg-zinc-900/60 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-2xl shadow-2xl relative overflow-hidden group">

//                 {/* Gold Shine Effect */}
//                 <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-r from-transparent via-[rgb(209,167,67)]/10 to-transparent"></div>

//                 {/* Texture */}
//                 <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/dark-leather.png')]"></div>

//                 <h3 className="text-2xl text-white font-medium mb-2 tracking-tight">
//                   Create your Profile
//                 </h3>

//                 <p className="text-zinc-500 text-sm mb-10 tracking-wide uppercase">
//                   Unlock Fabuniqo Jewellery Access
//                 </p>

//                 <form onSubmit={handleSubmit} className="space-y-6 relative z-10">

//                   <div className="space-y-2">
//                     <label className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 ml-1">
//                       Email Address
//                     </label>

//                     <input
//                       type="email"
//                       required
//                       value={email}
//                       onChange={(e) => setEmail(e.target.value)}
//                       placeholder="luxury@jewellery.com"
//                       className="w-full bg-white/5 border-b border-white/20 px-4 py-4 text-white placeholder:text-zinc-700 focus:outline-none focus:border-[rgb(209,167,67)] transition-colors duration-500"
//                     />
//                   </div>

//                   <button
//                     type="submit"
//                     className="w-full bg-[rgb(209,167,67)] hover:bg-[rgb(180,140,50)] text-black font-bold py-5 px-8 rounded-sm tracking-[0.2em] uppercase text-xs flex items-center justify-center gap-3 transition-all active:scale-[0.98]"
//                   >
//                     Request Invitation <ArrowRight size={16} />
//                   </button>

//                 </form>

//                 <p className="mt-8 text-[10px] text-zinc-600 text-center uppercase tracking-widest leading-relaxed">
//                   By joining, you agree to our{" "}
//                   <span className="text-zinc-400 underline cursor-pointer">
//                     Privacy Policy
//                   </span>
//                   . <br />
//                   Luxury crafted with exclusivity.
//                 </p>
//               </div>
//             ) : (
//               <div className="bg-zinc-900/60 backdrop-blur-xl border border-[rgb(209,167,67)]/30 p-12 rounded-2xl text-center animate-in zoom-in duration-500">

//                 <div className="w-16 h-16 bg-[rgb(209,167,67)]/20 rounded-full flex items-center justify-center mx-auto mb-6">
//                   <ShieldCheck size={32} className="text-[rgb(209,167,67)]" />
//                 </div>

//                 <h3 className="text-2xl text-white font-light mb-2">
//                   Registration Received
//                 </h3>

//                 <p className="text-zinc-400 text-sm font-light">
//                   A Fabuniqo jewellery concierge will contact you shortly with
//                   exclusive access details.
//                 </p>
//               </div>
//             )}

//             {/* Watermark */}
//             <div className="absolute -bottom-6 -right-6 text-[80px] font-bold text-white/[0.03] select-none pointer-events-none">
//               FABUNIQO
//             </div>

//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default VIPMembershipSection;
















import React, { useState } from "react";
import { ArrowRight, ShieldCheck, Star, Sparkles, Send, Gem } from "lucide-react";

const VIPMembershipSection = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
    }
  };

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    // <section className="relative py-24 px-6 bg-[#0a0a0a] overflow-hidden">
      <section className="relative py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a] overflow-hidden rounded-[35px] sm:rounded-[60px] lg:rounded-[100px]">

  {/* FLOATING PARTICLES */}
  <div className="absolute inset-0 pointer-events-none">

    {[...Array(8)].map((_, i) => (

      <div
        key={i}
        className="absolute text-[rgb(209,167,67)] opacity-20 animate-pulse"
        style={{
          left: `${10 + i * 10}%`,
          top: `${20 + (i % 3) * 20}%`,
          animationDuration: `${3 + i}s`,
        }}
      >

        <Gem size={16} />

      </div>

    ))}

  </div>

  {/* GOLD GLOW */}
  <div className="absolute inset-0 opacity-20 pointer-events-none">

    <div className="absolute top-[-10%] right-[-5%] w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-[rgb(209,167,67)]/20 blur-[120px] rounded-full animate-pulse" />

    <div className="absolute bottom-[-10%] left-[-5%] w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-[rgb(209,167,67)]/10 blur-[120px] rounded-full animate-pulse" />

  </div>

  <div className="max-w-[1500px] mx-auto relative z-10">

    <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 lg:gap-20 items-center">

      {/* LEFT */}
      <div className="space-y-8 text-center xl:text-left">

        {/* BADGE */}
        <div className="inline-flex items-center gap-2 px-4 py-2 border border-[rgb(209,167,67)]/30 rounded-full">

          <Sparkles
            size={14}
            className="text-[rgb(209,167,67)] animate-pulse"
          />

          <span className="text-[10px] sm:text-xs tracking-[0.25em] text-[rgb(209,167,67)] uppercase font-bold">

            Fabuniqo Exclusive

          </span>

        </div>

        {/* TITLE */}
        <h2 className="text-[34px] sm:text-[52px] md:text-[68px] font-light text-white tracking-tight leading-[1.05]">

          Enter the <br />

          <span className="text-fab-pink font-semibold">
            Fabuniqo Circle
          </span>

        </h2>

        {/* DESCRIPTION */}
        <p className="text-zinc-400 text-sm sm:text-lg font-light leading-relaxed max-w-xl mx-auto xl:mx-0">

          Discover handcrafted jewellery pieces before the world sees them.
          Members enjoy early access to luxury diamond drops and bespoke
          jewellery collections.

        </p>

        {/* FEATURES */}
        <ul className="space-y-4 pt-2">

          {[
            {
              icon: <Gem size={18} />,
              text: "Early access to diamond & gold collections",
            },
            {
              icon: <ShieldCheck size={18} />,
              text: "Private jewellery styling consultations",
            },
            {
              icon: <Star size={18} />,
              text: "Exclusive member-only jewellery drops",
            },
            {
              icon: <Send size={18} />,
              text: "Invitations to jewellery launches",
            },
          ].map((item, i) => (

            <li
              key={i}
              className="flex items-center justify-center xl:justify-start gap-4 text-zinc-300 group"
            >

              <div className="text-[rgb(209,167,67)] transition-all duration-300 group-hover:rotate-12 group-hover:scale-110">

                {item.icon}

              </div>

              <span className="text-xs sm:text-sm tracking-wide font-light">

                {item.text}

              </span>

            </li>

          ))}

        </ul>

      </div>

      {/* RIGHT */}
      <div
        className="relative"
        onMouseMove={handleMouseMove}
      >

        {!isSubscribed ? (

          <div className="relative overflow-hidden bg-zinc-900/60 backdrop-blur-xl border border-white/10 p-5 sm:p-8 lg:p-12 rounded-[28px] sm:rounded-[36px] shadow-2xl">

            {/* GLOW */}
            <div
              className="absolute w-[250px] sm:w-[300px] h-[250px] sm:h-[300px] bg-[rgb(209,167,67)]/20 blur-[120px] pointer-events-none transition-all duration-300"
              style={{
                left: mousePosition.x - 150,
                top: mousePosition.y - 150,
              }}
            />

            {/* TEXTURE */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/dark-leather.png')]" />

            {/* CONTENT */}
            <div className="relative z-10">

              <h3 className="text-[26px] sm:text-[34px] font-medium mb-2 tracking-tight text-fab-pink text-center xl:text-left">

                Create your Profile

              </h3>

              <p className="text-zinc-500 text-[11px] sm:text-sm mb-8 sm:mb-10 tracking-[0.15em] uppercase text-center xl:text-left">

                Unlock Fabuniqo Jewellery Access

              </p>

              {/* FORM */}
              <form
                onSubmit={handleSubmit}
                className="space-y-6"
              >

                <div className="space-y-2">

                  <label className="text-[10px] sm:text-[12px] uppercase tracking-[0.2em] text-zinc-500 ml-1">

                    Email Address

                  </label>

                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="luxury@jewellery.com"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-4 text-sm sm:text-base text-white placeholder:text-zinc-700 focus:outline-none focus:border-[rgb(209,167,67)] transition-all duration-500"
                  />

                </div>

                {/* BUTTON */}
                <button
                  type="submit"
                  className="relative group w-full overflow-hidden bg-fab-lightpink hover:bg-[rgb(180,140,50)] text-black font-bold py-4 sm:py-5 px-6 sm:px-8 rounded-2xl tracking-[0.18em] uppercase text-[10px] sm:text-xs flex items-center justify-center gap-3 transition-all duration-300 active:scale-[0.98]"
                >

                  <span className="relative z-10 flex items-center gap-3">

                    Request Invitation

                    <ArrowRight size={16} />

                  </span>

                  {/* SHIMMER */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                </button>

              </form>

              {/* FOOTER */}
              <p className="mt-8 text-[10px] sm:text-[12px] text-zinc-500 text-center uppercase tracking-[0.15em] leading-relaxed">

                By joining, you agree to our{" "}

                <span className="text-zinc-400 underline cursor-pointer">
                  Privacy Policy
                </span>

                . <br />

                Luxury crafted with exclusivity.

              </p>

            </div>

          </div>

        ) : (

          <div className="bg-zinc-900/60 backdrop-blur-xl border border-[rgb(209,167,67)]/30 p-8 sm:p-12 rounded-[28px] sm:rounded-[36px] text-center animate-in zoom-in duration-500">

            <div className="w-16 h-16 bg-[rgb(209,167,67)]/20 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">

              <ShieldCheck
                size={32}
                className="text-[rgb(209,167,67)]"
              />

            </div>

            <h3 className="text-2xl sm:text-3xl text-white font-light mb-2">

              Registration Received

            </h3>

            <p className="text-zinc-400 text-sm sm:text-base font-light">

              A Fabuniqo jewellery concierge will contact you shortly.

            </p>

          </div>

        )}

        {/* WATERMARK */}
        <div className="absolute -bottom-4 sm:-bottom-6 -right-2 sm:-right-6 text-[45px] sm:text-[80px] font-bold text-white/[0.03] select-none pointer-events-none">

          FABUNIQO

        </div>

      </div>

    </div>

  </div>

</section>
  );
};

export default VIPMembershipSection;