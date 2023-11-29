import { useCallback, useState, useRef, useEffect } from "react";
import { Select, Stack, Input, Textarea } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "./FarmersDashboardAddNewPr.module.css";
import SearchBar from "../components/SearchBar";
import DashboardNavigation from "../components/DashboardNavigation";
import { useAuth } from "../context/AuthContext";
import { useSlug } from "../context/SlugContext";

const FarmersDashboardAddNewPr = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate();
  const { token } = useAuth();
  const [imageSrc, setImageSrc] = useState("/rectangle-91@2x.jpg");
  const inputRef = useRef();
  const { generateRandomSlug } = useSlug();

  const subcategoryOptions = {
    Vegetables: [
      "Carrots",
      "Spinach",
      "Cucumber",
      "Lettuce",
      "Broccoli",
      "Tomatoes",
      "Bell Peppers",
      "Onions",
      "Cauliflower",
      "Cabbage",
      "Leeks",
      "Eggplant",
      "Thyme",
    ],
    Fruits: [
      "Apple",
      "Banana",
      "Orange",
      "Grapes",
      "Mango",
      "Pineapple",
      "Kiwi",
      "Watermelon",
      "Strawberries",
      "Blueberries",
      "Raspberries",
      "Blackberries",
      "Peaches",
      "Plums",
      "Cherries",
      "Pears",
      "Lemons",
      "Limes",
      "Grapefruit",
      "Pomegranate",
      "Papaya",
      "Guava",
      "Avocado",
    ],
    Grains: [
      "Rice",
      "Wheat",
      "Oats",
      "Maize",
      "Millet",
      "Wild Rice",
      "Brown Rice",
      "Couscous",
    ],
    Livestock: [
      "Cow",
      "Goat",
      "Sheep",
      "Pig",
      "Horse",
      "Donkey",
      "Camel",
      "Buffalo",
      "Rabbit",
      "Guinea Pig",
    ],
    Poultry: [
      "Chicken",
      "Duck",
      "Turkey",
      "Pigeon",
      "Goose",
      "Guinea Fowl",
      "Ostrich",
      "Mallard Duck",
    ],
    Legumes: [
      "Chickpeas",
      "Black Beans",
      "Green Peas",
      "Soybeans",
      "Kidney Beans",
      "Black-Eyed Peas",
      "Brown Beans",
      "Small Brown Beans",
      "White Beans",
    ],
    Tubers: [
      "Irish Potatoes",
      "Sweet Potatoes",
      "Yams",
      "Cassava",
      "Beets",
      "Garlic",
      "Ginger",
    ],
    "Processed Foods": [
      "Canned Foods",
      "Frozen Foods",
      "Dried Foods",
      "Snacks",
      "Beverages",
      "Sauces",
      "Spices",
      "Seasonings",
      "Oils",
      "Vinegars",
      "Sweeteners",
      "Baking Powder",
      "Cereals",
      "Pasta",
      "Rice",
      "Grains",
      "Canned Vegetables",
      "Canned Fruits",
      "Frozen Vegetables",
      "Frozen Fruits",
      "Dried Fruits",
      "Juice",
      "Tea",
    ],
    Seafoods: [
      "Shrimp",
      "Crab",
      "Lobster",
      "Oysters",
      "Squid",
      "Octopus",
      "Calamari",
    ],
    Nuts: [
      "Almonds",
      "Walnuts",
      "Peanuts",
      "Cashews",
      "Hazelnuts",
      "Brazil Nuts",
      "Pecans",
      "Coconuts",
      "Sunflower Seeds",
      "Pumpkin Seeds",
      "Soy Nuts",
      "Tiger Nuts",
      "Watermelon Seeds",
      "Kola Nuts",
      "Betel Nuts",
      "Areca Nuts",
      "Aleurites Nuts",
      "Beechnuts",
      "Butternuts",
      "Candlenuts",
    ],
    Fish: [
      "Crocker",
      "Tuna",
      "Swordfish",
      "Mackerel",
      "Catfish",
      "Tilapia",
      "Sardines",
    ],
  };

  useEffect(() => {
    fetchCategories();
  }, []);
  const fetchCategories = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/category");
      setCategories(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

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

  const onGroupButton1Click = useCallback(() => {
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

  const handleImageChange = (e) => {
    console.log("File input change event triggered.");
    const file = e.target.files[0];
    console.log("Selected file:", file);
    if (file) {
      const imageURL = URL.createObjectURL(file);
      console.log("Image URL:", imageURL);
      setImageSrc(imageURL);
      setSelectedImage(file);
    }
  };

  const handleImageClick = () => {
    inputRef.current.click();
  };
  const handleSave = () => {
    console.log("imageSrc", selectedImage);
    const productName = document.getElementById("productNameInput").value;
    const productDescription = document.getElementById(
      "productDescriptionInput"
    ).value;
    const regularPrice = document.getElementById("regularPriceInput").value;
    const salePrice = document.getElementById("salePriceInput").value;
    const quantity = document.getElementById("quantityInput").value;
    const minimumOrderQuantity = document.getElementById(
      "minimumOrderQuantityInput"
    ).value;
    const productCategory = document.getElementById(
      "productCategorySelect"
    ).value;

    const slug = generateRandomSlug(8);

    const formData = new FormData();
    formData.append("name", productName);
    formData.append("description", productDescription);
    formData.append("regular_price", regularPrice);
    formData.append("sale_price", salePrice);
    formData.append("quantity", quantity);
    formData.append("minimum_order_quantity", minimumOrderQuantity);
    formData.append("category", productCategory);
    formData.append("slug", slug);

    const formData1 = new FormData();
    formData1.append("image", selectedImage);

    axios.defaults.headers.common["Authorization"] = `JWT ${token}`;

    axios
      .post("http://127.0.0.1:8000/product/", formData)
      .then((response) => {
        const id = response.data.id;

        console.log(response.data);
        return axios.post(
          `http://127.0.0.1:8000/product/${id}/images/`,
          formData1
        );
      })
      .then((response2) => {
        console.log("my image", response2.data);

        onGroupButtonClick();
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  return (
    <div className={styles.farmersDashboardAddNewPr}>
      <div className={styles.rectangleContainer}>
        <div className={styles.frameItem} />
        <button className={styles.groupButton} onClick={handleSave}>
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
        <div className={styles.totalQuantity}>Total quantity:</div>
        <div className={styles.minimumOrderQuantity}>
          Minimum Order Quantity:
        </div>
        <div className={styles.salePrice}>Sale price:</div>
        <Stack className={styles.wrapper} w="241px">
          <Select
            id="productNameInput"
            variant="outline"
            placeholder="--select--"
          >
            {subcategoryOptions[selectedCategory || "Vegetables"].map(
              (subCategory, index) => (
                <option key={index} value={subCategory}>
                  {subCategory}
                </option>
              )
            )}
          </Select>
        </Stack>
        <Input
          className={styles.frameInner}
          id="regularPriceInput"
          width="120px"
          w="120px"
        />
        <Input
          className={styles.rectangleInput}
          id="quantityInput"
          width="110px"
          w="110px"
        />
        <Input
          className={styles.frameChild1}
          id="minimumOrderQuantityInput"
          width="110px"
          w="110px"
        />
        <Input
          className={styles.frameChild2}
          id="salePriceInput"
          width="120px"
          w="120px"
        />
        <Stack className={styles.container} w="210px">
          <Select
            id="productCategorySelect"
            variant="outline"
            placeholder="--select--"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map((category) => (
              <option key={category.id} value={category.name}>
                {" "}
                {category.name}
              </option>
            ))}
          </Select>
        </Stack>
        <img
          className={styles.rectangleIcon}
          alt=""
          src={imageSrc}
          onClick={handleImageClick}
        />
        <input
          className={styles.rectangleIcon}
          ref={inputRef}
          type="file"
          id="imageInput"
          accept="image/*"
          style={{ display: "none" }}
          onChange={handleImageChange}
        />
        <Textarea
          id="productDescriptionInput"
          className={styles.rectangleTextarea}
          variant="outline"
          w="1038px"
          h="180px"
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
        <button className={styles.ordersWrapper} onClick={onGroupButton1Click}>
          <div className={styles.orders}>Orders</div>
        </button>
        <button
          className={styles.weatherForecast}
          onClick={onWeatherForecastClick}
        >
          Weather Forecast
        </button>
      </div>
      <DashboardNavigation
        onGroupButton2Click={onGroupButton2Click}
        onGroupButton3Click={onGroupButton3Click}
        onGroupButton4Click={onGroupButton4Click}
        onGroupButton5Click={onGroupButton5Click}
        onGroupButton6Click={onGroupButton6Click}
        onGroupButton7Click={onGroupButton7Click}
      />
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

export default FarmersDashboardAddNewPr;
