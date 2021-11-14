import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import router from './router'

import Card from 'primevue/card';
import Panel from 'primevue/panel';
import Button from 'primevue/button';
import Menubar from 'primevue/menubar';
import InputText from 'primevue/inputtext';
import SelectButton from 'primevue/selectbutton';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

import 'primevue/resources/themes/arya-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'
import './assets/css/icons.css'

const app = createApp(App)
app.use(router)
app.use(PrimeVue, { ripple: true, inputStyle: 'filled' })
app.component('Card', Card);
app.component('Panel', Panel);
app.component('Button', Button);
app.component('Menubar', Menubar);
app.component('InputText', InputText);
app.component('SelectButton', SelectButton);
app.component('DataTable', DataTable);
app.component('Column', Column);
app.mount('#app')