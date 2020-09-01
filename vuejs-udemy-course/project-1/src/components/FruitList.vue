<template>
    <div>
      <ul class="list-group">
        <li v-for="fruit in fruits" :key="fruit.id" class="list-group-item " @click="addQuantityToFruit(fruit.id)">
          {{fruit.name}} <span class="badge badge-secondary">{{fruit.quantity}}</span>
        </li>
      </ul>
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
            ...mapMutations(['addQuantityToFruit'])
        }
        
    }
</script>

<style lang="scss" scoped>

</style>