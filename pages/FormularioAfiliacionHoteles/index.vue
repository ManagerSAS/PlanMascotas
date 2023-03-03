<template>
  <div>
    <Header/>
    <FormularioAfiliacionHoteles 
        style="background-image: url(https://res.cloudinary.com/dazyyib7u/image/upload/v1664031736/xjaotapgqpbdqnypm6en.png); background-position: center;
        background-size: cover ;
        background-repeat: no-repeat;"
        class="mt-10 mb-10"
      />
      <Footer/>
  </div>
</template>
<script>
import FormularioAfiliacionHoteles from '~/components/FormularioAfiliacionHoteles'
import Header from '~/components/Header'
export default {
    components:{
        Header,
        FormularioAfiliacionHoteles
    }
}
</script>
