import React, {useEffect, useState} from "react";
import background from '../images/search-poem-background.jpg';
import axios from "axios";



function SearchPoem(props) {
    // http://localhost:8000/verses?text=%D8%A2%D8%A8
    
    const [formData, setFormData] = useState({
        searchedItem: '',
      });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        };

    
    const handleSearch = async (e) => {
        e.preventDefault();
        console.log(formData.searchedItem);
        try {
            const response = await axios.get(`http://localhost:8000/verses?text=${formData.searchedItem}`);
            console.log(response.data)
        }
        catch(error) {
            console.log('error happened');
        }

    }



    return(
        <div>
            <div className="search-poem-background">
                <img src={background} alt="" />
            </div>
            <div className="search-poem-container">
                <div className="search-box">
                    <input 
                    type="text"
                    name="searchedItem"
                    value={formData.searchedItem}
                    onChange={handleInputChange}
                    placeholder="قسمتی از شعر خود را وارد نمایید" />
                    <button onClick={handleSearch}>جستجو</button>
                </div>
            </div> 
        </div>
    )
}

export default SearchPoem;