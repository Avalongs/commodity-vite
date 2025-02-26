import {createBrowserRouter, Navigate} from "react-router-dom";
import Layout from "../Layout/index.tsx";
import Login from "../views/Login/index.tsx";
import Good from "../views/Good";
import Order from "../views/Order";
import User from "../views/User";
import Notfound from "../views/Notfound";

const router = createBrowserRouter([
  {
	path: "/login",
	element: <Login/>,
  },
  {
	path: "/",
	element: <Layout/>,
	children: [
	  {
		path: "",
		element: <Navigate to="/good/list" replace />,
	  },
	  {
		path: '/good',
		children: [
		  {
			path: "list",
			element: <Good/>,
		  }
		],
	  },
	  {
		path: '/order',
		children: [
		  {
			path: "list",
			element: <Order/>,
		  }
		],
	  },
	  {
		path: '/user',
		children: [
		  {
			path: 'list',
			element: <User/>,
		  },
		]
	  },
	],
  },
  {
	path: '/notfound',
	element: <Notfound />
  },
  {
	path: "*",
	element: <Navigate to='/notfound' replace/>,
  }
]);

export default router;
