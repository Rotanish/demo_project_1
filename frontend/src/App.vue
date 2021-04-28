<template lang="pug">
v-app
  v-app-bar(app)
    v-img(alt="лого"
          class="shrink mr-2"
          contain
          src="@/assets/logo.png"
          transition="scale-transition"
          ).h-100

    v-spacer

    v-btn(v-if="auth" @click="logout" color="success").black--text Logout

  v-main(app)
    router-view.h-100
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'App',

  computed: {
    ...mapGetters(['auth']),
  },

  methods: {
    ...mapActions(['logout', 'whoami']),
  },

  created() {
    this.whoami()
  },
}
</script>

<style lang="sass">
*::-webkit-scrollbar-track
  -webkit-box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.0)
  background-color: #514D47

*::-webkit-scrollbar
  width: 10px
  background-color: #514D47

*::-webkit-scrollbar-thumb
  -webkit-box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.0)
  background-color: #b77

.mh-100
  min-height: 100%

.h-100
  height: 100%

.cursor-pointer
  cursor: pointer
</style>
