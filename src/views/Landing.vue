<script setup>
import Two from 'two.js'
import { onMounted, ref } from 'vue'

onMounted(() => {
  const two = new Two({
    domElement: document.getElementById("screen"),
    fullscreen: true,
    autostart: true
  })
  two.update()
})

</script>

<template>
  <div class="landing-show full-screen">
    <div class="show">
      <div class="title-wrap">
        <div class="title">
          <div class="large">The True Revolution of <br>
            Decentralized Data Indexing</div>
          <hr>
          <p>Powered by MuriData</p>
        </div>
      </div>
    </div>
    <canvas id="screen"></canvas>
  </div>
</template>


<style lang="scss">
.landing-show {
  background: linear-gradient(69deg, #29d7dc 0%, #041034 100%);

  .show {
    color: #fff;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 90%;
    margin: auto;
    text-align: left;
    height: fit-content;
    .title-wrap {
      display: flex;
      align-content: center;
      align-items: center;
      flex-direction: row;
      justify-content: flex-end;
      .title {
        display: block;
        .large {
          font-size: 2.5rem;
        }
      }
    }
  }
}
.full-screen {
  height: 100vh;
}
</style>