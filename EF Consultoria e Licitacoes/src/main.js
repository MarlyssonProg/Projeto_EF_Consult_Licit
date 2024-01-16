/*Aqui é o local onde a aplicação será desenvolvida*/


/*Importando a estilização principal da aplicação*/
import './assets/main.css'
/*Importando o criador da aplicação*/
import { createApp } from 'vue'
/*Importando o componente principal da aplicação*/
import App from './App.vue'

/*Importando o roteamento da aplicação*/
import router from './router'

/*Criando uma constante app chamando o createApp acima (entre chaves) com o 
parâmetro App (componente principal) acima*/
const app = createApp(App)


/*A constante utilizará o roteamento através do componente principal */
app.use(router)

/*Montará a aplicação dentro de uma ID de nome app, dentro de index.html */
app.mount('#app')
