<template>
  <div id="wrapper">
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
  </div>
</template>

<script>
  import Auth from './Auth'
// 657073476fdd7ac4241a236326582a6bdb211698
  export default {
    name: 'home',
    components: { Auth }
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body { font-family: 'Source Sans Pro', sans-serif; }

  #wrapper {
    background:
      radial-gradient(
        ellipse at top left,
        rgba(255, 255, 255, 1) 40%,
        rgba(229, 229, 229, .9) 100%
      );
    height: 100vh;
    padding: 60px 80px;
    width: 100%;
    min-width: 500px;
    min-height: 500px;
  }

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
