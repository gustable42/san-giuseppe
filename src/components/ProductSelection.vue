<template>
  <div class="grid-item" v-bind:style="mobileView && {'flex-basis': '100%'}">
    <div class="card" style="width: 90%; margin: 0 5% 5%; height: fit-content;">
      <img :src="getImgUrl()" class="card-img" />
      <div style="padding: 0.75em">
        <span style="height: 2.1em; line-height: 1em;">{{label}}</span>
        <vue-slider
          style="margin-top: 1em;"
          v-model="value"
          :min="minValue"
          :max="maxValue"
          :process-style="{'background-color': '#1D41B9'}"
          :tooltip-style="{'background-color': '#1D41B9', 'border-color': '#1D41B9'}">
        </vue-slider>
      </div>
    </div>
  </div>
</template>

<script>
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/default.css'

export default {
  name: 'ProductSelection',
  data: () => {
    return {
      value: Number
    }
  },
  props: {
    label: String,
    fileName: String,
    initialValue: {
      default: 3,
      type: Number
    },
    mobileView: Boolean,
    minValue: {
      default: 0,
      type: Number
    },
    maxValue: {
      default: 10,
      type: Number
    },
  },
  components: {
    VueSlider
  },
  created() {
    this.value = this.initialValue;
  },
  methods: {
    getImgUrl() {
      return require('../assets/imgs/'+this.fileName);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .card-img {
    object-fit: cover;
    object-position: center;
    width: 100%;
    height: 30vh;
    border-radius: 3px 3px 0 0;
  }
  .grid-item {
    flex-basis: 50%;
    position: relative;
    box-sizing: border-box;
  }
</style>
