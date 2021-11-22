import React from "react";
import style from "./cars.module.css"
import {connect} from "react-redux";

const Cars = (props) => {
    return (
        <div className={style.carsBlock + ' ' + style.allBorder}>
            {props.carsArr.map((car) => {
                return (
                    <div key={car.id}>
                        <div>{car.name}</div>
                        <div>id: {car.id}</div>
                        <div>releasDate: {car.releasDate}</div>
                        <div>title: {car.title}</div>
                        <div>price: {car.price}</div>
                        <div>weight: {car.weight} kg</div>
                        <div>colorTitle: {car.colorTitle}</div>
                        <div>carBodyTitle: {car.carBodyTitle}</div>
                        <div>
                            <button>EDIT</button>
                            <button>DELETE</button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
const mapStateToProps = (state) => {
    return {carsArr: state.carsPage.cars}
}
const mapDispatchToProps = (dispatch) => {
}

export default connect(mapStateToProps, mapDispatchToProps)(Cars);
