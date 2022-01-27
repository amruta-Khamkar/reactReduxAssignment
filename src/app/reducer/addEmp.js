const initialState = { proData: localStorage.getItem("myCart") != undefined ? JSON.parse(localStorage.getItem("myCart")) : [] }
export const addTask = (state = initialState, action) => {
    console.log(state.proData)
    switch (action.type) {

        case "emp":
                localStorage.removeItem("myCart");
                return { proData: [] }
        case "add":
            if ((localStorage.getItem('myCart') != undefined)) {
                if (state.proData.includes(action.id)) {
                    alert("product already added");
                }
                else {
                    state.proData.push(action.id);
                    localStorage.setItem('myCart', JSON.stringify(state.proData));
                    alert("product added");
                    return { proData: [...state.proData] }
                }
            }
            else {
                state.proData = [];
                state.proData.push(action.id);
                localStorage.setItem('myCart', JSON.stringify(state.proData));
                alert("product added")
                return { proData: [...state.proData] }
            }

        default: return { proData: [...state.proData] }
    }

}


const start = { change: 0 }
export const write = (state = start, action) => {
    switch (action.type) {
        case "write": return { change: 1 }
        default: return state
    }
}

