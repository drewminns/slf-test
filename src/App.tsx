import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from 'react';
import Modal from './Modal';

import ABTesting from "./assets/ab-testing.json";
import ContactList from "./assets/contact-list.json";

function randomIntFromInterval(min: number, max: number) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function App() {

  const [showModal, setShowModal] = useState(true)

  const [testDetails, setTestDetails] = useState<{
    name: string;
    header: string;
  }>(ABTesting.content[0]);


  useEffect(() => {
    setTestDetails(ABTesting.content[randomIntFromInterval(0, 2)]);
  }, []);

  return (
    <>
      <AnimatePresence>
        {showModal && (
          <Modal
            testing={testDetails}
            contactList={ContactList.json}
            handleClose={() => setShowModal(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}

export default App
