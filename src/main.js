import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import router from './router'

import Button from 'primevue/button';
import Card from 'primevue/card';
import Column from 'primevue/column';
import DataTable from 'primevue/datatable';
import InputText from 'primevue/inputtext';
import Menubar from 'primevue/menubar';
import Panel from 'primevue/panel';
import SelectButton from 'primevue/selectbutton';
import Tag from 'primevue/tag';

import 'primevue/resources/themes/arya-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'
import './assets/css/icons.css'

const app = createApp(App)
app.use(router)
app.use(PrimeVue, { ripple: true, inputStyle: 'filled' })
app.component('Button', Button);
app.component('Card', Card);
app.component('Column', Column);
app.component('DataTable', DataTable);
app.component('InputText', InputText);
app.component('Menubar', Menubar);
app.component('Panel', Panel);
app.component('SelectButton', SelectButton);
app.component('Tag', Tag);
app.mount('#app')