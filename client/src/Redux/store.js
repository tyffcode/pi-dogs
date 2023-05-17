import { legacy_createStore as createStore, applyMiddleware, compose} from "redux";
import thunkMiddleware from "redux-thunk";
import reducer from "./reducer";

const composeEnhancer = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose; //esto nos permite que nuestra aplicacion se conecte con la extencion del navegador y poder visualizar el estado global de redux en el navegador

const store = createStore(
    reducer,
    composeEnhancer(applyMiddleware(thunkMiddleware)) //esta linea sirve para que podamos hacer peticiones a una Api/servidor
);


export default store
