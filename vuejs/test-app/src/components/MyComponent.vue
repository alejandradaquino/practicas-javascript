<template>
    <div>

   <h2>{{subtitle}}</h2>
   <input v-model="message" placeholder="edíteme">
<p>El mensaje es: {{ message }}</p>
    </div>
</template>
<script>
export default {
    
    name: "my-component",
    data: ()=>({subtitle:"A subtitle", message: "A Input Messge"})
}
</script>
<style lang="stylus" scoped>

</style>