import { Route, Routes } from "react-router-dom";

import HomeScreen from "../modules/auth/screen/HomeScreen";
import LoginScreen from "../modules/auth/screen/LoginScreen";
import BuscarScreen from "../modules/auth/screen/BuscarScreen";
import DetalleProducto from "../modules/auth/screen/DetalleProducto";



const AppNavigator=()=>{
  return(
    <Routes>
       <Route path="/" element={<HomeScreen/>} />
        <Route path="/pe/es/logon" element={<LoginScreen></LoginScreen>} />
        <Route path="/pe/es/shop/cart" element={<HomeScreen></HomeScreen>} />
        <Route path="/pe/es/search/home" element={<BuscarScreen />} />
        <Route path="/pe/es/product/"  element={<DetalleProducto/>}/>
        


    </Routes>


  );



}

export default AppNavigator;