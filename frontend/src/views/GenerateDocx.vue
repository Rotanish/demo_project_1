<template lang="pug">
v-container
  v-row
    v-col
      .text-center.text-h4.my-6 Автоматическая генерация документов
      GenForm

</template>

<script>
import GenForm from "@/components/GenForm.vue"
  export default {
    name: "GenerateDocx",

    components: {
      GenForm
    },

    data: () => ({
    }),

  computed: {
  },

  methods: {
  },
};
</script>

<style lang='sass' scoped>

</style>
