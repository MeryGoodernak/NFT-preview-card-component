import productImg from './images/image-equilibrium.jpg';
import eyeIcon from './images/icon-view.svg';
import './PImage.css';

function productImage() {
    return(
        <div className="PImage">
            <img src={productImg} alt='Image of the product' />
            <img src={eyeIcon} alt="Eye Icon"  id="Icon" />
        </div>
    )
}

export default productImage;