<template>
  <div>
    <router-link
      :to="{ name: `Photo`, params: { id: photo } }"
      v-for="photo in photos"
      :key="photo"
    >
      <button class="btn btn-default">Photo {{ photo }}</button>
    </router-link>
    <PhotoTemplate></PhotoTemplate>
    <button @click="back">Back</button>
    <button @click="follow">Follow</button>
  </div>
</template>

<script>
import PhotoTemplate from "@/components/PhotoTemplate.vue";
export default {
  name: "Photo",
  components: { PhotoTemplate },
  data() {
    return {
      photos: [1, 2, 3, 4]
    };
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    follow() {
      this.$router.go(1);
    }
  }
};
</script>

<style lang="scss" scoped></style>
