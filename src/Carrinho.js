import numeral from "numeral";
import { useDispatch, useSelector } from "react-redux"
import { resetQtd } from "./ProductsSlice";
import { changeAddress, removeAddress } from "./AddressSlice";
import { useState } from "react";
import { TWISTModal } from "./TWISTModal";



export const PageCarrinho = () => {
    const addresses = useSelector((state) => state.address.list);
    const produtos = useSelector((state) => state.products);
    const dispatch = useDispatch();
    let total = 0;

    const [showModal, setShowModal] = useState(false);

    const [address, setAddress] = useState({
        id: "",
        bairro: "",
        cidade: "",
        estado: "",
        numero: "",
        rua: ""
    });

    const change = (address) => {
        setAddress(address);
        setShowModal(true);        
    };

    const cancel = () => {
        setAddress({
            id: "",
            bairro: "",
            cidade: "",
            estado: "",
            numero: "",
            rua: ""
        });
        setShowModal(false); 
    };

    const send = () => {
        dispatch(changeAddress(address));
        cancel();
    };



    return (
        <div className="carrinho">
            <h1 style={{margin: 0, width: "100%"}}> Carrinho </h1>
            
            <div style={{display: "flex", width: "100%", gap: "30px"}}>
                <div style={{display: "flex", flexDirection: "column", rowGap: "30px", width: "100%"}}>
                    <div className="section">
                        <h2 style={{marginTop: 0}}>Endereços</h2>
                        {addresses.map((add) => {
                            return(
                                <div style={{marginBottom: "10px"}}>
                                    <label><input type='radio' name="address"/>{add.rua} {add.numero}, {add.bairro}, {add.cidade}, {add.estado}</label>
                                    <img className="text-icon" src="images/edit.png" onClick={() => change(add)}/>
                                    <img className="text-icon" src="images/no-icon.png" onClick={() => dispatch(removeAddress(add.id))}/>
                                </div>   
                            )
                        })}
                        <button onClick={() => setShowModal(true)} style={{marginTop: "20px"}} className="button-lighter-small">Novo endereço</button>
                        
                        <TWISTModal showModal={showModal}>
                            <div style={{display: "flex", flexDirection: "column", gap: "10px"}}>
                                <label className="modal-label">Rua:<input value={address.rua} onChange={(e) => setAddress({...address, rua: e.target.value})} type="text" /></label>
                                <label className="modal-label">Número:<input value={address.numero} onChange={(e) => setAddress({...address, numero: e.target.value})} style={{marginLeft: "20px"}} type="text" /></label>
                                <label className="modal-label">Bairro:<input value={address.bairro} onChange={(e) => setAddress({...address, bairro: e.target.value})} type="text" /></label>
                                <label className="modal-label">Cidade:<input value={address.cidade} onChange={(e) => setAddress({...address, cidade: e.target.value})} type="text" /></label>
                                <label className="modal-label">estado:<input value={address.estado} onChange={(e) => setAddress({...address, estado: e.target.value})} type="text" /></label>
                                <div style={{display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
                                    <button className="button-lighter" onClick={cancel}>Cancelar</button>
                                    <button onClick={send}>Enviar</button>
                                </div>
                            </div>
                        </TWISTModal> 
                        
                    </div>       
                    <div className="section">
                        <h2 style={{marginTop: 0}}>Forma de pagamento</h2>
                        <input id="credit" name="payment" type="radio"/>
                        <label for="credit">Cartão de crédito</label><br/>
                        <input id="boleto" name="payment" type="radio"/>
                        <label for="boleto">Boleto</label><br/>
                        <input id="pix" name="payment" type="radio"/>
                        <label for="pix">PIX</label>
                    </div>              
                </div>
                
                
                <div className="section" style={{width: "60%"}}>
                    <h2 style={{marginTop: 0}}>Resumo do pedido</h2>
                    {produtos.map((prod) => {
                             total = total + prod.qtd*prod.price
                            if(prod.qtd > 0){
                                return(
                                    <div style={{display: "flex", alignItems: "center"}}>
                                        {prod.qtd} {prod.name} {prod.cor}
                                        <img className="text-icon" src="images/no-icon.png" onClick={() => dispatch(resetQtd(prod.id))}/>
                                    </div> 
                                )
                            }   
                        }) 
                    } 
                    <h3> Total: R{numeral(total/100).format('$0,0.00')} </h3>
                </div>
            </div>
            
        </div>
    )
}