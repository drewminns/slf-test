import { motion } from "framer-motion";

interface ModalProps {
  handleClose: () => void;
  testing: {
    name: string;
    header: string;
  };
  contactList: {
    name: string;
    logo: string;
    phone: string;
    text: string;
  }[];
}

function Modal({ handleClose, testing, contactList }: ModalProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed top-0 left-0 w-full h-full flex justify-center items-start p-2 md:p-10 overflow-y-auto bg-black/10"
    >
      <div className="max-w-screen-lg w-full relative bg-white p-2 md:p-0 overflow-hidden">
        <svg
          className="hidden md:block absolute top-0 right-0 z-0 w-2/3"
          viewBox="0 0 567 904"
          fill="none"
        >
          <path d="M0 904L272.032 -2H569V904H0Z" fill="#85C827" />
        </svg>

        <button
          onClick={handleClose}
          className="absolute top-2 right-2 rounded-full bg-lightGrey w-6 h-6 p-2 flex items-center justify-center z-10"
          title="Close Overlay"
        >
          <span className="leading-none">&times;</span>
        </button>
        <div className="flex flex-col md:flex-row-reverse md:items-start md:px-10 md:py-12 gap-x-16 relative">
          <div className="md:w-2/5 flex flex-col md:flex-col-reverse bg-white md:rounded-3xl md:shadow-xl ">
            <div className="bg-lightGreen md:bg-transparent rounded-t-3xl flex items-center justify-center gap-2 p-2.5 mb-4 text-center  md:flex-col-reverse ">
              <img
                src="./call.gif"
                alt="call"
                className="w-6 h-6 md:w-24 md:h-24"
              />
              <p className="text-white font-semibold md:text-black md:font-normal md:text-2xl md:tracking-wide md:mb-4">
                Incoming Call
              </p>
            </div>
            <div className="mb-4 relative  overflow-hidden md:pt-12 md:before:bg-darkGrey md:before:pt-36 before:absolute before:top-0 before:w-full md:rounded-t-3xl md:p-16 md:flex md:justify-center">
              <img
                src="./crew.png"
                alt="call"
                className="w-28 h-28 md:w-full md:h-full aspect-square rounded-full border-4 md:border-8 border-white shadow-[0_0_4px_rgba(0,0,0,0.5)] mx-auto relative"
              />
            </div>
          </div>
          <div className="md:w-3/5 bg-lightGrey p-6">
            <h1 className="font-bold text-3xl mb-5" data-test={testing.name}>
              {testing.header}
            </h1>
            <p className="text-2xl italic mb-5">
              Your estimated savings{" "}
              <span className="text-lightGreen">$0000</span>
            </p>
            <p className="text-base leading-tight">
              You've been matched with these top-rated local solar installers:
            </p>

            <div className="mt-8 flex flex-col items-center">
              <p className="max-w-xs text-black/60 text-lg font-medium mb-4">
                Feel free to reach out directly to the company of your choice if
                you prefer.
              </p>
              <ul className="w-full flex flex-col gap-4">
                {contactList.map((contact) => (
                  <li className="bg-white shadow-md p-5 flex items-start gap-4 w-full">
                    <img
                      src={`./${contact.logo}`}
                      alt={contact.name}
                      className="w-16 h-16 aspect-square rounded-full"
                    />
                    <div>
                      <p className="text-lg">{contact.name}</p>
                      <a
                        className="text-lg block mb-4"
                        href={`tel:${contact.phone}`}
                      >
                        {contact.phone}
                      </a>

                      <p>{contact.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Modal;
