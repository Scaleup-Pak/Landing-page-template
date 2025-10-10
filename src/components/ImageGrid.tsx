import image1 from '../assets/Featur-section/1.jpg';
import image2 from '../assets/Featur-section/2.jpg';
import image3 from '../assets/Featur-section/3.jpg';
import image4 from '../assets/Featur-section/4.jpg';
import image5 from '../assets/Featur-section/5.jpg';
import image6 from '../assets/Featur-section/6.jpg';
import image7 from '../assets/Featur-section/7.jpg';

const ImageGrid: React.FC = () => {
  return (
    <div className="w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-[106px]">
      <div className="max-w-[1440px] mx-auto space-y-3 sm:space-y-4">
        {/* First Row - 4 images with varying widths */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          {/* Mobile: Stack vertically, Tablet+: Horizontal with flex */}
          <div className="w-full sm:flex-[0.8] sm:h-[180px] md:h-[285.766px] overflow-hidden rounded-lg">
            <img 
              src={image1} 
              alt="Feature 1" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="w-full sm:flex-[1.4] sm:h-[180px] md:h-[285.766px] overflow-hidden rounded-lg">
            <img 
              src={image2} 
              alt="Feature 2" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="w-full sm:flex-[0.9] sm:h-[180px] md:h-[285.766px] overflow-hidden rounded-lg">
            <img 
              src={image3} 
              alt="Feature 3" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="w-full sm:flex-[1.1] sm:h-[180px] md:h-[285.766px] overflow-hidden rounded-lg">
            <img 
              src={image4} 
              alt="Feature 4" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Second Row - 3 images with varying widths */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <div className="w-full sm:flex-[1.3] sm:h-[180px] md:h-[285.766px] overflow-hidden rounded-lg">
            <img 
              src={image5} 
              alt="Feature 5" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="w-full sm:flex-[0.8] sm:h-[180px] md:h-[285.766px] overflow-hidden rounded-lg">
            <img 
              src={image6} 
              alt="Feature 6" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="w-full sm:flex-[1.5] sm:h-[180px] md:h-[285.766px] overflow-hidden rounded-lg">
            <img 
              src={image7} 
              alt="Feature 7" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGrid;