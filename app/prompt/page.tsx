'use client';

import { useState } from "react";
import PrimaryButton from "../components/PrimaryButton";
import TextInput from "../components/TextInput";
import styles from "../page.module.css";
import TextArea from "../components/TextArea";

export default function Prompt() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = () => {
    setIsSubmitted(true)
  }

  return (
    <div className={styles.page}>
      <h1 className="text-3xl font-bold">Prompt UI</h1>

      <div className={isSubmitted ? 'fixed bottom-0 left-16 right-16' : 'relative'}>
        {isSubmitted ?
          <TextArea label="Enter your prompt..." />
        :
          <TextInput label="Enter your prompt..." />
        }
        
        <PrimaryButton
          label="Submit"
          onClick={handleSubmit} 
          className="mb-5"
        />
      </div>
    </div>
  );
}
