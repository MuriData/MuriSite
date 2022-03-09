<script setup>
import Two from 'two.js'
import { onMounted, ref } from 'vue'

import shape1 from '../assets/svgs/shape1.svg'
import shape2 from '../assets/svgs/shape2.svg'
import shape3 from '../assets/svgs/shape3.svg'
import shape4 from '../assets/svgs/shape4.svg'
import shape5 from '../assets/svgs/shape5.svg'

var objects = []
var velocity = new Two.Vector(-5, -5)

function loadShapes(two, shapes) {
  return Promise.all(shapes.map(item => {
    return new Promise(resolve => {
      two.load(item, svg => {
        resolve(svg)
      })
    })
  }))
}
function animUpdateFunc(two, items) {
  let addNewObj = () => {
    for (let i = 0; i < Math.random() * 3; i ++) {
      let newShape = items[Math.floor(Math.random() * items.length)].clone()
      newShape.scale = (Math.random() + 1)
      newShape.position = new Two.Vector(two.width * Math.random(),  two.height)
      newShape.velocity = new Two.Vector(0,  -2 * Math.random() * newShape.scale - 2)
      newShape.velocity.r = (Math.random() * Math.PI) / 200
      two.add(newShape)
      objects.push(newShape)
    }
    requestAnimationFrame(() => {
      setTimeout(addNewObj, Math.random()*1200 + 500)
    })
  }
  addNewObj()
  return () => {
    for (let i = 0; i < objects.length; i ++) {
      let shape = objects[i]
      shape.translation.addSelf(shape.velocity)
      shape.rotation += shape.velocity.r
      if (shape.translation.y < -200) {
        two.remove(shape)
        two.release(shape)
        objects.splice(i, 1)
      }
    }
  }
}

onMounted(() => {
  const two = new Two({
    domElement: document.getElementById("screen"),
    fullscreen: true
  })
  loadShapes(two, [shape1, shape2, shape3, shape4, shape5]).then((items) => {
    two.bind('update', animUpdateFunc(two, items))
    two.play()
  })
})

</script>

<template>
  <div class="landing-show full-screen">
    <canvas id="screen"></canvas>
    <div class="show">
      <div class="muri"></div>
      <div class="title-wrap">
        <div class="title">
          <div class="large">The True Revolution of <br>
            Decentralized Data Indexing</div>
          <hr>
          <p>Powered by MuriData</p>
          <n-button type="info" ghost>
            <unicon name="angle-right"></unicon> Comming Soon...
          </n-button>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss">
.landing-show {
  background: linear-gradient(69deg, #29d7dc 0%, #041034 100%);
  padding-top: 4rem;

  .show {
    color: #fff;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    max-width: 1344px;
    width: 100%;
    margin: auto;
    text-align: left;
    display: flex;
    height: fit-content;
    flex-wrap: wrap;
    justify-content: center;

    @media (max-width: 738px) {
      .muri {
        width: 80% !important;
        margin-top: 0 !important;
      }
      .title-wrap {
        border-radius: 10px;
        background: rgba(255,255,255,0.2);
        backdrop-filter: blur(10px);
        padding: 10px;
      }
    }

    .muri {
      width: 60%;
      padding-bottom: 100%;
      margin-top: 30%;
      background-image: url("../assets/image/muri.webp");
      background-position: top;
      background-size: cover;
    }

    .title-wrap {
      display: flex;
      align-content: center;
      align-items: center;
      flex-direction: row;
      justify-content: flex-end;
      .title {
        button {
          color: #fff;
        }
        @media (min-width: 738px) {
          backdrop-filter: blur(5px);
        }
        display: block;
        @media (max-width: 1246px) {
          .large {
            font-size: 1.5rem !important;
          }
        }
        .large {
          font-size: 2.5rem;
        }
      }
    }
  }
}
.full-screen {
  min-height: 100vh;
}
</style>