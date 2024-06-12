import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./components";
import {
	About,
	AuthWrapper,
	Cart,
	Checkout,
	Error,
	Home,
	PrivateRoute,
	Products,
	SingleProduct,
} from "./pages";

const App = () => {
	return (
		<AuthWrapper>
			<BrowserRouter>
				<Navbar />
				<Sidebar />
				<Routes>
					<Route path="/" exact element={<Home />} />
					<Route path="/about" exact element={<About />} />
					<Route path="/cart" exact element={<Cart />} />
					<Route path="/products" exact element={<Products />} />
					<Route path="/products/:id" exact element={<SingleProduct />} />
					<Route
						path="/checkout"
						element={
							<PrivateRoute>
								<Checkout />
							</PrivateRoute>
						}
					/>
					<Route path="*" element={<Error />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</AuthWrapper>
	);
};

export default App;
