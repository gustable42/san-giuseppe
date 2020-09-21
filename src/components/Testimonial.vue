<template>
  <div class="testimonial" style="text-align: center; display: flex; flex-direction: column">
    <img src="../assets/icons/brackets-large.svg" />
    <div id="testimonial-info">
      <p class="handwritting text-light" style="font-size: 1.7em;">
        "{{quotation}}"
      </p>
      <span class="text-light" style="display: flex; width: fit-content; margin-left: auto;">{{author}}</span>
    </div>
    <img src="../assets/icons/brackets-large.svg" />
  </div>
</template>

<script>
export default {
  name: 'Testimonial',
  props: {
    quotation: String,
    author: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#testimonial-info {
  width: 50%;
  margin: auto;
  padding: 2.5em 0;
}
</style>
