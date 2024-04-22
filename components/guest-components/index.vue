<template>
    <div class="5xl:container px-24">
        <div class="py-5">
            <Image src={Homepage.src} width={0} height={0} sizes="100vw" alt="Homepage-Image"
                class="h-[622px] w-[100%] absolute top-0 left-0 object-cover" quality={100} priority={true} />
            <Navbar />
            <div class="grid grid-rows-5Custom grid-flow-col grid-cols-2 text-white my-10 gap-2 z-20 relative">
                <p class="font-bold text-5xl w-[60%] mt-10 leading-normal">Selamat Datang di LivinKost</p>
                <p :class="PoppinsCustom.class + ' font-light mt-6 text-2xl leading-normal tracking-[0.0075rem]'">
                    Temukan sewa properti terjangkau di dekat kampus Kamu bersama Livinkost.
                </p>
                <p :class="PoppinsCustom.class + ' text-2xl leading-normal tracking-[0.0075rem]'">
                    Pesan sekarang dan nikmati semua layanan Kami tanpa ribet.
                </p>
                <div class="rounded-[30px] w-[507px] h-[46px] bg-white mt-10 px-5 items-center flex">
                    <Map class="text-3xl" />
                    <input
                        class="placeholder:text-slate-400 block bg-white mx-5 focus:outline-none text-black w-[320px]"
                        placeholder="Cari dengan lokasi/kampus" type="text" name="search" />
                    <Search class="mx-1 text-4xl" />
                    <Divider class="mx-1 text-4xl" />
                    <Close class="mx-1 text-2xl" />
                </div>
                <div class="mt-28 grid grid-cols-4 gap-2">
                    <div class={styles.cardIcon}>
                        <Image src={IconHome.src} height={IconHome.height} width={IconHome.width} alt="Icon-Home"
                            class="w-[109px] h-[69px]" />
                        <h1 class={styles.title}>500+</h1>
                        <p class={styles.subTitle}>Properti</p>
                    </div>
                    <div class={styles.cardIcon}>
                        <Image src={IconPhone.src} alt="Icon-Phone" width={IconPhone.width} height={IconPhone.height}
                            class="w-[75px] h-[75px]" />
                        <h1 class={styles.title}>100+</h1>
                        <p class={styles.subTitle}>Transaksi</p>
                    </div>
                    <div class={styles.cardIcon}>
                        <Image src={IconHands.src} alt="Icon-Hands" width={IconHands.width} height={IconHands.height}
                            class="w-[105px] h-[65px]" />
                        <h1 class={styles.title}>50+</h1>
                        <p class={styles.subTitle}>Partner</p>
                    </div>
                    <div class={styles.cardIcon}>
                        <Image src={IconDiscount.src} alt="Icon-Discount" width={IconDiscount.width}
                            height={IconDiscount.height} class="w-[79px] h-[78px]" />
                        <h1 class={styles.title}>20+</h1>
                        <p class={styles.subTitle}>Promo</p>
                    </div>
                </div>
                <div class="flex justify-end row-span-5">
                    <div class="bg-imgWelcome rounded-t-[320px] p-4 h-[578px]">
                        <Image src={ImgWelcome.src} width={503} height={ImgWelcome.height} alt="Image"
                            class=" rounded-t-[302px] rounded-b-[50px] h-[780px] shadow-[20px_20px_15px_0px_rgba(0,0,0,0.15)] bg-cover " />
                    </div>
                </div>
            </div>
        </div>
        <div class="mt-28">
            <h1 class="font-semibold leading-normal text-center mb-5">Apa yang kamu cari?</h1>
            <div class="grid grid-cols-3 gap-20">
                <div class="w-full flex justify-center">
                    <div class={styles.cardFeatures}>
                        <div class={styles.features}>
                            <Image src={ImageRentedHouse.src} fill alt="Image Rented House"
                                class="rounded-[200px_200px_50px_50px] bg-cover z-0" />
                            <div class={styles.overlay}>
                            </div>
                            <div class={styles.body}>
                                <h1 class={styles.title}>Rumah Kontrakan</h1>
                                <p class={styles.description}>Livinkost adalah pilihan cerdas bagi mahasiswa yang
                                    mencari rumah kontrakan terjangkau tanpa mengorbankan kualitas. Cari kontrakan Anda
                                    sekarang!</p>
                            </div>
                        </div>
                        <div class={styles.footer}>
                            <a class={styles.content} href="">Telusuri</a>
                        </div>
                    </div>
                </div>
                <div class="w-full flex justify-center">
                    <div class={styles.cardFeatures}>
                        <div class={styles.features}>
                            <Image src={ImageBoardingHouse.src} fill alt="Image Boarding House"
                                class="rounded-[200px_200px_50px_50px] bg-cover z-0" />
                            <div class={styles.overlay}>
                            </div>
                            <div class={styles.body}>
                                <h1 class={styles.title}>Kamar Kost</h1>
                                <p class={styles.description}>Temukan kamar kost impian Anda dengan harga yang
                                    sesuai di Livinkost. Kami menyediakan lokasi yang ideal untuk kehidupan kuliah Anda.
                                </p>
                            </div>
                        </div>
                        <div class={styles.footer}>
                            <a class={styles.content} href="">Telusuri</a>
                        </div>
                    </div>
                </div>
                <div class="w-full flex justify-center">
                    <div class={styles.cardFeatures}>
                        <div class={styles.features}>
                            <Image src={ImageApartment.src} fill alt="Image Apartment"
                                class="rounded-[200px_200px_50px_50px] bg-cover z-0" />
                            <div class={styles.overlay}>
                            </div>
                            <div class={styles.body}>
                                <h1 class={styles.title}>Apartment</h1>
                                <p class={styles.description}>Menemukan tempat tinggal yang nyaman adalah langkah
                                    pertama menuju sukses akademis. Ayo telusuri Apartemen yang sesuai dengan
                                    keinginanmu di Livinkost!</p>
                            </div>
                        </div>
                        <div class={styles.footer}>
                            <a class={styles.content} href="">Telusuri</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class=" mt-20 flex justify-center">
            <div class={styles.cardLivinMates}>
                <div class="grid grid-cols-4 grid-flow-row-dense h-full">
                    <div class="col-span-3 mt-8 flex font-semibold">
                        <h1>Temukan Teman Satu Kontrakan yang Tepat dengan Livin</h1>
                        <h1 class="text-primary">Mates</h1>
                        <h1>!</h1>
                    </div>
                    <p class="col-span-3 -mt-3">LivinMates membantu Anda menemukan teman sekontrakan yang sesuai
                        dengan minat dan gaya hidup Anda.</p>
                    <div class="w-full justify-center flex items-end row-span-2">
                        <div
                            class="w-[139px] h-[93%] rounded-[100px_100px_0px_0px] bg-[#C58E24] flex items-end justify-center">
                            <Image src={IconLivinMates.src} height={IconLivinMates.height} width={IconLivinMates.width}
                                alt="Icon LivinMates" quality={100} class="h-[177px] w-[110px]" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="mt-20">
            <h1 class="text-center font-semibold">Jelajahi Kampus Anda</h1>
            <div class="flex justify-center my-8">
                <div class="w-[80%]">
                    <div class={styles.campusList}>
                        <div class="px-3">
                            <div class="grid grid-cols-10">
                                <div class="w-full flex justify-center col-start-2 col-span-4">
                                    <Image src={ImageTelkom.src} height={149} width={118} alt="Telkom-University"
                                        class="row-span-2" />
                                </div>
                                <div class="col-span-5 row-span-2 items-center flex">
                                    <div class="gap-2 grid">
                                        <p class=" font-semibold">Telkom University</p>
                                        <p class=" text-gray-500">Bojongsoang</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="px-3">
                            <div class="grid grid-cols-10">
                                <div class="w-full flex justify-center col-start-2 col-span-4">
                                    <Image src={ImagePadjajaran.src} height={152} width={140}
                                        alt="Universitas-Padjajaran" class="row-span-2" />
                                </div>
                                <div class="col-span-5 row-span-2 items-center flex">
                                    <div class="gap-2 grid">
                                        <p class=" font-semibold">Universitas Padjajaran</p>
                                        <p class=" text-gray-500">Jatinangor</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="px-3">
                            <div class="grid grid-cols-10">
                                <div class="w-full flex justify-center col-start-2 col-span-4">
                                    <Image src={ImagePasundan.src} height={170} width={300} alt="Universitas-Pasundan"
                                        class="row-span-2" />
                                </div>
                                <div class="col-span-5 row-span-2 items-center flex">
                                    <div class="gap-2 grid">
                                        <p class=" font-semibold">Universitas Pasundan</p>
                                        <p class=" text-gray-500">Lengkong Besar</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="px-3">
                            <div class="grid grid-cols-10">
                                <div class="w-full flex justify-center col-start-2 col-span-4">
                                    <Image src={ImageWidyatama.src} height={152} width={120} alt="Universitas Widyatama"
                                        class="row-span-2" />
                                </div>
                                <div class="col-span-5 row-span-2 items-center flex">
                                    <div class="gap-2 grid">
                                        <p class=" font-semibold">Widyatama</p>
                                        <p class=" text-gray-500">Cikutra</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="px-3">
                            <div class="grid grid-cols-10">
                                <div class="w-full flex justify-center col-start-2 col-span-4">
                                    <Image src={ImageMaranatha.src} height={149} width={120} alt="Universitas Maranatha"
                                        class="row-span-2" />
                                </div>
                                <div class="col-span-5 row-span-2 items-center flex">
                                    <div class="gap-2 grid">
                                        <p class=" font-semibold">Universitas Maranatha</p>
                                        <p class=" text-gray-500">Lengkong Besar</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="px-3">
                            <div class="grid grid-cols-10">
                                <div class="w-full flex justify-center col-start-2 col-span-4">
                                    <Image src={ImageUnivComputer.src} height={144} width={120}
                                        alt="Universitas Komputer" class="row-span-2" />
                                </div>
                                <div class="col-span-5 row-span-2 items-center flex">
                                    <div class="gap-2 grid">
                                        <p class=" font-semibold">Telkom University</p>
                                        <p class=" text-gray-500">Bojongsoang</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex justify-center">
                <a href="" class="bg-black text-white px-6 py-2 rounded-2xl flex justify-center items-center">Lihat
                    Semua kategori</a>
            </div>
        </div>
        <div class="my-20">
            <div class="w-full flex justify-center font-semibold my-10">
                <h1>Rekomendasi Livin</h1>
                <h1 class="text-primary">Kost</h1>
            </div>
            {/* <div class="grid grid-cols-4 justify-center">
                <div class="flex justify-center">
                    <div class="relative w-[180px] h-[230px]">
                        <Image src={ImageRec1.src} fill alt="ImageRec1" class="rounded-3xl shadow-2xl" quality={100} />
                    </div>
                    <div class="w-[173px] h-[160px] relative rounded-3xl -ml-8 bg-white px-3 py-2 shadow-2xl">
                        <p class=" text-[#999191] font-semibold text-sm">Dipatiukur</p>
                        <div class="flex">
                            <p class="text-sm font-semibold text-primary">Rp. 60.000.000/</p>
                            <p class="text-xs font-semibold self-center">tahun</p>
                        </div>
                        <div class="flex my-1">
                            <Star class="text-xs" />
                            <Star class="text-xs" />
                            <Star class="text-xs" />
                            <Star class="text-xs" />
                            <Star class="text-xs" />
                            <p class="text-[10px] text-gray-400 mx-1">5.0 (2 Penilaian)</p>
                        </div>
                        <div class="flex gap-4 my-1">
                            <div class="flex gap-1 items-center">
                                <Bath class="font-bold text-lg" />
                                <p class="text-xs font-bold">3</p>
                            </div>
                            <div class="flex gap-1 items-center">
                                <Sofa class="font-bold text-lg" />
                                <p class="text-xs font-bold">5</p>
                            </div>
                            <div class="flex gap-1 items-center">
                                <SurfaceArea class="font-bold" />
                                <p class="text-xs font-bold">120m</p>
                            </div>
                        </div>
                        <div class="flex my-5 gap-4">
                            <a class="w-[100px] h-[30px] bg-black rounded-md text-sm text-white flex justify-center items-center"
                                href="">
                                Kirim Pesan
                            </a>
                            <a class="flex w-[32px] h-[32px] bg-black justify-center items-center rounded-full">
                                <Cart class="text-[20px] text-white" />
                            </a>
                        </div>
                    </div>
                </div>
                <div class="flex justify-center">
                    <div class="relative w-[180px] h-[230px]">
                        <Image src={ImageRec1.src} fill alt="ImageRec1" class="rounded-3xl shadow-2xl" quality={100} />
                    </div>
                    <div class="w-[173px] h-[160px] relative rounded-3xl -ml-8 bg-white px-3 py-2 shadow-2xl">
                        <p class=" text-[#999191] font-semibold text-sm">Dipatiukur</p>
                        <div class="flex">
                            <p class="text-sm font-semibold text-primary">Rp. 60.000.000/</p>
                            <p class="text-xs font-semibold self-center">tahun</p>
                        </div>
                        <div class="flex my-1">
                            <Star class="text-xs" />
                            <Star class="text-xs" />
                            <Star class="text-xs" />
                            <Star class="text-xs" />
                            <Star class="text-xs" />
                            <p class="text-[10px] text-gray-400 mx-1">5.0 (2 Penilaian)</p>
                        </div>
                        <div class="flex gap-4 my-1">
                            <div class="flex gap-1 items-center">
                                <Bath class="font-bold text-lg" />
                                <p class="text-xs font-bold">3</p>
                            </div>
                            <div class="flex gap-1 items-center">
                                <Sofa class="font-bold text-lg" />
                                <p class="text-xs font-bold">5</p>
                            </div>
                            <div class="flex gap-1 items-center">
                                <SurfaceArea class="font-bold" />
                                <p class="text-xs font-bold">120m</p>
                            </div>
                        </div>
                        <div class="flex my-5 gap-4">
                            <a class="w-[100px] h-[30px] bg-black rounded-md text-sm text-white flex justify-center items-center"
                                href="">
                                Kirim Pesan
                            </a>
                            <a class="flex w-[32px] h-[32px] bg-black justify-center items-center rounded-full">
                                <Cart class="text-[20px] text-white" />
                            </a>
                        </div>
                    </div>
                </div>
                <div class="flex justify-center">
                    <div class="relative w-[180px] h-[230px]">
                        <Image src={ImageRec1.src} fill alt="ImageRec1" class="rounded-3xl shadow-2xl" quality={100} />
                    </div>
                    <div class="w-[173px] h-[160px] relative rounded-3xl -ml-8 bg-white px-3 py-2 shadow-2xl">
                        <p class=" text-[#999191] font-semibold text-sm">Dipatiukur</p>
                        <div class="flex">
                            <p class="text-sm font-semibold text-primary">Rp. 60.000.000/</p>
                            <p class="text-xs font-semibold self-center">tahun</p>
                        </div>
                        <div class="flex my-1">
                            <Star class="text-xs" />
                            <Star class="text-xs" />
                            <Star class="text-xs" />
                            <Star class="text-xs" />
                            <Star class="text-xs" />
                            <p class="text-[10px] text-gray-400 mx-1">5.0 (2 Penilaian)</p>
                        </div>
                        <div class="flex gap-4 my-1">
                            <div class="flex gap-1 items-center">
                                <Bath class="font-bold text-lg" />
                                <p class="text-xs font-bold">3</p>
                            </div>
                            <div class="flex gap-1 items-center">
                                <Sofa class="font-bold text-lg" />
                                <p class="text-xs font-bold">5</p>
                            </div>
                            <div class="flex gap-1 items-center">
                                <SurfaceArea class="font-bold" />
                                <p class="text-xs font-bold">120m</p>
                            </div>
                        </div>
                        <div class="flex my-5 gap-4">
                            <a class="w-[100px] h-[30px] bg-black rounded-md text-sm text-white flex justify-center items-center"
                                href="">
                                Kirim Pesan
                            </a>
                            <a class="flex w-[32px] h-[32px] bg-black justify-center items-center rounded-full">
                                <Cart class="text-[20px] text-white" />
                            </a>
                        </div>
                    </div>
                </div>
                <div class="flex justify-center">
                    <div class="relative w-[180px] h-[230px]">
                        <Image src={ImageRec1.src} fill alt="ImageRec1" class="rounded-3xl shadow-2xl" quality={100} />
                    </div>
                    <div class="w-[173px] h-[160px] relative rounded-3xl -ml-8 bg-white px-3 py-2 shadow-2xl">
                        <p class=" text-[#999191] font-semibold text-sm">Dipatiukur</p>
                        <div class="flex">
                            <p class="text-sm font-semibold text-primary">Rp. 60.000.000/</p>
                            <p class="text-xs font-semibold self-center">tahun</p>
                        </div>
                        <div class="flex my-1">
                            <Star class="text-xs" />
                            <Star class="text-xs" />
                            <Star class="text-xs" />
                            <Star class="text-xs" />
                            <Star class="text-xs" />
                            <p class="text-[10px] text-gray-400 mx-1">5.0 (2 Penilaian)</p>
                        </div>
                        <div class="flex gap-4 my-1">
                            <div class="flex gap-1 items-center">
                                <Bath class="font-bold text-lg" />
                                <p class="text-xs font-bold">3</p>
                            </div>
                            <div class="flex gap-1 items-center">
                                <Sofa class="font-bold text-lg" />
                                <p class="text-xs font-bold">5</p>
                            </div>
                            <div class="flex gap-1 items-center">
                                <SurfaceArea class="font-bold" />
                                <p class="text-xs font-bold">120m</p>
                            </div>
                        </div>
                        <div class="flex my-5 gap-4">
                            <a class="w-[100px] h-[30px] bg-black rounded-md text-sm text-white flex justify-center items-center"
                                href="">
                                Kirim Pesan
                            </a>
                            <a class="flex w-[32px] h-[32px] bg-black justify-center items-center rounded-full">
                                <Cart class="text-[20px] text-white" />
                            </a>
                        </div>
                    </div>
                </div>
            </div> */}
            <Swiper modules={[Navigation]} slidesPerView={3} navigation>
                <SwiperSlide>
                    <div class="flex justify-center">
                        <div class="relative w-[180px] h-[230px] rounded-3xl shadow-lg">
                            <Image src={ImageRec1.src} fill alt="ImageRec1" class="rounded-3xl shadow-lg"
                                quality={100} />
                        </div>
                        <div class="w-[173px] h-[160px] relative rounded-3xl -ml-8 bg-white px-3 py-2 shadow-lg">
                            <p class=" text-[#999191] font-semibold text-sm">Dipatiukur</p>
                            <div class="flex">
                                <p class="text-sm font-semibold text-primary">Rp. 60.000.000/</p>
                                <p class="text-xs font-semibold self-center">tahun</p>
                            </div>
                            <div class="flex my-1">
                                <Star class="text-xs" />
                                <Star class="text-xs" />
                                <Star class="text-xs" />
                                <Star class="text-xs" />
                                <Star class="text-xs" />
                                <p class="text-[10px] text-gray-400 mx-1">5.0 (2 Penilaian)</p>
                            </div>
                            <div class="flex gap-4 my-1">
                                <div class="flex gap-1 items-center">
                                    <Bath class="font-bold text-lg" />
                                    <p class="text-xs font-bold">3</p>
                                </div>
                                <div class="flex gap-1 items-center">
                                    <Sofa class="font-bold text-lg" />
                                    <p class="text-xs font-bold">5</p>
                                </div>
                                <div class="flex gap-1 items-center">
                                    <SurfaceArea class="font-bold" />
                                    <p class="text-xs font-bold">120m</p>
                                </div>
                            </div>
                            <div class="flex my-5 gap-4">
                                <a class="w-[100px] h-[30px] bg-black rounded-md text-sm text-white flex justify-center items-center"
                                    href="">
                                    Kirim Pesan
                                </a>
                                <a class="flex w-[32px] h-[32px] bg-black justify-center items-center rounded-full">
                                    <Cart class="text-[20px] text-white" />
                                </a>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="flex justify-center">
                        <div class="relative w-[180px] h-[230px] rounded-3xl shadow-lg">
                            <Image src={ImageRec1.src} fill alt="ImageRec1" class="rounded-3xl shadow-lg"
                                quality={100} />
                        </div>
                        <div class="w-[173px] h-[160px] relative rounded-3xl -ml-8 bg-white px-3 py-2 shadow-lg">
                            <p class=" text-[#999191] font-semibold text-sm">Dipatiukur</p>
                            <div class="flex">
                                <p class="text-sm font-semibold text-primary">Rp. 60.000.000/</p>
                                <p class="text-xs font-semibold self-center">tahun</p>
                            </div>
                            <div class="flex my-1">
                                <Star class="text-xs" />
                                <Star class="text-xs" />
                                <Star class="text-xs" />
                                <Star class="text-xs" />
                                <Star class="text-xs" />
                                <p class="text-[10px] text-gray-400 mx-1">5.0 (2 Penilaian)</p>
                            </div>
                            <div class="flex gap-4 my-1">
                                <div class="flex gap-1 items-center">
                                    <Bath class="font-bold text-lg" />
                                    <p class="text-xs font-bold">3</p>
                                </div>
                                <div class="flex gap-1 items-center">
                                    <Sofa class="font-bold text-lg" />
                                    <p class="text-xs font-bold">5</p>
                                </div>
                                <div class="flex gap-1 items-center">
                                    <SurfaceArea class="font-bold" />
                                    <p class="text-xs font-bold">120m</p>
                                </div>
                            </div>
                            <div class="flex my-5 gap-4">
                                <a class="w-[100px] h-[30px] bg-black rounded-md text-sm text-white flex justify-center items-center"
                                    href="">
                                    Kirim Pesan
                                </a>
                                <a class="flex w-[32px] h-[32px] bg-black justify-center items-center rounded-full">
                                    <Cart class="text-[20px] text-white" />
                                </a>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="flex justify-center">
                        <div class="relative w-[180px] h-[230px] rounded-3xl shadow-lg">
                            <Image src={ImageRec1.src} fill alt="ImageRec1" class="rounded-3xl shadow-lg"
                                quality={100} />
                        </div>
                        <div class="w-[173px] h-[160px] relative rounded-3xl -ml-8 bg-white px-3 py-2 shadow-lg">
                            <p class=" text-[#999191] font-semibold text-sm">Dipatiukur</p>
                            <div class="flex">
                                <p class="text-sm font-semibold text-primary">Rp. 60.000.000/</p>
                                <p class="text-xs font-semibold self-center">tahun</p>
                            </div>
                            <div class="flex my-1">
                                <Star class="text-xs" />
                                <Star class="text-xs" />
                                <Star class="text-xs" />
                                <Star class="text-xs" />
                                <Star class="text-xs" />
                                <p class="text-[10px] text-gray-400 mx-1">5.0 (2 Penilaian)</p>
                            </div>
                            <div class="flex gap-4 my-1">
                                <div class="flex gap-1 items-center">
                                    <Bath class="font-bold text-lg" />
                                    <p class="text-xs font-bold">3</p>
                                </div>
                                <div class="flex gap-1 items-center">
                                    <Sofa class="font-bold text-lg" />
                                    <p class="text-xs font-bold">5</p>
                                </div>
                                <div class="flex gap-1 items-center">
                                    <SurfaceArea class="font-bold" />
                                    <p class="text-xs font-bold">120m</p>
                                </div>
                            </div>
                            <div class="flex my-5 gap-4">
                                <a class="w-[100px] h-[30px] bg-black rounded-md text-sm text-white flex justify-center items-center"
                                    href="">
                                    Kirim Pesan
                                </a>
                                <a class="flex w-[32px] h-[32px] bg-black justify-center items-center rounded-full">
                                    <Cart class="text-[20px] text-white" />
                                </a>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="flex justify-center">
                        <div class="relative w-[180px] h-[230px] rounded-3xl shadow-lg">
                            <Image src={ImageRec1.src} fill alt="ImageRec1" class="rounded-3xl shadow-lg"
                                quality={100} />
                        </div>
                        <div class="w-[173px] h-[160px] relative rounded-3xl -ml-8 bg-white px-3 py-2 shadow-lg">
                            <p class=" text-[#999191] font-semibold text-sm">Dipatiukur</p>
                            <div class="flex">
                                <p class="text-sm font-semibold text-primary">Rp. 60.000.000/</p>
                                <p class="text-xs font-semibold self-center">tahun</p>
                            </div>
                            <div class="flex my-1">
                                <Star class="text-xs" />
                                <Star class="text-xs" />
                                <Star class="text-xs" />
                                <Star class="text-xs" />
                                <Star class="text-xs" />
                                <p class="text-[10px] text-gray-400 mx-1">5.0 (2 Penilaian)</p>
                            </div>
                            <div class="flex gap-4 my-1">
                                <div class="flex gap-1 items-center">
                                    <Bath class="font-bold text-lg" />
                                    <p class="text-xs font-bold">3</p>
                                </div>
                                <div class="flex gap-1 items-center">
                                    <Sofa class="font-bold text-lg" />
                                    <p class="text-xs font-bold">5</p>
                                </div>
                                <div class="flex gap-1 items-center">
                                    <SurfaceArea class="font-bold" />
                                    <p class="text-xs font-bold">120m</p>
                                </div>
                            </div>
                            <div class="flex my-5 gap-4">
                                <a class="w-[100px] h-[30px] bg-black rounded-md text-sm text-white flex justify-center items-center"
                                    href="">
                                    Kirim Pesan
                                </a>
                                <a class="flex w-[32px] h-[32px] bg-black justify-center items-center rounded-full">
                                    <Cart class="text-[20px] text-white" />
                                </a>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="flex justify-center">
                        <div class="relative w-[180px] h-[230px] rounded-3xl shadow-lg">
                            <Image src={ImageRec1.src} fill alt="ImageRec1" class="rounded-3xl shadow-lg"
                                quality={100} />
                        </div>
                        <div class="w-[173px] h-[160px] relative rounded-3xl -ml-8 bg-white px-3 py-2 shadow-lg">
                            <p class=" text-[#999191] font-semibold text-sm">Dipatiukur</p>
                            <div class="flex">
                                <p class="text-sm font-semibold text-primary">Rp. 60.000.000/</p>
                                <p class="text-xs font-semibold self-center">tahun</p>
                            </div>
                            <div class="flex my-1">
                                <Star class="text-xs" />
                                <Star class="text-xs" />
                                <Star class="text-xs" />
                                <Star class="text-xs" />
                                <Star class="text-xs" />
                                <p class="text-[10px] text-gray-400 mx-1">5.0 (2 Penilaian)</p>
                            </div>
                            <div class="flex gap-4 my-1">
                                <div class="flex gap-1 items-center">
                                    <Bath class="font-bold text-lg" />
                                    <p class="text-xs font-bold">3</p>
                                </div>
                                <div class="flex gap-1 items-center">
                                    <Sofa class="font-bold text-lg" />
                                    <p class="text-xs font-bold">5</p>
                                </div>
                                <div class="flex gap-1 items-center">
                                    <SurfaceArea class="font-bold" />
                                    <p class="text-xs font-bold">120m</p>
                                </div>
                            </div>
                            <div class="flex my-5 gap-4">
                                <a class="w-[100px] h-[30px] bg-black rounded-md text-sm text-white flex justify-center items-center"
                                    href="">
                                    Kirim Pesan
                                </a>
                                <a class="flex w-[32px] h-[32px] bg-black justify-center items-center rounded-full">
                                    <Cart class="text-[20px] text-white" />
                                </a>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

            <div class="w-full flex justify-center mt-10">
                <a href="" class={styles.recommendation_all}>Lihat Semua</a>
            </div>
        </div>
        <div class="flex justify-center font-semibold">
            <h1>Kata Mereka Tentang Livin</h1>
            <h1 class="text-primary">Kost</h1>
        </div>
        <div class="grid grid-cols-3 my-10 gap-5">
            <div class="grid grid-cols-3 gap-5">
                <div class="col-span-2">
                    <p class="text-sm text-justify">Sangat bagus. dengan website ini saya dapat menemukan kontrakan
                        dengan mudah. Ini sangat berguna bagi mahasiswa perantau seperti saya. caranya mudah tinggal
                        klik kolom pencarian dan cari kontrakan yang kita inginkan.</p>
                    <p class="font-semibold mt-8">Andi Soleh</p>
                    <p class="text-primary font-semibold">Mahasiswa Universitas Padjajaran</p>
                </div>
                <div class="flex items-center gap-5">
                    <Image src={ImagePerson1.src} width={100} height={ImagePerson1.height} quality={100} alt="Person-1"
                        class="rounded-[100px]" />
                    <LineSplit class="text-[200px]" />
                </div>
            </div>
            <div class="grid grid-cols-3 gap-5">
                <div class="col-span-2">
                    <p class="text-sm text-justify">Bantu aku bangetttt, bulan kemaren aku nyari kontrakan yang
                        sesuai sama dompet aku udah nyari di berbagai platform tapi gaada yang aku mau. Dan akhirnya
                        nemu niii website dan langsung nemu banyak banget pilihan rumah kontrakan yang sesuai pilihan
                        aku, thank u livinkost semoga makin sukses!!!!</p>
                    <p class="font-semibold mt-8">Andi Soleh</p>
                    <p class="text-primary font-semibold">Mahasiswa Universitas Padjajaran</p>
                </div>
                <div class="flex items-center gap-5">
                    <Image src={ImagePerson2.src} width={100} height={ImagePerson2.height} quality={100} alt="Person-1"
                        class="rounded-[120px]" />
                    <LineSplit class="text-[200px]" />
                </div>
            </div>
            <div class="grid grid-cols-3 gap-5">
                <div class="col-span-2">
                    <p class="text-sm text-justify">Sangat bagus. dengan website ini saya dapat menemukan kontrakan
                        dengan mudah. Ini sangat berguna bagi mahasiswa perantau seperti saya. caranya mudah tinggal
                        klik kolom pencarian dan cari kontrakan yang kita inginkan.</p>
                    <p class="font-semibold mt-8">Andi Soleh</p>
                    <p class="text-primary font-semibold">Mahasiswa Universitas Padjajaran</p>
                </div>
                <div class="flex items-center gap-5">
                    <Image src={ImagePerson3.src} width={100} height={ImagePerson3.height} quality={100} alt="Person-1"
                        class="rounded-[120px]" />
                </div>
            </div>
        </div>
        <div class={styles.advantages}>
            <div class="flex justify-center mb-5 font-semibold">
                <h1>Kenapa Livin</h1>
                <h1 class="text-primary">Kost</h1>
                <h1>?</h1>
            </div>
            <div class="grid grid-cols-2 gap-14 mt-10">
                <div class="grid grid-cols-6 gap-9 h-[647px]">
                    <div class="flex items-end">
                        <Image src={ImageAdvantages1.src} width={ImageAdvantages1.width}
                            height={ImageAdvantages1.height} class="h-[80%]" alt="Image-Advantages-1" />
                    </div>
                    <div class="flex items-end">
                        <Image src={ImageAdvantages2.src} width={ImageAdvantages2.width}
                            height={ImageAdvantages2.height} class="h-[90%]" alt="Image-Advantages-2" />
                    </div>
                    <div class="flex items-end">
                        <Image src={ImageAdvantages3.src} width={ImageAdvantages3.width}
                            height={ImageAdvantages3.height} class="h-[100%]" alt="Image-Advantages-3" />
                    </div>
                    <div class="flex items-end">
                        <Image src={ImageAdvantages4.src} width={ImageAdvantages4.width}
                            height={ImageAdvantages4.height} class="h-[100%]" alt="Image-Advantages-4" />
                    </div>
                    <div class="flex items-end">
                        <Image src={ImageAdvantages5.src} width={ImageAdvantages5.width}
                            height={ImageAdvantages5.height} class="h-[90%]" alt="Image-Advantages-5" />
                    </div>
                    <div class="flex items-end">
                        <Image src={ImageAdvantages6.src} width={ImageAdvantages6.width}
                            height={ImageAdvantages6.height} class="h-[80%]" alt="Image-Advantages-6" />
                    </div>
                </div>
                <div class="mt-5 grid grid-rows-4Custom grid-cols-4 gap-2">
                    <div class="col-span-3">
                        <h2 class="font-semibold text-primary">Fokus pada Mahasiswa</h2>
                        <p class=" mt-1 leading-7">Livinkost memiliki fokus khusus pada tempat tinggal mahasiswa.
                            Platform kami dapat menyediakan informasi yang lebih relevan dan sesuai dengan kebutuhan
                            mahasiswa, seperti akses ke kampus, fasilitas umum, dan keamanan lingkungan.</p>
                    </div>
                    <div class="col-span-3 col-start-2">
                        <h2 class="font-semibold text-primary">Properti Semi Furnished</h2>
                        <p class=" mt-1 leading-7">
                            Di Livinkost, kami menyediakan properti sewaan semi furnished sebagai keunggulan unik kami
                        </p>
                    </div>
                    <div class="col-span-3">
                        <h2 class="font-semibold text-primary">Keamanan dan Privasi</h2>
                        <p class=" mt-1 leading-7">
                            Keamanan data dan privasi pengguna adalah prioritas utama. Livinkost memastikan bahwa
                            informasi pribadi pengguna aman dan tidak disalahgunakan.
                        </p>
                    </div>
                    <div class="col-span-3 col-start-2">
                        <h2 class="font-semibold text-primary">Pembaruan Real-time</h2>
                        <p class=" mt-1 leading-7">
                            Platform kami dapat memberikan pembaruan real-time tentang ketersediaan properti. Ini
                            berarti pengguna akan selalu mendapatkan informasi terbaru tentang properti yang mereka
                            minati.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <br></br>
        <Footer />
    </div>
