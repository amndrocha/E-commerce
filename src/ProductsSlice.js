import { createSlice } from "@reduxjs/toolkit"
const initialState = [
    {
        category: "necessarios",
        description: "Chinelo Havaianas Slim Feminina Opção de Cores Original Havaianas Slim Feminina. A Havaianas Slim é um clássico dos nossos tempos. Com tiras e solado mais fino, ela conquistou os pés de quem gosta de um visual delicado, sem abrir mão do conforto.",
        id: "-NYxjzLaJkqompeSzDU3",
        image: "https://images-americanas.b2w.io/produtos/3205081262/imagens/chinelo-havaianas-slim-feminina-opcao-de-cores-original/3205081692_1_xlarge.jpg",
        name: "Havaiana",
        price: 3490,
        qtd: 0,
        cor:'preto',
        favorito: {img: "../images/favorito.png", txt: "Favoritar"},
        star: 5,
        comment: ['Amei os chinelos, comprei e bordei para dar de presente.', 
            'Minha mãe amou a chinela! Disse que é super confortável, bonita e o melhor é original!',
            'Muito bonito e elegante chegou super rápido',
            'Gostei do chinelo,veio certinho,e o número tbm,obg',
            'Produto excelente, recomendo. Preço ótimo também.']

    },
    {
        category: "moveis",
        description: "Que tal mobiliar o coração da casa de um jeito fácil? O armário de cozinha 12 portas 1 gaveta Clara Poliman Móveis é feito para quem quer economizar e deixar o cômodo bonito",
        id: "-NYxk1LAhTw0HchDaW9w",
        image: "https://images-americanas.b2w.io/produtos/32857830/imagens/armario-de-cozinha-12-portas-1-gaveta-clara-poliman-moveis-branco/32857831_1_xlarge.jpg",
        name: "Armário",
        price: 55990,
        qtd :0,
        cor:'preto',
        favorito: {img: "../images/favorito.png", txt: "Favoritar"},
        star: 2,
        comment: [ 'Armário de péssima qualidade.Veio porta com rachadura na madeira,teve itens com porta com a pintura preta lascada, ,faltando pintura,parece armário de ponta de estoque com tantos defeitosNão recomendo',
            'O armário é bonito, porém veio furos todo errado, de diversas partes. A gaveta toda torda, quase impossível de montar. Não recomendo só passei raiva. O manual nem se quer da pra entender!!!!! Péssimo',
            'Armario de péssima qualidade. Veio cheio de defeitos!!!',
            'Ruim não vale a pena',
            'Não veio com algumas peças depois que enviaram, algumas partes vieram com avarias (arranhado e saindo a película)']
    },
    {
        category: "necessarios",
        description: "Bicicleta De Equilíbrio 4 Rodas",
        id: "-NYxnriKfiMQ57CEveUu",
        image: "https://images-americanas.b2w.io/produtos/6062369575/imagens/bicicleta-de-equilibrio-4-rodas-vermelha-10728-buba/6062369575_1_xlarge.jpg",
        name: "Bicicleta",
        price: 21060,
        qtd: 0,
        cor:'preto',
        favorito: {img: "../images/favorito.png", txt: "Favoritar"},
        star: 1,
        comment: ['Nao consegui entrar em contato para trocar']
    },
    {
        category: "celular",
        description: "Smartphone Sansung",
        id: "-NYxnriO7RFX4lon7o3r",
        image: "https://images-americanas.b2w.io/produtos/01/00/img/5242830/2/5242830242_1SZ.jpg",
        name: "Smartphone",
        price: 99900,
        qtd: 0,
        cor:'preto',
        favorito: {img: "../images/favorito.png", txt: "Favoritar"},
        star: 5,
        comment: ['Produto Conforme o Anunciado, não poderei falar mais, pois foi presente, a pessoa recebedora não reclamou!!!',
            'Produto bom ótimo custo',
            'Meu filho adorou ! Correspondeu tds as expectativas. Otimo preço, custo-benefício.',
            'Aparelho simples e funciona bem na proposta em comparativo a de outras marcas até superando mais caros..!']
    },
    {
        category: "moveis",
        description: "Que tal mobiliar o coração da casa de um jeito fácil? O armário de cozinha 12 portas 1 gaveta Clara Poliman Móveis é feito para quem quer economizar e deixar o cômodo bonito",
        id: "-NYxnriPDjXsdkH35U0R",
        image: "https://images-americanas.b2w.io/produtos/3072707478/imagens/sofa-3-lugares-retratil-e-reclinavel-cama-inbox-compact-1-80m-velusoft-cafe/3072707486_1_xlarge.jpg",
        name: "Sofá",
        price: 98999,
        qtd: 0,
        cor:'preto',
        favorito: {img: "../images/favorito.png", txt: "Favoritar"},
        star: 4,
        comment:
        ['Gostei entregou antes do prazo, entregador muito prestativo, o sofa é pequeno mais é confortável', 
        'Bom sofá, mas não é tão confortável quanto parece.', 
        'é exatamente o que Eu esperava, não tenho o que reclamar gostei!!',
        'Fiquei mto satisfeito, unica questão é que não tem como travar as rodinhas para que ele não deslise']         
    }
]
export const productsSlice = createSlice({
        name: 'products',
        initialState: initialState,
        reducers: {
            addQtd: (state,action) => {
               state.map((produto) => {
                if (produto.id == action.payload.id){
                    produto.qtd = action.payload.qtd
                }
               })
            },
            addCor: (state,action) => {
                state.map((produto) => {
                    if(produto.id == action.payload.id){
                        produto.cor = action.payload.cor
                    }
                })
            },
            resetQtd:(state,action) =>{
                state.map((produto) => {
                    if(produto.id == action.payload){
                        produto.qtd = 0
                    }
                })
            },

            addFavorito:(state,action) =>{
                state.map((produto) => {
                    if(produto.id == action.payload){
                        if (produto.favorito.img == "../images/favorito.png"){
                            produto.favorito = {img: "../images/favorito0.png", txt: "Remover dos favoritos"};
                        }
                        else{
                            produto.favorito = {img: "../images/favorito.png", txt: "Favoritar"};
                        }
                    
                    }
            })
            },
            
            addComentario:(state,action) =>{
                state.map((produto) => {
                    if(produto.id == action.payload){
                        produto.comment = action.payload.comment
                    }
                })
            },
           

    }
    });
export  const {addQtd, resetQtd,addFavorito,addCor,addComentario} = productsSlice.actions;
export default productsSlice.reducer;
