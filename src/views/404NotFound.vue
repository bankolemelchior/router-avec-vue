<template>
    <div class="error-page">
      <h1>How To Fix WordPress</h1>
      <div class="error-code">404</div>
      <div class="error-text">Error</div>
      <div class="not-found-container">
        <div class="not-found-text">
          <span>PAGE</span>
          <span>NOT</span>
          <span>FOUND</span>
        </div>
      </div>
      <button @click="goHome" class="home-button">Retour</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ErrorPage',
    methods: {
      goHome() {
        // Rediriger vers la page d'accueil
        // Remplacez ceci par la logique de navigation appropriée pour votre application
        console.log('Redirection vers la page d\'accueil');
      }
    }
  }
  </script>
  
  <style scoped>
  .error-page {
    background-color: #1a1a1a;
    color: white;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: Arial, sans-serif;
    position: relative;
    overflow: hidden;
  }
  
  h1 {
    font-size: 1.5rem;
    margin-bottom: 20px;
  }
  
  .error-code {
    font-size: 8rem;
    font-weight: bold;
    position: relative;
  }
  
  .error-code::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 8px;
    background-color: white;
    top: 50%;
    left: 0;
    transform: translateY(-50%) rotate(-45deg);
  }
  
  .error-text {
    font-size: 2rem;
    margin-top: 10px;
  }
  
  .not-found-container {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    perspective: 1000px;
  }
  
  .not-found-text {
    display: flex;
    flex-direction: column;
    transform: rotateY(-30deg) skew(25deg);
    opacity: 0.2;
  }
  
  .not-found-text:nth-child(2) {
    position: absolute;
    left: 30px;
    top: 30px;
    opacity: 0.5;
  }
  
  .not-found-text:nth-child(3) {
    position: absolute;
    left: 60px;
    top: 60px;
    opacity: 1;
  }
  
  .not-found-text span {
    font-size: 1.5rem;
    font-weight: bold;
    line-height: 1;
  }
  
  .home-button {
    margin-top: 40px;
    padding: 10px 20px;
    background-color: transparent;
    color: white;
    border: 2px solid white;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  .home-button:hover {
    background-color: white;
    color: #1a1a1a;
  }
  </style>