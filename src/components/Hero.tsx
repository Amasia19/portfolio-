
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-white to-gray-50"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-1/2 animate-fade-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              Hi, I'm{" "}
              <span className="text-portfolio-primary">John Doe</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-700 mb-6">
              <span className="font-semibold">UI/UX Designer</span> & Junior Developer
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-xl">
              I create intuitive and engaging user experiences where design meets functionality.
              When I'm not designing interfaces or coding, you'll find me exploring
              design trends or optimizing websites for search engines.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                className="bg-portfolio-primary hover:bg-portfolio-primary/90 text-white px-6"
                size="lg"
              >
                View My Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-portfolio-primary text-portfolio-primary hover:bg-portfolio-primary/10"
              >
                Contact Me
              </Button>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center animate-fade-in">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-portfolio-primary to-portfolio-accent rounded-full blur opacity-75"></div>
              <div className="relative bg-white rounded-full p-2">
                <img
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                  alt="Hero Image"
                  className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce hidden md:flex">
          <span className="text-sm text-gray-500 mb-2">Scroll Down</span>
          <svg 
            className="w-6 h-6 text-portfolio-primary" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
