import BackendApi from '@/utils/BackendApi.js'

export default {
  state: {
    userLogin: '',
    auth: false,
    isAdmin: false,
    csrf: '',
  },
  getters: {
    userLogin(state) {
      return state.userLogin
    },
    auth(state) {
      return state.auth
    },
    isAdmin(state) {
      return state.isAdmin
    },
    csrf(state) {
      return state.csrf
    },
  },
  mutations: {
    updateUserLogin(state, { login, auth, isAdmin }) {
      state.userLogin = login
      state.auth = auth
      state.isAdmin = isAdmin
    },
    updateCsrf(state, csrf) {
      state.csrf = csrf
    },
  },
  actions: {
    async getCsrfToken({ commit, state }) {
      if (state.csrf === '') {
        const csrfRes = await BackendApi('GET', '/api/csrf')
        const csrf = await csrfRes.text()
        commit('updateCsrf', csrf)
      }
    },
    async whoami({ commit }) {
      const res = await BackendApi('GET', '/api/whoami')
      const response = await res.json()
      if (response.status === 'auth') {
        commit('updateUserLogin', { ...response, auth: true })
      }
      if (response.status === 'not auth') {
        commit('updateUserLogin', { ...response, auth: false })
      }
      return response.status
    },
    async loginUser({ state, dispatch }, { login, password }) {
      await dispatch('getCsrfToken')
      const csrf = state.csrf
      const res = await BackendApi('POST', '/api/login', {
        login,
        password,
        csrf,
      })
      const response = await res.text()
      dispatch('whoami')
      return response
    },
    async logout({ state, dispatch }) {
      await dispatch('getCsrfToken')
      const csrf = state.csrf
      const res = await BackendApi('POST', '/api/logout', {
        csrf,
      })
      const response = await res.text()
      dispatch('whoami')
      console.log(response)
      return response
    },
    async logoutAll({ state, dispatch }) {
      await dispatch('getCsrfToken')
      const csrf = state.csrf
      const res = await BackendApi('POST', '/api/logoutall', {
          csrf,
      })
      const response = await res.text()
      dispatch('whoami')
      console.log(response)
      return response
    },
    async registrate(
      { state, dispatch },
      { login, password }
    ) {
      await dispatch('getCsrfToken')
      const csrf = state.csrf
      const res = await BackendApi('POST', '/api/registrate', {
          login,
          password,
          csrf,
      })
      const response = await res.text()
      await dispatch('whoami')
      return response
    },
  },
}
