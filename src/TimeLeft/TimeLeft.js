import clock from './images/icon-clock.svg';

function timeLeft() {
    return(
        <div>
            <img src={clock} alt="clock.svg" />
            <span>3 days left</span>
        </div>
    );
}

export default timeLeft;