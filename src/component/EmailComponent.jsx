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
                'service_gnmgpdp', // Replace with your service ID
                'template_7gavvwk', // Replace with your template ID
                form.current,
                'xx0g4NLwxgh_hy8TF' // Replace with your public key
            )
            .then(
                () => {
                    console.log('SUCCESS!');
                    closeModal(); // Close the email modal first
                    toast.success('Your email has been sent successfully!', {
                        position: 'top-right',
                        duration: 1500, // Toast will be visible for 1.5 seconds
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
            <Toaster /> {/* This renders the toast notifications */}
            <h2 className="text-xl font-semibold mb-4 text-white">
                Send an Email{" "}
                <label className="text-font-color justify-center" htmlFor="">
                    __________________________________________________________
                </label>
            </h2>
            <form ref={form} onSubmit={sendEmail}>
                <input
                    type="text"
                    name="user_name"
                    placeholder="Your name"
                    className="mb-4 bg-gray-600 text-white p-2 border rounded w-full"
                    required
                />
                <input
                    type="email"
                    name="from_name"
                    placeholder="Your email"
                    className="mb-4 bg-gray-600 text-white p-2 border rounded w-full"
                    required
                />
                <textarea
                    name="message"
                    placeholder="Your message"
                    className="mb-4 p-2 border bg-gray-600 text-white rounded w-full"
                    rows="4"
                    required
                />
                <div className="flex justify-end">
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
