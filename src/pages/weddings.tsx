import React from "react";
import { Button } from "@/components/ui/button";
import { Check, Globe, Users } from "lucide-react";
import NavBarWeddings from "@/components/NavBarWeddings";

const Weddings = () => {
  return (
    <>
      <div className="min-h-screen bg-transparent flex flex-col">
        <NavBarWeddings />

        {/* Hero Section */}
      <section
  id="hero"
  className="relative min-h-screen flex flex-col justify-center pt-24 pb-12 px-6 md:px-12 lg:px-16 bg-cover bg-center text-white"
  style={{
    backgroundImage:
      "url('/lovable-uploads/0d69fd76-5bed-40b1-8935-d005fb4b5c77.png')",
  }}
>
  <div className="absolute inset-0 bg-black/60 z-0" />

  {/* ✅ Unconstrained heading */}
  <div className="relative z-10 text-center w-full px-4">
    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-snug max-w-[75rem] mx-auto">
      Your Wedding Deserves More Than a Checklist. It Deserves Leadership.
    </h1>
  </div>

  {/* ✅ Rest of hero content still in container */}
  <div className="relative z-10 max-w-4xl text-center mx-auto">
    <p className="text-lg md:text-xl max-w-3xl mb-10 text-white/90 mx-auto">
      From the sangeet to the send-off, we don’t just plan — we protect your vision, your culture, and your joy.
    </p>

 <div className="flex justify-center">
          <a
  href="#cta"
  className="btn btn-primary bg-navy text-white text-lg sm:text-base whitespace-nowrap rounded-full px-6 py-3 inline-flex items-center justify-center text-center leading-snug"
>
 Your Vision. Our Plan.
</a>
        </div>
      </div>

  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
    <a href="#what-we-do" aria-label="Scroll down">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 14l-7 7m0 0l-7-7m7 7V3"
        />
      </svg>
    </a>
  </div>
</section>


        {/* What You Need, What We Do Section */}
        <section
          id="what-we-do"
          className="py-20 px-6 md:px-12 lg:px-16"
          style={{ backgroundColor: "#2a2a2a" }}
        >
          <div className="text-center mb-16">
            <h2 className="section-title text-white">What You Need, What We Do</h2>
            <p className="text-lg max-w-3xl mx-auto text-white">
              Planning a South Asian or fusion wedding means balancing tradition, family, and a thousand decisions. 
              Most planners help with logistics. We take ownership — so you can live in the moment instead of managing it.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
  {/* Multiday Timelines */}
  <div className="flex flex-col items-center text-center p-6 bg-white shadow-sm rounded-lg">
    <div className="h-14 w-14 bg-[#f5f1ea] rounded-full flex items-center justify-center mb-4">
      <Check className="h-7 w-7 text-gold" />
    </div>
    <h3 className="text-xl font-semibold mb-2 text-[#2a2a3a]">Multiday timelines?</h3>
    <p className="text-lg text-[#7b6535]">Covered.</p>
  </div>

  {/* Cultural Nuances */}
  <div className="flex flex-col items-center text-center p-6 bg-white shadow-sm rounded-lg">
    <div className="h-14 w-14 bg-[#f5f1ea] rounded-full flex items-center justify-center mb-4">
      <Globe className="h-7 w-7 text-gold" />
    </div>
    <h3 className="text-xl font-semibold mb-2 text-[#2a2a3a]">Cultural nuances?</h3>
    <p className="text-lg text-[#7b6535]">Fluent.</p>
  </div>

  {/* Family Dynamics */}
  <div className="flex flex-col items-center text-center p-6 bg-white shadow-sm rounded-lg">
    <div className="h-14 w-14 bg-[#f5f1ea] rounded-full flex items-center justify-center mb-4">
      <Users className="h-7 w-7 text-gold" />
    </div>
    <h3 className="text-xl font-semibold mb-2 text-[#2a2a3a]">Family dynamics?</h3>
    <p className="text-lg text-[#7b6535]">Navigated.</p>
  </div>
</div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="bg-transparent py-20 px-6 md:px-12 lg:px-16">
          <div className="max-w-5xl mx-auto">
            <h2 className="section-title">How It Works</h2>

            <div className="space-y-16">
              {["Plan with Precision", "Align the Details", "Execute with Ownership"].map((title, index) => (
                <div key={title} className="flex flex-col md:flex-row items-start gap-6">
                  <div className="h-14 w-14 bg-black rounded-full flex items-center justify-center flex-shrink-0 md:mt-2">
                    <span className="text-white text-xl font-bold">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-3">{title}</h3>
                    <p className="text-lg">
                      {index === 0 && "We start with your vision, then build a plan that respects tradition and ensures calm, not stress."}
                      {index === 1 && "From vendors to venues, every moving part gets locked into place."}
                      {index === 2 && "You're not managing your wedding — you're experiencing it."}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section
          id="testimonial"
          className="py-20 px-6 md:px-12 lg:px-16"
          style={{ backgroundColor: "#2a2a2a" }}
        >
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="section-title text-white">What They're Saying</h2>
            <blockquote className="text-xl md:text-2xl italic font-light mb-6 max-w-3xl mx-auto text-white">
              "My family, friends, and vendors were all skeptical when I first mentioned I hired a planner, but once they saw how beautifully the wedding was executed, they were raving..."
            </blockquote>
            <p className="text-lg text-white">— Sana</p>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="py-20 px-6 md:px-12 lg:px-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="section-title">Real weddings. Real emotion.</h2>
              <p className="text-lg">Cultural beauty meets seamless coordination.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="aspect-[4/3] bg-gray-100 rounded-md overflow-hidden">
                  <img
                    src={`https://images.unsplash.com/photo-1600096194534-95cf5b9f035f?auto=format&fit=crop&w=600&q=80`}
                    alt={`Wedding gallery image ${item}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section
          id="cta"
          className="relative bg-[#2c2c2c] py-20 px-6 md:px-12 lg:px-16 text-white overflow-hidden"
        >
          <div className="absolute inset-0 flex justify-center items-center pointer-events-none z-0">
            <div className="w-[300px] h-[300px] bg-gold/10 rounded-full blur-[100px]" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h2 className="section-title text-white">Feel Seen. Feel Ready. Feel Present.</h2>
            <p className="text-lg mb-10 max-w-2xl mx-auto text-white/90">
              Let's create a wedding experience you'll remember for how it felt — not just how it looked.
            </p>

            <div className="glow-button-wrapper mx-auto">
              <div className="glow-ring" />
              <a
                href="https://cal.com/ryanmcmullen/15min"
                target="_blank"
                rel="noopener noreferrer"
                className="glow-button-inner"
              >
                Book Your Free Clarity Call
              </a>
            </div>

            <div className="mt-8">
              <p className="text-base text-white/80 max-w-md mx-auto">
                Or email us at{" "}
                <a
                  href="mailto:info@eandp.events"
                  className="text-gold hover:underline"
                >
                  info@eandp.events
                </a>
                . You'll get a response from a real person — not a bot, not a sales script.
              </p>
            </div>

            <div className="mt-8">
              <a href="/" className="text-gold underline">← Back to Main</a>
            </div>
          </div>
        </section>
      </div>

      {/* ✅ Watermark moved here */}
      <div className="lion-watermark" aria-hidden="true" />
    </>
  );
};

export default Weddings;
