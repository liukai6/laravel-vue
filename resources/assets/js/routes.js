export default[ 
    { path: '/example', component: require('./components/ExampleComponent.vue')  },
    { path: '/', component: require('./components/view.vue') },
    { path: '/message', component: require('./components/message.vue') },
    { path: '/button', component: require('./components/mybutton.vue') },
    { path: 'search', component: require('./pages/mymain.vue')},
   	{ path: 'mydata', component: require('./pages/mydata.vue')}
];

