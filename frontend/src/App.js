import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Homepage from "./pages/Homepage";
import FarmersDeals from "./pages/FarmersDeals";
import FarmersDashboardMainMessage from "./pages/FarmersDashboardMainMessage";
import FarmersDashboardMessages from "./pages/FarmersDashboardMessages";
import FarmersDashboardEditProfile from "./pages/FarmersDashboardEditProfile";
import FarmersDashboardFarmVerifi from "./pages/FarmersDashboardFarmVerifi";
import FarmersDashboardEditProduc from "./pages/FarmersDashboardEditProduc";
import FarmersDashboardAddNewPr from "./pages/FarmersDashboardAddNewPr";
import FarmersDashboardWeather from "./pages/FarmersDashboardWeather";
import FarmersDashboardGeolocation from "./pages/FarmersDashboardGeolocation";
import FarmersDashboardOrders from "./pages/FarmersDashboardOrders";
import FarmersDashboardProduct from "./pages/FarmersDashboardProduct";
import FarmersDashboardProfile from "./pages/FarmersDashboardProfile";
import LogisticDetail from "./pages/LogisticDetail";
import Logistics from "./pages/Logistics";
import LogisticsDashboardAddNewVe from "./pages/LogisticsDashboardAddNewVe";
import LogisticsDashboardVehicles from "./pages/LogisticsDashboardVehicles";

import LogisticsDashboardProfile from "./pages/LogisticsDashboardProfile";
import Marketplace from "./pages/Marketplace";
import StorageDashboardAddNewFaci from "./pages/StorageDashboardAddNewFaci";
import BuyersDashboardWishList from "./pages/BuyersDashboardWishList";
import StorageDashboardFacility from "./pages/StorageDashboardFacility";
import BuyersDashboardPurchaseHis from "./pages/BuyersDashboardPurchaseHis";
import BuyersDashboardEditProfil from "./pages/BuyersDashboardEditProfil";

