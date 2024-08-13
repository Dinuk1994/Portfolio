/* eslint-disable react/prop-types */


const SkillCard = ({ image,name }) => {
  return (
    <div className='w-56 h-56 tablet-or-mobile:w-28 tablet-or-mobile:h-28 group hover:bg-font-color  text-white bg-bg-color flex justify-center items-center shadow-xl rounded-2xl shadow-gray-800'>
      <div className='grid'>
        <img src={image} alt="" className='flex size-32 tablet-or-mobile:size-12' />
        <label className='flex  group-hover:text-black justify-center text-2xl mt-2  tablet-or-mobile:hidden text-font-color font-semibold' htmlFor="">{name}</label>
      </div>
    </div>
  )
}

export default SkillCard