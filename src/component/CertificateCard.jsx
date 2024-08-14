/* eslint-disable react/prop-types */

const CertificateCard = ({image}) => {
    return (
        <div>
            <div className='w-[450px] h-[250px] mt-4  tablet-or-mobile:mt-2 tablet-or-mobile:w-[170px] tablet-or-mobile:h-[100px]   text-white bg-bg-color flex justify-center items-center shadow-xl rounded-2xl shadow-gray-800 relative'>
                <div className='grid w-[450px] h-[250px] tablet-or-mobile:w-[170px] tablet-or-mobile:h-[100px]'>
                    <img src={image} alt="" className='w-[450px] h-[250px] tablet-or-mobile:w-[170px] tablet-or-mobile:h-[100px] rounded-lg' />                    <label className='flex group-hover:text-black justify-center text-2xl mt-2 tablet-or-mobile:hidden text-font-color font-semibold' htmlFor="">{name}</label>
                </div>
                
            </div>
        </div>
    )
}

export default CertificateCard