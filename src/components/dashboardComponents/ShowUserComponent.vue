<template>
  <div class="show-container">{{userId}}</div>
</template>

<script setup lang='ts'>
import { useRoute } from 'vue-router'
import { onMounted, ref } from 'vue'

const route = useRoute();
const userId = ref(null);

async function fetchUser() {
  const resp = await fetch('../../assets/user-data.json')
  console.log(await resp.json())
  
}

onMounted(() => {
  fetchUser()
  userId.value = route.params.id
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