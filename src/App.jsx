import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

// pages
import Uy from "./pages/Uy";
import PageNotFound from "./pages/PageNotFound";
import MainLayout from "./layouts/MainLayout";
import Kompaniyahaqida from "./pages/Kompaniyahaqida";
import SharhlarPages from "./pages/SharhlarPages";
import SavolJavoblar from "./pages/SavolJavoblar";
import Yangiliklar from "./pages/Yangiliklar";
import Kontaktlar from "./pages/Kontaktlar";
import Xizmatlar from "./pages/Xizmatlar";
import JismoniyShaxslaruchun from "../src/pages/JismoniyShaxslaruchun";
import YuridikShaxslar from "./pages/YuridikShaxslar";
import MamuriyIshlar from "./pages/MamuriyIshlar";
import FuqarolikIshlar from "./pages/FuqarolikIshlar";
import Jinoiyishlar from "./pages/JinoiyIshlar";
import SoliqHolatlari from "./pages/SoliqHolatlari";
import MerosHolatlari from "./pages/MerosHolatlari";
import KochmasMulkBoyichaAdvokat from "./pages/KochmasMulkBoyichaAdvokat";
import ArbitrajIshlari from "./pages/ArbitrajIshlari";
import YuridikSoliqHolatlari from "./pages/YuridikSoliqHolatlari";
import Korporativishlar from "./pages/Korporativishlar";
import BiznesVositachiligi from "./pages/BiznesVositachiligi";
import Qarzniundurish from "./pages/QarzniUndurish";
import Bankrotlikboyichaadvokat from "./pages/Bankrotlikboyichaadvokat";
import YangiliklarData from "./pages/YangiliklarData";
import YangilikTafsilot from "./components/YangilikTafsilot";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route element={<MainLayout />}>
          <Route index element={<Uy />} />
          <Route path="/KompaniyaHaqida" element={<Kompaniyahaqida />} />
          <Route path="/Sharhlar" element={<SharhlarPages />} />
          <Route path="/SavolJavoblar" element={<SavolJavoblar />} />
          <Route path="/Yangiliklar" element={<Yangiliklar />} />
          <Route path="/Kontaktlar" element={<Kontaktlar />} />
          <Route path="/Xizmatlar" element={<Xizmatlar />} />
          <Route
            path="/JismoniyShaxslarUchun"
            element={<JismoniyShaxslaruchun />}
          />
          <Route path="/Mamuriyishlar" element={<MamuriyIshlar />} />
          <Route path="/YuridikShaxslar" element={<YuridikShaxslar />} />
          <Route path="/ArbitrajIshlari" element={<ArbitrajIshlari />} />
          <Route
            path="/YuridikSoliqHolatlari"
            element={<YuridikSoliqHolatlari />}
          />
          <Route path="/Korporativishlar" element={<Korporativishlar />} />
          <Route
            path="/BiznesVositachiligi"
            element={<BiznesVositachiligi />}
          />
          <Route path="/Qarzniundurish" element={<Qarzniundurish />} />
          <Route
            path="/Bankrotlikboyichaadvokat"
            element={<Bankrotlikboyichaadvokat />}
          />
          <Route path="/FuqarolikIshlar" element={<FuqarolikIshlar />} />
          <Route path="/Jinoiyishlar" element={<Jinoiyishlar />} />
          <Route path="/SoliqHolatlari" element={<SoliqHolatlari />} />
          <Route path="/MerosHolatlari" element={<MerosHolatlari />} />
          <Route path="/YangiliklarData" element={<YangiliklarData />} />
          <Route path="/yangilik/:id" element={<YangilikTafsilot />} />
          <Route
            path="/KochmasMulkBoyichaAdvokat"
            element={<KochmasMulkBoyichaAdvokat />}
          />
        </Route>
          <Route path="*" element={<PageNotFound />} />
      </>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
