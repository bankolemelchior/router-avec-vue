<template>
  <div>
      <h1>Liste des produits</h1>
    <table>
      <thead>
        <tr>
          <th>Nom</th>
          <th>Prix</th>
          <th>Disponible</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td>{{ product?.nom }}</td>
          <td>{{ product?.categorie }}</td>
          <td>{{ product?.disponible }}</td>
          <td>
            <RouterLink :to="`/show-user/${product.id}`">Voir</RouterLink>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang='ts'>
import { onMounted, ref } from 'vue';

const products = ref([])

async function fetchProduct() {
  const resp = await fetch('/products-data.json')
  products.value = await resp.json()
  console.log(products.value)
  
}

onMounted(() => {
  fetchProduct()
})

</script>

<style scoped>

</style>