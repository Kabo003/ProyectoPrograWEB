import { BrowserRouter as Router } from "react-router-dom";

import AppNavigator from "./navigation/AppNavigator";
import { AuthProvider } from "./modules/auth/componentes/LoginForm";



function App() {
  

  return (
    <>
    <div>
      <AuthProvider>
       <Router>
     
       <AppNavigator/>
       </Router>
       </AuthProvider>

    </div>
    </>
  )
}

export default App
