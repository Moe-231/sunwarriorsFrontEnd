import { createApp } from 'vue'
import 'primeicons/primeicons.css'
import './style.css'
import App from './App.vue'
import router from './router'
import { registerLicense } from '@syncfusion/ej2-base'
registerLicense(
  'Ngo9BigBOggjHTQxAR8/V1JGaF1cXmhNYVJyWmFZfVhgdV9HYVZTRmYuP1ZhSXxVdkZiXH9fcXVWR2NbV0Z9XEA=',
)

const app = createApp(App)

app.use(router)

app.mount('#app')

// const app = createApp(App)
// app.use(VUECompoenet, {
//     installComponents: true,
//     load: {
//         key: import.meta.env.VITE_SOME_API_KEY,
//         libraries: ['places', 'routes']
//     }
// })
