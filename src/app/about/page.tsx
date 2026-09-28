import background from "@/public/gingham-panel1.png";
import myImage from "@/public/paper-card-md 1.png";


const About = () => {
  return (
    <div className="p-8">   

      <img 
        src={background.src} 
        alt="Gingham Panel" 
        className="fixed inset-0 w-full h-full object-cover -z-10"
      />

      <img 
        src={myImage.src} 
        alt="Top Layer" 
        className="w-full max-w-2xl h-auto rounded-lg shadow-lg mb-4"
      />
      
    </div>
  );
};

export default About;
