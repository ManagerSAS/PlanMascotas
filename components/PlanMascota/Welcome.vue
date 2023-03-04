<template >
    <div id="contact" >
        <div class="intro-section bg-cover bgimg">
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
.bgimg{
    background-image: url('/banners/bannerescritorio.png')!important;
    @media #{$tablet-device,$small-mobile}{
        background-image: url('/banners/Bannercel.png')!important;
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
                nombre: 'Amazonas',
                ciudades: ['Leticia','Puerto Nariño','La Chorrera','Tarapacá','El Encanto','La Pedrera','La Victoria','Miriti - Parana']
            },
            {
                nombre: 'Antioquia',
                ciudades: ['Medellín','Bello','Itagüí','Envigado','Apartadó','Caucasia','Rionegro','Turbo','Santa Fe de Antioquia','Amagá','Caldas','Copacabana','Girardota','La Ceja','Sabaneta','San Jerónimo','Santo Domingo','Yarumal']

            },
            {
                nombre: 'Arauca',
                ciudades: ['Arauca','Saravena','Tame','Fortul','Cravo Norte']
            },
            {
                nombre: 'Atlántico',
                ciudades: ['Barranquilla','Soledad','Malambo','Sabanalarga','Puerto Colombia','Galapa','Baranoa','Campo de la Cruz','Luruaco','Palmar de Varela','Piojó','Polonuevo','Ponedera','Santa Lucía','Santo Tomás','Suán','Tubará','Usiacurí']

            },
            {
                nombre: 'Bolívar',
                ciudades: ['Cartagena de Indias','Magangué','Turbaco','Arjona','El Carmen de Bolívar','San Juan Nepomuceno','Mompox','Cantagallo','María la Baja','San Jacinto','Cicuco','Santa Rosa del Sur','Montecristo','Hatillo de Loba','Simití','Santa Catalina','San Estanislao','Arenal','Barranco de Loba','Calamar']

            },
            {
                nombre: 'Boyacá',
                ciudades: ['Tunja','Duitama','Sogamoso','Chiquinquirá','Paipa','Moniquirá','Puerto Boyacá','Güicán','Miraflores','Tota','Villa de Leyva','Aquitania','Belén','Ciénega','Gámeza','Jenesano','Nobsa','Ráquira','Sáchica','Sutamarchán','Tibasosa','Turmequé','Ventaquemada']
            },
            {
                nombre: 'Caldas',
                ciudades: ['Manizales', 'Chinchiná', 'La Dorada', 'Villamaría', 'Palestina', 'Salamina', 'Aguadas', 'Riosucio', 'Anserma', 'Neira', 'Pácora', 'Supía', 'Marmato', 'Marquetalia', 'Filadelfia', 'Belalcázar', 'Victoria']

            },
            {
                nombre: 'Caquetá',
                ciudades: ['Florencia', 'San Vicente del Caguán', 'Puerto Rico', 'Solano', 'Curillo', 'Albania', 'El Doncello', 'Morelia', 'Milán', 'Cartagena del Chairá', 'Valparaíso', 'Belén de los Andaquíes', 'San José del Fragua', 'La Montañita']

            },
            {
                nombre: 'Casanare',
                ciudades: ['Yopal', 'Aguazul', 'Tauramena', 'Villanueva', 'Maní', 'Paz de Ariporo', 'Monterrey', 'Trinidad', 'Orocué', 'Hato Corozal', 'Nunchía', 'Recetor', 'La Salina', 'Chámeza', 'San Luis de Palenque', 'Sabanalarga']

            },
            {
                nombre: 'Cauca',
                ciudades: ['Popayán', 'Santander de Quilichao', 'Piendamó', 'Cajibío', 'Patía', 'El Tambo', 'Puerto Tejada', 'Villa Rica', 'Miranda', 'Timbío', 'Guachené', 'Silvia', 'Palmira', 'Suárez', 'Inzá', 'Puracé', 'La Sierra', 'Balboa', 'Buenos Aires', 'Caloto', 'Corinto', 'Rosas', 'Jambaló', 'Almaguer', 'Totoró', 'Mercaderes', 'San Sebastián', 'Morales', 'Tunía', 'Florencia', 'La Vega']

            },
            {
                nombre: 'Cesar',
                ciudades: ['Valledupar', 'Aguachica', 'San Alberto', 'Pelaya', 'La Jagua de Ibirico', 'Bosconia', 'Codazzi', 'Chiriguaná', 'La Paz', 'Curumaní', 'Astrea', 'Gamarra', 'Pailitas', 'Tamalameque', 'Becerril', 'Manaure Balcón del Cesar']

            },
            {
                nombre: 'Chocó',
                ciudades: ['Quibdó', 'Bagadó', 'Tadó', 'Condoto', 'Istmina', 'Medio Atrato', 'El Carmen de Atrato', 'Lloró', 'Unión Panamericana', 'Riosucio', 'Medellín del Ariari', 'Nóvita', 'Cértegui', 'Nuquí', 'Sipí', 'Bajo Baudó']

            },
            {
                nombre: 'Córdoba',
                ciudades: ['Montería', 'Lorica', 'Sahagún', 'Planeta Rica', 'Montelíbano', 'Cereté', 'Tierralta', 'Chinú', 'San Antero', 'Puerto Escondido', 'Tuchín', 'Ayapel', 'Ciénaga de Oro', 'San Pelayo', 'Los Córdobas', 'Momil', 'Pueblo Nuevo', 'Canalete', 'San Carlos', 'La Apartada', 'Montelíbano']

            },
            {
                nombre: 'Cundinamarca',
                ciudades: ['Bogotá D.C.', 'Soacha', 'Zipaquirá', 'Girardot', 'Facatativá', 'Fusagasugá', 'Chía', 'Mosquera', 'Madrid', 'Funza', 'Sibaté', 'Cajicá', 'Tenjo', 'Tabio', 'La Calera', 'Tocancipá', 'El Rosal', 'Cota', 'Chocontá', 'Nemocón', 'Anapoima', 'Tocaima', 'Carmen de Viboral', 'Carmen de Carupa', 'Villeta', 'La Mesa', 'Ubaté', 'Guatavita', 'El Colegio', 'Silvania', 'La Vega', 'Pacho', 'Gachancipá', 'Guaduas', 'Sopó', 'Apulo', 'Cachipay', 'San Francisco', 'Gachalá', 'Sesquilé', 'Nilo', 'Nocaima', 'San Juan de Río Seco', 'Pasca', 'Manta', 'Ricaurte', 'Fómeque', 'Caparrapí', 'Vianí', 'Venecia', 'Quipile', 'Sutatausa', 'Supatá', 'Granada', 'San Antonio del Tequendama', 'San Bernardo', 'Cucunubá', 'Cogua', 'El Peñón', 'Junín', 'San Cayetano', 'Gama', 'Tibirita', 'Nariño', 'Tena', 'Villapinzón', 'Susa', 'El Colegio', 'San Juan de Rioseco', 'Bojacá', 'Tausa', 'Pulí', 'Chipaque', 'La Palma', 'Choachí', 'Machetá', 'Manta', 'Guasca', 'El Rosal', 'Tena', 'Tocaima']

            },
            {
                nombre: 'Guainía',
                ciudades: ['Inírida', 'La Guadalupe', 'Cacahual', 'Pana Pana', 'Mapiripana', 'Morichal Nuevo', 'San Felipe']

            },
            {
                nombre: 'Guaviare',
                ciudades: ['San José del Guaviare', 'El Retorno', 'Miraflores', 'Calamar', 'Guaviare']

            },
            {
                nombre: 'Huila',
                ciudades: ['Neiva', 'Pitalito', 'Garzón', 'Campoalegre', 'La Plata', 'Palermo', 'Tarqui', 'Baraya', 'Aipe', 'Rivera', 'Acevedo', 'Nátaga', 'Oporapa', 'Yaguará', 'Santa María', 'Villavieja', 'Algeciras', 'La Argentina', 'Tello', 'Timaná', 'Hobo', 'Tesalia', 'Suaza', 'Gigante', 'Teruel', 'Agrado', 'Paicol', 'Isnos', 'Íquira', 'Guadalupe', 'San Agustín']

            },
            {
                nombre: 'La Guajira',
                ciudades: ['Riohacha', 'Maicao', 'Uribia', 'Fonseca', 'Barrancas', 'Distracción', 'San Juan del Cesar', 'Villanueva', 'Albania', 'Manaure', 'Hatonuevo', 'Dibulla', 'La Jagua del Pilar', 'Urumita', 'Algarrobo', 'Maicao Viejo', 'El Molino']

            },
            {
                nombre: 'Magdalena',
                ciudades: ['Santa Marta', 'Ciénaga', 'Fundación', 'El Banco', 'Aracataca', 'Puebloviejo', 'Algarrobo', 'Plato', 'Chibolo', 'Zona Bananera', 'Remolino', 'Nueva Granada', 'El Retén', 'Pedraza', 'Guamal', 'Salamina', 'Pijiño del Carmen', 'San Zenón', 'Sitionuevo', 'Tenerife', 'Cerro de San Antonio', 'Ciénaga Grande', 'Concordia', 'Santa Ana', 'El Piñón', 'Sabanas de San Angel', 'Pivijay', 'Zapayán']

            },
            {
                nombre: 'Meta',
                ciudades: ['Villavicencio', 'Acacías', 'Granada', 'Puerto López', 'Restrepo', 'Guamal', 'Cumaral', 'La Macarena', 'Castilla la Nueva', 'El Castillo', 'Lejanías', 'San Juan de Arama', 'Puerto Gaitán', 'Barranca de Upía', 'San Carlos de Guaroa', 'Cabuyaro', 'Puerto Lleras', 'San Martín', 'Fuentedeoro', 'Mapiripán', 'Uribe', 'Mesetas', 'El Dorado', 'Vista Hermosa']

            },
            {
                nombre: 'Nariño',
                ciudades: ['Pasto', 'Ipiales', 'Tumaco', 'Túquerres', 'La Unión', 'Samaniego', 'Buesaco', 'Gualmatán', 'El Charco', 'Chachagüí', 'La Florida', 'San Pablo', 'Policarpa', 'La Cruz', 'Cumbal', 'Iles', 'Puerres', 'Albán', 'Olaya Herrera', 'San Lorenzo', 'Sandoná', 'Taminango', 'Yacuanquer', 'Ancuya', 'Barbacoas', 'Colón', 'Consaca', 'Cuaspud', 'El Peñol', 'El Rosario', 'Imués', 'Leiva', 'Linares', 'Pupiales', 'Arboleda', 'Belén', 'Chimbarongo', 'Contadero', 'Córdoba', 'Funes', 'Guachucal', 'Guaitarilla', 'La Llanada', 'Los Andes', 'Mallama', 'Mosquera', 'Nariño', 'Potosí', 'Providencia', 'Pupiales', 'San Bernardo', 'San Juan de Pasto', 'Santa Bárbara', 'Sapuyes', 'Tangua', 'Yacuanquer']

            },
            {
                nombre: 'Norte de Santander',
                ciudades: ['Cúcuta', 'Ocaña', 'Pamplona', 'Villa del Rosario', 'Los Patios', 'Chinácota', 'Tibú', 'El Zulia', 'El Tarra', 'Bochalema', 'La Playa', 'Ragonvalia', 'Ábrego', 'Arboledas', 'Cácota', 'Convención', 'Durania', 'Hacarí', 'Herrán', 'La Esperanza', 'Labateca', 'Lourdes', 'Mutiscua', 'Pamplonita', 'Río de Oro', 'Salazar', 'Santiago', 'Sardinata', 'Silos', 'Teorama', 'Toledo', 'Villa Caro']

            },
            {
                nombre: 'Putumayo',
                ciudades: ['Mocoa', 'Orito', 'Puerto Asís', 'Sibundoy', 'San Francisco', 'Colón', 'Puerto Guzmán', 'Villagarzón', 'Valle del Guamuez', 'San Miguel']

            },
            {
                nombre: 'Quindío',
                ciudades: ['Armenia', 'Calarcá', 'Circasia', 'Montenegro', 'La Tebaida', 'Salento', 'Filandia', 'Pijao', 'Buenavista']

            },
            {
                nombre: 'Risaralda',
                ciudades: ['Pereira', 'Dosquebradas', 'La Virginia', 'Santa Rosa de Cabal', 'Santuario', 'Marsella', 'Apía', 'Balboa', 'Belén de Umbría', 'Guática', 'Mistrató', 'Pueblo Rico', 'Quinchía', 'Viterbo']

            },
            {
                nombre: 'San Andrés y Providencia',
                ciudades: ['San Andrés', 'Providencia y Santa Catalina']

            },
            {
                nombre: 'Santander',
                ciudades: ['Bucaramanga', 'Floridablanca', 'Girón', 'Piedecuesta', 'Barrancabermeja', 'San Gil', 'Charalá', 'Málaga', 'Socorro', 'Puerto Wilches', 'Vélez', 'Barbosa', 'El Carmen de Chucurí', 'Galán', 'Guapotá', 'Lebrija', 'Los Santos', 'Oiba', 'Rionegro', 'San Vicente de Chucurí', 'Simacota', 'Valle de San José']

            },
            {
                nombre: 'Sucre',
                ciudades: ['Sincelejo', 'Corozal', 'Morroa', 'Sampués', 'San Onofre', 'Tolú', 'Coveñas', 'Los Palmitos', 'Ovejas', 'San Marcos', 'Chalán', 'Colosó', 'Guaranda', 'La Unión', 'San Antonio de Palmito', 'Sucre']

            },
            {
                nombre: 'Tolima',
                ciudades: ['Ibagué', 'Espinal', 'Líbano', 'Honda', 'Melgar', 'Chaparral', 'Mariquita', 'Guamo', 'Rovira', 'Fresno', 'Purificación', 'Coyaima', 'Natagaima', 'Venadillo', 'San Luis', 'Alpujarra', 'Armero', 'Ataco', 'Cajamarca', 'Casabianca', 'Dolores', 'El Guamo', 'Herveo', 'Icononzo', 'Prado', 'Saldaña', 'Suárez', 'Valle de San Juan', 'Villahermosa']

            },
            {
                nombre: 'Valle del Cauca',
                ciudades: ['Cali', 'Buenaventura', 'Palmira', 'Tuluá', 'Yumbo', 'Candelaria', 'Florida', 'Jamundí', 'Cali', 'Cali', 'La Victoria', 'Obando', 'Pradera', 'Restrepo', 'Riofrío', 'San Pedro', 'Sevilla', 'Trujillo', 'Vijes', 'Alcalá', 'Andalucía', 'Ansermanuevo', 'Bolívar', 'Caicedonia', 'Calima', 'Cartago', 'Dagua', 'El Águila', 'El Cairo', 'El Cerrito', 'Ginebra', 'Guacarí', 'La Cumbre', 'La Unión', 'La Victoria', 'Obando', 'Palmira', 'Roldanillo', 'San Juan', 'San Sebastián de Buenavista', 'Santiago de Cali', 'Toro', 'Trujillo', 'Tuluá', 'Ulloa', 'Versalles', 'Vijes', 'Yotoco', 'Yumbo', 'Zarzal']

            },
            {
                nombre: 'Vaupés',
                ciudades: ['Mitú', 'Caruru', 'Pacoa', 'Taraira', 'Papunahua', 'Yavaraté']

            },
            {
                nombre: 'Vichada',
                ciudades: ['Puerto Carreño', 'La Primavera', 'Cumaribo', 'Santa Rosalía']

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
