<template>
  <main>
    <div class="left-side">
      <span class="title">
        Welcome to Cross-Sourcerer
      </span>
      <div class="two-columns-block">
        <img src="../assets/logo.png" alt="Github logo">
        <p>This project aims to be a copycat of <a href="https://sourcerer.io/" target="_blank" rel="noreferrer noopener">Sourcerer</a> as a cross-platform Electron App. Github fetching done with GraphQL.</p>
      </div>
    </div>

    <div class="right-side">
      <div class="login">
        <div class="title">Getting Started</div>
        <Auth></Auth>
      </div>
    </div>
  </main>
</template>

<script>
  import Auth from './Auth'
  import Profile from './Profile'

  export default {
    name: 'home',
    components: { Auth, Profile },
    data () {
      return {
        token: localStorage.getItem('token') || null
      }
    },
    mounted () {
      if (this.token) this.$router.push({ name: 'profile' })

      this.$root.$on('setToken', token => {
        this.token = token
      })
    }
  }
</script>

<style>
  main {
    display: flex;
    justify-content: space-between;
  }

  main > div { flex-basis: 50%; }

  .left-side, .right-side {
    display: flex;
    flex-direction: column;
  }
    .left-side img {
      width: 100px;
      height: 100px;
    }

  .two-columns-block {
    display: flex;
    flex-direction: row;
    margin-top: 1em;
  }
    .two-columns-block p {
      padding: 0 2em;
      align-self: center;
    }

  .title {
    color: #2c3e50;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 6px;
  }

  .title.alt {
    font-size: 18px;
    margin-bottom: 10px;
  }
</style>
