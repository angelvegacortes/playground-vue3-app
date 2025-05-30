<template>
  <Card>
    <template #title>Unauthorized</template>
    <template #content>
      <p class="m-1">User does not have access to this page</p>
      <Button asChild v-slot="slotProps" severity="secondary" size="small">
        <RouterLink to="/" :class="slotProps.class">Back to home page</RouterLink>
      </Button>
    </template>
  </Card>
</template>
