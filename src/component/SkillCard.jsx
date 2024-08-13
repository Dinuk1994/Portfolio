/* eslint-disable react/prop-types */


const SkillCard = ({ image,name }) => {
  return (
    <div className='w-56 h-56 group hover:bg-font-color  text-white bg-bg-color flex justify-center items-center shadow-xl rounded-2xl shadow-gray-800'>
      <div className='grid'>
        <img src={image} alt="" className='flex size-32' />
        <label className='flex  group-hover:text-black justify-center text-2xl mt-2 text-font-color font-semibold' htmlFor="">{name}</label>
      </div>
    </div>
  )
}

export default SkillCard