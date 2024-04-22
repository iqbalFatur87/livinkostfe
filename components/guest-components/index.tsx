import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';

import ImgWelcome from '@/components/imgs/Homepage/img-welcome.png'
import IconHome from '@/components/imgs/Homepage/Icon-Home.png'
import IconPhone from '@/components/imgs/Homepage/Icon-Phone.png'
import IconHands from '@/components/imgs/Homepage/Icon-Hands.png'
import IconDiscount from '@/components/imgs/Homepage/Icon-Discount.png'
import IconLivinMates from '@/components/imgs/Homepage/Icon-LivinMates.png'
import ImageRentedHouse from '@/components/imgs/Homepage/Image-Rented-House.png'
import ImageBoardingHouse from '@/components/imgs/Homepage/Image-Boarding-House.png'
import ImageApartment from '@/components/imgs/Homepage/Image-Apartment.png'
import ImageTelkom from '@/components/imgs/Homepage/Campus/Telkom-University.png'
import ImagePasundan from '@/components/imgs/Homepage/Campus/Pasundan.png'
import ImageMaranatha from '@/components/imgs/Homepage/Campus/Maranatha.png'
import ImagePadjajaran from '@/components/imgs/Homepage/Campus/Padjajaran.png'
import ImageUnivComputer from '@/components/imgs/Homepage/Campus/Komputer.png'
import ImageWidyatama from '@/components/imgs/Homepage/Campus/Widyatama.png'
import ImageRec1 from '@/components/imgs/Homepage/Recom/1.png'
import ImageRec2 from '@/components/imgs/Homepage/Recom/2.png'
import ImageRec3 from '@/components/imgs/Homepage/Recom/3.png'
import ImageRec4 from '@/components/imgs/Homepage/Recom/4.png'
import ImageRec5 from '@/components/imgs/Homepage/Recom/5.png'
import ImagePerson1 from '@/components/imgs/Homepage/Review/Image-Person-1.png'
import ImagePerson2 from '@/components/imgs/Homepage/Review/Image-Person-2.png'
import ImagePerson3 from '@/components/imgs/Homepage/Review/Image-Person-3.png'
import ImageAdvantages1 from '@/components/imgs/Homepage/Advantages/1.png'
import ImageAdvantages2 from '@/components/imgs/Homepage/Advantages/2.png'
import ImageAdvantages3 from '@/components/imgs/Homepage/Advantages/3.png'
import ImageAdvantages4 from '@/components/imgs/Homepage/Advantages/4.png'
import ImageAdvantages5 from '@/components/imgs/Homepage/Advantages/5.png'
import ImageAdvantages6 from '@/components/imgs/Homepage/Advantages/6.png'

import Navbar from "./layouts/Navbar"

import Homepage from '../../../public/homepage.png'

import styles from './Guest.module.css'

import { Poppins } from "next/font/google"
import { Divider, Map, Search, Close, Star, Bath, SurfaceArea, Sofa, Cart, LineSplit } from "../global-components/Icons"
import Footer from "./layouts/Footer"


const PoppinsCustom = Poppins({
    weight: '300',
    subsets: ['latin']
})

