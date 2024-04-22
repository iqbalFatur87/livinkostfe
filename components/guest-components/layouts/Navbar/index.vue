<template>
    <nav class="h-[63px] rounded-[30px] bg-white opacity-80 justify-between flex justify-items-center items-center">
        <div>
            <ul class="flex">
                <li class="px-2">
                    <img :src="logoSrc" :alt="'LivinKost Logo'" :width="logoWidth" :height="logoHeight"
                        class="h-auto w-[100px]" />
                </li>
                <li class="px-2 text-[32px] flex items-center font-bold">
                    <p>LIVIN</p>
                    <p class="text-primary">KOST</p>
                </li>
            </ul>
        </div>
        <div>
            <ul class="flex items-center">
                <li class="px-7 text-primary font-bold">Beranda</li>
                <li class="px-7 font-bold">Pesan</li>
                <li class="px-7 font-bold">Pusat Bantuan</li>
                <li class="px-7">
                    <Cart class="text-3xl" />
                </li>
                <li class="px-7 font-bold">
                    <button class="border-black border rounded-2xl w-20 h-8">Masuk</button>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
import Logo from '@/components/imgs/logo.png';
import { Cart } from '@/components/global-components/Icons';

export default {
    components: {
        Cart,
    },
    data() {
        return {
            logoSrc: Logo.src,
            logoWidth: Logo.width,
            logoHeight: Logo.height,
        };
    },
};
</script>