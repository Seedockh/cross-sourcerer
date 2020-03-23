<template>
  <main id="home">
    <div class="left-side">
      <h2>
        Welcome to Cross-Sourcerer
      </h2>
      <div class="two-columns-block">
        <img src="../assets/logo.png" alt="Github logo">
        <p>This project aims to be a copycat of <a href="https://sourcerer.io/" target="_blank" rel="noreferrer noopener">Sourcerer</a> as a cross-platform Electron App. Github fetching done with GraphQL.</p>
      </div>
    </div>

    <div class="right-side">
      <div class="login">
        <h2>Getting Started</h2>
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
  #home {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    color: #2c3e50;
    padding: 0 5em;
  }

  #home > div { flex-basis: 50%; }

  a {
    color: rgb(227, 76, 38);
    text-decoration: none;
  }

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
