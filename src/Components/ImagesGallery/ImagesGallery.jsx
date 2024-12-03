import "./ImagesGallery.css"; 
import image from "../../Images/card2img.jpeg";
import image2 from "../../Images/card3img.jpeg";
import image3 from "../../Images/card4img.jpeg";
import image4 from "../../Images/card5img.jpeg";
import image5 from "../../Images/images (1).jpeg";
import image6 from "../../Images/images (2).jpeg";
import image7 from "../../Images/images (4).jpeg";
import image8 from "../../Images/images.jpeg";
import image9 from "../../Images/download (3).jpeg";
const ImagesGallery = () => {
  return (
    <>
      <div className="tit">
      <h1>Welcome to Images Gallery </h1>
      </div>
 

      <div className="images1">
        <img src={image} alt="not availabe" />
        <img src={image2} alt="not availabe" />
        <img src={image3} alt="not availabe" />
        <img src={image4} alt="not availabe" />
        <img src={image5} alt="not availabe" />
        <img src={image6} alt="not availabe" />
        <img src={image7} alt="not availabe" />
        <img src={image8} alt="not availabe" />
        <img src={image9} alt="not availabe" />
      </div>
    </>
  );
};

export default ImagesGallery;
