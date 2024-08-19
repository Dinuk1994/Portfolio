import  { useState } from 'react';

const Experience = () => {
    const [showMore, setShowMore] = useState({
        frontEnd: false,
        quantitySurveyor: false,
        assistantQuantitySurveyor: false,
    });

    const toggleShowMore = (key) => {
        setShowMore(prevState => ({ ...prevState, [key]: !prevState[key] }));
    };

    return (
        <div data-aos="fade-up" className='bg-bg-color shadow-[inset_0_30px_35px_0px_rgba(0,0,0,0.2)]  p-10 tablet-or-mobile:p-2'>
            <div className='tablet-or-mobile:mt-7'>
                <div className='mb-10 tablet-or-mobile:mb-4'>
                    <label className='flex justify-center tablet-or-mobile:mr-0 text-white text-[50px] font-serif font-semibold tablet-or-mobile:text-[25px]' htmlFor="">Experiences</label>
                </div>
                <div className="flex justify-end">
                    <div className="grid">
                        <div className="grid grid-cols-12 tablet-or-mobile:grid-cols-11">
                            <div className="col-span-1 w-24 flex justify-center tablet-or-mobile:-rotate-90 tablet-or-mobile:-ml-6 tablet-or-mobile:mt-7 rounded-lg h-10 bg-gray-700">
                                <label className="flex items-center text-white text-sm font-bold" htmlFor="">2024 to date</label>
                            </div>
                            <div className="flex tablet-or-mobile:hidden justify-center mt-3 ml-8">
                                <div className="bg-font-color rounded-full h-4 w-4 blur-[3px]"></div>
                            </div>
                            <div className="flex justify-center">
                                <div className="col-span-1 flex justify-center bg-font-color w-2 tablet-or-mobile:w-1 rounded"></div>
                            </div>
                            <div className="col-span-9 text-white w-[750px] tablet-or-mobile:w-[280px] mr-[80px] tablet-or-mobile:mr-[3px]">
                                <label className="text-3xl tablet-or-mobile:text-lg text-nowrap" htmlFor="">Intern Software Front-End Developer</label><br />
                                <label className="text-xl tablet-or-mobile:text-sm" htmlFor="">Roamify IT</label>
                                <p className="mt-5 tablet-or-mobile:text-sm">
                                    {showMore.frontEnd ? (
                                        <>
                                            In my role as a Front-End Developer and UI/UX Designer, I contributed to a project where we utilized Next.js for front-end development and Tailwind CSS for styling. My responsibilities included integrating the front end with the back end and implementing responsive UI designs to ensure a seamless user experience across all devices.
                                            <button onClick={() => toggleShowMore('frontEnd')} className="text-font-color ml-2">See less</button>
                                        </>
                                    ) : (
                                        <>
                                            In my role as a Front-End Developer and UI/UX Designer, I contributed to a project where we utilized Next.js for front-end development and Tailwind CSS for styling...
                                            <button onClick={() => toggleShowMore('frontEnd')} className="text-font-color ml-2">See more</button>
                                        </>
                                    )}
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-12 mt-12 tablet-or-mobile:mt-14 tablet-or-mobile:grid-cols-11">
                            <div className="col-span-1 w-24 flex justify-center tablet-or-mobile:-rotate-90 tablet-or-mobile:-ml-6 tablet-or-mobile:mt-7 rounded-lg h-10 bg-gray-700">
                                <label className="flex items-center text-white text-sm font-bold" htmlFor="">2018 - 2023</label>
                            </div>
                            <div className="flex tablet-or-mobile:hidden justify-center mt-3 ml-8">
                                <div className="bg-font-color rounded-full h-4 w-4 blur-[3px]"></div>
                            </div>
                            <div className="flex justify-center">
                                <div className="col-span-1 flex justify-center bg-font-color w-2 tablet-or-mobile:w-1 rounded"></div>
                            </div>
                            <div className="col-span-9 text-white w-[750px] tablet-or-mobile:w-[280px] mr-[80px] tablet-or-mobile:mr-[3px]">
                                <label className="text-3xl tablet-or-mobile:text-lg text-nowrap" htmlFor="">Quantity Surveyor</label><br />
                                <label className="text-xl tablet-or-mobile:text-sm" htmlFor="">Provincial Road Development Authority</label>
                                <p className="mt-5 tablet-or-mobile:text-sm">
                                    {showMore.quantitySurveyor ? (
                                        <>
                                            As a Quantity Surveyor, I was responsible for accurately estimating project costs, preparing interim and final bills, and taking off measurements to ensure precise budgeting. I also supervised construction works, ensuring they adhered to project specifications, timelines, and budgets while maintaining high standards of quality and safety. Additionally, I created detailed AutoCAD drawings to support project planning and execution. My meticulous attention to detail and effective project management contributed to the successful and timely delivery of projects within budget.
                                            <button onClick={() => toggleShowMore('quantitySurveyor')} className="text-font-color ml-2">See less</button>
                                        </>
                                    ) : (
                                        <>
                                            As a Quantity Surveyor, I was responsible for accurately estimating project costs, preparing interim and final bills, and taking off measurements to ensure precise budgeting...
                                            <button onClick={() => toggleShowMore('quantitySurveyor')} className="text-font-color ml-2">See more</button>
                                        </>
                                    )}
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-12 mt-12 tablet-or-mobile:mt-14 tablet-or-mobile:grid-cols-11">
                            <div className="col-span-1 w-24 flex justify-center tablet-or-mobile:-rotate-90 tablet-or-mobile:-ml-6 tablet-or-mobile:mt-7 rounded-lg h-10 bg-gray-700">
                                <label className="flex items-center text-white text-sm font-bold" htmlFor="">2017-2018</label>
                            </div>
                            <div className="flex tablet-or-mobile:hidden justify-center mt-3 ml-8">
                                <div className="bg-font-color rounded-full h-4 w-4 blur-[3px]"></div>
                            </div>
                            <div className="flex justify-center mb-5">
                                <div className="col-span-1 flex justify-center bg-font-color w-2 tablet-or-mobile:w-1 rounded"></div>
                            </div>
                            <div className="col-span-9 mb-5 text-white w-[750px] tablet-or-mobile:w-[280px] mr-[80px] tablet-or-mobile:mr-[3px]">
                                <label className="text-3xl tablet-or-mobile:text-lg text-nowrap" htmlFor="">Assistant Quantity Surveyor</label><br />
                                <label className="text-xl tablet-or-mobile:text-sm" htmlFor="">Mahaweli Authority</label>
                                <p className="mt-5 tablet-or-mobile:text-sm">
                                    {showMore.assistantQuantitySurveyor ? (
                                        <>
                                            As an Assistant Quantity Surveyor, I gained invaluable experience in the art of cost estimation and measurement. I honed my skills in creating precise project estimates and taking accurate measurements, which are crucial for effective budgeting and project planning. This role allowed me to delve into the intricacies of quantity surveying, providing a solid foundation for my career in the construction industry.
                                            <button onClick={() => toggleShowMore('assistantQuantitySurveyor')} className="text-font-color ml-2">See less</button>
                                        </>
                                    ) : (
                                        <>
                                            As an Assistant Quantity Surveyor, I gained invaluable experience in the art of cost estimation and measurement...
                                            <button onClick={() => toggleShowMore('assistantQuantitySurveyor')} className="text-font-color ml-2">See more</button>
                                        </>
                                    )}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;
