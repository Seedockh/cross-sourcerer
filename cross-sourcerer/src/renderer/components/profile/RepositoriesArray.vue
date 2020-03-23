<template>
  <div class="repos-array">
    <div class="repos-array-headers row">
      <ul>
        <li>#</li>
        <li>Repository</li>
        <li>Commits</li>
        <li>Team</li>
        <li>Language</li>
        <li>Timeline</li>
      </ul>
    </div>
    <div class="repos-array-item row" v-for="repo in listableRepos">
      <ul>
        <li>{{ repo.id }}</li>
        <li>
          <p>{{ repo.name }}</p>
          <p>{{ repo.description }}</p>
        </li>
        <li>{{ repo.totalCommits }}</li>
        <li>{{ repo.team }}</li>
        <li>
          <p v-if="repo.primaryLanguage">{{ repo.primaryLanguage.name }}</p>
          <p v-else>Unknown</p>
        </li>
        <li>{{ repo.owner }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'repositories-array',
  props: ['repositories'],
  data () {
    return {
      listableRepos: []
    }
  },
  mounted () {
    this.repositories.map(repository => {
      const repo = { ...repository.node }
      this.listableRepos.push({
        id: this.listableRepos.length + 1,
        name: repo.name,
        description: repo.description,
        team: repo.collaborators ? repo.collaborators.totalCount : 1,
        owner: repo.owner ? repo.owner.login : null,
        owerAvatar: repo.owner ? repo.owner.avatarUrl : null,
        primaryLanguage: repo.primaryLanguage,
        totalCommits: repo.defaultBranchRef.target.history.totalCount
      })
    })
  }
}
</script>

<style lang="css">
.repos-array {
  margin-top: 1em;
  border-radius: 5px;
  box-shadow: 1px 1px 2px grey;
  min-width: 700px;
}
  .repos-array .row {
    height: 50px;
  }
    .repos-array ul {
      display: flex;
      list-style: none;
      justify-content: space-around;
      align-items: center;
      width: 100%;
      height: 100%;
    }
      .repos-array .repos-array-headers li {
        font-size: 13px;
        font-family: Courier, sans-serif;
      }
    .row:nth-child(even) {
      background: #f0f4f1;
    }
    .row:nth-child(odd) {
      background: #e3eae5;
    }
</style>
