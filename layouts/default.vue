<template>
  <div>
    <Nuxt class="body-container" />
    <bl-footer style="position:relative;margin-top:-60px;"></bl-footer>
  </div>
</template>

<script>
import BlFooter from '@/components/Footer.vue'
export default {
  components: {
    BlFooter
  }
}
</script>

<style>
.body-container {
  max-width: 720px;
  min-width: 320px;
  box-sizing: border-box;
  margin: 0 auto;
  min-height: 100vh;
  padding-bottom: 60px;
}
@media screen  and (max-width: 720px){
  .body-container {
    padding: 0 20px 60px 20px;
  }
}
</style>