import StorageDashboardProfile from "./pages/StorageDashboardProfile";
import BuyersDashboardProfile from "./pages/BuyersDashboardProfile";
import OrderTracking from "./pages/OrderTracking";
import TrackOrder from "./pages/TrackOrder";
import StorageDetail from "./pages/StorageDetail";
import Storage from "./pages/Storage";
import { useEffect } from "react";
import { StorageProvider } from "./context/StorageProductContext";
import { CartProvider } from "./context/CartContext";
import { ProductProvider } from "./context/LogisticProductContext";
import { StorageProfileProvider } from "./context/StorageProfileContext";
import { PopupProvider } from "./context/PopupContext";
import { AuthProvider } from "./context/AuthContext";
import { FarmerProfileProvider } from "./context/FarmerProfileContext";
import { CustomerProfileProvider } from "./context/CustomerProfileContext";
import { GeolocationProvider } from "./context/Geolocation";
import { SlugProvider } from "./context/SlugContext";
import { LogisticsProfileProvider } from "./context/LogisticsProfileContext";
import { CartProvider1 } from "./context/CartContext1";
import { SearchProvider } from "./context/SearchContext";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/farmers-deals":
        title = "";
        metaDescription = "";
        break;
      case "/farmers-dashboard-main-message":
        title = "";
        metaDescription = "";
        break;
      case "/farmers-dashboard-messages":
        title = "";
        metaDescription = "";
        break;

      case "/farmers-dashboard-edit-profile":
        title = "";
        metaDescription = "";
        break;
      case "/farmers-dashboard-farm-verification":
        title = "";
        metaDescription = "";
        break;
      case "/farmers-dashboard-edit-product":
        title = "";
        metaDescription = "";
        break;
      case "/farmers-dashboard-add-new-product":
        title = "";
        metaDescription = "";
        break;
      case "/farmers-dashboard-weather":
        title = "";
        metaDescription = "";
        break;
      case "/farmers-dashboard-geolocation":
        title = "";
        metaDescription = "";
        break;
      case "/farmers-dashboard-orders":
        title = "";
        metaDescription = "";
        break;
      case "/farmers-dashboard-product":
        title = "";
        metaDescription = "";
        break;
      case "/farmers-dashboard-profile":
        title = "";
        metaDescription = "";
        break;
      case "/logistic-detail":
        title = "";
        metaDescription = "";
        break;
      case "/logistics":
        title = "";
        metaDescription = "";
        break;
      case "/logistics-dashboard-add-new-vehicles":
        title = "";
        metaDescription = "";
        break;
      case "/logistics-2":
        title = "";
        metaDescription = "";
        break;

      case "/logistics-dashboard-profile":
        title = "";
        metaDescription = "";
        break;
      case "/marketplace":
        title = "";
        metaDescription = "";
        break;
      case "/storage-dashboard-add-new-facility":
        title = "";
        metaDescription = "";
        break;
      case "/buyers-dashboard-wish-list":
        title = "";
        metaDescription = "";
        break;
      case "/facility-owner-2":
        title = "";
        metaDescription = "";
        break;
      case "/buyers-dashboard-purchase-history":
        title = "";
        metaDescription = "";
        break;
      case "/buyers-edit-profile":
        title = "";
        metaDescription = "";
        break;

      case "/storage-dashboard-profile":
        title = "";
        metaDescription = "";
        break;
      case "/buyers-dashboard-profile":
        title = "";
        metaDescription = "";
        break;
      case "/order-tracking":
        title = "";
        metaDescription = "";
        break;
      case "/track-order":
        title = "";
        metaDescription = "";
        break;
      case "/storage-detail":
        title = "";
        metaDescription = "";
        break;
      case "/storage":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <SearchProvider>
      <CartProvider1>
        <StorageProfileProvider>
          <LogisticsProfileProvider>
            <SlugProvider>
              <GeolocationProvider>
                <CustomerProfileProvider>
                  <FarmerProfileProvider>
                    <AuthProvider>
                      <PopupProvider>
                        <StorageProvider>
                          <ProductProvider>
                            <CartProvider>
                              <Routes>
                                <Route path="/" element={<Homepage />} />
                                <Route
                                  path="/farmers-deals"
                                  element={<FarmersDeals />}
                                />
                                <Route
                                  path="/farmers-dashboard-main-message"
                                  element={<FarmersDashboardMainMessage />}
                                />
                                <Route
                                  path="/farmers-dashboard-messages"
                                  element={<FarmersDashboardMessages />}
                                />
                                <Route
                                  path="/farmers-dashboard-edit-profile"
                                  element={<FarmersDashboardEditProfile />}
                                />
                                <Route
                                  path="/farmers-dashboard-farm-verification"
                                  element={<FarmersDashboardFarmVerifi />}
                                />
                                <Route
                                  path="/farmers-dashboard-edit-product"
                                  element={<FarmersDashboardEditProduc />}
                                />
                                <Route
                                  path="/farmers-dashboard-add-new-product"
                                  element={<FarmersDashboardAddNewPr />}
                                />
                                <Route
                                  path="/farmers-dashboard-weather"
                                  element={<FarmersDashboardWeather />}
                                />
                                <Route
                                  path="/farmers-dashboard-geolocation"
                                  element={<FarmersDashboardGeolocation />}
                                />
                                <Route
                                  path="/farmers-dashboard-orders"
                                  element={<FarmersDashboardOrders />}
                                />
                                <Route
                                  path="/farmers-dashboard-product"
                                  element={<FarmersDashboardProduct />}
                                />
                                <Route
                                  path="/farmers-dashboard-profile"
                                  element={<FarmersDashboardProfile />}
                                />
                                <Route
                                  path="/logistic-detail"
                                  element={<LogisticDetail />}
                                />
                                <Route
                                  path="/logistics"
                                  element={<Logistics />}
                                />
                                <Route
                                  path="/logistics-dashboard-add-new-vehicles"
                                  element={<LogisticsDashboardAddNewVe />}
                                />
                                <Route
                                  path="/logistics-2"
                                  element={<LogisticsDashboardVehicles />}
                                />

                                <Route
                                  path="/logistics-dashboard-profile"
                                  element={<LogisticsDashboardProfile />}
                                />
                                <Route
                                  path="/marketplace"
                                  element={<Marketplace />}
                                />
                                <Route
                                  path="/storage-dashboard-add-new-facility"
                                  element={<StorageDashboardAddNewFaci />}
                                />
                                <Route
                                  path="/buyers-dashboard-wish-list"
                                  element={<BuyersDashboardWishList />}
                                />
                                <Route
                                  path="/facility-owner-2"
                                  element={<StorageDashboardFacility />}
                                />
                                <Route
                                  path="/buyers-dashboard-purchase-history"
                                  element={<BuyersDashboardPurchaseHis />}
                                />
                                <Route
                                  path="/buyers-edit-profile"
                                  element={<BuyersDashboardEditProfil />}
                                />

                                <Route
                                  path="/storage-dashboard-profile"
                                  element={<StorageDashboardProfile />}
                                />
                                <Route
                                  path="/buyers-dashboard-profile"
                                  element={<BuyersDashboardProfile />}
                                />
                                <Route
                                  path="/order-tracking"
                                  element={<OrderTracking />}
                                />
                                <Route
                                  path="/track-order"
                                  element={<TrackOrder />}
                                />
                                <Route
                                  path="/storage-detail"
                                  element={<StorageDetail />}
                                />
                                <Route path="/storage" element={<Storage />} />
                              </Routes>
                            </CartProvider>
                          </ProductProvider>
                        </StorageProvider>
                      </PopupProvider>
                    </AuthProvider>
                  </FarmerProfileProvider>
                </CustomerProfileProvider>
              </GeolocationProvider>
            </SlugProvider>
          </LogisticsProfileProvider>
        </StorageProfileProvider>
      </CartProvider1>
    </SearchProvider>
  );
}
export default App;
