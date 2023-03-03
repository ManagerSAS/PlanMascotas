<template>
    <v-container fluid class="align-center justify-center">
        <v-row align="center" justify="center">
            <v-col cols="12" lg="10" align="center" justify="center">
                <h2 class="text-raleway" style="color: #003B4C">Formulario de afiliacion huespedes hoteles Santa Marta</h2>
            </v-col>
        </v-row>
        <v-row align="center" justify="center">
            <v-col cols="12" lg="8" align="center" justify="center">
                <p class="text-comfortaa" style="font-weight: 600;font-size: 20px; color: #EC6179;">
                    ¡Bienvenido al formulario de afiliación para huéspedes de hoteles en Santa Marta!
                </p>
                <p class="text-comfortaa" style="font-weight: 600;font-size: 15px;">
                    Por favor, complete los campos a continuación con la información solicitada para poder procesar su solicitud de afiliación. Asegúrese de ingresar la información correcta y completa para evitar demoras en el procesamiento de su solicitud.
                </p>
            </v-col>
        </v-row>
        <v-form ref="form" autocomplete="on">
            <v-row align="center" justify="center">
                <v-col cols="12" sm="12"  md="7">
                    <v-row align="center" justify="center">
                        <v-col cols="12" md="8">
                            <v-row align="center" justify="center">
                                <v-col cols="5">
                                    <label> Nombre del Hotel: </label>
                                </v-col>
                                <v-col cols="7" align="end" justify="end">
                                    <v-text-field
                                        :rules="nameRules"
                                        v-model="NombreHotel"
                                        dense
                                    >
                                    </v-text-field>
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                    <v-row align="center" justify="center">
                        <v-col cols="12" md="5">
                            <v-row align="center" justify="center">
                                <v-col cols="5">
                                    <label> Inicio de Vigencia: </label>
                                </v-col>
                                <v-col cols="7" align="end" justify="end">
                                    <v-text-field
                                        v-model="FechaInicio"
                                        :rules="nameRules"
                                        type="date"
                                        dense
                                    >
                                    </v-text-field>
                                </v-col>
                            </v-row>
                        </v-col>
                        <v-col cols="12" md="5">
                            <v-row align="center" justify="center">
                                <v-col cols="5">
                                    <label> Fin de Vigencia: </label>
                                </v-col>
                                <v-col cols="7" align="end" justify="end">
                                    <v-text-field
                                        :rules="nameRules"
                                        v-model="FechaFin"
                                        type="date"
                                        dense
                                    >
                                    </v-text-field>
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                    <v-row align="center" justify="center">
                        <v-col cols="12" md="5">
                            <v-row align="center" justify="center">
                                <v-col cols="5">
                                    <label> Nombre Completo: </label>
                                </v-col>
                                <v-col cols="7" align="end" justify="end">
                                    <v-text-field
                                        :rules="nameRules"
                                        v-model="NombreCompleto"
                                        dense
                                    >
                                    </v-text-field>
                                </v-col>
                            </v-row>
                        </v-col>
                        <v-col cols="12" md="5">
                            <v-row align="center" justify="center">
                                <v-col cols="5">
                                    <label> Cedula: </label>
                                </v-col>
                                <v-col cols="7" align="end" justify="end">
                                    <v-text-field
                                        type="number"
                                        :rules="nameRules"
                                        v-model="Cedula"
                                        dense
                                    >
                                    </v-text-field>
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                    <v-row align="center" justify="center">
                        <v-col cols="12" md="5">
                            <v-row align="center" justify="center">
                                <v-col cols="5">
                                    <label> Edad: </label>
                                </v-col>
                                <v-col cols="7" align="end" justify="end">
                                    <v-text-field
                                        type="number"
                                        :rules="[twoDigitsRule]"
                                        v-model="Edad"
                                        dense
                                    >
                                    </v-text-field>
                                </v-col>
                            </v-row>
                        </v-col>
                        <v-col cols="12" md="5">
                            <v-row align="center" justify="center">
                                <v-col cols="5">
                                    <label> Dirección:  </label>
                                </v-col>
                                <v-col cols="7" align="end" justify="end">
                                    <v-text-field
                                        :rules="nameRules"
                                        v-model="Direccion"
                                        dense
                                    >
                                    </v-text-field>
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                    <v-row align="center" justify="center">
                        <v-col cols="12" md="5">
                            <v-row align="center" justify="center">
                                <v-col cols="5">
                                    <label> Ciudad de Origen: </label>
                                </v-col>
                                <v-col cols="7" align="end" justify="end">
                                    <v-text-field
                                        :rules="nameRules"
                                        v-model="CiudadOrigen"
                                        dense
                                    >
                                    </v-text-field>
                                </v-col>
                            </v-row>
                        </v-col>
                        <v-col cols="12" md="5">
                            <v-row align="center" justify="center">
                                <v-col cols="5">
                                    <label> Celular:  </label>
                                </v-col>
                                <v-col cols="7" align="end" justify="end">
                                    <v-text-field
                                        type="number"
                                        :rules="[tenDigits]"
                                        v-model="Celular"
                                        dense
                                    >
                                    </v-text-field>
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                    <v-row align="center" justify="center" class="ma-2">
                        <v-checkbox
                            v-model="terminos"
                            hide-details
                            color="#489791"
                            class="mr-2 mt-0"
                            off-icon="mdi-circle-outline "
                            on-icon="mdi-check-circle"
                            dense
                        ></v-checkbox>
                        <a style="text-decoration: underline"><div class="white--black"  @click="dialogPoliticas= true">  Acepto términos y condiciones*</div></a>
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
                    </v-col>
                </v-row>
            </v-form>
            <v-row>
                <v-col cols="11" align="center" justify="center">
                    <v-btn
                        style="background-color: #F08D20"
                        data-sitekey="6Ld9kLskAAAAALeetsBV8Abna2eBbUWldYf6B81u" 
                        data-callback='onSubmit' 
                        data-action='submit' class="g-recaptch "
                        color="#26A69A"
                        rounded-xl
                        large
                        dark
                        @click="Enviar"
                    > Enviar</v-btn>
                </v-col>
            </v-row>
            <v-overlay align="center" justify="center" :value="showOverlay">
                <v-img :src="url" width="150"/>
                <h2 class="textsuccess">{{ text }}</h2>
            </v-overlay>
    </v-container>
