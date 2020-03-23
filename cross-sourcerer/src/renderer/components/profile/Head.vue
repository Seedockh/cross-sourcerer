<template>
  <div id="profileHead">
    <ApolloQuery class="apollo-profileHead" :query="require('../../graphql/Head.gql')">
      <template slot-scope="{ result: { loading, error, data } }">
        <div v-if="error" class="error">{{ error }}</div>
        <div v-else-if="data" class="result">
          <div class="titles">
            <img :src="data.viewer.avatarUrl" alt="Avatar URL">
            <p class="text-bold">{{ data.viewer.login }}</p>
          </div>
          <div class="cardsBar">
            <div class="card">
              <p>Commits</p>
              <ApolloQuery :query="require('../../graphql/GetCommits.gql')" :variables="{id: data.viewer.id}">
                <template slot-scope="{ result: { loading, error, data }, commits }">
                  <div v-if="error" class="error">{{ error }}</div>
                  <div v-else-if="data" class="result">
                    <Commits :repositories="data.viewer.repositories.edges" />
                  </div>
                  <div v-else class="result">...</div>
                </template>
              </ApolloQuery>
            </div>
            <div class="card">
              <p>Repositories</p>
              <p class="text-bold">{{ data.viewer.repositories.totalCount }}</p>
            </div>
            <div class="card">
              <p>Lines of code</p>
              <ApolloQuery :query="require('../../graphql/GetCommits.gql')" :variables="{id: data.viewer.id}">
                <template slot-scope="{ result: { loading, error, data }, commits }">
                  <div v-if="error" class="error">{{ error }}</div>
                  <div v-else-if="data" class="result">
                    <LinesOfCode :repositories="data.viewer.repositories.edges" />
                  </div>
                  <div v-else class="result">...</div>
                </template>
              </ApolloQuery>
            </div>
            <div class="card">
              <p>Followers</p>
              <p class="text-bold">{{ data.viewer.followers.totalCount }}</p>
            </div>
            <div class="card">
              <p>Following</p>
              <p class="text-bold">{{ data.viewer.following.totalCount }}</p>
            </div>
          </div>
        </div>
      </template>
    </ApolloQuery>
  </div>
</template>
<script>
import Commits from './Commits'
import LinesOfCode from './LinesOfCode'
// login, avatUrl, nbCommits, nbRepos, lines of code, followers, following
export default {
  name: 'profileHead',
  components: { Commits, LinesOfCode }
}
</script>
<style lang="css" scoped>
  #profileHead {
    margin-top: -2.5em;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .result {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .titles {
    width: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
    .titles img {
      width: 70px;
      height: 70px;
      border-radius: 50%;
    }
    .cardsBar {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      width: 100%;
    }
      .cardsBar .card {
        margin-left: 1em;
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: inherit;
        text-align: center;
        background: linear-gradient(to top, #e3eae5, white);
        color: #555;
        font-size: 12px;
        font-family: Courier, sans-serif;
        max-height: 50px;
        height: 50px;
        width: 100px;
        border-radius: 3px;
      }
</style>
