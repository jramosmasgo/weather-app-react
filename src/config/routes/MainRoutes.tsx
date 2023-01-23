import Home from "@/pages/Home";
import Places from "@/pages/Places";
import Search from "@/pages/Search";
import Main from "@/template/Main";
import { HOME, MAIN, PLACES, SEARCH } from "@/types/paths";
import React from "react";
import { Route, Routes } from "react-router-dom";

const MainRoutes: React.FunctionComponent = () => {
  return (
    <Routes>
      <Route path={MAIN} element={<Main />}>
        <Route path={HOME} element={<Home />}></Route>
        <Route path={SEARCH} element={<Search />}></Route>
        <Route path={PLACES} element={<Places />}></Route>
      </Route>
    </Routes>
  );
};

export default MainRoutes;
