<script setup lang="ts">
import CarValidate from '../components/CarValidate.vue'
</script>

<template>
  <CarValidate :plate="carPlate" />
</template>

<script lang="ts">
export default {
  name: 'About',
  data() {
    return {
      carPlate: 'XYZ123'
    }
  }
}
</script>