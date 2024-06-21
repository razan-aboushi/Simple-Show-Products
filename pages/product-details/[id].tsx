import {useEffect, useState} from "react";
import axios from "axios";
import {useRouter} from "next/router";

interface IProductDetails {
    id: number;
    title: string;
    image: string;
    category: string;
    description: string;
    price: string;
    rating: {
        rate: string;
        count: string;
    }
}

const ProductDetails = ()=> {
    const [product , setProduct] = useState<IProductDetails>();
    const router = useRouter();
    const { id : id }  = router.query;

    useEffect(() => {
        if (id) {
            const fetchProductDetails = async () => {
                try {
                    const productResponse = await axios.get(`https://fakestoreapi.com/products/${id}`);
                    setProduct(productResponse.data);
                } catch (err) {
                    console.log(err);
                }
            }
            fetchProductDetails();
        }
    }, [id]);


    return (
        <div className="singleProductContainer">
            <img className="imageBody" src={product?.image} alt={product?.category} width="300" height="200" />
            <div className="productTitle">{product?.title}</div>
            <div className="productDesc">{product?.description}</div>
            <div className="HabashkanatContainer">
                <p> Product Category: {product?.category}</p>
               <p>Product Price: {product?.price}</p>
               <p>Product Rate: {product?.rating?.rate}</p>
                <p>Rating Count: {product?.rating?.count}</p>
            </div>
        </div>
    )
}

export default ProductDetails;