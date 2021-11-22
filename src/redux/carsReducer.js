
const SET_CARS = 'SET_CARS';

let initialState = {
        cars: [
            {
                name: 'Car 1',
                id: 1,
                releasDate: "2019",
                title: "BMW",
                price: 1000000,
                weight: 1000,
                colorTitle: "Red",
                carBodyTitle: "qweqweqwe"
            },
            {
                name: 'Car 2',
                id: 2,
                releasDate: "2020",
                title: "Mercedes-Benz",
                price: 999999,
                weight: 1200,
                colorTitle: "Black",
                carBodyTitle: "qweqweqwe"
            },
            {
                name: 'Car 3',
                id: 3,
                releasDate: "2021",
                title: "Porsche",
                price: 999999999,
                weight: 1300,
                colorTitle: "Gold",
                carBodyTitle: "qweqweqwe"
            }
        ]
};

const carsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CARS:{
            return {...state, cars: action.cars}
        }
        default:
            return state;
    }
}

export const setUsers = (cars) => ({type: SET_CARS, cars})

export default carsReducer;