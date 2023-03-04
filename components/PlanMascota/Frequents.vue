<template>
    <v-container fluid id="faq" class="pt-10 pb-10">
          <v-row justify="center" align="center">
              <v-col cols="12" sm="12" md="8" lg="8" xl="8" justify="center" align="center">
                  <h3 class="TitulosGenerales ">PREGUNTAS<br> <span class="font-weight-light" >FRECUENTES</span></h3>
                  <div class="linea"></div>
              </v-col>
          </v-row>
          <v-row justify="center" align="center" class="mt-5">
              <v-col cols="12" lg="7" xl="7" md="10" sm="10">
                  <v-expansion-panels >
                      <v-expansion-panel 
                          accordion 
                          height="200"
                          class="text-blue-f-1em"
                          v-for="(pregunta, index) in preguntas" :key="index"
                          >
                          <v-expansion-panel-header style="color:#003B4C;" >{{pregunta.pregunta}}</v-expansion-panel-header>
                          <v-expansion-panel-content>
                            {{pregunta.respuesta}}
                          </v-expansion-panel-content>
                      </v-expansion-panel>
                  </v-expansion-panels>
              </v-col>
          </v-row>
    </v-container>
  </template>
  <script>
  export default {
    data(){
        return{
            preguntas:[
                {pregunta:'1. ¿Qué requisitos necesito para poder disfrutar de los beneficios del plan mascotas? ', respuesta:'Es muy importante que tu mascota tenga su carnet de vacunas al día y que tu plan esté activo'},
                {pregunta:'2.  ¿Qué coberturas exequiales se pueden encontrar?', respuesta:'IGS ofrece servicios funerarios para mascotas que incluyen la eutanasia y cremación hasta el límite de cobertura. También brindamos referencia y coordinación con cementerios de mascotas, sin embargo, no cubrimos los costos generados por este servicio y no somos responsables de los servicios prestados por los cementerios. La asistencia se otorga previa solicitud y autorización a través de nuestra central telefónica autorizada.'},
                {pregunta:'3. ¿Existe algún límite de edad para poder afiliar a mi mascota?', respuesta:'Coberturas dirigidas para la mascota del afiliado Mayores de 3 meses y menores de 12 años en el momento de afiliación.'},
                {pregunta:'4. ¿El servicio incluye asistencia en caso de que mi mascota cause algún daño a terceros?', respuesta:'Se brinda asistencia en caso de que un tercero sufra daños causados ​​por una conducta dolosa de la mascota registrada. Esto incluye una asistencia telefónica (de hasta 30 minutos) por parte de un abogado que orientará legalmente al afiliado para perseguir la responsabilidad civil o penal del tercero. Cabe destacar que la compañía también tiene derecho de subrogación.'},
                {pregunta:'5.  Si eres inexperto con tu mejor amigo nosotros te ayudamos.', respuesta:'Si eres primerizo teniendo una mascota te ayudamos a que le brindes todos los servicios complementarios que él necesita como son: veterinarias, guarderías, coordinación para cirugías, radiografías y ecografías entre otras.'},
                {pregunta:'6. ¿Puedo recibir asistencia en el traslado de mi mascota en caso que sufra un accidente a través de su plan de mascotas?', respuesta:'Si necesitas trasladar a tu mascota a la veterinaria por enfermedad o accidente dentro del perímetro urbano de tu ciudad, IGS coordinará y hará seguimiento hasta el arribo de la unidad móvil para el traslado. La mascota deberá estar al día en vacunas y no haber sido intervenida quirúrgicamente en los últimos 2 meses. Es necesario presentar el carnet de vacunación o una certificación expedida por un profesional veterinario para acceder a esta asistencia.'},
            ]
        }
    }
  }
  </script>
  
  