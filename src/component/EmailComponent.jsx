/* eslint-disable react/prop-types */
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

const EmailComponent = ({ closeModal }) => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'service_gnmgpdp', 
                'template_7gavvwk', 
                form.current,
                'xx0g4NLwxgh_hy8TF' 
            )
            .then(
                () => {
                    console.log('SUCCESS!');
                    closeModal(); 
                    toast.success('Your email has been sent successfully!', {
                        position: 'top-right',
                        duration: 3000, 
                    });
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    toast.error('Failed to send email. Please try again.', {
                        position: 'top-right',
                    });
                }
            );
    };

    return (
        <div>
            <Toaster /> 
            <h2 className="text-xl font-semibold mb-4 text-white">
                Send an Email{" "}
               
            </h2>
            <form ref={form} onSubmit={sendEmail}>
                <input
                    type="text"
                    name="user_name"
                    placeholder="Your name"
                    className="mb-4 bg-gray-600 text-white p-2 border w-full rounded tablet-or-mobile:w-[340px] "
                    required
                />
                <input
                    type="email"
                    name="from_name"
                    placeholder="Your email"
                    className="mb-4 bg-gray-600 text-white p-2 border w-full rounded tablet-or-mobile:w-[340px]"
                    required
                />
                <textarea
                    name="message"
                    placeholder="Your message"
                    className="mb-4 p-2 border bg-gray-600 text-white w-full rounded tablet-or-mobile:w-[340px]"
                    rows="4"
                    required
                />
                <div className="flex justify-end tablet-or-mobile:w-[340px]">
                    <button
                        type="button"
                        onClick={closeModal}
                        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mr-2"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="bg-font-color hover:bg-orange-400 text-white font-bold py-2 px-4 rounded"
                    >
                        Send
                    </button>
                </div>
            </form>
        </div>
    );
};

export default EmailComponent;
