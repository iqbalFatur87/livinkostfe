<script lang="ts">
import Map from '../Icons/Map.svg'
import Search from '../Icons/Search.svg'
import Divider from '../Icons/Divider.svg'
import Close from '../Icons/Close.svg'
import Cart from '../Icons/Cart.svg'
import Mail from '../Icons/Mail.svg'
import Whatsapp from '../Icons/Whatsapp.svg'
import Facebook from '../Icons/Facebook.svg'
import Instagram from '../Icons/Instagram.svg'
import BNI from '../Icons/BNI.svg'
import BCA from '../Icons/BCA.svg'
import Mandiri from '../Icons/Mandiri.svg'
import Star from '../Icons/Star.svg'
import Bath from '../Icons/Bath.svg'
import Sofa from '../Icons/Sofa.svg'
import SurfaceArea from '../Icons/SurfaceArea.svg'
import LineSplit from '../Icons/LineSplit.svg'
import ArrowLeft from '../Icons/ArrowLeft.svg'
import ArrowRight from '../Icons/ArrowRight.svg'
 
export default {
   Map,
   Search,
   Divider,
   Close,
   Cart,
   Mail,
   Whatsapp,
   Facebook,
   Instagram,
   BNI,
   BCA,
   Mandiri,
   Star,
   Bath,
   Sofa,
   SurfaceArea,
   LineSplit,
   ArrowLeft,
   ArrowRight,
 }
</script>

<template>
    <component :is="svg" v-for="svg in Object.keys($options)" :key="svg" />
</template>