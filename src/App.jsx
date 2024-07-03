/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-key */
import './App.css'
//Components
import { GrFormNext, GrFormPrevious } from 'react-icons/gr'
import { FiSend } from 'react-icons/fi'
import UserForm from './components/UserForm'
import ReviewForm from './components/ReviewForm'
import ThanksForm from './components/ThanksForm'
import Steps from './components/Steps'
//Hooks
import { useForm } from './hooks/useForm'
import { useState } from 'react'

const formTemplate = {
  name: '',
  email: '',
  review: '',
  comment: '',
}

function App() {
  const [data, setData] = useState({})
  const updateFieldHandler = (key, value) => {
    setData((prev)=>{
      return {...prev, [key]: value}
    })
  }
  const formComponents = [<UserForm data={data} updateFieldHandler={updateFieldHandler} />, <ReviewForm data={data} updateFieldHandler={updateFieldHandler} />, <ThanksForm data={data} />]
  const { currentStep, currentComponent, changeStep, isLastStep, isFirstStep } = useForm(formComponents)
  
  return (
      <div className="app">
        <div className="header">
          <h2>Send your feedback</h2>
          <p>We'd love to hear from your feedback! Utilize the form below to send us the feedback.</p>
        </div>
        <div className="form-container">
          <Steps currentStep={currentStep} /> 
          <form onSubmit={(e) => changeStep(currentStep + 1, e)}> 
            <div className="inputs-container">
              {currentComponent}
            </div>
            <div className="actions">
              {!isFirstStep && (
                <button type='button' onClick={() => changeStep(currentStep - 1)}>
                <GrFormPrevious />
                <span>Back</span>
              </button>
              )}
              {!isLastStep ? (
                <button type='submit'>
                <span>Next</span>
                <GrFormNext />
              </button>
              ) : (
                <button type='button'>
                <span>Send</span>
                <FiSend />
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
  )
}

export default App