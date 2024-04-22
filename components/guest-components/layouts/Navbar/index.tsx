import Image from 'next/image'
import Logo from '@/components/imgs/logo.png'
import { Cart } from '@/components/global-components/Icons'

const Navbar = () => {
    return (
        <nav className="h-[63px] rounded-[30px] bg-white opacity-80 justify-between flex justify-items-center items-center">
            <div>
                <ul className="flex">
                    <li className="px-2">
                        {/* <Image src={Logo.src} alt='LivinKost Logo' width={100} height={87}/> */}
                        <Image src={Logo.src} alt='LivinKost Logo' width={Logo.width} height={Logo.height} className='h-auto w-[100px]'/>
                    </li>
                    <li className="px-2 text-[32px] flex items-center font-bold">
                        <p>LIVIN</p>
                        <p className="text-primary">KOST</p>
                    </li>
                </ul>
            </div>
            <div>
                <ul className="flex items-center">
                    <li className="px-7 text-primary font-bold">Beranda</li>
                    <li className="px-7 font-bold">Pesan</li>
                    <li className="px-7 font-bold">Pusat Bantuan</li>
                    <li className='px-7'>
                    <Cart className="text-3xl"/>
                    </li>
                    {/* <li className="px-7 font-bold">Masuk</li> */}
                    <li className='px-7 font-bold'>
                        <button className=' border-black border rounded-2xl w-20 h-8'>
                            Masuk
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar