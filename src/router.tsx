import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "@/layouts/MainLayout";
import { Home } from "@/pages/Home";
import { DetailProject } from "@/pages/DetailProject";
import { Experience } from "@/pages/Experience";
import { AllProjectsPage } from "@/pages/AllProjectsPage";
import { PageNotFound } from "@/pages/PageNotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "project/:id", element: <DetailProject /> },
      { path: "experiences", element: <Experience /> },
      { path: "all-projects/:title?", element: <AllProjectsPage /> },
      { path: "page-not-found", element: <PageNotFound /> },
      { path: "*", element: <PageNotFound /> },
    ],
  },
]);