<script setup>
import {onMounted, ref} from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter();

const user = ref(null)
const userEmail = ref('');
const password = ref('');
const userExist = ref(false);
const data = ref([]);

async function fetchUser() {
  const resp = await fetch('/user-data.json');
   data.value = await resp.json();
//   console.log(data.value);

}

//Fonction qui connnecte l'utilisateur

//Récupération du user à partir de l'email entrée
//Si le user existe, on vérifie le mot de passe
 function connectUser() {
    //Etape1: Récupération du user et on stock ces info dans la variable user déclarée plus haut
    user.value =  data.value.filter(el => el.email == userEmail.value)
    console.log(user.value)
    //Etape2: Vérification du mot de passe entré par l'utilisateu
  if(user.value.length >0) {//Cette ligne vérifie si le user existe c'est-à-dire notre tableau user.value n'est pas vide
    if(password.value == user.value[0].password) {//vérification du mot de passe
        // router.push('/dashboard');
    }
}
    
}

function submit() {
    connectUser();
    console.log(userEmail.value);
    console.log(password.value);
    // router.push('/dashboard');
}

onMounted(() => {
    fetchUser();
})

</script>


<template>
        <div class="main-container">
            <div class="login-container">
            <h2>Connexion</h2>
            <form @submit.prevent="submit">
                <input type="email" v-model="userEmail" placeholder="Votre email" required>
                <input type="password" v-model="password" placeholder="Password" required>
                <div class="remember-me">
                    <input type="checkbox" id="remember">
                    <label for="remember">Remember me</label>
                </div>
                <!-- <RouterLink to="/dashboard">Se connecter</RouterLink> -->
                <button type="submit">LOGIN</button>
            </form>
            <div class="forgot-password">
                <a href="#">Mot de passe oublier?</a>
            </div>
            <div class="sign-up">
                <p>Vous êtes nouveau ici? <RouterLink to="/sign-up">S'inscrire</RouterLink></p>
            </div>
        </div>
        </div>

</template>


<style scoped>

.main-container {
            margin: 0;
            padding: 0;
            height: 100vh;
            font-family: Arial, sans-serif;
            background: linear-gradient(135deg, #1e3c72, #2a5298);
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .login-container {
            background: rgba(255, 255, 255, 0.1);
            padding: 40px;
            border-radius: 10px;
            backdrop-filter: blur(10px);
            box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
            width: 300px;
        }
        h2 {
            color: white;
            text-align: center;
            margin-bottom: 30px;
        }
        input[type="email"], input[type="password"] {
            width: 100%;
            padding: 10px;
            margin: 10px 0;
            border: none;
            border-radius: 5px;
            background: rgba(255, 255, 255, 0.2);
            color: white;
        }
        input[type="email"]::placeholder, input[type="password"]::placeholder {
            color: rgba(255, 255, 255, 0.7);
        }
        button {
            width: 100%;
            padding: 10px;
            border: none;
            border-radius: 5px;
            background-color: #4CAF50;
            color: white;
            cursor: pointer;
            margin-top: 20px;
        }
        .remember-me {
            color: white;
            margin: 15px 0;
        }
        .forgot-password, .sign-up {
            text-align: center;
            margin-top: 15px;
        }
        .forgot-password a, .sign-up a {
            color: white;
            text-decoration: none;
        }

</style>

<!DOCTYPE html>
