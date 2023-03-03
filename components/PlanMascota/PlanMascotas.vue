<template>
    <v-container fluid id="planmascotas">
        <v-row align="center" justify="center">
            <v-col cols="12" sm="12" md="10" lg="10" xl="8" align="center" justify="center">
                <p class="text-raleway TitulosGenerales">Beneficios que tiene tu mejor amigo </p> 
                <p class="text-comfortaa CopysGenerales">Con más de 25 años de experiencia en el mercado, la mejor infraestructura de la región para rendir el mejor homenaje al amor a la memoria de nuestros serres queridos que han partido</p>
            </v-col>
        </v-row>
        <v-row align="center" justify="center">
            <v-col cols="12" sm="12" md="10" lg="10" xl="8" align="center" justify="center">
                <v-slide-group >
                    <v-slide-item
                    v-for="(beneficio, index) in beneficios"
                    :key="index"
                    >
                        {{ beneficio.src }}
                         {{ beneficio.titulo }}
                    </v-slide-item>
                </v-slide-group>
           
            </v-col>
        </v-row>
    </v-container>
</template>
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

            ]
        }
        
    },
}
</script>