</template>
<script>
import Post from  '../post/post'
export default {
    data() {
        return{
            showOverlay: false,
            dialogPoliticas: false,
            url:'',
            text:'',
            NombreHotel:'',
            FechaInicio:'',
            FechaFin:'',
            NombreCompleto:'',
            Cedula:'',
            Edad:'',
            Direccion:'',
            CiudadOrigen:'',
            Celular:'',
            terminos: null,
            nameRules: [
                v => !!v || 'Campo requerido',
            ],
            twoDigitsRule: (value) => {
                if (!value) return true
                if (/^\d{1,2}$/.test(value)) return true
                return 'El valor debe ser un número de dos dígitos'
            },
            tenDigits: value => value && value.length === 10 || 'el numero debe tener 10 dígitos'

        }
    },
    methods:{
        async Enviar(){
            this.showOverlay= true,
            this.url='procesando.gif'
            this.text='La información se esta procesando'
            setTimeout(() => { 
                this.showOverlay= false
                this.url=''
                this.text='' 
            }, 2000)
            if(this.NombreHotel !== '' && this.FechaInicio !== '' && this.FechaFin !== '' && this.NombreCompleto !== '' && this.Cedula !== '' && this.Edad !== '' && this.Direccion !== '' && this.CiudadOrigen !== '' && this.Celular){
                let hoy = new Date();   
                let now = hoy.getFullYear()  + '-' + ( hoy.getMonth() + 1 ) + '-' + hoy.getDate() + ' ' + hoy.getHours() + ':' + hoy.getMinutes() + ':' + hoy.getSeconds();
                
                const datos ={
                    NombreHotel: this.NombreHotel,
                    FechaInicio: this.FechaInicio,
                    FechaFin: this.FechaFin,
                    NombreCompleto: this.NombreCompleto,
                    Cedula: this.Cedula,
                    Edad: this.Edad,
                    Direccion: this.Direccion,
                    CiudadOrigen: this.CiudadOrigen,
                    Celular: this.Celular,
                    fechaRegistro: now
                }
                const response = await Post.postFormularioAfiliacionHoteles(datos)
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