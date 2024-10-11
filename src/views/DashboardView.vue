<script setup lang='ts'>
import { onMounted } from 'vue';
import { useRouter, useRoute, onBeforeRouteLeave } from 'vue-router'

//Création d'une instance de useRouter
const router = useRouter();
const route = useRoute();

//Fonction de deconnexion
function disconnect() {
    router.replace('/login');
}

onBeforeRouteLeave ((to, from) => {
const answer = window.confirm('Do you really want to leave? you have unsaved changes!')
  if (!answer) return false

}) 

onMounted(() => {
    console.log(route.params);
    
})

</script>


<template>
  <div class="flex ">

    <div class="sidebar">
          <div class="logo">
              <div class="logo-icon"></div>
              DEV-Board
          </div>
          <div class="menu-item active">
              <div class="menu-icon">📊</div>
              <span class="menu-label">Dashboard</span>
              <span class="new-badge">NEW</span>
          </div>
          <div class="category">THEME</div>
          <div class="menu-item">
              <div class="menu-icon">🎨</div>
              <RouterLink to="/users" class="menu-label">Utilisateurs</RouterLink to="">
          </div>
          <div class="menu-item">
              <div class="menu-icon">🔤</div>
              <RouterLink to="/products" class="menu-label">Produits</RouterLink to="">
          </div>
          <div class="category">COMPONENTS</div>
          <div class="menu-item">
              <div class="menu-icon">◻️</div>
              <span class="menu-label">Base</span>
          </div>
          <div class="menu-item">
              <div class="menu-icon">🔘</div>
              <span class="menu-label">Buttons</span>
          </div>
          <div class="menu-item">
              <div class="menu-icon">📈</div>
              <span class="menu-label">Charts</span>
          </div>
          <div class="menu-item">
              <div class="menu-icon">📝</div>
              <span class="menu-label">Forms</span>
          </div>
          <div class="menu-item">
              <div class="menu-icon">🔣</div>
              <span class="menu-label">Icons</span>
          </div>
          <div class="menu-item">
              <div class="menu-icon">🔔</div>
              <span class="menu-label">Notifications</span>
          </div>
          <div class="menu-item">
              <div class="menu-icon">🧩</div>
              <span class="menu-label">Widgets</span>
              <span class="new-badge">NEW</span>
          </div>
          <div class="category">EXTRAS</div>
          <div class="menu-item">
              <div class="menu-icon">📄</div>
              <span class="menu-label">Pages</span>
          </div>
          <div class="menu-item">
              <div class="menu-icon">📚</div>
              <!-- <RouterLink to="/login" class="menu-label">Deconnexion</RouterLink > -->
                <button @click="disconnect">Deconnexion</button>
          </div>
          <!-- <div class="pro-button">Try  PRO</div> -->
      </div>

      <div>
        <h1>Bienvenue, administrateur</h1>
        <strong class="admin-name">{{ $route.params.user }}</strong>
      </div>
  
      <RouterView />
  </div>
</template>


<style scoped>

/* Styles de base */
body, html {
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
        }
        a {
          text-decoration: none;
          color: white;
          display: block;
          font-size: 10%;
        }
        .sidebar {
            width: 250px;
            height: 100vh;
            background-color: #1e2837;
            color: #7f8897;
            padding: 20px;
            box-sizing: border-box;
        }
        .logo {
            display: flex;
            align-items: center;
            color: white;
            font-size: 24px;
            margin-bottom: 30px;
        }
        .logo-icon {
            width: 30px;
            height: 30px;
            background-color: #4587ff;
            border-radius: 8px;
            margin-right: 10px;
        }
        .menu-item {
            display: flex;
            align-items: center;
            padding: 10px 0;
            cursor: pointer;
        }
        .menu-item:hover {
            color: white;
        }
        .menu-item.active {
            color: white;
        }
        .menu-icon {
            width: 20px;
            height: 20px;
            margin-right: 10px;
            opacity: 0.7;
        }
        .menu-label {
            font-size: 14px;
        }
        .category {
            font-size: 12px;
            text-transform: uppercase;
            margin: 20px 0 10px;
            opacity: 0.5;
        }
        .new-badge {
            background-color: #4587ff;
            color: white;
            font-size: 10px;
            padding: 2px 6px;
            border-radius: 10px;
            margin-left: 10px;
        }
        .pro-button {
            background-color: #4587ff;
            color: white;
            text-align: center;
            padding: 10px;
            border-radius: 8px;
            margin-top: 20px;
            cursor: pointer;

          }
          .flex {
            display: flex;
        }

        .admin-name {
            color: #4587ff;
            font-size: 2rem;
            font-weight: bolder;
        }
        
        </style>
