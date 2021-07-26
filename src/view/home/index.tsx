import React, { useState, useEffect } from 'react';

import { Container } from './style';

import api from '../../services/api';

interface IProduct{
    id: number;
    photo: string;
    name: string;
    description: string;
    price: number;
}

const Home: React.FC = () => {
    const [ data, setData ] = useState<IProduct[]>([]);
    const [ cart, setCart ] = useState<IProduct[]>([]);

    useEffect(() =>{
        api.get('').then(
            response => {
                setData(response.data)
            }
        )
    }, [])
    
const handleCart = (index: number) => {
    let push: any = [... cart, cart.push(data[index])]
    setCart(push)
    const productStore = JSON.stringify(cart);
    localStorage.setItem('@cart', productStore)

}

return(
    <Container>
        <div className="nav">
            <div>
                <img src="data:image/png;base64,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" alt="Nike" width="200px" height="auto" />
            </div>
            <div className="cart">
                <img src="data:image/jpeg;base64,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" alt="shopcart" width="50px" height="50px" />
                <span>( {cart.length} ) - Itens</span>
            </div>
        </div>
        <section>
            { data.map( (prod, index) => (
                <div className="product-content" key={prod.id}>
                    <img src={prod.photo} width="200" height="auto"/>
                    <h4>{prod.name}</h4>
                    <span>{prod.description}</span>
                    <h6>{prod.price}</h6>
                    <button onClick={ ()=> handleCart(index)} > Adicionar ao Carinho</button>
                </div>
            ))}

            </section>
        </Container>
  );
}

export default Home;