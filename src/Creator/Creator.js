import productCrtr from './images/image-avatar.png';

function creator() {
    return(
        <div>
            <img src={productCrtr} alt="Product Creator avatar" />
            <span>Creation of <span>Jules Wyvern</span></span>
        </div>
    );
}

export default creator;