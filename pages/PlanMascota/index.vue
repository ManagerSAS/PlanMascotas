<template >
    <div>
        <Header/>
        <MobileNavigation/>
        <welcome/>
        <PlanMascotas/>
        <CTA class="bg-CTA"/>
        <Frequents/>
        <Footer/>
    </div>
</template>
<style lang="scss">
.bg-CTA{
    background-image: url('/cta.png');
    background-position: center;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    // -webkit-background-size: cover;
    // -moz-background-size: cover;
    // -o-background-size: cover;
    @media #{$tablet-device,$small-mobile}{
        background-image: url('/ctaCel.png')!important;
        background-size: contain;
        background-repeat: no-repeat;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        // -webkit-background-image: url('/banners/Bannercel.jpg')!important;
        // -moz-background-image: url('/banners/Bannercel.jpg')!important;
        // -o-background-image: url('/banners/Bannercel.jpg')!important;
    }
}
</style>
<script>
import Header from '~/components//Header2.vue'
import PlanMascotas from '~/components/PlanMascota/PlanMascotas';
import MobileNavigation from '~/components/PlanMascota/MobileNavigation.vue';
import Welcome from '~/components/PlanMascota/Welcome.vue'
import CTA from '~/components/PlanMascota/CTA.vue'
import Frequents from '~/components/PlanMascota/Frequents.vue';
import Footer from '~/components/PlanMascota/Footer.vue';

  export default {
    components: {
      Welcome,
      Header,
      PlanMascotas,
      MobileNavigation,
      CTA,
      Frequents,
      Footer
  },
  mounted() {
      this.$nextTick(() => {
        this.$nuxt.$loading.start()
        setTimeout(() => this.$nuxt.$loading.finish(), 2000)
      })
    }

  }
</script>
