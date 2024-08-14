import CertificateCard from './CertificateCard';
import Python from '../assets/Python.png'
import Web from '../assets/WebDesign.png'

const Certificates = () => {
    return (
        <div>
            <div className='tablet-or-mobile:mt-7 mb-10'>
                <div className=' tablet-or-mobile:mb-4'>
                    <label className='flex justify-center tablet-or-mobile:mr-0 text-white text-[50px] font-serif font-semibold tablet-or-mobile:text-[25px] ' htmlFor="">Certificates</label>
                </div>
                <div className='grid mt-6 w-full grid-cols-2 gap-y-12 tablet-or-mobile:grid-cols-2'>
                    <div className='col-span-1 flex justify-center'>
                        <CertificateCard image={Python} />
                    </div>
                    <div className='col-span-1 flex justify-center'>
                        <CertificateCard image={Web} />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Certificates