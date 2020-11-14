import React, { useState } from 'react';
import axios from 'axios';
import url from '../utils/URL';
import { featuredProducts } from '../utils/helpers'


export const ProductContext = React.createContext();



// Provider, Consumer, useContext()

export default function ProductProvider({ children }) {
    const [loading, setLoading] = useState(false)
    const [products, setProducts] = useState([]);
    const [featured, setFeatured] = useState([]);

    useState(() => {
        setLoading(true)
        axios.get(`${url}/products`)
            .then(response => {
                const featured = featuredProducts(response.data)
                setProducts(response.data);
                setFeatured(featured);
                setLoading(false);
            })

        //clean up function;
        return () => { }
    }, [])

    return (
        <ProductContext.Provider value={{ loading, products, featured }}>
            {children}
        </ProductContext.Provider >
    )
}