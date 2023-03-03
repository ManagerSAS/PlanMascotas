import olivosApi from '../api/olivosApi'

const forms = '/api/v1/forms'

export default {
    
    async postFormularioAfiliacionHoteles( data ){
        const response = await olivosApi.post( forms + '/FormularioAfiliacionHoteles', data)
        return response.data
    },
    async postFormularioPlanMascotas( data ){
        const response = await olivosApi.post( forms + '/FormularioPlanMascotas', data)
        return response.data
    },
}