<template>
  <div class="profile">
    <ApolloQuery v-model="name" :query="require('../graphql/InitGithub.gql')">
      <template slot-scope="{ result: { loading, error, data } }">
        <div v-if="error" class="error apollo">{{ error }}</div>
        <div v-else-if="data" class="result apollo"><h1>✔️ {{ data.viewer.login }}</h1></div>
      </template>
    </ApolloQuery>
    <button type="submit" name="Logout" class="button" v-on:click="logout">Logout</button>
  </div>
</template>

<script>
export default {
  name: 'profile',
  data () {
    return {
      name: ''
    }
  },
  mounted () {
    if (!localStorage.getItem('token')) this.$router.push({ name: 'home' })
  },
  methods: {
    logout () {
      localStorage.removeItem('token')
      this.$router.push({ name: 'home' })
    }
  }
}
</script>

<style scoped>
  .profile {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    align-items: center;
  }
</style>
