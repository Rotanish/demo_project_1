<template lang="pug">
v-menu(
  v-model="md"
  :close-on-content-click="false"
  transition="scale-transition"
  offset-y
  max-width="300px"
  min-width="auto"
)
  template(v-slot:activator="{ on, attrs }")
    v-text-field(
      v-model="v0"
      :rules="[(v) => !!v || '']"
      :label="label"
      hint="DD.MM.YYYY"
      persistent-hint
      append-icon="mdi-calendar"
      v-bind="attrs"
      @input="md = true; inputText()"
      @blur="v0=formatDate(v1); inputText()"
      @keydown.enter="md=false; v0=formatDate(v1); inputText()"
      v-on="on"
      required
      outlined
    )
  v-date-picker(v-model="v1" key="v1" no-title @input="md=false; inputDate()" locale="ru-ru")
</template>

<script>
export default {
  props: ['value', 'label'],

  data: () => ({
    md: null,
    v0: null,
    v1: null,
  }),

  methods: {
    inputText() {
      this.v1 = this.parseDate(this.v0)
      this.$emit('input', this.v0)
    },

    inputDate() {
      this.v0 = this.formatDate(this.v1)
      this.$emit('input', this.v0)
    },

    formatDate(date) {
      if (!date) return null
      let [year, month, day] = date.split('-')
      return `${day}.${month}.${year}`
    },

    parseDate(date) {
      if (!date) return null
      let [day, month, year] = date.split('.')
      if (Number(year) < 1000) {
        year = Number(year) + 2000
      }
      return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
    },
  },

  watch: {
    v0() {
      this.v1 = this.parseDate(this.v0)
      this.$emit('input', this.v0)
    },
  },
}
</script>
