/* eslint-disable react/prop-types */
import { BsFillEmojiHeartEyesFill, BsFillEmojiSmileFill, BsFillEmojiNeutralFill, BsFillEmojiFrownFill } from 'react-icons/bs'
import './ReviewForm.css'
const ReviewForm = ({data, updateFieldHandler}) => {
    return (  
        <div className="review-form">
            <div className="form-control score-container">
                <label className="radio-container">
                    <input checked={data.review === 'Unsatisfied'} onChange={(e) => updateFieldHandler('review', e.target.value)} type="radio" name="review" value="Unsatisfied" required />
                    <BsFillEmojiFrownFill />
                    <p>Unsatisfied</p>
                </label>
                <label className="radio-container">
                    <input checked={data.review === 'Neutral'} onChange={(e) => updateFieldHandler('review', e.target.value)} type="radio" name="review" value="Neutral" required />
                    <BsFillEmojiNeutralFill />
                    <p>Neutral</p>
                </label>
                <label className="radio-container">
                    <input checked={data.review === 'Satisfied'} onChange={(e) => updateFieldHandler('review', e.target.value)} type="radio" name="review" value="Satisfied" required />
                    <BsFillEmojiSmileFill />
                    <p>Satisfied</p>
                </label>
                <label className="radio-container">
                    <input checked={data.review === 'Very Satisfied'} onChange={(e) => updateFieldHandler('review', e.target.value)} type="radio" name="review" value="Very Satisfied" required />
                    <BsFillEmojiHeartEyesFill />
                    <p>Very Satisfied</p>
                </label>
            </div>
            <div className="form-control">
                <label htmlFor="comment">Comment:</label>
                <textarea value={data.comment || ''} onChange={(e) => updateFieldHandler('comment', e.target.value)} name="comment" id="comment" placeholder='How was your experience?'></textarea>
            </div>
        </div>
    );
}
 
export default ReviewForm;