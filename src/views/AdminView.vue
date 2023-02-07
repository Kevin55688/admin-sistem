<template>
  <Nav/>
  <router-view/>
</template>

<script>
import { defineComponent } from 'vue';

// Components
import Nav from '@/components/NavComponent.vue'

export default defineComponent({
  name: 'AdminView',

  components: {
    Nav
  },
});
</script>
