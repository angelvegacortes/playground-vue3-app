<script setup lang="ts">
import ATestChild from '../featureA/ATestChild.vue'
import CTestChild from '../featureC/CTestChild.vue'

</script>

<template>
  <div>
    <span>Feature B parent component.</span>
    <ATestChild />
    <CTestChild />
  </div>
</template>
