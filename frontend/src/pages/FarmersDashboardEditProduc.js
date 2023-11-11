import { useCallback, useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import { Input, Textarea } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "./FarmersDashboardEditProduc.module.css";
import DashboardNavigation from "../components/DashboardNavigation";
import SearchBar from "../components/SearchBar";
import { useFarmerProfile } from "../context/FarmerProfileContext";
import { useAuth } from "../context/AuthContext";

const FarmersDashboardEditProduc = () => {
  const navigate = useNavigate();
  const { id } = useFarmerProfile();
  const { token } = useAuth();

  const [categories, setCategories] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  const [formData, setFormData] = useState({
    description: "",
    regular_price: "",
    sale_price: "",
    quantity: "",
    minimum_order_quantity: "",
    slug: "",
    image: "",
  });

  const onGroupButtonClick = useCallback(() => {
    navigate("/farmers-dashboard-product");
  }, [navigate]);

  const onProfileClick = useCallback(() => {
    navigate("/farmers-dashboard-profile");
  }, [navigate]);

  const onGeolocationClick = useCallback(() => {
    navigate("/farmers-dashboard-geolocation");
  }, [navigate]);

  const onFrameButton1Click = useCallback(() => {
    navigate("/farmers-dashboard-messages");
  }, [navigate]);

  const onOrdersClick = useCallback(() => {
    navigate("/farmers-dashboard-orders");
  }, [navigate]);

  const onWeatherForecastClick = useCallback(() => {
    navigate("/farmers-dashboard-weather");
  }, [navigate]);

  const onGroupButton2Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onGroupButton3Click = useCallback(() => {
    navigate("/marketplace");
  }, [navigate]);

  const onGroupButton4Click = useCallback(() => {
    navigate("/logistics");
  }, [navigate]);

  const onGroupButton5Click = useCallback(() => {
    navigate("/storage");
  }, [navigate]);
  const onGroupButton6Click = useCallback(() => {
    navigate("/farmers-deals");
  }, [navigate]);

  const onGroupButton7Click = useCallback(() => {
    navigate("/track-order");
  }, [navigate]);

  useEffect(() => {
    fetchCategories();
    axios.defaults.headers.common["Authorization"] = `JWT ${token}`;
    if (id) {
      axios
        .get(`http://13.53.125.166/product/${id}/`)
        .then((response) => {
          setSelectedProduct(response.data);
          setSelectedCategory(response.data.category);
          setFormData({
            ...formData,
            description: response.data.description,
            sale_price: response.data.sale_price,
            regular_price: response.data.regular_price,
            quantity: response.data.quantity,
            minimum_order_quantity: response.data.minimum_order_quantity,
            slug: response.data.slug,
            image: response.data.images[0].image,
          });

          console.log(response.data);
        })

        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, [id]);

  const fetchCategories = () => {
    axios
      .get("http://13.53.125.166/category")
      .then((response) => {
        setCategories(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  };

  return (
    <div className={styles.farmersDashboardAddNewPr}>
      <DashboardNavigation
        imageDimensions="/antdesignhomeoutlined2.svg"
        imageDimensionsText="/claritystoreline8.svg"
        imageDimensionsCode="/fa6solidtruckfast4.svg"
        imageDimensionsCodeText="/mdisilooutline3.svg"
        imageDimensionsTextCode="/healthiconsfruitsoutline9.svg"
        imageDimensionsTextCode2="/carbonmap5.svg"
        onGroupButton2Click={onGroupButton2Click}
        onGroupButton3Click={onGroupButton3Click}
        onGroupButton4Click={onGroupButton4Click}
        onGroupButton5Click={onGroupButton5Click}
        onGroupButton6Click={onGroupButton6Click}
        onGroupButton7Click={onGroupButton7Click}
      />
      <div className={styles.rectangleContainer}>
        <div className={styles.frameItem} />
        <button className={styles.groupButton} onClick={onGroupButtonClick}>
          <div className={styles.groupInner} />
          <div className={styles.save}>Save</div>
        </button>
        <div className={styles.productName}>Product Name:</div>
        <div className={styles.productDescription}>Product Description:</div>
        <div className={styles.productPrice}>Product Price:</div>
        <div className={styles.quantity}>Quantity:</div>
        <div className={styles.productCategory}>Product Category:</div>
        <div className={styles.productImage}>Product Image</div>
        <div className={styles.regularPrice}>Regular price:</div>
        <div className={styles.salePrice}>Sale price:</div>

        <Form.Select className={styles.carrotsParent}>
          <option>{selectedProduct.name}</option>
          <option value="Carrots">Carrots</option>
          <option value="Spinach">Spinach</option>
          <option value="Cucumber">Cucumber</option>
          <option value="Lettuce">Lettuce</option>
          <option value="Broccoli">Broccoli</option>
          <option value="Tomatoes">Tomatoes</option>
          <option value="Bell peppers">Bell peppers</option>
          <option value="Onions">Onions</option>
          <option value="Cauliflower">Cauliflower</option>
          <option value="Cabbage">Cabbage</option>
          <option value="Leeks">Leeks</option>
          <option value="Rice">Rice</option>
        </Form.Select>
        <Input
          className={styles.frameInner}
          width="120px"
          w="120px"
          value={formData.regular_price}
          onChange={(e) =>
            setFormData({ ...formData, regular_price: e.target.value })
          }
        />
        <Input
          className={styles.rectangleInput}
          width="120px"
          w="120px"
          value={formData.sale_price}
          onChange={(e) =>
            setFormData({ ...formData, sale_price: e.target.value })
          }
        />
        <Form.Select
          className={styles.vegetablesParent}
          id="productCategorySelect"
          variant="outline"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {" "}
              {category.name}
            </option>
          ))}
        </Form.Select>
        <img className={styles.rectangleIcon} alt="" src={formData.image} />
        <Textarea
          className={styles.rectangleTextarea}
          variant="outline"
          w="1038px"
          h="180px"
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
        />
        <div className={styles.rectangleDiv} />
        <button className={styles.profile} onClick={onProfileClick}>
          Profile
        </button>
        <button className={styles.geolocation} onClick={onGeolocationClick}>
          Geolocation
        </button>
        <button className={styles.ellipseGroup} onClick={onFrameButton1Click}>
          <div className={styles.ellipseDiv} />
          <img className={styles.vectorIcon1} alt="" src="/vector27.svg" />
        </button>
        <button className={styles.groupWrapper}>
          <div className={styles.groupDiv}>
            <div className={styles.groupChild1} />
            <div className={styles.products}>Products</div>
          </div>
        </button>
        <button className={styles.ordersWrapper} onClick={onOrdersClick}>
          <div className={styles.orders}>Orders</div>
        </button>
        <button
          className={styles.weatherForecast}
          onClick={onWeatherForecastClick}
        >
          Weather Forecast
        </button>
        <div className={styles.totalQuantity}>Total quantity:</div>
        <div className={styles.minimumOrderQuantity}>
          Minimum Order Quantity:
        </div>
        <Input
          className={styles.frameChild1}
          width="110px"
          w="110px"
          value={formData.quantity}
          onChange={(e) =>
            setFormData({ ...formData, quantity: e.target.value })
          }
        />
        <Input
          className={styles.frameChild2}
          width="110px"
          w="110px"
          value={formData.minimum_order_quantity}
          onChange={(e) =>
            setFormData({ ...formData, minimum_order_quantity: e.target.value })
          }
        />
      </div>
      <div className={styles.groupParent}>
        <SearchBar
          dimensionText="/phuserlight3.svg"
          dimensionText2="/bibasketfill2.svg"
          propRight="5.4%"
        />
      </div>
    </div>
  );
};

export default FarmersDashboardEditProduc;
