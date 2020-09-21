<template>
  <div id="navbar">
    <div style="padding: 0 10vw; display: flex; justify-content: space-between; align-items: center;">
      <a class="nav-item" style="display: flex" v-bind:style="{'flex-direction': displayDirectionTitle}">
        <span style="margin-right: 1em; font-weight: 600">San Giuseppe</span>
        <span style="font-weight: 200">Pão e Vinho</span>
      </a>
      <div v-if="!mobileView" style="display: flex; width: 30%; justify-content: space-between; font-size: 0.9em;">
        <a>Home</a>
        <a>Produtos</a>
        <a>Sobre nós</a>
        <a>Contato</a>
      </div>
      <a v-on:click="showMobileMenu = true" v-if="mobileView">
        <font-awesome-icon style="font-size: 1.5em;" :icon="['fas', 'bars']"></font-awesome-icon>
      </a>
    </div>
    <transition name="menu">
      <div v-if="showMobileMenu" id="mobileMenu">
        <a v-on:click="showMobileMenu = false" v-if="mobileView">
          <img style="height: 5em; position: absolute; right: 0; top: 0;"
            src="../assets/icons/times.svg"/>
        </a>
        <div style="padding: 10vh 0;">
          <h2>Menu</h2>
          <img style="margin-bottom: 5em" src="../assets/icons/brackets-small.svg" />
          <ul>
            <li>Home</li>
            <li>Produtos</li>
            <li>Sobre nós</li>
            <li>Contato</li>
          </ul>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data: () => {
    return {
      displayDirectionTitle: 'row',
      showMobileMenu: false,
    }
  },
  props: {
    mobileView: Boolean
  },
  created() {
    this.displayDirectionTitle = this.mobileView ? 'column' : 'row';
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .nav-item {
    text-decoration: none;
  }
  #navbar {
    position: fixed;
    top: 0;
    left: 0;
    padding: 1em 0;
    width: 100vw;
    background-color: #EBD157;
  }

  #mobileMenu {
    width: fit-content;
    padding: 0 3em;
    height: 100vh;
    position: absolute;
    top: 0;
    right: 0;
    background-color: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    text-align: center;
  }
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
  li {
    margin-bottom: 1em;
    text-decoration: none;
    font-size: 1.2em;
  }

  .menu-enter-active {
    animation: slideLeft .25s; 
  }

  .menu-leave-active {
    animation: slideLeft .25s reverse;
  }

  @keyframes slideLeft {
    from {
      right: -50vw;
    }
    to {
      right: 0;
    }
  }
</style>
