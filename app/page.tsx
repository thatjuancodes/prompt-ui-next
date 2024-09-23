'use client';

import PrimaryButton from "./components/PrimaryButton";
import TextInput from "./components/TextInput";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1 className="text-3xl font-bold">Prompt UI</h1>

      <TextInput label="First Name" value="" onChange={() => {}} />

      <TextInput label="Last Name" value="" onChange={() => {}} />

      <PrimaryButton label="Next" />
    </div>
  );
}
