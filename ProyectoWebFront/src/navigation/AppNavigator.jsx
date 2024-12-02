import { Route, Routes } from "react-router-dom";

import HomeScreen from "../modules/auth/screen/HomeScreen";
import LoginScreen from "../modules/auth/screen/LoginScreen";
import BuscarScreen from "../modules/auth/screen/BuscarScreen";
import DetalleProducto from "../modules/auth/screen/DetalleProducto";
import CarritoScreen from "../modules/auth/screen/CarritoScreen";
import { ProfileCard } from "../modules/profile/componentes/ProfileCard";



const AppNavigator=()=>{
  return(
    <Routes>
       <Route path="/" element={<HomeScreen/>} />
        <Route path="/pe/es/logon" element={<LoginScreen></LoginScreen>} />
        <Route path="/pe/es/search/home" element={<BuscarScreen />} />
        <Route path="/detalle" element={<DetalleProducto />} />
        <Route path="/pe/es/shop/cart" element={<CarritoScreen />} />
       <Route path="/pe/es/admin" element={<ProfileCard/>}/>

    </Routes>


  );



}

export default AppNavigator;