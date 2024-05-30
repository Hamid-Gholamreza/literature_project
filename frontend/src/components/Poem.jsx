import React, {Component, useEffect, useState} from "react";
import picture from '../images/poem-background.jpeg'
import { Link } from "react-router-dom";
import axios from 'axios';


class Poem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: null,
            loading: true
        };
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/verses/1');
            console.log(response.data);
            this.setState({ data: [response.data[0].text, response.data[1].text, response.data[2].text, response.data[3].text], loading: false ,
                poem_header: response.data[0].poem_id.title
            });
        }
        catch (error) {
            console.error('Error fetching data:', error);
            this.setState({ loading: false });
        };
    }

    render() {

        const {data, loading, poem_header} = this.state;
        
        if (!loading) {
            return (
                <div>
                    <div>
                        <img src={picture} alt="poem background" className="poem-background" />
                    </div>
                    <div className="poem-container">
                        <div className="poem-header">
                            <h1>{poem_header}</h1>
                        </div>
                        <div className="poem-text">        
                            <div className="text-container">
                                <p className="poem first">{data[0]}</p>
                                <p className="poem second">{data[1]}</p>
                            </div>
                            <div className="text-container">
                                <p className="poem first">{data[2]}</p>
                                <p className="poem second">{data[3]}</p>
                            </div>
                        </div>
                        <div className="button-container">
                            <button><Link to={'####'}>شعر قبلی</Link></button>
                            <button><Link to={'####'}>شعر بعدی</Link></button>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default Poem;