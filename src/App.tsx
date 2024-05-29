import "./App.css";
import { Routes, Route } from "react-router-dom";
import Protection from "./routes/protectedRoutes";
import { protectedRoutes } from "./routes/allRoutes";

function App() {
  return (
    <>
      <Routes>
        {protectedRoutes &&
          protectedRoutes?.map((route) => (
            <Route
              key={route.id}
              path={route.path}
              element={
                route.isProtected ? (
                  <>
                    <Protection>{route.data}</Protection>
                  </>
                ) : (
                  route.data
                )
              }
            />
          ))}
      </Routes>
    </>
  );
}

export default App;
