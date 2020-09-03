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
  }
};
</script>

<style lang="scss" scoped></style>
