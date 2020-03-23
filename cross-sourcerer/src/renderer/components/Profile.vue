<template>
  <div class="profile">
    <ApolloQuery class="apollo-head" :query="require('../graphql/InitGithub.gql')">
      <template slot-scope="{ result: { loading, error, data } }">
        <div v-if="error" class="error">{{ error }}</div>
        <div v-else-if="data" class="result">
          <h1>{{ data.viewer.name }}</h1>
          <p class="status" v-if="data.viewer.status">« {{ data.viewer.status.message }} »</p>
          <p>{{ data.viewer.location}}</p>
        </div>
      </template>
    </ApolloQuery>
    <Head></Head>
    <Overview></Overview>
    <Languages></Languages>
    <!--<FunFacts></FunFacts>-->
    <Repositories></Repositories>
    <button type="submit" name="Logout" class="button logout" v-on:click="logout">Logout</button>
  </div>
</template>

<script>
import Head from './profile/Head'
import Overview from './profile/Overview'
import Languages from './profile/Languages'
import FunFacts from './profile/FunFacts'
import Repositories from './profile/Repositories'

export default {
  name: 'profile',
  components: { Head, Overview, Languages, FunFacts, Repositories },
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
  }

  .apollo-head {
    width: 100%;
    height: 200px;
    min-height: 200px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin: 0;
    padding: 0;
    background-color: #e3eae5;
  }

  .status {
    font-style: italic;
  }

  .result {
    margin: 0;
    padding: 0;
  }
    .result p, .result h1 {
      display: flex;
      align-items: center;
      justify-content: center;
      height: inherit;
    }

  .logout {
    background: rgb(227, 76, 38);
    width: 70px;
    font-size: 14px;
    align-self: flex-end;
    border-radius: 0 20px 20px 0;
    position: fixed;
      top: 0;
      left: 0;
  }
  .logout:hover {
    cursor: pointer;
  }
</style>
