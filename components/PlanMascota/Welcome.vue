<template >
    <div id="contact" >
        <div class="intro-section bg-cover bg" >
            <v-container fluid >
                <v-form ref="form" autocomplete="off" class="mt-15 mt-md-10 pt-md-10">
                    <v-row align="center" justify="center" >
                            <v-col  align="center" justify="center" cols="12" offset-xl="6"  offset-lg="5" class="mr-lg-1 mr-md-1 py-5 px-5 mt-md-15 pt-md-15" offset-md="5" md="6" lg="4" sm="8"> 
                            <div class="pa-1">
                                <p class="title-form text-raleway">SOLICITA MÁS <br> INFORMACIÓN</p>
                            </div>
                                <v-text-field
                                    label="Nombre completo*"
                                    placeholder="Francisco "
                                    v-model="NombreCompleto"
                                    prepend-inner-icon="mdi-account-outline mdi-18px"
                                    style="border-radius:0"
                                    class="ma-2 elevation-5"
                                    :rules="nameRules"
                                    hide-details
                                    solo
                                    dense
                                ></v-text-field>
                                <v-text-field
                                    label="Correo electrónico*"
                                    v-model="Correo"
                                    prepend-inner-icon="mdi-email-outline mdi-18px"
                                    :rules="emailRules"
                                    placeholder="example@example.com"
                                    class="ma-2 elevation-5"
                                    style="border-radius:0"
                                    hide-details
                                    solo
                                    dense
                                ></v-text-field>
                                <v-text-field
                                    label="Número de celular*"
                                    v-model="NumeroCel"
                                    placeholder="3142484466"
                                    type="number"
                                    prepend-inner-icon="mdi-cellphone mdi-18px"
                                    :rules="nameRules"
                                    class="ma-2 elevation-5"
                                    style="border-radius:0"
                                    hide-details
                                    solo
                                    dense
                                ></v-text-field>
                                <v-row>
                                <v-col cols="6">
                                        <v-select
                                            label="Departamento*"
                                            :rules="nameRules"
                                            prepend-inner-icon="mdi-map-marker-outline mdi-18px"
                                            v-model="departamentoSeleccionado"
                                            :items="departamentos.map(departamento => departamento.nombre)"
                                            clearable
                                            @input="ciudadSeleccionada = ''"
                                            placeholder="Meta"
                                            class="ma-2 elevation-5"                                
                                            style="border-radius:0"
                                            hide-details
                                            solo
                                            dense
                                        ></v-select>
                                    </v-col>
                                    <v-col cols="6">
                                        <v-select
                                            v-if="departamentoSeleccionado"
                                            v-model="ciudadSeleccionada"
                                            :items="departamentos.find(departamento => departamento.nombre === departamentoSeleccionado).ciudades"
                                            label="Ciudad"
                                            clearable
                                            prepend-inner-icon="mdi-map-marker-outline mdi-18px"
                                            placeholder="Villavicencio"
                                            :rules="nameRules"
                                            class="ma-2 elevation-5"
                                            style="border-radius:0"
                                            hide-details
                                            solo
                                            dense
                                        ></v-select>
                                    </v-col>  
                                </v-row>
                                <v-select
                                    v-model="plan"
                                    :items="planes"
                                    label="Planes de Interés"
                                    placeholder="Programa de interés"
                                    prepend-inner-icon="mdi-script-text-outline mdi-18px"
                                    :rules="nameRules"
                                    class="ma-2 elevation-5"
                                    style="border-radius:0"
                                    hide-details
                                    solo
                                    dense
                                ></v-select>
                                <v-row align="center" class="ma-2">
                                    <v-checkbox
                                        v-model="terminos"
                                        hide-details
                                        color="white"
                                        class="mr-2 mt-0"
                                        off-icon="mdi-circle-outline mdi-light"
                                        on-icon="mdi-check-circle"
                                        dense
                                    ></v-checkbox>
                                    <a style="text-decoration: underline white"><div class="white--text"  @click="dialogPoliticas= true">  Acepto términos y condiciones*</div></a>
                                </v-row>
                                <v-dialog
                                v-model="dialogPoliticas"
                                transition="dialog-bottom-transition"
                                max-width="700"
                            >
                                <v-card class="pa-5"> 
                                    <v-row justify="center" align="center">
                                    <v-col justify="center" align="center">
                                        <h2 class="titulos text-raleway">Politica de tratamiento de datos</h2>
                                        <div class="pa-5">De acuerdo con la Ley Estatutaria 1581 de 2012 de Protección de Datos y normas concordantes, se informa al usuario que los datos consignados en el presente formulario serán incorporados en una base de datos responsabilidad de FUNERALES INTEGRALES S.A.S, siendo tratados con la finalidad de realizar, gestión administrativa, marketing y prospección comercial. Usted puede ejercitar los derechos de acceso, corrección, supresión, revocación o reclamo por infracción sobre sus datos, mediante escrito dirigido a FUNERALES INTEGRALES S.A.S por correo electrónico comercialsantamarta@losolivos.co, indicando en el asunto el derecho que desea ejercitar,o mediante correo ordinario remitido a la dirección: Calle 22 no 17 a 82 Barrio Los Alcazares - Santa Marta.
                                        </div>
                                    </v-col>
                                </v-row>
                                </v-card>
                            </v-dialog>
                                <v-row>
                                    <v-col>
                                        <v-btn
                                            style="border-radius:0" 
                                            color="white"
                                            elevation="2"
                                            class="font-weight-black pa-5 font-gotham"
                                            @click="EnviarForm"
                                        >Enviar <br> Información</v-btn>
                                    </v-col>
                                </v-row>
                            </v-col>
                        </v-row>
                        <v-overlay align="center" justify="center" :value="showOverlay">
                            <v-img :src="url" width="150"/>
                            <h2 class="textsuccess">{{ text }}</h2>
                        </v-overlay>
                </v-form>
            </v-container>
        </div>
    </div>
