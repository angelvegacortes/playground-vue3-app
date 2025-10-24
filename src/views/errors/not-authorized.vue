<template>
  <Card>
    <template #title>Unauthorized</template>
    <template #content>
      <p class="m-1">User does not have access to this page</p>
      <Button as="RouterLink" to="/" label="Back to home page" severity="secondary" size="small" />
    </template>
  </Card>
</template>
