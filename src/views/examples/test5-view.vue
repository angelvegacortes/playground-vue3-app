<template>
  <Toast />
  <Tabs value="0" :lazy="true">
    <TabList>
      <Tab value="0">Example 1</Tab>
      <Tab value="1">Example 2</Tab>
      <Tab value="2">Example 3</Tab>
      <Tab value="3">Example 4</Tab>
      <Tab value="4">Example 5</Tab>
      <Tab value="5">Example 6</Tab>
    </TabList>
    <TabPanels>
      <TabPanel value="0">
        <Card class="mx-2 my-4">
          <template #title>
            <p>
              This form is using
              <Tag severity="contrast" value="PrimeVue Inputs" rounded />,
              <Tag severity="contrast" value="PrimeVue Forms" rounded />, and
              <Tag severity="contrast" value="Zod Schema Validation" rounded />.
            </p>
            <p>It contains a single input text.</p>
          </template>
          <template #content>
            <ExampleForm1 />
          </template>
        </Card>
      </TabPanel>
      <TabPanel value="1">
        <Card class="mx-2 my-4">
          <template #title>
            <p>
              This form is using
              <Tag severity="contrast" value="PrimeVue Inputs" rounded />,
              <Tag severity="contrast" value="VeeValidate Forms" rounded />, and
              <Tag severity="contrast" value="Zod Schema Validation" rounded />.
            </p>
            <p>It contains a single input text.</p>
          </template>
          <template #content>
            <ExampleForm2 />
          </template>
        </Card>
      </TabPanel>
      <TabPanel value="2">
        <Card class="mx-2 my-4">
          <template #title>
            <p>
              This form is using
              <Tag severity="contrast" value="AppInputText" rounded />,
              <Tag severity="contrast" value="VeeValidate Forms" rounded />, and
              <Tag severity="contrast" value="Zod Schema Validation" rounded />.
            </p>
            <p>It contains a single input text.</p>
          </template>
          <template #content>
            <ExampleForm3 />
          </template>
        </Card>
      </TabPanel>
      <TabPanel value="3">
        <Card class="mx-2 my-4">
          <template #title>
            <p>
              This form is using
              <Tag severity="contrast" value="AppInputText" rounded />,
              <Tag severity="contrast" value="VeeValidate Forms" rounded />, and
              <Tag severity="contrast" value="Zod Schema Validation" rounded />.
            </p>
            <p>It contains a single input text and a single nested object.</p>
          </template>
          <template #content>
            <ExampleForm4 />
          </template>
        </Card>
      </TabPanel>
      <TabPanel value="4">
        <Card class="mx-2 my-4">
          <template #title>
            <p>
              This form is using
              <Tag severity="contrast" value="AppInputText" rounded />,
              <Tag severity="contrast" value="VeeValidate Forms" rounded />, and
              <Tag severity="contrast" value="Zod Schema Validation" rounded />.
            </p>
            <p>It contains a single input text and a static array of nested objects.</p>
          </template>
          <template #content>
            <ExampleForm5 />
          </template>
        </Card>
      </TabPanel>
      <TabPanel value="5">
        <Card class="mx-2 my-4">
          <template #title>
            <p>
              This form is using
              <Tag severity="contrast" value="AppInputText" rounded />,
              <Tag severity="contrast" value="VeeValidate Forms" rounded />, and
              <Tag severity="contrast" value="Zod Schema Validation" rounded />.
            </p>
            <p>It contains a single input text and a dynamic array of nested objects.</p>
          </template>
          <template #content>
            <ExampleForm6 />
          </template>
        </Card>
      </TabPanel>
    </TabPanels>
  </Tabs>
</template>

<script setup lang="ts">
import ExampleForm1 from '@app/features/feature5/example-form1.vue'
import ExampleForm2 from '@app/features/feature5/example-form2.vue'
import ExampleForm3 from '@app/features/feature5/example-form3.vue'
import ExampleForm4 from '@app/features/feature5/example-form4.vue'
import ExampleForm5 from '@app/features/feature5/example-form5.vue'
import ExampleForm6 from '@app/features/feature5/example-form6.vue'
</script>
