import Vue from 'vue'
import App from './App.vue'

// Vue.config.productionTip = false

Vue.directive('awesome', {
  bind(el, binding, vnode) {
    el.innerHTML = binding.value
    // el.style.color = 'red';
    // if (binding.arg === 'red') {
    //   el.style.color = 'red'
    // } else {
    //   el.style.color = 'blue'
    // }
    el.style.color = binding.modifiers.red ? 'red' : 'blue';
    el.style.fontSize = binding.modifiers.small ? '20px' : '30px'

    console.log(el.parentNode);
    console.log(vnode);
  },
  inserted(el, binding, vnode, oldVnode) {
    console.log(el.parentNode);
    console.log(binding, vnode, oldVnode);
  },
  update(el, binding, vnode, oldVnode) {
    console.log('update');
    console.log(el,binding, vnode, oldVnode);
  },
  componentUpdated() {
    console.log('update too');
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')
