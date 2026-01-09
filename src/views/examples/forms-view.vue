<template>
  <h1 class="text-2xl">Forms</h1>
  <Tabs value="1" :lazy="true">
    <TabList>
      <Tab value="1">Basic Form 1</Tab>
      <Tab value="2">Basic Form 2</Tab>
      <Tab value="3">Custom Form 1</Tab>
      <Tab value="4">Custom Form 2</Tab>
      <Tab value="5">Custom Form 3</Tab>
      <Tab value="6">Custom Form 4</Tab>
      <Tab value="7">Custom Form 5</Tab>
      <Tab value="8">Custom Form 6</Tab>
    </TabList>
    <TabPanels>
      <TabPanel value="1">
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
            <TestForm1 />
          </template>
        </Card>
      </TabPanel>
      <TabPanel value="2">
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
            <TestForm2 />
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
            <p>It contains a single input text.</p>
          </template>
          <template #content>
            <TestForm3 />
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
            <p>It contains a single input text and a single nested object.</p>
          </template>
          <template #content>
            <TestForm4 />
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
            <p>It contains a single input text and a static array of nested objects.</p>
          </template>
          <template #content>
            <TestForm5 />
          </template>
        </Card>
      </TabPanel>
      <TabPanel value="6">
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
            <TestForm6 />
          </template>
        </Card>
      </TabPanel>
      <TabPanel value="7">
        <Card class="mx-2 my-4">
          <template #title>
            <p>
              This form is using
              <Tag severity="contrast" value="AppInputText" rounded />,
              <Tag severity="contrast" value="AppInputNumber" rounded />,
              <Tag severity="contrast" value="AppSelect" rounded />,
              <Tag severity="contrast" value="AppMultiSelect" rounded />,
              <Tag severity="contrast" value="VeeValidate Forms" rounded />, and
              <Tag severity="contrast" value="Zod Schema Validation" rounded />.
            </p>
            <p>It contains various required and optional form elements.</p>
          </template>
          <template #content>
            <TestForm7 />
          </template>
        </Card>
      </TabPanel>
      <TabPanel value="8">
        <Card class="mx-2 my-4">
          <template #title>
            <p>
              This form is using
              <Tag severity="contrast" value="AppInputText" rounded />,
              <Tag severity="contrast" value="VeeValidate Forms" rounded />, and
              <Tag severity="contrast" value="Zod Schema Validation" rounded />.
            </p>
            <p>It contains a single input text and hidden input data.</p>
          </template>
          <template #content>
            <TestForm8 />
          </template>
        </Card>
      </TabPanel>
    </TabPanels>
  </Tabs>
</template>

<script setup lang="ts">
import TestForm1 from '@app/features/forms/components/test-form1.vue'
import TestForm2 from '@app/features/forms/components/test-form2.vue'
import TestForm3 from '@app/features/forms/components/test-form3.vue'
import TestForm4 from '@app/features/forms/components/test-form4.vue'
import TestForm5 from '@app/features/forms/components/test-form5.vue'
import TestForm6 from '@app/features/forms/components/test-form6.vue'
import TestForm7 from '@app/features/forms/components/test-form7.vue'
import TestForm8 from '@app/features/forms/components/test-form8.vue'
</script>
