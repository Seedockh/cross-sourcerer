<template>
  <div id="languages">
    <h2>LANGUAGES</h2>
    <ApolloQuery v-if="viewer" class="apollo" :query="require('../../graphql/Languages.gql')" :variables="{id: viewer.id}">
      <template slot-scope="{ result: { loading, error, data } }">
        <div v-if="error" class="error">{{ error }}</div>
        <div v-else-if="data" class="result">
          <LanguagesArray :languages="data.viewer.repositories.edges" />
        </div>
      </template>
    </ApolloQuery>
  </div>
</template>

<script>
import gql from 'graphql-tag'
import LanguagesArray from './LanguagesArray'

// languages 6 +commits, color, commits, chart camember
export default {
  name: 'langues',
  components: { LanguagesArray },
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

<style lang="css">
#languages {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 3em 0;
}
</style>
