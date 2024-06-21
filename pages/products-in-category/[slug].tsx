import {useEffect, useState} from "react";
import axios from "axios";
import {useRouter} from "next/router";

interface IProducts {
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

const ProductsInCategory = () => {
    const router = useRouter();
    const {slug: category} = router.query;
    const [products, setProducts] = useState<IProducts[]>([]);

    useEffect(() => {
        if (category) {
            const fetchProductsPerCategory = async () => {
                try {
                    const response = await axios.get(`https://fakestoreapi.com/products/category/${category}`);
                    setProducts(response.data);
                } catch (err) {
                    console.error(err);
                }
            };
            fetchProductsPerCategory();
        }
    }, [category]);

    return (
        <>
            <div className="titleHome">All products in {category}</div>
            <div className="cardContainer">
                {products?.map((product) => (
                    <a className="cardProductBody" key={product.id} href={`/product-details/${product.id}`}>
                        <img src={product.image} alt={product.title} width="100" height="100"/>
                        <h2>{product.title}</h2>
                        <div className="description">{product.description}</div>
                        <div className="rateWithPrice">
                            <p> Price: {product.price}</p>
                            <p> Rate: {product.rating.rate}</p>
                        </div>
                    </a>
                ))}
            </div>
        </>

    );
};

export default ProductsInCategory;
