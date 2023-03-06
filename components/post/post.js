import olivosApi from '../api/olivosApi'
const forms = '/api/v1/forms'
export default {
    async postFormularioPlanMascotas( data ){
        const response = await olivosApi.post( forms + '/FormularioPlanMascotas', data)
        return response.data
    },
}