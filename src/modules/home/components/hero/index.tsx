import { Github } from "@medusajs/icons"
import { Button, Heading } from "@medusajs/ui"
import "./hero.css"

const Hero = () => {
  return (
    <div className="h-[85vh] w-full border-b border-ui-border-base relative bg-ui-bg-subtle overflow-hidden">

      {/* Background Lotus Images */}
      <img
        src="/lotus-left.png"
        alt="Left Lotus"
        className="absolute left-0 bottom-0 w-[30%] opacity-30 z-0 animate-float-slow"
      />
      <img
        src="/lotus-right.png"
        alt="Right Lotus"
        className="absolute right-0 bottom-0 w-[30%] opacity-30 z-0 animate-float-slow"
      />

      {/* Foreground Content */}
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center gap-3 small:p-24">

        {/* Logo */}
        <img
          src="/logo.png"
          alt="Brand Logo"
          className="w-28 md:w-32 mx-auto mb-1 animate-fade-in"
        />

        {/* Headings */}
        <Heading
          level="h1"
          className="text-4xl leading-tight text-ui-fg-base font-bold font-cormorant animate-fade-in"
        >
          SWARNIKA HERITAGE
        </Heading>
        <Heading
          level="h2"
          className="text-xl text-ui-fg-subtle font-semibold font-cormorant animate-fade-in"
        >
          BY ALANKRITHA
        </Heading>

        {/* Stamp */}
        <img
          src="/stamp.png"
          alt="Heritage Stamp"
          className="w-16 md:w-20 my-4 animate-float"
        />

        {/* Tagline */}
        <p className="text-sm text-ui-fg-subtle italic animate-fade-in">
          Stamped in tradition. Woven with truth
        </p>

        {/* Button */}
        <a href="/store">
          <Button variant="secondary" className="animate-fade-in">
            Explore the Heritage
            <Github />
          </Button>
        </a>
      </div>
    </div>
  )
}

export default Hero
