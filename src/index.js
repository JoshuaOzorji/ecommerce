import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ProductsProvider } from "./context/products_context";
import { FilterProvider } from "./context/filter_context";
// import { ThemeProvider } from "@material-tailwind/react";
import { CartProvider } from "./context/cart_context";
import { Auth0Provider } from "@auth0/auth0-react";
import { UserProvider } from "./context/user_context";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<Auth0Provider
		domain={process.env.REACT_APP_AUTH_DOMAIN}
		clientId={process.env.REACT_APP_AUTH_CLIENT_ID}
		cacheLocation='localstorage'
		authorizationParams={{
			redirect_uri: window.location.origin,
		}}>
		<UserProvider>
			<ProductsProvider>
				<FilterProvider>
					<CartProvider>
						{/* <ThemeProvider> */}
						<App />
						{/* </ThemeProvider> */}
					</CartProvider>
				</FilterProvider>
			</ProductsProvider>
		</UserProvider>
	</Auth0Provider>,
);