</template>

<script lang="ts" setup>
//Imports
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper';
import 'swiper/css';

//Local Image Imports
import ImgWelcome from '@/components/imgs/Homepage/img-welcome.png';
import { IconHome , IconPhone , IconHands, IconDiscount, IconLivinMates } from '@/components/imgs/icons';
import { ImageRentedHouse, ImageBoardingHouse, ImageApartment } from '@/components/imgs/Homepage';
import { ImageTelkom, ImagePasundan, ImageMaranatha, ImagePadjajan, ImageUnivComputer, ImageWidyatama } from '@/components/imgs/Homepage/Campus';
import { ImageRec1, ImageRec2, ImageRec3, ImageRec4, ImageRec5 } from '@/components/imgs/Homepage/Recom';
import { ImagePerson1 , ImagePerson2, ImagePerson3 } from '@/components/imgs/Homepage/Review';
import { ImageAdvantages1, ImageAdvantages2, ImageAdvantages3, ImageAdvantages4, ImageAdvantages5, ImageAdvantages6 } from '@/components/imgs/Homepage/Advantages';

//Components
import Navbar from '@/components/guest-components/layouts/Navbar';
import Footer from '@/components/guest-components/layouts/Footer';

//Styles
import '@/assets/styles/Guest.css'; 

export default {
    components: {
        Swiper,
        SwiperSlide,
        Navbar,
        Footer
    },

    data() {
        return {
            homepage: require('@/assets/homepage.png')
        }
    }
}
</script>

<style></style>