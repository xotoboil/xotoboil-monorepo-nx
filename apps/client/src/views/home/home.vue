<template>
  <div class="home">
    <img alt="Vue logo" src="../../assets/logo.png" />
    <div>
    <UIButton message="Welcome to Your Libs UI Button" />
      
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { UIButton } from '@xotoboil-monorepo-nx/components';

export default defineComponent({
  name: 'Home',
  components: {
    UIButton,
  },
});
</script>
