/* eslint-disable no-unused-vars */
import './ThanksForm.css'
import { BsFillEmojiHeartEyesFill, BsFillEmojiSmileFill, BsFillEmojiNeutralFill, BsFillEmojiFrownFill } from 'react-icons/bs'


// eslint-disable-next-line react/prop-types
const ThanksForm = ({data}) => {
    return ( 
        <div className='thanks-container'>
            <h2>Not long to go...</h2>
            <p>We appreciate you taking the time to leave a feedback. We gift you a <b>10% discount coupon</b> to use on our next purchase.</p>
            <p>To done that, just click on the button to send below.</p>
        </div>
    );
}
 
export default ThanksForm;