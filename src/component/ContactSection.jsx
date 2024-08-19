import { useState } from "react";
import { MdOutlineAttachEmail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import EmailComponent from "./EmailComponent";

const ContactSection = () => {
    const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);

    const openEmailModal = () => {
        setIsEmailModalOpen(true);
    };

    const closeEmailModal = () => {
        setIsEmailModalOpen(false);
    };

    return (
        <div data-aos="fade-up" className="bg-bg-color shadow-[inset_0_30px_35px_0px_rgba(0,0,0,0.2)]  p-10 tablet-or-mobile:p-2">
            <div className="tablet-or-mobile:mt-7 mb-16">
                <div className="tablet-or-mobile:mb-4">
                    <label
                        className="flex justify-center tablet-or-mobile:mr-0 text-white text-[50px] font-serif font-semibold tablet-or-mobile:text-[25px]"
                        htmlFor=""
                    >
                        Contact Me
                    </label>
                </div>
                <div className="grid  justify-items-center  grid-cols-3 tablet-or-mobile:mt-3  mt-10 tablet-or-mobile:grid-cols-1 tablet-or-mobile:justify-items-center">
                    <button
                        onClick={openEmailModal}
                        className="col-span-1 hover:animate-bounce"
                    >
                        <div className="w-96 h-24 tablet-or-mobile:w-72 tablet-or-mobile:h-14 rounded-lg flex justify-center items-center bg-bg-color shadow-2xl shadow-black">
                            <MdOutlineAttachEmail className="text-3xl mr-2 text-white mt-1" />
                            <label
                                className="text-font-color font-semibold  tablet-or-mobile:text-xl  text-2xl"
                                htmlFor=""
                            >
                                ddt94119@gmail.com
                            </label>
                        </div>
                    </button>
                    <button className="col-span-1  tablet-or-mobile:mt-4 hover:animate-bounce">
                        <a
                            href="https://wa.me/94765429917" target="_blank" rel="noopener noreferrer"
                            className="col-span-1 tablet-or-mobile:mt-4 hover:animate-bounce"
                        >
                            <div className="w-96 h-24 tablet-or-mobile:w-72 tablet-or-mobile:h-14 rounded-lg flex justify-center items-center bg-bg-color shadow-2xl shadow-black">
                                <BsTelephone className="text-3xl mr-2 text-white mt-1" />
                                <label
                                    className="text-font-color tablet-or-mobile:text-xl font-semibold text-2xl"
                                    htmlFor=""
                                >
                                    (+94) 76 5429917
                                </label>
                            </div>
                        </a>
                    </button>
                    <button className="col-span-1  tablet-or-mobile:mt-4 hover:animate-bounce">
                        <div className="w-96 h-24 tablet-or-mobile:w-72 tablet-or-mobile:h-14 rounded-lg flex justify-center items-center bg-bg-color shadow-2xl shadow-black">
                            <IoLocationOutline className="text-3xl mr-2 text-white mt-1" />
                            <label
                                className="text-font-color tablet-or-mobile:text-xl font-semibold text-2xl"
                                htmlFor=""
                            >
                                Kandy, Sri Lanka
                            </label>
                        </div>
                    </button>
                </div>
            </div>


            {isEmailModalOpen && (
                <div className="fixed inset-0 tablet-or-mobile:w-screen flex  items-center justify-center z-50">
                    <div className=" bg-bg-color-2 tablet-or-mobile:w-[360px] border-2 border-font-color rounded-lg p-8 tablet-or-mobile:p-2 z-10 ">
                        <EmailComponent closeModal={closeEmailModal} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default ContactSection;
