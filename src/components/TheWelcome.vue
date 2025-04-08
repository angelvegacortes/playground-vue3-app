<script setup lang="ts">
import ATestParent from '@/features/featureA/ATestParent.vue'
import BTestParent from '@/features/featureB/BTestParent.vue'
import CTestParent from '@/features/featureC/CTestParent.vue'

const title = import.meta.env.VITE_APP_TITLE;
const subtitle = import.meta.env.VITE_APP_SUBTITLE;

</script>

<template>
  <h1>{{title}}</h1>
  <h2>{{subtitle}}</h2>
  <br />
  <hr/>
  <br />
  <ATestParent />
  <br />
  <BTestParent />
  <br />
  <CTestParent />
  <br />
</template>
