<template lang="pug">
.pa-6.text-center.mx-auto.my-6
  v-form(ref="form" v-model="valid" lazy-validation @submit.prevent="submit").my-4
    v-select(
      v-model="selectForm"
      :items="typesForm"
      :rules="[(v) => !!v || 'Выберите какой документ генерировать']"
      label="Документ"
      key="DocType"
      required
    )
    div(v-if="selectForm")
      .block.my-8.px-4 
        v-row.justify-center
          .py-4.text-h6 Документ
        v-row
          v-col(cols="12" md="4")
            DataField(
              v-model="dateStatement"
              label="Дата документа"
              key="dateStatement"
            )
          v-col(cols="12" md="4" v-if="['demo_0','demo_1'].indexOf(selectForm) !== -1")
            v-text-field(
              v-model="data1"
              :rules="[(v) => !!v || '']"
              label="Данные1"
              key="data1"
              required
              outlined
            )
          v-col(cols="12" md="4" v-if="['demo_0'].indexOf(selectForm) !== -1")
            v-text-field(
              v-model="data2"
              :rules="[(v) => !!v || '']"
              label="Данные2"
              key="data2"
              required
              outlined
            )
          v-col(cols="12" md="4" v-if="['demo_1'].indexOf(selectForm) !== -1")
            v-text-field(
              v-model="data3"
              :rules="[(v) => !!v || '']"
              label="Данные3"
              key="data3"
              required
              outlined
            )
          
      div(v-if="['demo_0'].indexOf(selectForm) !== -1").block.my-8.px-4 
        v-row.justify-center
          .py-4.text-h6 Дополнитеьно
        v-row(v-for="(PR, ind) in addField" :key="ind")
          v-col(cols="12" md="4")
            v-text-field(
              v-model="PR.vneseno"
              label="Сумма"
              :rules="[(v) => !!(v) || '', (v) => !!Number(v) || 'Используйте только цифры']"
              key="PR.vneseno"
              append-icon="mdi-currency-rub"
              outlined
            )
          v-col(cols="12" md="4")
            DataField(
              v-model="PR.date"
              label="Дата"
              key="PR.date"
            )
          v-col(cols="12" md="4")
            v-text-field(
              v-model="PR.description"
              :rules="[(v) => !!v || '']"
              label="Описание"
              persistent-hint
              key="PR.description"
              outlined
            )
        v-row.justify-center
          v-col(cols="12" md="4")
            v-btn(color="#aea" @click="addField.push({vneseno: null,date:null,description:null})") Добавить демо
          v-col(cols="12" md="4")
            v-btn(color="#eaa" @click="addField.pop()") Удалить демо
      
      v-btn(color="success" type="submit" :loading="loading").py-10.px-10.text-h6 Скачать
  v-dialog(
      v-model="dialog"
      width="500"
    )
    v-card.secondary
      v-card-title.headline.lighten-2 {{ dialogText }}
      v-divider
      v-card-actions
        v-spacer
        v-btn(
          color="accent"
          @click="dialog = false"
        ) Ok
</template>

<script>
import BackendApi from '@/utils/BackendApi.js'
import DataField from '@/components/DataField'

export default {
  name: 'GenForm',

  components: {
    DataField,
  },

  data: (vm) => ({
    loading: false,
    dialog: false,
    dialogText: '',
    valid: true,

    selectForm: null,
    typesForm: ['demo_0', 'demo_1'],

    dateStatement: vm.formatDate(new Date().toISOString().substr(0, 10)),
    date1: null,
    date2: null,
    date3: null,

    addField: [],
  }),

  methods: {
    serverError(text = 'Server error. Please try again later') {
      this.loading = false
      this.dialogText = text
      this.dialog = true
    },

    formatDate(date) {
      if (!date) return null

      let [year, month, day] = date.split('-')
      return `${day}.${month}.${year}`
    },

    submit() {
      console.log('validate')
      if (this.$refs.form.validate()) {
        console.log('download')
        this.loading = true
        const data = {
          type_doc: this.selectForm,
          date1: this.date1,
          date2: this.date2,
          date3: this.date3,
          дата_заявления: this.dateStatement,
          приходы: this.addField,
        }
        BackendApi('post', '/api/generate', data)
          .then((res) => {
            if (res.status == 200) {
              res
                .blob()
                .then((blob) => {
                  console.log(blob)
                  let url = URL.createObjectURL(blob)
                  let a = document.createElement('a')
                  a.href = url
                  a.download =
                    this.selectForm + ' ' + this.dateStatement + '.docx'
                  document.body.appendChild(a)
                  a.click()
                  a.remove()
                  this.loading = false
                })
                .catch((e) => {
                  console.log(e)
                })
            } else {
              console.log('bad server')
              this.loading = false
              this.serverError(
                'Ошибка на сервере либо при подключении к серверу, проверьте поля и попробуйте ещё раз.'
              )
            }
          })
          .catch((e) => {
            console.log('error')
            console.log(e)
            this.loading = false
            this.serverError(
              'Ошибка генерации, проверьте поля и попробуйте ещё раз. Подробно: ' +
                e
            )
          })
      }
    },
  },
}
</script>

<style lang="sass" scoped>
.block
  background: #7772
</style>
