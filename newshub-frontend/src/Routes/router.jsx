import React from "react";
import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import News from "../Pages/News";
import NewsDetails from "../Pages/NewsDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: News,
      },
      {
        path: "news/:id",
        Component: NewsDetails,
        loader: ({ params }) =>
          fetch(`http://localhost:2000/api/news/${params?.id}`),
      },
    ],
  },
]);
