import clock from './images/icon-clock.svg';
import './TimeLeft.css';

function timeLeft() {
    return(
        <div className='timeDiv'>
            <img src={clock} alt="clock.svg" className='Clock'/>
            <span className='TimeLeftText'>3 days left</span>
        </div>
    );
}

export default timeLeft;