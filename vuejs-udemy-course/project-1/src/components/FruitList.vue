<template>
    <div>
      <ul class="list-group">
        <li v-for="fruit in fruits" :key="fruit.name" class="list-group-item ">{{fruit.name}} <span class="badge badge-secondary">{{fruit.quantity}}</span></li>
      </ul>
    </div>
</template>

<script>
    import { mapState } from "vuex";
    export default {
        name: "FruitList",
        computed:  {
            ...mapState(['fruits'])
        }
        
    }
</script>

<style lang="scss" scoped>

</style>