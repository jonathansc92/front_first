<template>
  <div>
      <menu-component />
      <router-view />
  </div>
</template>

<script>
import MenuComponent from './components/MenuComponent.vue'
// import Footer from './components/pierino/Footer.vue'
// import BoxPopUp from './components/pierino/BoxPopUp.vue'

export default{
  components: { MenuComponent }
}
</script>