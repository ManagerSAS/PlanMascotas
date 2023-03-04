<template>
    <v-container fluid id="planmascotas">
        <v-row align="center" justify="center">
            <v-col cols="12" sm="12" md="10" lg="10" xl="8" align="center" justify="center">
                <p class="text-raleway TitulosGenerales">Beneficios para tu mejor amigo</p> 
            </v-col>
        </v-row>
        <v-row align="center" justify="center" class="mb-5">
            <v-col cols="12" sm="12" md="10" lg="10" xl="8" align="center" justify="center">
                <vue-slick-carousel   v-bind="settings">
                    <div v-for="({src,titulo}, index) in beneficios" :key="index" class="pa-6">
                        <img :src="src" :alt="title" class="slide-image" />
                        <div class="CopysGenerales">
                            {{ titulo }}
                        </div>
                    </div>
                </vue-slick-carousel>
            </v-col>
        </v-row>
    </v-container>
</template>
<style>
.vue-slick-carousel .slick-slide {
  max-width: 250px;
  min-width: 150px;
}
</style>

<script>
export default {
    data() {
        return{
            beneficios:[
                {src: "",titulo:"Orientación médica veterinaria virtual."},
                {src: "",titulo:"Consulta médica veterinaria a domicilio o en red veterinaria."},
                {src: "",titulo:"Guardería para mascotas en caso de hospitalización del propietario."},
                {src: "",titulo:"Baño y peluqueria canina (corte de uñas limpieza externa de oídos, y de dientes)"},
                {src: "",titulo:"Servicio de eutanasia o incineracion de la mascota. "},
                {src: "",titulo:"Aplican condiciones y restricciones según las carencias y condiciones del plan mascotas"},
            ],
            settings: {
                dots: false,
                arrows: false,
                autoplay: true,
                infinite: true,
                speed: 500,
                slidesToShow: 4,
                slidesToScroll: 2,
                responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                    }
                }
                ]
            }
        }
    },
}
</script>