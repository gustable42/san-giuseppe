<template>
  <div>
    <Navbar style="z-index: 10; width: 100%; position: 0;" :mobile-view="mobileView"/>
    <section style="height: 100vh; width: 100%;" v-bind:style="mobileView && {'padding-left': '0'}">
      <div id="cover-vignette"></div>
      <img id="cover-image" v-bind:style="mobileView && {'object-position': 'center'}" src="./assets/imgs/primeira-missa.jpg" />
      <div id="cover-text" v-bind:style="mobileView && {margin: 'auto', 'text-align': 'center', padding: '30vh 0 0 0'}" class="text-light">
        <h1 class="text-light" style="font-size: 2em; margin-bottom: 0.2em;">Partículas e vinhos canônicos</h1>
        <h3 style="margin: 0 0 2em; font-weight: 500;">
          <span class="text-light">Que cabem no seu orçamento e</span><br/>
          <span class="text-light">nunca vão faltar na sua sacristia</span>
        </h3>
        <button class="btn btn-dark" v-bind:style="mobileView && {margin: 'auto'}">Assine agora</button>
      </div>
    </section>
    <section style="height: 60vh;">
      <Testimonial style="margin: auto 0"
      quotation="Nos fornecem partículas e vinhos de extrema qualidade por um preço
        muito competitivo e sempre entregando no 4º dia de cada mês" 
      author="Padre Delson Santos"/>
    </section>
    <section v-bind:style="mobileView && {'height': 'fit-content'}" style="height: 45vh; padding-bottom: 0">
      <div style="display: flex; height: 100%;">
        <div v-bind:style="mobileView && {width: '100% !important'}" style="width: 50%; position: relative;">
          <div v-bind:style="mobileView && {'position': 'relative'}" style="position: absolute; bottom: 0;">
            <h2 class="text-light" style="text-align: left">
              Para quem quer custo-benefício
            </h2>
            <p class="text-light" style="padding-left: 1em; padding-bottom: 3em;">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vulputate a orci in lacinia. Praesent eget ante ut nisl efficitur tincidunt eget in quam. Integer scelerisque, ipsum vitae ultricies ultrices, leo lectus facilisis nunc, vitae laoreet velit risus quis risus. Ut convallis libero eu ultricies condimentum. Proin nec faucibus magna. Quisque placerat nibh ac felis consectetur, efficitur finibus quam fermentum. Ut vitae eleifend dolor, a blandit mauris. Nunc quis malesuada metus, sit amet iaculis sapien.
            </p>
          </div>
        </div>
        <div v-if="!mobileView" style="width: 50%; position: relative;">
          <img src="./assets/imgs/primeira-missa.jpg" class="img-section"/>
        </div>
      </div>
    </section>
    <section style="background-color: #D7DDDE; height: 45vh; text-align: center; padding-bottom: 0; position: relative; margin-bottom: -1em;">
      <div>
        <div v-bind:style="mobileView && {'width': '100%'}" style="width: 50%;">
          <div v-bind:style="mobileView && {'flex-direction': 'column', 'align-items': 'center'}" style="display: flex; justify-content: space-between; width: 60%; margin: 0 auto 2em;">
            <div v-bind:style="mobileView && {'width': 'fit-content', 'margin-bottom': '1em'}" class="badge" style="background-color: #1D41B9">
              <span class="text-light" style="display: flex"><font-awesome-icon style="font-size: 1.5em; margin-right: 0.2em" :icon="['fas', 'arrow-up']"></font-awesome-icon>Qualidade</span>
            </div>
            <div v-bind:style="mobileView && {'width': 'fit-content'}" class="badge" style="background-color: #1D41B9">
              <span class="text-light" v-bind:style="mobileView && {'width': 'fit-content'}" style="display: flex"><font-awesome-icon style="font-size: 1.5em; margin-right: 0.2em" :icon="['fas', 'arrow-down']"></font-awesome-icon>Custos</span>
            </div>
          </div>
          <button class="btn btn-light" style="margin: auto; display: flex;">Assine agora</button>
        </div>
      </div>
      <div v-bind:style="mobileView && {'width': '80vw'}" style="display: flex; bottom: 0; position: absolute; width: 80vw;">
        <img v-bind:style="mobileView && {width: '100%', height: 'auto'}" src="./assets/icons/brackets-large-dark.svg" style="margin: 0 auto; width: auto;"/>
      </div>
    </section>
    <section v-bind:style="mobileView && {'height': 'fit-content'}" style="background-color: #D7DDDE; height: 45vh; padding-bottom: 0;">
      <div style="display: flex; height: 100%;">
        <div v-if="!mobileView" style="width: 50%; position: relative;">
          <img src="./assets/imgs/primeira-missa.jpg" class="img-section"/>
        </div>
        <div v-bind:style="mobileView && {width: '100% !important'}" style="width: 50%; position: relative;">
          <div v-bind:style="mobileView && {'position': 'relative', 'text-align': 'left'}" style="position: absolute; bottom: 0; text-align: right">
            <h2 class="text-dark">
              Para quem quer custo-benefício
            </h2>
            <p v-bind:style="mobileView && {'padding': '0 0 1em 1em'}" class="text-dark" style="padding-right: 1em; padding-bottom: 1em;">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vulputate a orci in lacinia. Praesent eget ante ut nisl efficitur tincidunt eget in quam. Integer scelerisque, ipsum vitae ultricies ultrices, leo lectus facilisis nunc, vitae laoreet velit risus quis risus. Ut convallis libero eu ultricies condimentum. Proin nec faucibus magna. Quisque placerat nibh ac felis consectetur, efficitur finibus quam fermentum. Ut vitae eleifend dolor, a blandit mauris. Nunc quis malesuada metus, sit amet iaculis sapien.
            </p>
          </div>
        </div>
      </div>
    </section>
     <section style="height: 45vh; text-align: center; padding-bottom: 0; position: relative; margin-bottom: -1em;">
        <div style="display: flex; height: 100%;">
          <div v-if="!mobileView" style="width: 50%"></div>
          <div v-bind:style="mobileView && {'width': '100%'}" style="width: 50%">
            <div v-bind:style="mobileView && {'flex-direction': 'column', 'align-items': 'center', margin: '0 auto 2em'}" style="display: flex; justify-content: space-between; width: 60%; margin: 0 auto 2em;">
              <div v-bind:style="mobileView && {'width': 'fit-content', 'margin-bottom': '1em'}" class="badge" style="background-color: #FDD412">
                <span class="text-dark" v-bind:style="mobileView && {'width': 'fit-content'}" style="display: flex"><font-awesome-icon style="font-size: 1.5em; margin-right: 0.2em" :icon="['fas', 'arrow-up']"></font-awesome-icon>Comodidade</span>
              </div>
              <div  v-bind:style="mobileView && {'width': 'fit-content'}" class="badge" style="background-color: #FDD412">
                <span class="text-dark" v-bind:style="mobileView && {'width': 'fit-content'}" style="display: flex"><font-awesome-icon style="font-size: 1.5em; margin-right: 0.2em" :icon="['fas', 'arrow-down']"></font-awesome-icon>Imprevistos</span>
              </div>
            </div>
            <button class="btn btn-dark" style="margin: auto; display: flex;">Assine agora</button>
          </div>
        </div>
    </section>
    <section style="height: 60vh;">
      <Testimonial style="margin: auto 0"
      quotation="Nos fornecem partículas e vinhos de extrema qualidade por um preço
        muito competitivo e sempre entregando no 4º dia de cada mês" 
      author="Padre Delson Santos"/>
    </section>
    <section style="height: fit-content; width: 80vw;">
      <PriceSimulator :mobile-view="mobileView"></PriceSimulator>
    </section>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Testimonial from './components/Testimonial.vue'
import PriceSimulator from './components/PriceSimulator.vue'

export default {
  name: 'App',
  data: () => {
    return {
      mobileView: Boolean
    }
  },
  components: {
    Navbar,
    Testimonial,
    PriceSimulator
  },
  methods: {
    handleView() {
      this.mobileView = window.innerWidth <= 990;
    }
  },
  created() {
    this.handleView();
  }
}
</script>

<style>
#cover-image {
  width: 100vw;
  height: 100vh;
  object-position: left top;
  object-fit: cover;
  z-index: 1;
  position: absolute;
  left: 0;
  top: 0;
  overflow: hidden;
}

#cover-vignette {
  width: 100vw;
  height: 100vh;
  opacity: 0.55;
  z-index: 2;
  background-color: #232829;
  position: absolute;
  left: 0;
  top: 0;
  overflow: hidden;
}

#cover-text {
  position: absolute;
  z-index: 9;
  padding: 20% 0 0 2em;
  margin-left: 40vw;
  display: flex;
  flex-direction: column;
}

.img-section {
  width: 70%;
  height: 70vh;
  position: absolute;
  top: 10vh;
  left: 15%;
  display: block;
  object-fit: cover;
  z-index: 9;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

section {
  padding: 4em 10vw;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
</style>
