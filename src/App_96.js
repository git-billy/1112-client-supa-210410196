import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage_96 from "./pages/HomePage_96";

import MenuStaticPage_96 from "./pages/local/MenuStaticPage_96";
import SupaMenuPage_96 from "./pages/supabase/MenuPagea_96";
import SupaMenuByCategoryPage_96 from "./pages/supabase/MenuByCategoryPage_96";
import MenuNodePage_96 from "./pages/node/MenuNodePage_96";

const App_96 = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage_96 />} />
        <Route path="/static_96" element={<MenuStaticPage_96 />} />
        <Route path="/supa_menu_96" element={<SupaMenuPage_96 />} />
        <Route
          path="/supa_menu_96/:category"
          element={<SupaMenuByCategoryPage_96 />}
        />
        <Route
          path="/node_menu_96"
          element={<MenuNodePage_96 />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App_96;
