
import { Code, Layout, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const skills = [
    "HTML/CSS", "JavaScript", "TypeScript", "React", 
    "Node.js", "Tailwind CSS", "Next.js", "GraphQL"
  ];

  const services = [
    {
      icon: <Code className="h-8 w-8 text-portfolio-primary" />,
      title: "Web Development",
      description: "I create responsive, performant websites that provide a great user experience and meet business needs."
    },
    {
      icon: <Layout className="h-8 w-8 text-portfolio-secondary" />,
      title: "UI/UX Design",
      description: "I design intuitive and aesthetically pleasing interfaces that keep users engaged and make navigation easy."
    },
    {
      icon: <Zap className="h-8 w-8 text-portfolio-accent" />,
      title: "Performance Optimization",
      description: "I optimize websites for peak performance, ensuring fast load times and smooth user interactions."
    }
  ];

  return (
    <section id="about" className="section bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-portfolio-primary mx-auto"></div>
        </div>

        <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
          <div className="w-full md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80" 
              alt="About Me" 
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-bold mb-4">
              I'm a passionate Full-Stack Developer based in New York
            </h3>
            <p className="text-gray-600 mb-6">
              With over 5 years of experience in web development, I've worked on a variety of 
              projects ranging from simple landing pages to complex web applications. My goal is 
              to build products that are not only functional but also provide an exceptional 
              user experience.
            </p>
            <p className="text-gray-600 mb-8">
              I love working with the latest technologies and am always eager to learn new 
              skills. When I'm not coding, I enjoy hiking, reading, and experimenting with 
              new recipes in the kitchen.
            </p>
            <div className="mb-8">
              <h4 className="text-xl font-semibold mb-4">My Skills</h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span 
                    key={index} 
                    className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-sm border border-gray-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-12">What I Do</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="mb-4">{service.icon}</div>
                  <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
