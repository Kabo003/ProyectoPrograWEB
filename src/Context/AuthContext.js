import React, { createContext, useState, useContext } from "react";





export const AuthContext = createContext();
export const useAuth =() =>useContext(AuthContext);


export const AuthProvider = ({children})   => {

    const [user, setUser] = useState(null)  

    const admins = [
        {username: "Guty", password : "pieroguti"},
        {username: "Christian", password : "chrisvenegas"}
    ]

    const users = [
        {username: "Sebas", password : "Sebas572"},
        {username: "Pablo", password : "pablocasas"}
    ]
  
    const login = (username, password) =>{
        let usuarioEncontrado= false

        admins.map((admin)=>{
            if(admin.username === username && admin.password === password){
                usuarioEncontrado = {username: admin.username, role: admin}
            }
        })
        if(usuarioEncontrado){
            setUser(usuarioEncontrado);
            return;
        }

        users.map((usu)=>{
            if(usu.username === username && usu.password === password){
                usuarioEncontrado = {username: usu.username, role: usu}
            }
        })

        if(usuarioEncontrado){
            setUser(usuarioEncontrado);
            return;
        }
        else{
            alert ("No existe")
        }


    };

    const logout = () =>{
        setUser(null);
        localStorage.removeItem('user');
    }

    return(
        <AuthProvider.Provider value = {{user, login, logout}}>
            {children}
        </AuthProvider.Provider>
    )




}
