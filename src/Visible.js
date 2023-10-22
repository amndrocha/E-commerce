export const visible = (produtos, categoria, text, sortBy, minPrice, maxPrice) => {
    const filtrados = produtos.filter((produto) =>
        produto.category.toLowerCase().includes(categoria.toLowerCase()) //product.category com a categoria recebida 
        &&
        produto.name.toLowerCase().includes(text.toLowerCase())
        &&
        produto.price >= minPrice
        &&
        produto.price < maxPrice
    );    
    
    return filtrados.sort((a,b) => {
        if (sortBy == 'price'){
            return a.price > b.price ? 1: -1;
        } else if (sortBy == 'alphabetical'){
            return a.name > b.name ? 1: -1
        }
    })
    
}