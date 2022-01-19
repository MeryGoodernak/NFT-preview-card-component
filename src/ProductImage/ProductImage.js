import productImg from './images/image-equilibrium.jpg';

function productImage() {
    return(
        <div>
            <img src={productImg} alt='Image of the product' />
        </div>
    )
}

export default productImage;