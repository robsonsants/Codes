Vue.component('menucanais', {
    props: ['canais'],
    methods: {
        loadChan: function (id) {
            let texto;
            for (let y of this.canais) {
                if (y.id == id) {
                    texto = y.titulo;
                }
            }
            console.log(`Faz de conta que abri o canal ${texto}`)
            this.$emit('mudacanal', id);
        }
    },
    template: '<div><h2>Canais</h2>\
    <ul>\
    <li class="btn btn-success" @click="loadChan(canal.id)" v-for="canal in canais">{{canal.titulo}}</li>\
    </ul></div>'
})

Vue.component('batepapo', {
    props: ['username', 'visivel'],
    data: function () {
        return {
            conversas: [
                { 'nome': 'Fulano', 'msg': 'Estou saindo de casa!', 'timestamp': '26/02/2021 14:58:30' },
                { 'nome': 'Cicrano', 'msg': 'Duvido, bicho mintiroso!', 'timestamp': '26/02/2021 14:58:32' },
                { 'nome': 'Beltrano', 'msg': 'A única forma de combater ódio, é com mais ódio!', 'timestamp': '26/02/2021 14:59:30' }
            ],
            digitado: ''
        }
    },
    methods: {
        send: function () {
            let nome = 'anônimo'
            if(this.username != undefined)
                nome = this.username;
            this.conversas.push({ 'nome': nome, 'msg': this.digitado, 'timestamp': new Date().toLocaleTimeString() });
        }
    },
    template: '<div v-if="visivel" class="card">\
    <div class="card-body">\
        <span v-bind:title="conversa.timestamp" v-for="conversa in conversas"><b>{{conversa.nome}}</b> disse: {{conversa.msg}}<br></span>\
    </div>\
    <div class="card-footer">\
        <div class="form-group mb-3">\
            <input v-model="digitado" class="form-control" type="text" name="" id="">\
            <div class="input-group-append">\
                <button class="btn btn-primary" @click="send" type="button">Enviar</button>\
            </div>\
        </div>\
    </div>\
    </div>'
})


new Vue({
    el: "#dw-chat",
    data: {
        nome_usuario: 'anônimo',
        canais: [
            { 'id': '1', 'titulo': 'BCC-DW' },
            { 'id': '2', 'titulo': 'Animes' },
            { 'id': '3', 'titulo': 'Viagens' }
        ],
        mostra1: true,
        mostra2: false,
        mostra3: false,
    },
    methods: {
        mudaCanal: function(id){
            console.log(`O canal de id ${id}`);
            if(id == '1'){
                this.mostra1 = true;
                this.mostra2 = false;
                this.mostra3 = false;
            } else if(id == '2'){
                this.mostra1 = false;
                this.mostra2 = true;
                this.mostra3 = false;
            } else {
                this.mostra1 = false;
                this.mostra2 = false;
                this.mostra3 = true;
            }
        }
    }
})
