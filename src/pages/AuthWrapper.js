import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Loading } from "../components";

const AuthWrapper = ({ children }) => {
	const { isLoading, error } = useAuth0();

	if (isLoading) {
		return (
			<div className="grid min-h-[100vh] place-items-center">
				<Loading />
			</div>
		);
	}
	if (error) {
		return (
			<div className="flex justify-center">
				<h1>{error.message}</h1>
			</div>
		);
	}
	return <>{children}</>;
};

export default AuthWrapper;
