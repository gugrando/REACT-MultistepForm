/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import './Steps.css';
import {AiOutlineUser, AiOutlineStar} from 'react-icons/ai'
import {FiSend} from 'react-icons/fi'
const Steps = ({ currentStep }) => {
    return ( 
        <div className='steps'>
           <div className='step active'>
               <AiOutlineUser />
               <p>Identification</p>
           </div>
           <div className={`step ${currentStep >= 1 ? 'active' : ''}`}>
               <AiOutlineStar />
               <p>Avaliation</p>
           </div>
           <div className={`step ${currentStep >= 2 ? 'active' : ''}`}>
               <FiSend />
               <p>Send</p>
           </div>
        </div>
    );
}
 
export default Steps;