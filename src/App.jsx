import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Layout from "./Layout";
import Error from "./Error";
import Home from "./Home";
import Specs from "./Specs";
import { lazy, Suspense, useState } from "react";
import Loading from "./Loading";
import Cart from "./Cart";

const LazyPack = lazy(() => import("./Product"));

function App() {
  const [itemList, setItemList] = useState([]);

  function getCartItem(cartItem) {
    setItemList([...itemList, cartItem]);
    console.log(itemList);
  }
  function getFilteredCart(filtered){
        setItemList(filtered)
  }

  const newRoute = createBrowserRouter([
    {
      path: "/",
      element: <Layout cartlist={itemList} />,
      errorElement: <Error />,
      children: [
        { path: "/", element: <Home /> },
        {
          path: "/product",
          element: (
            <Suspense fallback={<Loading />}>
              <LazyPack />
            </Suspense>
          ),
        },
        { path: "/product/:product", element: <Specs list={getCartItem} /> },
      
        { path: "/cart", element: <Cart carts={itemList} filteredCart={getFilteredCart}/> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={newRoute} />
    </>
  );
}

export default App;
