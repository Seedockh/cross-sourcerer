<template>
  <div id="repositories">
    <h2>REPOSITORIES</h2>
    <ApolloQuery v-if="viewer" :query="require('../../graphql/Repositories.gql')" :variables="{id: viewer.id}">
      <template slot-scope="{ result: { loading, error, data } }">
        <div v-if="error" class="error">{{ error }}</div>
        <div v-else-if="data" class="repos-array-container">
          <RepositoriesArray :repositories="data.viewer.repositories.edges" />
        </div>
      </template>
    </ApolloQuery>
  </div>
</template>

<script>
import RepositoriesArray from './RepositoriesArray'
import gql from 'graphql-tag'

export default {
  name: 'repositories',
  components: { RepositoriesArray },
  data () {
    return {
      viewer: null
    }
  },
  apollo: {
    viewer: gql`query getUserId {
      viewer {
        id
      }
    }`
  }
}
</script>

<style lang="css" scoped>
  #repositories {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 3em 0 6em 0;
    align-self: center;
  }
</style>
