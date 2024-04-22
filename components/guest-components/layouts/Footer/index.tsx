import { Whatsapp, Instagram, Facebook, Mail, BNI, Mandiri, BCA } from "@/components/global-components/Icons"

const Footer = () => {
    return (
        <div className="bg-black absolute w-[100%] left-0 py-10 px-24">
            <div className="font-semibold flex justify-center">
                <h1 className="text-white text-5xl">LIVIN</h1>
                <h1 className="text-primary text-5xl">KOST</h1>
            </div>
            <div className="grid grid-cols-5 grid-rows-2 py-12 gap-10">
                <div className="col-span-2">
                    <h1 className="text-primary text-center font-semibold mb-7">Alamat</h1>
                    <p className="text-white">Ged. D, Bandung Techno Park, Jl. Telekomunikasi - Bandung, Jawa Barat 40257</p>
                </div>
                <div className="row-span-2">
                    <h1 className="text-primary text-center font-semibold mb-7">Layanan Kami</h1>
                    <p className="text-white mb-2">Sewa Rumah Kontrakan</p>
                    <p className="text-white mb-2">Sewa Kamar Kost</p>
                    <p className="text-white mb-2">Sewa Apartment</p>
                    <p className="text-white mb-2">Livin Mates</p>
                    <p className="text-white mb-2">Livin Clean</p>
                    <p className="text-white mb-2">Livin Box</p>
                    <p className="text-white mb-2">Livin Laundry</p>
                    <p className="text-white mb-2">Livin Fix</p>
                </div>
                <div className="row-span-2">
                    <h1 className="text-primary text-center font-semibold mb-7">Informasi</h1>
                    <p className="text-white mb-2">Tentang Kami</p>
                    <p className="text-white mb-2">Daftar Menjadi Pemilik</p>
                    <p className="text-white mb-2">Pusat Bantuan</p>
                    <p className="text-white mb-2">Kritik & Saran</p>
                </div>
                <div className="row-span-2">
                    <h1 className="text-primary text-center font-semibold mb-7">Kebijakan</h1>
                    <p className="text-white mb-2">Kebijakan Privasi</p>
                    <p className="text-white mb-2">Syarat & Ketentuan</p>
                </div>
                <div className="col-span-2">
                    <h1 className="text-primary text-center font-semibold mb-7">Hubungi Kami</h1>
                    <div className="flex mb-2">
                        <Mail className="self-center text-3xl"/>
                        <p className="text-white ml-3 self-center">livinkost@gmail.com</p>
                    </div>
                    <div className="flex">
                        <Whatsapp className="self-center text-3xl"/>
                        <p className="text-white ml-3 self-center">088706355120</p>
                    </div>
                </div>
            </div>
            <div className="w-full h-[3px] bg-[#605A5A] my-5"></div>
            <div className="flex justify-between">
                <div>
                    <p className="text-white">Dukung Kami:</p>
                    <div className="flex gap-3 my-3">
                        <Facebook  className="text-[40px] self-center"/>
                        <Instagram className="text-[48px] self-center"/>
                    </div>
                </div>
                <div>
                    <p className="text-white">Pembayaran Yang Didukung:</p>
                    <div className="flex gap-5 my-3">
                        <div className="bg-white w-[90px] flex justify-center items-center rounded-[4px]">
                            <BNI className="text-6xl"/>
                        </div>
                        <div className="bg-white w-[90px] flex justify-center items-center rounded-[4px]">
                            <BCA  className="text-6xl"/>
                        </div>
                        <div className="bg-white w-[90px] flex justify-center items-center rounded-[4px]">
                            <Mandiri  className="text-6xl"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer