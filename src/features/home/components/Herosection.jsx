import React, { useState, useEffect, useRef } from "react";
import { ChevronRight, Pause, Play } from "lucide-react";
import vedio2 from "../../../assets/vedio2.mp4";
import vedio1 from "../../../assets/vedio1.mp4";
import vedio10 from "../../../assets/vedio10.mp4";
import vedio11 from "../../../assets/vedio 11.mp4";
import vedio12 from "../../../assets/vedio 12.mp4";
import vedio13 from "../../../assets/vedio 13.mp4";
import vedio14 from "../../../assets/vedio 14.mp4";
import vedio15 from "../../../assets/vedio 15.mp4";
import vedio16 from "../../../assets/vedio 16.mp4";
import vedioa from "../../../assets/vedioa.mp4";
import vediob from "../../../assets/vediob.mp4";


export default function HeroSection() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [showControls, setShowControls] = useState(false);
  const [animateTitle, setAnimateTitle] = useState(false);
  const videoRef = useRef(null);
  const titleRef = useRef(null);
  
  const videos = [
    { 
       src: vedioa, 
      title: "Luxary Necklace", 
      subtitle: "Graceful necklaces and pendants that define elegance",
      ctaText: "DISCOVER NECKLACES",
      year: "Collection"
    },
    { 
      // src: vedio14, 
      src : vediob,
      title: "Elegant Earings", 
      subtitle: "Delicate studs and earrings designed to shine every day",
      ctaText: "EXPLORE EARRINGS",
      year: "Collection"
    },
    // { 
    //   src: vedio16, 
    //   title: "LUXURY NECKLACES", 
    //   subtitle: "Graceful necklaces and pendants that define elegance",
    //   ctaText: "DISCOVER NECKLACES",
    //   year: "Collection"
    // }
  
  ];

  const fabuniqoGold = "rgb(209,167,67)";

  // Auto-rotate with luxury timing
  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        handleNext();
      }, 10000);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);




  // Preload for seamless transitions
  useEffect(() => {
    const loadVideo = (src) => {
      return new Promise((resolve) => {
        const video = document.createElement('video');
        video.src = src;
        video.onloadeddata = () => resolve();
      });
    };

    Promise.all(videos.map(v => loadVideo(v.src))).then(() => {
      setIsLoaded(true);
      setTimeout(() => {
        setAnimateTitle(true);
      }, 200);
    });
  }, []);

  // Handle video changes and title animation
  useEffect(() => {
    setAnimateTitle(false);
    
    const animationTimer = setTimeout(() => {
      setAnimateTitle(true);
    }, isTransitioning ? 1200 : 100);
    
    return () => clearTimeout(animationTimer);
  }, [currentVideoIndex, isTransitioning]);

  const handleNext = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 800);
    }, 400);
  };

  const handlePrev = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentVideoIndex((prev) => (prev - 1 + videos.length) % videos.length);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 800);
    }, 400);
  };

  const handleVideoClick = (index) => {
    if (index !== currentVideoIndex) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentVideoIndex(index);
        setTimeout(() => {
          setIsTransitioning(false);
        }, 800);
      }, 400);
    }
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div 
      className="relative w-full h-[70vh] overflow-hidden bg-black"
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      
      {/* Cinematic Video Background with Film Grain Effect */}
      <div className="absolute inset-0 w-full h-full">
        <div className={`relative w-full h-full transition-all duration-1200 ${
          isTransitioning ? 'opacity-95 blur-[1px]' : 'opacity-100 blur-0'
        }`}>
          <video
            ref={videoRef}
            key={videos[currentVideoIndex].src}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-1200 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            src={videos[currentVideoIndex].src}
            autoPlay
            loop
            muted
            playsInline
            onLoadedData={() => setIsLoaded(true)}
          />
          
          {/* Enhanced Luxury Gradient Overlays - Better contrast for text */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/40"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40"></div>
          
          {/* Gold accent overlay - subtle */}
          <div className="absolute inset-0 bg-gradient-to-br from-[rgb(209,167,67)]/5 via-transparent to-transparent"></div>
          
          {/* Subtle Film Grain Texture */}
          <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay"
               style={{
                 backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
               }}>
          </div>
        </div>
      </div>

      {/* Main Content - Royal Centered Layout */}
      <div className="relative h-full flex items-center justify-center">
        <div className="text-center px-4 sm:px-8 max-w-7xl mx-auto">
          {/* Year Indicator - Enhanced visibility */}
          <div className={`absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 transform transition-all duration-1200 delay-100 ${
            isTransitioning ? 'opacity-0 -translate-x-4' : 'opacity-70 translate-x-0'
          }`}>
            <div className="relative">
              <span className="absolute -inset-2 bg-[rgb(209,167,67)]/20 blur-md rounded-full"></span>
              <span className="relative font- text-lg sm:text-xl md:text-2xl text-[rgb(209,167,67)] tracking-widest vertical-rl rotate-180 font-light">
                {videos[currentVideoIndex].year}
              </span>
            </div>
          </div>

          {/* Title - Enhanced with gold gradient and better visibility */}
          <div className={`mb-6 md:mb-8 transform transition-all duration-1200 ${
            isTransitioning ? 'translate-y-20 opacity-0' : 'translate-y-0 opacity-100'
          }`}>
            <h1 
              ref={titleRef}
              className="font- text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-5xl font- leading-[0.9]"
            >
              {videos[currentVideoIndex].title.split('').map((letter, idx) => (
                <span 
                  key={`${currentVideoIndex}-${idx}`}
                  className={`inline-block whitespace-pre letter-animation ${
                    animateTitle ? 'letter-visible' : 'letter-hidden'
                  }`}
                  style={{ 
                    animationDelay: `${idx * 60}ms`,
                    transitionDelay: `${idx * 60}ms`,
                    color: idx % 2 === 0 ? '#FFFFFF' : 'rgb(209,167,67)',
                    textShadow: idx % 2 === 0 
                      ? '2px 2px 4px rgba(0,0,0,0.3), 0 0 20px rgba(209,167,67,0.2)' 
                      : '2px 2px 4px rgba(0,0,0,0.3), 0 0 30px rgba(209,167,67,0.4)'
                  }}
                >
                  {letter}
                </span>
              ))}
            </h1>
            
            {/* Decorative gold line under title */}
            <div className="mt-4 flex justify-center">
              <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-[rgb(209,167,67)] to-transparent"></div>
            </div>
          </div>

          {/* Subtitle - Enhanced with gold accents and better visibility */}
          <div className={`relative mb-10 md:mb-16 transform transition-all duration-1200 delay-300 ${
            isTransitioning ? 'translate-y-20 opacity-0' : 'translate-y-0 opacity-100'
          }`}>
            {/* Decorative gold elements */}
            <div className="absolute left-1/2 -translate-x-1/2 -top-6 w-12 h-12 opacity-20">
              <div className="w-full h-full border border-[rgb(209,167,67)] rotate-45"></div>
            </div>
            
            <div className="relative">
              {/* Background with blur for better readability */}
              <div className="absolute inset-0 bg-black/40 blur-md rounded-full"></div>
              
              <p className="relative font- text-base sm:text-lg md:text-xl lg:text-1xl text-white font-light tracking-[0.2em] sm:tracking-[0.25em] md:tracking-[0.3em] uppercase px-6 sm:px-8 md:px-10 py-3 sm:py-4 inline-block">
                {videos[currentVideoIndex].subtitle.split(' ').map((word, idx, arr) => (
                  <span key={idx} className="inline-block">
                    <span className="relative">
                      {word.split('').map((char, charIdx) => (
                        <span 
                          key={charIdx}
                          className="inline-block hover:text-[rgb(209,167,67)] transition-colors duration-300"
                          style={{ 
                            transitionDelay: `${charIdx * 50}ms`,
                            textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
                          }}
                        >
                          {char}
                        </span>
                      ))}
                    </span>
                    {idx < arr.length - 1 && <span className="mx-2 text-[rgb(209,167,67)]">•</span>}
                  </span>
                ))}
              </p>
            </div>
            
            {/* Gold decorative elements on sides */}
            <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-8 border-l-2 border-b-2 border-[rgb(209,167,67)]/30 rotate-45"></div>
            <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8 border-r-2 border-t-2 border-[rgb(209,167,67)]/30 rotate-45"></div>
          </div>

          {/* CTA Button - Enhanced with gold */}
          <div className={`transform transition-all duration-1200 delay-500 ${
            isTransitioning ? 'translate-y-20 opacity-0' : 'translate-y-0 opacity-100'
          }`}>
            <button 
              className="group relative inline-flex items-center gap-4 sm:gap-6 px-8 sm:px-10 py-4 sm:py-5 text-white font-poppins text-xs tracking-[0.4em] sm:tracking-[0.5em] uppercase overflow-hidden"
              aria-label={videos[currentVideoIndex].ctaText}
            >
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-r from-[rgb(209,167,67)]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Border with gold gradient */}
              <div className="absolute inset-0 border border-white/30 group-hover:border-[rgb(209,167,67)] transition-colors duration-500"></div>
              
              {/* Gold corner accents */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[rgb(209,167,67)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[rgb(209,167,67)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[rgb(209,167,67)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[rgb(209,167,67)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <span className="relative overflow-hidden">
                <span className="inline-block transform group-hover:-translate-y-full transition-transform duration-500 text-xs sm:text-xs">
                  {videos[currentVideoIndex].ctaText}
                </span>
                <span className="absolute top-full left-0 text-[rgb(209,167,67)] transform group-hover:-translate-y-full transition-transform duration-500 text-xs sm:text-xs">
                  {videos[currentVideoIndex].ctaText}
                </span>
              </span>
              <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-2 group-hover:text-[rgb(209,167,67)] transition-all duration-500" />
              
              {/* Shimmer effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Dots - Enhanced with gold */}
      <div className={`absolute bottom-8 sm:bottom-12 left-1/2 transform -translate-x-1/2 transition-opacity duration-500 ${
        showControls ? 'opacity-100' : 'opacity-0'
      }`}>
        <div className="flex items-center gap-3 sm:gap-4">
          {videos.map((_, index) => (
            <button
              key={index}
              onClick={() => handleVideoClick(index)}
              className="group relative focus:outline-none"
              aria-label={`View ${videos[index].title}`}
            >
              <div className={`relative transition-all duration-500 transform group-hover:scale-125 ${
                index === currentVideoIndex 
                  ? 'w-4 h-4' 
                  : 'w-2.5 h-2.5'
              }`}>
                <div className={`absolute inset-0 rounded-full ${
                  index === currentVideoIndex 
                    ? 'bg-[rgb(209,167,67)]' 
                    : 'bg-white/40 group-hover:bg-white/60'
                }`}>
                  {index === currentVideoIndex && (
                    <>
                      <div className="absolute inset-0 rounded-full animate-ping bg-[rgb(209,167,67)]/50"></div>
                      <div className="absolute -inset-2 rounded-full border border-[rgb(209,167,67)]/30 animate-pulse"></div>
                    </>
                  )}
                </div>
              </div>
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                <span className="relative px-2 py-1 text-[10px] text-white bg-black/50 backdrop-blur-sm rounded border border-[rgb(209,167,67)]/30">
                  {videos[index].title}
                </span>
              </div>
            </button>
          ))}
          
          {/* Play/Pause button */}
          <button
            onClick={togglePlay}
            className="ml-4 p-2 border border-white/20 hover:border-[rgb(209,167,67)] rounded-full transition-colors duration-300"
          >
            {isPlaying ? (
              <Pause className="w-3 h-3 text-white/60 hover:text-[rgb(209,167,67)]" />
            ) : (
              <Play className="w-3 h-3 text-white/60 hover:text-[rgb(209,167,67)]" />
            )}
          </button>
        </div>
      </div>

      {/* Subtle Next/Previous Controls - Enhanced */}
      <div className="absolute inset-0 flex items-center justify-between px-4 sm:px-8 pointer-events-none">
        <button 
          onClick={handlePrev}
          className={`pointer-events-auto p-3 sm:p-4 focus:outline-none transition-all duration-500 ${
            showControls ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
          }`}
          aria-label="Previous"
        >
          <div className="relative w-12 h-12 sm:w-14 sm:h-14 group">
            <div className="absolute inset-0 border border-white/10 group-hover:border-[rgb(209,167,67)]/50 rounded-full transition-colors duration-300"></div>
            <div className="absolute inset-1 border border-white/5 group-hover:border-[rgb(209,167,67)]/30 rounded-full transition-colors duration-300"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <ChevronRight className="w-5 h-5 text-white/40 rotate-180 group-hover:text-[rgb(209,167,67)] group-hover:scale-110 transition-all duration-300" />
            </div>
          </div>
        </button>
        <button 
          onClick={handleNext}
          className={`pointer-events-auto p-3 sm:p-4 focus:outline-none transition-all duration-500 ${
            showControls ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
          }`}
          aria-label="Next"
        >
          <div className="relative w-12 h-12 sm:w-14 sm:h-14 group">
            <div className="absolute inset-0 border border-white/10 group-hover:border-[rgb(209,167,67)]/50 rounded-full transition-colors duration-300"></div>
            <div className="absolute inset-1 border border-white/5 group-hover:border-[rgb(209,167,67)]/30 rounded-full transition-colors duration-300"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <ChevronRight className="w-5 h-5 text-white/40 group-hover:text-[rgb(209,167,67)] group-hover:scale-110 transition-all duration-300" />
            </div>
          </div>
        </button>
      </div>

      {/* Luxury Loading State */}
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-black">
          <div className="relative">
            <div className="w-16 h-16 sm:w-20 sm:h-20 border border-white/5 rounded-full"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 border-t border-[rgb(209,167,67)]/50 rounded-full animate-spin"></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font- text-xs sm:text-sm text-[rgb(209,167,67)]/60 tracking-widest">FABUNIQO</span>
            </div>
          </div>
        </div>
      )}

      {/* Enhanced Vertical Lines with gold accents */}
      <div className="absolute top-0 left-4 sm:left-8 bottom-0 w-px bg-gradient-to-b from-transparent via-[rgb(209,167,67)]/20 to-transparent"></div>
      <div className="absolute top-0 right-4 sm:right-8 bottom-0 w-px bg-gradient-to-b from-transparent via-[rgb(209,167,67)]/20 to-transparent"></div>
      
      {/* Gold corner accents */}
      <div className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-[rgb(209,167,67)]/30"></div>
      <div className="absolute top-8 right-8 w-16 h-16 border-t-2 border-r-2 border-[rgb(209,167,67)]/30"></div>
      <div className="absolute bottom-8 left-8 w-16 h-16 border-b-2 border-l-2 border-[rgb(209,167,67)]/30"></div>
      <div className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-[rgb(209,167,67)]/30"></div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes letterPop {
          0% {
            transform: scale(0.3) translateY(20px);
            opacity: 0;
            filter: blur(4px);
          }
          50% {
            transform: scale(1.1) translateY(-5px);
            opacity: 0.9;
            filter: blur(0px);
          }
          100% {
            transform: scale(1) translateY(0);
            opacity: 1;
            filter: blur(0px);
          }
        }

        @keyframes goldShimmer {
          0%, 100% {
            opacity: 0.5;
          }
          50% {
            opacity: 1;
          }
        }

        .letter-animation {
          display: inline-block;
          will-change: transform, opacity;
          backface-visibility: hidden;
          -webkit-font-smoothing: antialiased;
        }

        .letter-hidden {
          opacity: 0;
          transform: scale(0.5) translateY(20px);
          filter: blur(4px);
          transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .letter-visible {
          opacity: 1;
          transform: scale(1) translateY(0);
          filter: blur(0px);
          animation: letterPop 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        .letter-visible:hover {
          transform: scale(1.1);
          transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        /* Mobile fixes */
        @media (max-width: 640px) {
          .relative.w-full {
            height: 35vh !important;
            min-height: 320px;
            max-height: 350px;
          }
          
          /* Hide large decorative elements on mobile */
          .absolute.top-8.left-8,
          .absolute.top-8.right-8,
          .absolute.bottom-8.left-8,
          .absolute.bottom-8.right-8 {
            display: none !important;
          }
          
          /* Adjust title for mobile */
          h1 {
            font-size: 1.75rem !important;
          }
          
          /* Adjust subtitle for mobile */
          .font- {
            font-size: 0.7rem !important;
            padding: 0.5rem 1rem !important;
          }
          
          /* Adjust CTA for mobile */
          .group.relative.inline-flex {
            padding: 0.5rem 1rem !important;
          }
        }
      `}</style>
    </div>
  );
}