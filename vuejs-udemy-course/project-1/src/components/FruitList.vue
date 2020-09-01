<template>
    <div>
      <ul class="list-group">
        <li v-for="fruit in fruits" :key="fruit.id" class="list-group-item " @click="addQuantityToFruit(fruit.id)">
          {{fruit.name}} <span class="badge badge-secondary">{{fruit.quantity}}</span>
        </li>
      </ul>
      <button type="button" class="btn btn-primary" @click="resetAllQuantities()" style="margin-top:20px">Reset quantities</button>
    </div>
</template>

<script>
    import { mapState, mapMutations } from "vuex";
    export default {
        name: "FruitList",
        computed:  {
            ...mapState(['fruits'])
        },
        methods: {
            ...mapMutations(['addQuantityToFruit', 'resetAllQuantities'])
        }
        
    }
</script>

<style lang="scss" scoped>

</style>