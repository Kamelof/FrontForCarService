import React, {Component} from "react";
import style from "./search.module.css"
import CarService from "../../../API/api"

class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentTutorial: {
                id: null,
                releasDate: "",
                title: "",
                price: null,
                weight: null,
                colorTitle: "",
                carBodyTitle: "",
            },
            message: ""
        };
    }
    componentDidMount(props) {
    }
    render(props) {
        const { currentTutorial } = this.state;

        return(
            <div>
                <div className={style.allBorder}>
                    <div className={style.allBorder}>
                        <div>
                            <input type="text" placeholder="Search"/>
                        </div>
                        <div>
                            <button>Search</button>
                        </div>
                    </div>
                    <div className={style.allBorder}>
                        <div>
                            Text
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Search;