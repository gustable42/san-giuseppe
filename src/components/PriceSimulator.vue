<template>
  <div style="display: flex; flex-direction: column; width: 80vw; padding-bottom: 10vh;">
    <div style="width: 100%">
      <h2 class="text-light" style="text-align: center; margin-bottom: 2em; font-size: 2em;">
        Simule sua bimestralidade
      </h2>
    </div>
    <div style="display: flex; flex-flow: row wrap; ">
      <div v-bind:style="mobileView && {'flex-basis': '100%'}" style="display: flex; flex-basis:66%; flex-flow: row wrap; justify-content: flex-start;">
        <ProductSelection
          label="Quantos pacotes com mil partículas são usados em 2 meses?"
          fileName="particulas.jpg"
          :min-value="1"
          :max-value="30"
          :initial-value="10"
          :mobile-view="mobileView">
        </ProductSelection>
        <ProductSelection
          label="Quantos litros de vinho são consumidos em 2 meses?"
          fileName="vinhos.jpg"
          :min-value="1"
          :max-value="20"
          :initial-value="5"
          :mobile-view="mobileView">
        </ProductSelection>
        <ProductSelection
          label="Quantos litros de parafina são usados em 2 meses?"
          fileName="vinhos.jpg"
          :min-value="0"
          :max-value="10"
          :initial-value="3"
          :mobile-view="mobileView">
        </ProductSelection>
        <ProductSelection
          label="Quantas velas são usadas em 2 meses?"
          fileName="particulas.jpg"
          :min-value="0"
          :max-value="12"
          :initial-value="4"
          :mobile-view="mobileView">
        </ProductSelection>
      </div>
      <div v-bind:style="mobileView && {'flex-basis': '100%', 'margin-top': '3em'}" style="flex-basis: 33%; display: flex; flex-direction: column">
        <div style="margin: auto 0">
          <div style="display: flex; font-size:0.9em">
            <ul class="text-light">
              <li>25 mil partículas</li>
              <li>3 litros de vinho</li>
              <li>2 garrafas de parafina</li>
              <li>6 velas para altar</li>
            </ul>
            <ul class="text-light">
              <li>Entrega na sua paróquia</li>
              <li>Sem atrasos</li>
              <li>Sem imprevistos</li>
              <li>Excelente qualidade</li>
            </ul>
          </div>
          <div class="text-light" style="text-align: center; margin-top: 2em;">
            <span class="text-light">Seu plano será de:</span>
            <h2 class="text-light" style="margin-top: 0.5em">R$200,00 / bimestre</h2>
          </div>
          <div style="text-align: center; margin-top: 2em;">
            <span class="text-light">Economize até:</span>
            <h2 class="text-light" style="margin-top: 0.5em">R$500 <span class="text-light" style="font-weight: 300">por ano</span></h2>
          </div>
          <div style="margin-top: 3em; width: 100%; display: flex;">
            <button class="btn btn-dark" style="margin: auto">Assine agora</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductSelection from './ProductSelection.vue'
export default {
  name: 'PriceSimulator',
  components: {
    ProductSelection
  },
  data: () => {
    return {
      
    }
  },
  props: {
    mobileView: Boolean
  },
  created() {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  li {
    margin-bottom: 0.5em;
  }
</style>
