<template>
  <div class="show-container">{{userId}}</div>
</template>

<script setup lang='ts'>
import { useRoute } from 'vue-router'
import { onMounted, ref, watch } from 'vue'

const route = useRoute();
const userId = ref(null);

async function fetchUser() {
  const resp = await fetch('http://localhost:5173/src/assets/user-data.json')
  console.log(await resp.json())
  
}
function getId() {
  userId.value = route.params.id
}

watch(userId, (newE, OldE) => {
    getId()
  if(newE !== OldE) {
    console.log(newE);
  }
  
})

onMounted(() => {
  fetchUser()
  getId()
  console.log(userId.value);
})
  

</script>

<style scoped>
.show-container {
  height: 500px;
  width: 500px;
  border: 2px solid rebeccapurple;
}
</style>