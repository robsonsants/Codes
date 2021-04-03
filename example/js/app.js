Vue.component('plan-picker',{
  template: '#plan-picker-template',
  data(){
    return{
      plans: [
        {resumo: 'Cadastrar Casas', url: 'css/casa-editar.png'}, 
        {resumo: 'Pesquisar Casas', url: 'css/casa-info.png'}, 
        {resumo: 'Descrição das Casas', url: 'css/casa-descricao.png'},
        {resumo: 'Editar Casas', url: 'css/casa-editar.png'},
        {resumo: 'Adicionar Casas', url: 'css/casa-editar.png'},
        {resumo: 'Exemplo Casa 1', url: 'css/casa-ex1.png'},
        {resumo: 'Exemplo Casa 2', url: 'css/casa-ex2.png'},
        {resumo: 'Exemplo Casa 3', url: 'css/casa-ex3.png'},
      ]
    }
  }
})

Vue.component('plan',{
  template: '#plan-template',
  props: {
    name: String,
  }
})

new Vue({
  el: '#app',
})