</template>
<style lang="scss">
.bg{
    background-image: url('/banners/bannerescritorio.png')!important;
    // -webkit-background-image: url('/banners/bannerescritorio.jpg')!important;
    // -moz-background-image: url('/banners/bannerescritorio.jpg')!important;
    // -o-background-image: url('/banners/bannerescritorio.jpg')!important;
    @media #{$tablet-device,$small-mobile}{
        background-image: url('/banners/Bannercel.png')!important;
        // -webkit-background-image: url('/banners/Bannercel.jpg')!important;
        // -moz-background-image: url('/banners/Bannercel.jpg')!important;
        // -o-background-image: url('/banners/Bannercel.jpg')!important;
    }
}
</style>

<script>

import Post from '../post/post'
  export default {
    data: () => ({
        showOverlay: false,
        url:'',
        text:'',
        departamentoSeleccionado: '',
        ciudadSeleccionada: '',
        planes:[
            'Plan Gatos',
            'Plan Perros'
        ],
        departamentos: [
            {
                nombre: 'Magdalena',
                ciudades: ['Santa Marta','Ciénaga','Fundación','Aracataca','El Banco','Puebloviejo','Zona Bananera','Algarrobo','Chivolo','El Piñón','Pijiño del Carmen','Remolino','Sabanas de San Ángel','Salamina','San Sebastián de Buenavista','Santa Ana','Tenerife']
            },
        ],
        dialogPoliticas: false,
        NombreCompleto:'',
        Correo:'',
        NumeroCel:'',
        departamentoSeleccionado: '',
        ciudadSeleccionada: '',
        plan:'',
        terminos: false,
        nameRules: [
            v => !!v || 'Campo requerido',
        ],
        emailRules: [
            v => /.+@.+\..+/.test(v) || '',
        ],
    }),
    methods:{
        async EnviarForm(){
            this.showOverlay= true,
            this.url='procesando.gif'
            this.text='La información se esta procesando'
            setTimeout(() => { 
                this.showOverlay= false
                this.url=''
                this.text='' 
            }, 2000)
            if(this.NombreCompleto !== '' && this.Correo !== '' && this.NumeroCel !== '' && this.departamentoSeleccionado !== '' && this.ciudadSeleccionada !== '' && this.plan !== '' && this.terminos){
                let hoy = new Date();   
                let now = hoy.getFullYear()  + '-' + ( hoy.getMonth() + 1 ) + '-' + hoy.getDate() + ' ' + hoy.getHours() + ':' + hoy.getMinutes() + ':' + hoy.getSeconds();
                
                const datos ={
                    NombreCompleto: this.NombreCompleto,
                    Correo: this.Correo,
                    NumeroCel: this.NumeroCel,
                    departamentoSeleccionado: this.departamentoSeleccionado,
                    ciudadSeleccionada: this.ciudadSeleccionada,
                    plan: this.plan,
                    fechaRegistro: now
                }
                const response = await Post.postFormularioPlanMascotas(datos)
                if(response.error === false){
                    this.showOverlay= true,
                    this.url='success.gif',
                    this.text='La información se envio correctamente'
                    setTimeout(()=>{ 
                        this.showOverlay= false
                        this.url=''
                        this.text='' 
                    }, 2000)
                    this.$refs.form.reset()
                }else{
                    this.showOverlay= true,
                    this.url='error.gif',
                    this.text='Por favor intente nuevamente'
                    setTimeout(()=>{ 
                        this.showOverlay= false
                        this.url=''
                        this.text='' 
                        }, 2000)
                }                    
            }else{
                this.showOverlay= true,
                this.url='error.gif',
                this.text='Asegurate que todos los campos sean correctos'
                setTimeout(()=>{ 
                    this.showOverlay= false
                    this.url=''
                    this.text='' 
                }, 2000)
            } 
        }
    }
  }
</script>
