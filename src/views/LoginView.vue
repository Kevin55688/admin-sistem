<template>
  <!-- <HelloWorld /> -->
  <LoginComponent/>
</template>

<script>
import { defineComponent } from 'vue';

// Components
// import HelloWorld from '../components/HelloWorld.vue';
import LoginComponent from '../components/LoginComponent.vue'

export default defineComponent({
  name: 'LoginView',

  components: {
    LoginComponent
  },
});
</script>