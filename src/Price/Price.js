import productPrc from './images/icon-ethereum.svg';

function price() {
    return(
        <div>
            <img src={productPrc} alt="price.svg" />
            <span>0.041 ETH</span>
        </div>
    );
}

export default price;