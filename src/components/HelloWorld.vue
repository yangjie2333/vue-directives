<template>
  <div class="hello" v-directives="{
      cerrentIndex,
      className:'tab-item',
      activeClass:'active'
    }">
    <div class="tab-item" v-for="(item,index) in list" :key="index"
    @click="cerrentIndex = index"
    >{{ item }}</div>
    <!-- <div class="tab-item" v-for="(item,index) in list" :key="index"
    :class="{'active': cerrentIndex === index}"
    @click="cerrentIndex = index">{{ item }}</div> -->
  </div>
</template>

<script>
import directives from '@/directives/directives.js'
export default {
  name: 'HelloWorld',
  data() {
    return {
      cerrentIndex:0,
      list: ['tab1','tab2','tab3','tab4']
    }
  },
  directives:{
    directives
  }
}
</script>

<style scoped>
.tab-item {
    display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 50px;
  border: 1px solid #bf0;
}
.hello {
  display: flex;
  justify-content: center;
  align-items: center;
}
.active {
  background-color: #f40;
}
</style>
