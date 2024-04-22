<template>
  <div>
    <div class="bg-black absolute w-[100%] left-0 py-10 px-24">
      <div class="font-semibold flex justify-center">
        <h1 class="text-white text-5xl">LIVIN</h1>
        <h1 class="text-primary text-5xl">KOST</h1>
      </div>
      <div class="grid grid-cols-5 grid-rows-2 py-12 gap-10">
        <div class="col-span-2">
          <h1 class="text-primary text-center font-semibold mb-7">Alamat</h1>
          <p class="text-white">Ged. D, Bandung Techno Park, Jl. Telekomunikasi - Bandung, Jawa Barat 40257</p>
        </div>
        <div class="row-span-2">
          <h1 class="text-primary text-center font-semibold mb-7">Layanan Kami</h1>
          <p class="text-white mb-2">Sewa Rumah Kontrakan</p>
          <p class="text-white mb-2">Sewa Kamar Kost</p>
          <p class="text-white mb-2">Sewa Apartment</p>
          <p class="text-white mb-2">Livin Mates</p>
          <p class="text-white mb-2">Livin Clean</p>
          <p class="text-white mb-2">Livin Box</p>
          <p class="text-white mb-2">Livin Laundry</p>
          <p class="text-white mb-2">Livin Fix</p>
        </div>
        <div class="row-span-2">
          <h1 class="text-primary text-center font-semibold mb-7">Informasi</h1>
          <p class="text-white mb-2">Tentang Kami</p>
          <p class="text-white mb-2">Daftar Menjadi Pemilik</p>
          <p class="text-white mb-2">Pusat Bantuan</p>
          <p class="text-white mb-2">Kritik & Saran</p>
        </div>
        <div class="row-span-2">
          <h1 class="text-primary text-center font-semibold mb-7">Kebijakan</h1>
          <p class="text-white mb-2">Kebijakan Privasi</p>
          <p class="text-white mb-2">Syarat & Ketentuan</p>
        </div>
        <div class="col-span-2">
          <h1 class="text-primary text-center font-semibold mb-7">Hubungi Kami</h1>
          <div class="flex mb-2">
            <Mail class="self-center text-3xl" />
            <p class="text-white ml-3 self-center">livinkost@gmail.com</p>
          </div>
          <div class="flex">
            <Whatsapp class="self-center text-3xl" />
            <p class="text-white ml-3 self-center">088706355120</p>
          </div>
        </div>
      </div>
      <div class="w-full h-[3px] bg-[#605A5A] my-5"></div>
      <div class="flex justify-between">
        <div>
          <p class="text-white">Dukung Kami:</p>
          <div class="flex gap-3 my-3">
            <Facebook class="text-[40px] self-center" />
            <Instagram class="text-[48px] self-center" />
          </div>
        </div>
        <div>
          <p class="text-white">Pembayaran Yang Didukung:</p>
          <div class="flex gap-5 my-3">
            <div class="bg-white w-[90px] flex justify-center items-center rounded-[4px]">
              <BNI class="text-6xl" />
            </div>
            <div class="bg-white w-[90px] flex justify-center items-center rounded-[4px]">
              <BCA class="text-6xl" />
            </div>
            <div class="bg-white w-[90px] flex justify-center items-center rounded-[4px]">
              <Mandiri class="text-6xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Whatsapp, Instagram, Facebook, Mail, BNI, Mandiri, BCA } from "@/components/global-components/Icons";

export default {
  components: {
    Whatsapp,
    Instagram,
    Facebook,
    Mail,
    BNI,
    Mandiri,
    BCA,
  },
};

</script>

<style></style>