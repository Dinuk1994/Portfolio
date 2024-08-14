/* eslint-disable react/prop-types */

const ProjectCard = ({ media, description, link }) => {
    const isVideo = media.endsWith('.mp4') || media.endsWith('.webm') || media.endsWith('.ogg');
    return (
        <a href={link}>
            <div className='w-[550px] h-[200px] mt-12 tablet-or-mobile:mt-2 tablet-or-mobile:w-[170px] tablet-or-mobile:h-[100px]   text-white bg-bg-color flex justify-center items-center shadow-xl rounded-2xl shadow-gray-800 relative'>
                <div className='grid w-[550px] h-[300px] tablet-or-mobile:w-[170px] tablet-or-mobile:h-[100px]'>
                    {isVideo ? (
                        <video src={media} className='w-full h-full tablet-or-mobile:w-[170px] tablet-or-mobile:h-[100px] object-cover rounded-lg' controls />
                    ) : (
                        <img src={media} alt="" className='w-[550px] h-[250px] tablet-or-mobile:w-[170px] tablet-or-mobile:h-[100px] rounded-lg' />
                    )}
                    <label className='flex group-hover:text-black justify-center text-2xl mt-2 tablet-or-mobile:hidden text-font-color font-semibold' htmlFor="">{name}</label>
                </div>
                <div className='absolute tablet-or-mobile:hidden  text-font-color -inset-y-5 w-[550px] h-[200px]  flex justify-center items-center bg-black bg-opacity-75  opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                    <p className='text-center'>{description} <br /><span className="text-white">Click to navigate to Github Link</span></p>
                </div>
            </div>
        </a>
    );
}

export default ProjectCard;
