import React, {Component} from "react";
import picture from '../images/poem-background.jpeg'
import { Link } from "react-router-dom";


class Poem extends Component {

    getPoem = () => {
        const poemText = `برخیز بتا بیا ز بهر دل ما/حل کن به جمال خویشتن مشکل ما/یک کوزه شراب تا به هم نوش کنیم/زآن پیش که کوزه‌ها کنند از گل ما/`
        let poemPart = [];
        let flag = false;
        let html = [];

        for (let i = 0; i < poemText.length; i++) {
            if (poemText[i] !== '/') {
                poemPart += [poemText[i]];
            }
            else {
                console.log(poemPart);
                if (flag === false) {
                    html += <p className="poem first">{poemPart}</p>;
                    flag = true;
                }
                else if (flag === true) {
                    html += <p className="poem second">{poemPart}</p>;
                    flag = false;
                }
                poemPart = [];
            }
            html = [];
        }
        return html;
    }


    render() {

        this.getPoem();

        return (
            <div>
                <div>
                    <img src={picture} alt="poem background" className="poem-background" />
                </div>
                <div className="poem-container">
                    <div className="poem-header">
                        <h1>رباعی شماره ۱</h1>
                    </div>
                    <div className="poem-text">        
                        <div className="text-container">
                            <p className="poem first">برخیز بتا بیا ز بهر دل ما</p>
                            <p className="poem second">حل کن به جمال خویشتن مشکل ما</p>
                        </div>
                        <div className="text-container">
                            <p className="poem first">یک کوزه شراب تا به هم نوش کنیم</p>
                            <p className="poem second">زآن پیش که کوزه‌ها کنند از گل ما</p>
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

export default Poem;