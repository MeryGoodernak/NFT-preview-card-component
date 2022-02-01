import './Creator.css';
import imageSource from './images/image-avatar.png';

function creator() {
    return(
        <div>
            <img src={imageSource} alt="Avatar" className='Avatar' />
            <div className="Creator">
                <span id="One">Creation of</span><span id="Two">Jules Wyvern</span>
            </div>
        </div>
    );
}

export default creator;