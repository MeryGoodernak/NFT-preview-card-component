import productPrc from './images/icon-ethereum.svg';
import './Price.css';

function price() {
    return(
        <div>
            <img src={productPrc} alt="price.svg" className='PriceImg' />
            <span className='priceText'>0.041 ETH</span>
        </div>
    );
}

export default price;