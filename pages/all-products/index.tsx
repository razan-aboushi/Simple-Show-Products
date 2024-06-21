import {useEffect, useState} from "react";
import axios from "axios";

interface IAllProducts {
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



const AllProducts = () => {
    const [allProducts, setAllProducts] = useState<IAllProducts[]>([]);
    const [searchValues, setSearchValues] = useState<string>("");
    const [selectedCategory, setSelectedCategory] = useState<string>("");
    const [searchPrice, setSearchPrice] = useState<string>("");

    useEffect(() => {
        const fetchAllProducts = async () => {
            try {
                const response = await axios.get("https://fakestoreapi.com/products");
                setAllProducts(response.data);
            } catch (err) {
                console.error(err);
            }
        };

        fetchAllProducts();
    }, []);

    const filteredProducts = allProducts.filter(product => {
        return (
            (selectedCategory === "" || product.category === selectedCategory) &&
            (searchPrice === "" || product.price.toString().includes(searchPrice)) &&
            (searchValues === "" || product.title.toLowerCase().includes(searchValues.toLowerCase()))
        );
    });

    const uniqueCategories = [...new Set(allProducts.map(prod => prod.category))];

    return (
        <>
            <div className="filters">
                <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                >
                    <option value="">Please select a category</option>
                    {uniqueCategories.map(category => (
                        <option key={category} value={category}>{category}</option>
                    ))}
                </select>
                <input
                    type="text"
                    placeholder="Search for price"
                    value={searchPrice}
                    onChange={(e) => setSearchPrice(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Search for title"
                    value={searchValues}
                    onChange={(e) => setSearchValues(e.target.value)}
                />
            </div>
            <div className="allProductsContainer">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map(product => (
                        <a href={`/product-details/${product.id}`} className="productBody" key={product.id}>
                            <img src={product.image} alt={product.category} width="200" height="200"/>
                            <div className="categoryProduct">{product.category}</div>
                            <div className="titleProduct">{product.title}</div>
                            {/*<div className="descriptionProduct">{product.description}</div>*/}
                            <div>Product Price: {product.price}$</div>
                        </a>
                    ))
                ) : (
                    <div className="noResults">No results found</div>
                )}
            </div>
        </>
    );
};

export default AllProducts;