const GuestComponents = () => {
    return (
        <div className="5xl:container px-24">
            <div className="py-5"
            >
                <Image src={Homepage.src} width={0} height={0} sizes="100vw" alt="Homepage-Image" className="h-[622px] w-[100%] absolute top-0 left-0 object-cover" quality={100} priority={true} />
                <Navbar/>
                <div className="grid grid-rows-5Custom grid-flow-col grid-cols-2 text-white my-10 gap-2 z-20 relative">
                    <p className="font-bold text-5xl w-[60%] mt-10 leading-normal">Selamat Datang di LivinKost</p>
                    <p className={PoppinsCustom.className + " font-light mt-6 text-2xl leading-normal tracking-[0.0075rem]"}>Temukan sewa properti terjangkau di dekat kampus Kamu bersama Livinkost.</p>
                    <p className={PoppinsCustom.className + " text-2xl leading-normal tracking-[0.0075rem]"}>Pesan sekarang dan nikmati semua layanan Kami tanpa ribet.</p>
                    <div className="rounded-[30px] w-[507px] h-[46px] bg-white mt-10 px-5 items-center flex">
                        <Map className="text-3xl"/>
                        <input className="placeholder:text-slate-400 block bg-white mx-5 focus:outline-none text-black w-[320px]" placeholder="Cari dengan lokasi/kampus" type="text" name="search"/>
                        <Search className="mx-1 text-4xl"/>
                        <Divider className="mx-1 text-4xl" />
                        <Close className="mx-1 text-2xl"/>
                    </div>
                    <div className="mt-28 grid grid-cols-4 gap-2">
                        <div className={styles.cardIcon}>
                            <Image src={IconHome.src} height={IconHome.height} width={IconHome.width} alt="Icon-Home" 
                            className="w-[109px] h-[69px]"
                            />
                            <h1 className={styles.title}>500+</h1>
                            <p className={styles.subTitle}>Properti</p>
                        </div>
                        <div className={styles.cardIcon}>
                            <Image src={IconPhone.src} alt="Icon-Phone" width={IconPhone.width} height={IconPhone.height}
                                className="w-[75px] h-[75px]"
                            />
                            <h1 className={styles.title}>100+</h1>
                            <p className={styles.subTitle}>Transaksi</p>
                        </div>
                        <div className={styles.cardIcon}>
                            <Image src={IconHands.src} alt="Icon-Hands" width={IconHands.width} height={IconHands.height}
                                className="w-[105px] h-[65px]"
                            />
                            <h1 className={styles.title}>50+</h1>
                            <p className={styles.subTitle}>Partner</p>
                        </div>
                        <div className={styles.cardIcon}>
                            <Image src={IconDiscount.src} alt="Icon-Discount" width={IconDiscount.width} height={IconDiscount.height}
                                className="w-[79px] h-[78px]"
                            />
                            <h1 className={styles.title}>20+</h1>
                            <p className={styles.subTitle}>Promo</p>
                        </div>
                    </div>
                    <div className="flex justify-end row-span-5">
                        <div className="bg-imgWelcome rounded-t-[320px] p-4 h-[578px]">
                            <Image src={ImgWelcome.src} width={503} height={ImgWelcome.height} alt="Image" className=" rounded-t-[302px] rounded-b-[50px] h-[780px] shadow-[20px_20px_15px_0px_rgba(0,0,0,0.15)] bg-cover "/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-28">
                <h1 className="font-semibold leading-normal text-center mb-5">Apa yang kamu cari?</h1>
                <div className="grid grid-cols-3 gap-20">
                    <div className="w-full flex justify-center">
                        <div className={styles.cardFeatures}>
                            <div className={styles.features}>
                                <Image src={ImageRentedHouse.src} fill alt="Image Rented House"
                                    className="rounded-[200px_200px_50px_50px] bg-cover z-0"
                                />
                                <div className={styles.overlay}>
                                </div>
                                <div className={styles.body}>
                                    <h1 className={styles.title}>Rumah Kontrakan</h1>
                                    <p className={styles.description}>Livinkost adalah pilihan cerdas bagi mahasiswa yang mencari rumah kontrakan terjangkau tanpa mengorbankan kualitas. Cari kontrakan Anda sekarang!</p>
                                </div>
                            </div>
                            <div className={styles.footer}>
                                <a className={styles.content} href="">Telusuri</a>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex justify-center">
                        <div className={styles.cardFeatures}>
                            <div className={styles.features}>
                                <Image src={ImageBoardingHouse.src} fill alt="Image Boarding House"
                                    className="rounded-[200px_200px_50px_50px] bg-cover z-0"
                                />
                                <div className={styles.overlay}>
                                </div>
                                <div className={styles.body}>
                                    <h1 className={styles.title}>Kamar Kost</h1>
                                    <p className={styles.description}>Temukan kamar kost impian Anda dengan harga yang sesuai di Livinkost. Kami menyediakan lokasi yang ideal untuk kehidupan kuliah Anda.</p>
                                </div>
                            </div>
                            <div className={styles.footer}>
                                <a className={styles.content} href="">Telusuri</a>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex justify-center">
                        <div className={styles.cardFeatures}>
                            <div className={styles.features}>
                                <Image src={ImageApartment.src} fill alt="Image Apartment"
                                    className="rounded-[200px_200px_50px_50px] bg-cover z-0"
                                />
                                <div className={styles.overlay}>
                                </div>
                                <div className={styles.body}>
                                    <h1 className={styles.title}>Apartment</h1>
                                    <p className={styles.description}>Menemukan tempat tinggal yang nyaman adalah langkah pertama menuju sukses akademis. Ayo telusuri Apartemen yang sesuai dengan keinginanmu di Livinkost!</p>
                                </div>
                            </div>
                            <div className={styles.footer}>
                                <a className={styles.content} href="">Telusuri</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" mt-20 flex justify-center">
                <div 
                    className={styles.cardLivinMates}
                    >
                    <div className="grid grid-cols-4 grid-flow-row-dense h-full">
                        <div className="col-span-3 mt-8 flex font-semibold">
                            <h1>Temukan Teman Satu Kontrakan yang Tepat dengan Livin</h1>
                            <h1 className="text-primary">Mates</h1>
                            <h1>!</h1>
                        </div>
                        <p className="col-span-3 -mt-3">LivinMates membantu Anda menemukan teman sekontrakan yang sesuai dengan minat dan gaya hidup Anda.</p>
                        <div className="w-full justify-center flex items-end row-span-2">
                            <div className="w-[139px] h-[93%] rounded-[100px_100px_0px_0px] bg-[#C58E24] flex items-end justify-center">
                                <Image src={IconLivinMates.src} height={IconLivinMates.height} width={IconLivinMates.width} alt="Icon LivinMates" quality={100}
                                    className="h-[177px] w-[110px]"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-20">
                <h1 className="text-center font-semibold">Jelajahi Kampus Anda</h1>
                <div className="flex justify-center my-8">
                    <div className="w-[80%]">
                        <div className={styles.campusList}>
                            <div className="px-3">
                                <div className="grid grid-cols-10">
                                    <div className="w-full flex justify-center col-start-2 col-span-4">
                                        <Image src={ImageTelkom.src} height={149} width={118} alt="Telkom-University" className="row-span-2"/>
                                    </div>
                                    <div className="col-span-5 row-span-2 items-center flex">
                                        <div className="gap-2 grid">
                                            <p className=" font-semibold">Telkom University</p>
                                            <p className=" text-gray-500">Bojongsoang</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="px-3">
                                <div className="grid grid-cols-10">
                                    <div className="w-full flex justify-center col-start-2 col-span-4">
                                        <Image src={ImagePadjajaran.src} height={152} width={140} alt="Universitas-Padjajaran" className="row-span-2"/>
                                    </div>
                                    <div className="col-span-5 row-span-2 items-center flex">
                                        <div className="gap-2 grid">
                                            <p className=" font-semibold">Universitas Padjajaran</p>
                                            <p className=" text-gray-500">Jatinangor</p>
                                        </div>
                                    </div>
                                </div>
                            </div>                            
                            <div className="px-3">
                                <div className="grid grid-cols-10">
                                    <div className="w-full flex justify-center col-start-2 col-span-4">
                                        <Image src={ImagePasundan.src} height={170} width={300} alt="Universitas-Pasundan" className="row-span-2"/>
                                    </div>
                                    <div className="col-span-5 row-span-2 items-center flex">
                                        <div className="gap-2 grid">
                                            <p className=" font-semibold">Universitas Pasundan</p>
                                            <p className=" text-gray-500">Lengkong Besar</p>
                                        </div>
                                    </div>
                                </div>
                            </div>                            
                            <div className="px-3">
                                <div className="grid grid-cols-10">
                                    <div className="w-full flex justify-center col-start-2 col-span-4">
                                        <Image src={ImageWidyatama.src} height={152} width={120} alt="Universitas Widyatama" className="row-span-2"/>
                                    </div>
                                    <div className="col-span-5 row-span-2 items-center flex">
                                        <div className="gap-2 grid">
                                            <p className=" font-semibold">Widyatama</p>
                                            <p className=" text-gray-500">Cikutra</p>
                                        </div>
                                    </div>
                                </div>
                            </div>                            
                            <div className="px-3">
                                <div className="grid grid-cols-10">
                                    <div className="w-full flex justify-center col-start-2 col-span-4">
                                        <Image src={ImageMaranatha.src} height={149} width={120} alt="Universitas Maranatha" className="row-span-2"/>
                                    </div>
                                    <div className="col-span-5 row-span-2 items-center flex">
                                        <div className="gap-2 grid">
                                            <p className=" font-semibold">Universitas Maranatha</p>
                                            <p className=" text-gray-500">Lengkong Besar</p>
                                        </div>
                                    </div>
                                </div>
                            </div>                            
                            <div className="px-3">
                                <div className="grid grid-cols-10">
                                    <div className="w-full flex justify-center col-start-2 col-span-4">
                                        <Image src={ImageUnivComputer.src} height={144} width={120} alt="Universitas Komputer" className="row-span-2"/>
                                    </div>
                                    <div className="col-span-5 row-span-2 items-center flex">
                                        <div className="gap-2 grid">
                                            <p className=" font-semibold">Telkom University</p>
                                            <p className=" text-gray-500">Bojongsoang</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <a href="" className="bg-black text-white px-6 py-2 rounded-2xl flex justify-center items-center">Lihat Semua kategori</a>
                </div>
            </div>
            <div className="my-20">
                <div className="w-full flex justify-center font-semibold my-10">
                    <h1>Rekomendasi Livin</h1>
                    <h1 className="text-primary">Kost</h1>
                </div>
                {/* <div className="grid grid-cols-4 justify-center">
                    <div className="flex justify-center">
                        <div className="relative w-[180px] h-[230px]">
                            <Image src={ImageRec1.src} fill alt="ImageRec1" className="rounded-3xl shadow-2xl" quality={100}/>
                        </div>
                        <div className="w-[173px] h-[160px] relative rounded-3xl -ml-8 bg-white px-3 py-2 shadow-2xl">
                            <p className=" text-[#999191] font-semibold text-sm">Dipatiukur</p>
                            <div className="flex">
                                <p className="text-sm font-semibold text-primary">Rp. 60.000.000/</p>
                                <p className="text-xs font-semibold self-center">tahun</p>
                            </div>
                            <div className="flex my-1">
                                <Star className="text-xs"/>
                                <Star className="text-xs"/>
                                <Star className="text-xs"/>
                                <Star className="text-xs"/>
                                <Star className="text-xs"/>
                                <p className="text-[10px] text-gray-400 mx-1">5.0 (2 Penilaian)</p>
                            </div>
                            <div className="flex gap-4 my-1">
                                <div className="flex gap-1 items-center">
                                    <Bath className="font-bold text-lg"/>
                                    <p className="text-xs font-bold">3</p>
                                </div>
                                <div className="flex gap-1 items-center">
                                    <Sofa className="font-bold text-lg"/>
                                    <p className="text-xs font-bold">5</p>
                                </div>
                                <div className="flex gap-1 items-center">
                                    <SurfaceArea className="font-bold"/>
                                    <p className="text-xs font-bold">120m</p>
                                </div>
                            </div>
                            <div className="flex my-5 gap-4">
                                <a className="w-[100px] h-[30px] bg-black rounded-md text-sm text-white flex justify-center items-center" href="">
                                    Kirim Pesan
                                </a>
                                <a className="flex w-[32px] h-[32px] bg-black justify-center items-center rounded-full">
                                    <Cart className="text-[20px] text-white"/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="relative w-[180px] h-[230px]">
                            <Image src={ImageRec1.src} fill alt="ImageRec1" className="rounded-3xl shadow-2xl" quality={100}/>
                        </div>
                        <div className="w-[173px] h-[160px] relative rounded-3xl -ml-8 bg-white px-3 py-2 shadow-2xl">
                            <p className=" text-[#999191] font-semibold text-sm">Dipatiukur</p>
                            <div className="flex">
                                <p className="text-sm font-semibold text-primary">Rp. 60.000.000/</p>
                                <p className="text-xs font-semibold self-center">tahun</p>
                            </div>
                            <div className="flex my-1">
                                <Star className="text-xs"/>
                                <Star className="text-xs"/>
                                <Star className="text-xs"/>
                                <Star className="text-xs"/>
                                <Star className="text-xs"/>
                                <p className="text-[10px] text-gray-400 mx-1">5.0 (2 Penilaian)</p>
                            </div>
                            <div className="flex gap-4 my-1">
                                <div className="flex gap-1 items-center">
                                    <Bath className="font-bold text-lg"/>
                                    <p className="text-xs font-bold">3</p>
                                </div>
                                <div className="flex gap-1 items-center">
                                    <Sofa className="font-bold text-lg"/>
                                    <p className="text-xs font-bold">5</p>
                                </div>
                                <div className="flex gap-1 items-center">
                                    <SurfaceArea className="font-bold"/>
                                    <p className="text-xs font-bold">120m</p>
                                </div>
                            </div>
                            <div className="flex my-5 gap-4">
                                <a className="w-[100px] h-[30px] bg-black rounded-md text-sm text-white flex justify-center items-center" href="">
                                    Kirim Pesan
                                </a>
                                <a className="flex w-[32px] h-[32px] bg-black justify-center items-center rounded-full">
                                    <Cart className="text-[20px] text-white"/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="relative w-[180px] h-[230px]">
                            <Image src={ImageRec1.src} fill alt="ImageRec1" className="rounded-3xl shadow-2xl" quality={100}/>
                        </div>
                        <div className="w-[173px] h-[160px] relative rounded-3xl -ml-8 bg-white px-3 py-2 shadow-2xl">
                            <p className=" text-[#999191] font-semibold text-sm">Dipatiukur</p>
                            <div className="flex">
                                <p className="text-sm font-semibold text-primary">Rp. 60.000.000/</p>
                                <p className="text-xs font-semibold self-center">tahun</p>
                            </div>
                            <div className="flex my-1">
                                <Star className="text-xs"/>
                                <Star className="text-xs"/>
                                <Star className="text-xs"/>
                                <Star className="text-xs"/>
                                <Star className="text-xs"/>
                                <p className="text-[10px] text-gray-400 mx-1">5.0 (2 Penilaian)</p>
                            </div>
                            <div className="flex gap-4 my-1">
                                <div className="flex gap-1 items-center">
                                    <Bath className="font-bold text-lg"/>
                                    <p className="text-xs font-bold">3</p>
                                </div>
                                <div className="flex gap-1 items-center">
                                    <Sofa className="font-bold text-lg"/>
                                    <p className="text-xs font-bold">5</p>
                                </div>
                                <div className="flex gap-1 items-center">
                                    <SurfaceArea className="font-bold"/>
                                    <p className="text-xs font-bold">120m</p>
                                </div>
                            </div>
                            <div className="flex my-5 gap-4">
                                <a className="w-[100px] h-[30px] bg-black rounded-md text-sm text-white flex justify-center items-center" href="">
                                    Kirim Pesan
                                </a>
                                <a className="flex w-[32px] h-[32px] bg-black justify-center items-center rounded-full">
                                    <Cart className="text-[20px] text-white"/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="relative w-[180px] h-[230px]">
                            <Image src={ImageRec1.src} fill alt="ImageRec1" className="rounded-3xl shadow-2xl" quality={100}/>
                        </div>
                        <div className="w-[173px] h-[160px] relative rounded-3xl -ml-8 bg-white px-3 py-2 shadow-2xl">
                            <p className=" text-[#999191] font-semibold text-sm">Dipatiukur</p>
                            <div className="flex">
                                <p className="text-sm font-semibold text-primary">Rp. 60.000.000/</p>
                                <p className="text-xs font-semibold self-center">tahun</p>
                            </div>
                            <div className="flex my-1">
                                <Star className="text-xs"/>
                                <Star className="text-xs"/>
                                <Star className="text-xs"/>
                                <Star className="text-xs"/>
                                <Star className="text-xs"/>
                                <p className="text-[10px] text-gray-400 mx-1">5.0 (2 Penilaian)</p>
                            </div>
                            <div className="flex gap-4 my-1">
                                <div className="flex gap-1 items-center">
                                    <Bath className="font-bold text-lg"/>
                                    <p className="text-xs font-bold">3</p>
                                </div>
                                <div className="flex gap-1 items-center">
                                    <Sofa className="font-bold text-lg"/>
                                    <p className="text-xs font-bold">5</p>
                                </div>
                                <div className="flex gap-1 items-center">
                                    <SurfaceArea className="font-bold"/>
                                    <p className="text-xs font-bold">120m</p>
                                </div>
                            </div>
                            <div className="flex my-5 gap-4">
                                <a className="w-[100px] h-[30px] bg-black rounded-md text-sm text-white flex justify-center items-center" href="">
                                    Kirim Pesan
                                </a>
                                <a className="flex w-[32px] h-[32px] bg-black justify-center items-center rounded-full">
                                    <Cart className="text-[20px] text-white"/>
                                </a>
                            </div>
                        </div>
                    </div>  
                </div> */}
                <Swiper
                    modules={[Navigation]}
                    slidesPerView={3}
                    navigation
                >
                    <SwiperSlide>
                        <div className="flex justify-center">
                            <div className="relative w-[180px] h-[230px] rounded-3xl shadow-lg">
                                <Image src={ImageRec1.src} fill alt="ImageRec1" className="rounded-3xl shadow-lg" quality={100}/>
                            </div>
                            <div className="w-[173px] h-[160px] relative rounded-3xl -ml-8 bg-white px-3 py-2 shadow-lg">
                                <p className=" text-[#999191] font-semibold text-sm">Dipatiukur</p>
                                <div className="flex">
                                    <p className="text-sm font-semibold text-primary">Rp. 60.000.000/</p>
                                    <p className="text-xs font-semibold self-center">tahun</p>
                                </div>
                                <div className="flex my-1">
                                    <Star className="text-xs"/>
                                    <Star className="text-xs"/>
                                    <Star className="text-xs"/>
                                    <Star className="text-xs"/>
                                    <Star className="text-xs"/>
                                    <p className="text-[10px] text-gray-400 mx-1">5.0 (2 Penilaian)</p>
                                </div>
                                <div className="flex gap-4 my-1">
                                    <div className="flex gap-1 items-center">
                                        <Bath className="font-bold text-lg"/>
                                        <p className="text-xs font-bold">3</p>
                                    </div>
                                    <div className="flex gap-1 items-center">
                                        <Sofa className="font-bold text-lg"/>
                                        <p className="text-xs font-bold">5</p>
                                    </div>
                                    <div className="flex gap-1 items-center">
                                        <SurfaceArea className="font-bold"/>
                                        <p className="text-xs font-bold">120m</p>
                                    </div>
                                </div>
                                <div className="flex my-5 gap-4">
                                    <a className="w-[100px] h-[30px] bg-black rounded-md text-sm text-white flex justify-center items-center" href="">
                                        Kirim Pesan
                                    </a>
                                    <a className="flex w-[32px] h-[32px] bg-black justify-center items-center rounded-full">
                                        <Cart className="text-[20px] text-white"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex justify-center">
                            <div className="relative w-[180px] h-[230px] rounded-3xl shadow-lg">
                                <Image src={ImageRec1.src} fill alt="ImageRec1" className="rounded-3xl shadow-lg" quality={100}/>
                            </div>
                            <div className="w-[173px] h-[160px] relative rounded-3xl -ml-8 bg-white px-3 py-2 shadow-lg">
                                <p className=" text-[#999191] font-semibold text-sm">Dipatiukur</p>
                                <div className="flex">
                                    <p className="text-sm font-semibold text-primary">Rp. 60.000.000/</p>
                                    <p className="text-xs font-semibold self-center">tahun</p>
                                </div>
                                <div className="flex my-1">
                                    <Star className="text-xs"/>
                                    <Star className="text-xs"/>
                                    <Star className="text-xs"/>
                                    <Star className="text-xs"/>
                                    <Star className="text-xs"/>
                                    <p className="text-[10px] text-gray-400 mx-1">5.0 (2 Penilaian)</p>
                                </div>
                                <div className="flex gap-4 my-1">
                                    <div className="flex gap-1 items-center">
                                        <Bath className="font-bold text-lg"/>
                                        <p className="text-xs font-bold">3</p>
                                    </div>
                                    <div className="flex gap-1 items-center">
                                        <Sofa className="font-bold text-lg"/>
                                        <p className="text-xs font-bold">5</p>
                                    </div>
                                    <div className="flex gap-1 items-center">
                                        <SurfaceArea className="font-bold"/>
                                        <p className="text-xs font-bold">120m</p>
                                    </div>
                                </div>
                                <div className="flex my-5 gap-4">
                                    <a className="w-[100px] h-[30px] bg-black rounded-md text-sm text-white flex justify-center items-center" href="">
                                        Kirim Pesan
                                    </a>
                                    <a className="flex w-[32px] h-[32px] bg-black justify-center items-center rounded-full">
                                        <Cart className="text-[20px] text-white"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex justify-center">
                            <div className="relative w-[180px] h-[230px] rounded-3xl shadow-lg">
                                <Image src={ImageRec1.src} fill alt="ImageRec1" className="rounded-3xl shadow-lg" quality={100}/>
                            </div>
                            <div className="w-[173px] h-[160px] relative rounded-3xl -ml-8 bg-white px-3 py-2 shadow-lg">
                                <p className=" text-[#999191] font-semibold text-sm">Dipatiukur</p>
                                <div className="flex">
                                    <p className="text-sm font-semibold text-primary">Rp. 60.000.000/</p>
                                    <p className="text-xs font-semibold self-center">tahun</p>
                                </div>
                                <div className="flex my-1">
                                    <Star className="text-xs"/>
                                    <Star className="text-xs"/>
                                    <Star className="text-xs"/>
                                    <Star className="text-xs"/>
                                    <Star className="text-xs"/>
                                    <p className="text-[10px] text-gray-400 mx-1">5.0 (2 Penilaian)</p>
                                </div>
                                <div className="flex gap-4 my-1">
                                    <div className="flex gap-1 items-center">
                                        <Bath className="font-bold text-lg"/>
                                        <p className="text-xs font-bold">3</p>
                                    </div>
                                    <div className="flex gap-1 items-center">
                                        <Sofa className="font-bold text-lg"/>
                                        <p className="text-xs font-bold">5</p>
                                    </div>
                                    <div className="flex gap-1 items-center">
                                        <SurfaceArea className="font-bold"/>
                                        <p className="text-xs font-bold">120m</p>
                                    </div>
                                </div>
                                <div className="flex my-5 gap-4">
                                    <a className="w-[100px] h-[30px] bg-black rounded-md text-sm text-white flex justify-center items-center" href="">
                                        Kirim Pesan
                                    </a>
                                    <a className="flex w-[32px] h-[32px] bg-black justify-center items-center rounded-full">
                                        <Cart className="text-[20px] text-white"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="flex justify-center">
                        <div className="relative w-[180px] h-[230px] rounded-3xl shadow-lg">
                            <Image src={ImageRec1.src} fill alt="ImageRec1" className="rounded-3xl shadow-lg" quality={100}/>
                        </div>
                        <div className="w-[173px] h-[160px] relative rounded-3xl -ml-8 bg-white px-3 py-2 shadow-lg">
                            <p className=" text-[#999191] font-semibold text-sm">Dipatiukur</p>
                            <div className="flex">
                                <p className="text-sm font-semibold text-primary">Rp. 60.000.000/</p>
                                <p className="text-xs font-semibold self-center">tahun</p>
                            </div>
                            <div className="flex my-1">
                                <Star className="text-xs"/>
                                <Star className="text-xs"/>
                                <Star className="text-xs"/>
                                <Star className="text-xs"/>
                                <Star className="text-xs"/>
                                <p className="text-[10px] text-gray-400 mx-1">5.0 (2 Penilaian)</p>
                            </div>
                            <div className="flex gap-4 my-1">
                                <div className="flex gap-1 items-center">
                                    <Bath className="font-bold text-lg"/>
                                    <p className="text-xs font-bold">3</p>
                                </div>
                                <div className="flex gap-1 items-center">
                                    <Sofa className="font-bold text-lg"/>
                                    <p className="text-xs font-bold">5</p>
                                </div>
                                <div className="flex gap-1 items-center">
                                    <SurfaceArea className="font-bold"/>
                                    <p className="text-xs font-bold">120m</p>
                                </div>
                            </div>
                            <div className="flex my-5 gap-4">
                                <a className="w-[100px] h-[30px] bg-black rounded-md text-sm text-white flex justify-center items-center" href="">
                                    Kirim Pesan
                                </a>
                                <a className="flex w-[32px] h-[32px] bg-black justify-center items-center rounded-full">
                                    <Cart className="text-[20px] text-white"/>
                                </a>
                            </div>
                        </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="flex justify-center">
                        <div className="relative w-[180px] h-[230px] rounded-3xl shadow-lg">
                            <Image src={ImageRec1.src} fill alt="ImageRec1" className="rounded-3xl shadow-lg" quality={100}/>
                        </div>
                        <div className="w-[173px] h-[160px] relative rounded-3xl -ml-8 bg-white px-3 py-2 shadow-lg">
                            <p className=" text-[#999191] font-semibold text-sm">Dipatiukur</p>
                            <div className="flex">
                                <p className="text-sm font-semibold text-primary">Rp. 60.000.000/</p>
                                <p className="text-xs font-semibold self-center">tahun</p>
                            </div>
                            <div className="flex my-1">
                                <Star className="text-xs"/>
                                <Star className="text-xs"/>
                                <Star className="text-xs"/>
                                <Star className="text-xs"/>
                                <Star className="text-xs"/>
                                <p className="text-[10px] text-gray-400 mx-1">5.0 (2 Penilaian)</p>
                            </div>
                            <div className="flex gap-4 my-1">
                                <div className="flex gap-1 items-center">
                                    <Bath className="font-bold text-lg"/>
                                    <p className="text-xs font-bold">3</p>
                                </div>
                                <div className="flex gap-1 items-center">
                                    <Sofa className="font-bold text-lg"/>
                                    <p className="text-xs font-bold">5</p>
                                </div>
                                <div className="flex gap-1 items-center">
                                    <SurfaceArea className="font-bold"/>
                                    <p className="text-xs font-bold">120m</p>
                                </div>
                            </div>
                            <div className="flex my-5 gap-4">
                                <a className="w-[100px] h-[30px] bg-black rounded-md text-sm text-white flex justify-center items-center" href="">
                                    Kirim Pesan
                                </a>
                                <a className="flex w-[32px] h-[32px] bg-black justify-center items-center rounded-full">
                                    <Cart className="text-[20px] text-white"/>
                                </a>
                            </div>
                        </div>
                    </div>
                    </SwiperSlide>
                </Swiper>
                
                <div className="w-full flex justify-center mt-10">
                    <a href="" className={styles.recommendation_all}>Lihat Semua</a>
                </div>
            </div>
            <div className="flex justify-center font-semibold">
                <h1>Kata Mereka Tentang Livin</h1>
                <h1 className="text-primary">Kost</h1>
            </div>
            <div className="grid grid-cols-3 my-10 gap-5">
                <div className="grid grid-cols-3 gap-5">
                    <div className="col-span-2">
                        <p className="text-sm text-justify">Sangat bagus. dengan website ini saya dapat menemukan kontrakan dengan mudah. Ini sangat berguna bagi mahasiswa perantau seperti saya. caranya mudah tinggal klik kolom pencarian dan cari kontrakan yang kita inginkan.</p>
                        <p className="font-semibold mt-8">Andi Soleh</p>
                        <p className="text-primary font-semibold">Mahasiswa Universitas Padjajaran</p>
                    </div>
                    <div className="flex items-center gap-5">
                        <Image src={ImagePerson1.src} width={100} height={ImagePerson1.height} quality={100} alt="Person-1" className="rounded-[100px]"/>
                        <LineSplit className="text-[200px]"/>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-5">
                    <div className="col-span-2">
                        <p className="text-sm text-justify">Bantu aku bangetttt, bulan kemaren aku nyari kontrakan yang sesuai sama dompet aku udah nyari di berbagai platform tapi gaada yang aku mau. Dan akhirnya nemu niii website dan langsung nemu banyak banget pilihan rumah kontrakan yang sesuai pilihan aku, thank u livinkost semoga makin sukses!!!!</p>
                        <p className="font-semibold mt-8">Andi Soleh</p>
                        <p className="text-primary font-semibold">Mahasiswa Universitas Padjajaran</p>
                    </div>
                    <div className="flex items-center gap-5">
                        <Image src={ImagePerson2.src} width={100} height={ImagePerson2.height} quality={100} alt="Person-1" className="rounded-[120px]"/>
                        <LineSplit className="text-[200px]"/>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-5">
                    <div className="col-span-2">
                        <p className="text-sm text-justify">Sangat bagus. dengan website ini saya dapat menemukan kontrakan dengan mudah. Ini sangat berguna bagi mahasiswa perantau seperti saya. caranya mudah tinggal klik kolom pencarian dan cari kontrakan yang kita inginkan.</p>
                        <p className="font-semibold mt-8">Andi Soleh</p>
                        <p className="text-primary font-semibold">Mahasiswa Universitas Padjajaran</p>
                    </div>
                    <div className="flex items-center gap-5">
                        <Image src={ImagePerson3.src} width={100} height={ImagePerson3.height} quality={100} alt="Person-1" className="rounded-[120px]"/>
                    </div>
                </div>
            </div> 
            <div className={styles.advantages}>
                <div className="flex justify-center mb-5 font-semibold">
                    <h1>Kenapa Livin</h1>
                    <h1 className="text-primary">Kost</h1>
                    <h1>?</h1>
                </div>
                <div className="grid grid-cols-2 gap-14 mt-10">
                    <div className="grid grid-cols-6 gap-9 h-[647px]">
                        <div className="flex items-end">
                            <Image src={ImageAdvantages1.src} width={ImageAdvantages1.width} height={ImageAdvantages1.height} className="h-[80%]" alt="Image-Advantages-1"/>
                        </div>
                        <div className="flex items-end">
                            <Image src={ImageAdvantages2.src} width={ImageAdvantages2.width} height={ImageAdvantages2.height} className="h-[90%]" alt="Image-Advantages-2"/>
                        </div>
                        <div className="flex items-end">
                            <Image src={ImageAdvantages3.src} width={ImageAdvantages3.width} height={ImageAdvantages3.height} className="h-[100%]" alt="Image-Advantages-3"/>
                        </div>
                        <div className="flex items-end">
                            <Image src={ImageAdvantages4.src} width={ImageAdvantages4.width} height={ImageAdvantages4.height} className="h-[100%]" alt="Image-Advantages-4"/>
                        </div>
                        <div className="flex items-end">
                            <Image src={ImageAdvantages5.src} width={ImageAdvantages5.width} height={ImageAdvantages5.height} className="h-[90%]" alt="Image-Advantages-5"/>
                        </div>
                        <div className="flex items-end">
                            <Image src={ImageAdvantages6.src} width={ImageAdvantages6.width} height={ImageAdvantages6.height} className="h-[80%]" alt="Image-Advantages-6"/>
                        </div>
                    </div>
                    <div className="mt-5 grid grid-rows-4Custom grid-cols-4 gap-2">
                        <div className="col-span-3">
                            <h2 className="font-semibold text-primary">Fokus pada Mahasiswa</h2>
                            <p className=" mt-1 leading-7">Livinkost memiliki fokus khusus pada tempat tinggal mahasiswa. Platform kami dapat menyediakan informasi yang lebih relevan dan sesuai dengan kebutuhan mahasiswa, seperti akses ke kampus, fasilitas umum, dan keamanan lingkungan.</p>
                        </div>
                        <div className="col-span-3 col-start-2">
                            <h2 className="font-semibold text-primary">Properti Semi Furnished</h2>
                            <p className=" mt-1 leading-7">
                                Di Livinkost, kami menyediakan properti sewaan semi furnished sebagai keunggulan unik kami
                            </p>
                        </div>
                        <div className="col-span-3">
                            <h2 className="font-semibold text-primary">Keamanan dan Privasi</h2>
                            <p className=" mt-1 leading-7">
                            Keamanan data dan privasi pengguna adalah prioritas utama. Livinkost memastikan bahwa informasi pribadi pengguna aman dan tidak disalahgunakan.
                            </p>
                        </div>
                        <div className="col-span-3 col-start-2">
                            <h2 className="font-semibold text-primary">Pembaruan Real-time</h2>
                            <p className=" mt-1 leading-7">
                            Platform kami dapat memberikan pembaruan real-time tentang ketersediaan properti. Ini berarti pengguna akan selalu mendapatkan informasi terbaru tentang properti yang mereka minati.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <br></br>
            <Footer />
        </div>
    )
}

export default GuestComponents