import {useEffect, useState} from "react";
import axios from "axios";

interface ICategories {
    category: string;
}

const ProductsHome = () => {
    const [categories, setCategories] = useState<ICategories[]>();

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const categories = await axios.get("https://fakestoreapi.com/products/categories");
                setCategories(categories.data)
            } catch (error) {
                console.log(error);
            }
        }

        fetchCategories();
    }, []);

    return (
        <>
            <div className="titleHome">All Categories</div>
            <div className="allCards">
                {categories?.map((category, index) => (
                    <a className="categoryHome" href={`/products-in-category/${category}`} key={index}>{category}</a>
                ))}
                <a className="categoryHome" href={`/all-products`}>All Products</a>
            </div>
        </>
    )
}

export default ProductsHome;
