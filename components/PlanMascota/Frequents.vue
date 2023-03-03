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
                {pregunta:'¿Qué cubre el plan de cuidado para mascotas?', respuesta:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, impedit! Sunt eaque adipisci, nisi beatae accusantium quis atque, cupiditate ea aspernatur quos illo odio vel? Et officia optio debitis mollitia.'},
                {pregunta:'¿Cual es el costo del plan?', respuesta:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, impedit! Sunt eaque adipisci, nisi beatae accusantium quis atque, cupiditate ea aspernatur quos illo odio vel? Et officia optio debitis mollitia.'},
                {pregunta:'¿Hay algún limite en la cantidad de mascotas que puedo afiliar?', respuesta:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, impedit! Sunt eaque adipisci, nisi beatae accusantium quis atque, cupiditate ea aspernatur quos illo odio vel? Et officia optio debitis mollitia.'},
                {pregunta:'¿Se cubren todas las razas de mascotas y tipos de animales domesticos?', respuesta:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, impedit! Sunt eaque adipisci, nisi beatae accusantium quis atque, cupiditate ea aspernatur quos illo odio vel? Et officia optio debitis mollitia.'},
            ]
        }
    }
  }
  </script>
  
  