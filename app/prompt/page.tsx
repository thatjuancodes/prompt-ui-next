'use client';

import { useRef, useState } from "react";
import PrimaryButton from "../components/PrimaryButton";
import TextInput from "../components/TextInput";
import styles from "../page.module.css";
import TextArea from "../components/TextArea";
import { mock } from "node:test";

export default function Prompt() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [userInput, setUserInput] = useState('')
  const [mockResponse, setMockResponse] = useState<Array<string | Element | React.JSX.Element>>([])
  const responseEndRef = useRef<HTMLDivElement | null>(null);

  const generateMockResponse = (textInput: string) => {
    const mockResponse = [
      "I'm sorry, I don't understand.",
      "I'm not sure what you're asking.",
      "I don't know what you mean",
      "I'm not sure what you're asking.",
    ]

    const response = mockResponse[Math.floor(Math.random() * mockResponse.length)]
    return (
      <span>
        <span className='text-red-500 italic'>{textInput}</span>
          <br />
        {response}
      </span>
    );
  }

  const handleSubmit = () => {
    setMockResponse(prevMockResponse => [...prevMockResponse, generateMockResponse(userInput)])
    setIsSubmitted(true)
    setUserInput('')
    setTimeout(() => {
      if (responseEndRef.current === null) return

      responseEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  }

  return (
    <div className={`${styles.page} border h-screen`}>
      <h1 className="text-3xl font-bold">Prompt UI</h1>

      <div className={`mt-5 pl-5 ${isSubmitted ? 'h-3/5 pb-5' : ''}`} style={{ overflowY: 'scroll' }}>
        {mockResponse.map((response, index) => (
          <div key={index} className="mt-5 pl-5">
            {response}
          </div>
        ))}

        <div ref={responseEndRef} />
      </div>

      <div className={`transition-transform duration-1000 ease-in-out fixed left-16 right-16 ${isSubmitted ? `transform ${styles.translateY2full} bottom-0` : 'transform translate-y-0'}`}>
        {isSubmitted ?
          <TextArea label="Enter your prompt..." value={userInput} onChange={setUserInput}/>
        :
          <TextInput label="Enter your prompt..." value={userInput} onChange={setUserInput} />
        }
        
        {/* {!isSubmitted && */}
          <PrimaryButton
            label="Submit"
            onClick={handleSubmit} 
            className="mb-5"
          />
        {/* } */}
      </div>
    </div>
  );
}
