<script setup>
</script>

<template>
  <div class="header">
    <div class="link-list">
      <h1 class="title"> MuriData </h1>
      <router-link to="/">
        <div class="header-link">
          Home
        </div>
      </router-link>
      <router-link to="/doc">
        <div class="header-link">
          Document
        </div>
      </router-link>
      <router-link to="/blog">
        <div class="header-link">
          Blog
        </div>
      </router-link>
    </div>
  </div>
</template>

<style lang="scss">
.header {
  color: #fff;
  backdrop-filter: blur(20px);
  border: {
    bottom-left-radius: 2px;
    bottom-right-radius: 2px;
  }
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 10;

  .router-link-active {
    .header-link::after {
      width: 100%;
    }
  }

  a {
    margin-left: 1rem;
    margin-right: 1rem;
  }

  .title {
    margin-left: 2rem;
    margin-right: 2rem;
  }

  .header-link {
    transition: opacity 0.4s, color 0.4s;
    color: #fff;
    cursor: pointer;
    text-decoration: none;

    &:hover {
      opacity: 0.8;
      color: #ddd;

      &::after {
        width: 100%;
      }
    }

    &::after {
      width: 0;
      content: "";
      display: block;
      margin-top: -3px;
      transition: all .2s;
      border-bottom: 1px solid #fff;
    }
  }

  .link-list {
    height: 100%;
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
  }
}
</style>