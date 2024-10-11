-- Créer un nouveau projet vue (avec vue-router installé)
-- Dans le dossier views, créez un nouveau dossier "Auth"
-- Dans le dossier Auth, créez les composants LoginView (pour la page de connexion) et SignUpView (pour la page d'inscription)
-- lorsque la route est vide ou est /login, afficher la page de connexion
-- lorsque la route est /sign-up, afficher la page d'inscription


#### Les routes
## Propriétés des Objets Route
Chaque objet route dans le tableau routes contient plusieurs propriétés importantes :
**path** : Représente le chemin d'accès URL qui déclenche cette route. Il peut contenir des paramètres dynamiques (ex. :id).
**name** (optionnel) : Un nom unique pour la route, utile pour la navigation programmatique et le débogage.
**component** : Le composant Vue à afficher lorsque la route est activée.
**children** (optionnel) : Un tableau d'objets définissant les sous-routes. Cela permet d'organiser les routes de manière hiérarchique.
**meta** (optionnel) : Un objet pour stocker des informations supplémentaires sur la route, comme les autorisations ou les titres.

```js
const routes = [
    {
        path: '/users/:id',
        name: 'user',
        component: UserComponent,
        meta: { requiresAuth: true },
        children: [
            {
                path: 'profile',
                name: 'user-profile',
                component: UserProfile
            },
            {
                path: 'roles',
                name: 'user-roles',
                component: UserRoles
            }
        ]
    }
];
```
Dans cet exemple :
La route principale /users/:id a un nom (user) et nécessite une authentification (requiresAuth) grâce à la propriété meta.
Les sous-routes profile et roles ont également leurs propres noms respectifs.

#### Les guards de navigation

Les guards de navigation dans Vue.js sont des fonctions qui permettent de contrôler le flux de navigation au sein d'une application. Ils sont essentiels pour gérer l'accès aux routes, exécuter du code avant ou après une transition de route, et garantir que certaines conditions soient remplies avant que l'utilisateur ne puisse accéder à un contenu spécifique.