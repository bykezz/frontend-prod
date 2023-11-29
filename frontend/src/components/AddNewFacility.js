import { useCallback, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Select, Stack, Textarea } from "@chakra-ui/react";
import axios from "axios";
import styles from "./AddNewFacility.module.css";
import { Input } from "antd";
import { useSlug } from "../context/SlugContext";
import { useAuth } from "../context/AuthContext";

const AddNewFacility = () => {
  const navigate = useNavigate();
  const inputRef = useRef();
  const { generateRandomSlug } = useSlug();
  const { token, userId } = useAuth();
  const [selectedImage, setSelectedImage] = useState(null);

  const handleSubmit = () => {
    const facilityType = document.getElementById("barnsParent").value;
    const sizeOfFacility = document.getElementById(
      "below500TonnesParent"
    ).value;
    const street = document.getElementById("street").value;
    const city = document.getElementById("city").value;
    const state = document.getElementById("state").value;
    const price = document.getElementById("price").value;
    const slug = generateRandomSlug(8);

    const formData = new FormData();
    formData.append("type", facilityType);
    formData.append("capacity", sizeOfFacility);
    formData.append("street", street);
    formData.append("city", city);
    formData.append("state", state);
    formData.append("slug", slug);
    formData.append("price", price);
    formData.append("description", facilityType);

    const formData1 = new FormData();
    formData1.append("image", selectedImage);

    axios.defaults.headers.common["Authorization"] = `JWT ${token}`;
    axios
      .post("http://127.0.0.1:8000/storage/my_facilities/", formData)
      .then((response) => {
        const id = response.data.id;
        console.log("Data submitted successfully:", response.data);
        return axios.post(
          `http://127.0.0.1:8000/storage/${userId}/facilities/${id}/image/`,
          formData1
        );
      })
      .then((response2) => {
        console.log(response2);
      })
      .catch((error) => {
        console.error("Error submitting data:", error);
      });
    onGroupButton1Click();
  };
  const onGroupButton1Click = useCallback(() => {
    navigate("/facility-owner-2");
  }, [navigate]);

  const handleImageChange = (e) => {
    console.log("File input change event triggered.");
    const file = e.target.files[0];
    console.log("Selected file:", file);
    if (file) {
      setSelectedImage(file);
    }
  };
  const handleImageClick = () => {
    inputRef.current.click();
  };

  return (
    <div className={styles.addNewFacility}>
      <div className={styles.addNewFacilityChild} />
      <div className={styles.addNewFacilityWrapper}>
        <div className={styles.facilityType}>Add New Facility</div>
      </div>
      <div className={styles.facilityTypeWrapper}>
        <div className={styles.facilityType}>Facility Type</div>

        <Stack className={styles.barnsParent} w="268px">
          <Select
            id="barnsParent"
            variant="outline"
            placeholder="- - select facility - -"
          >
            <option value="Parkhouse">Parkhouse</option>
            <option value="Warehouse">Warehouse</option>
            <option value="Silo">Silo</option>
            <option value="Coldroom">Coldroom</option>
            <option value="Others">Others</option>
          </Select>
        </Stack>
      </div>
      <div className={styles.sizeOfFacilityWrapper}>
        <div className={styles.facilityType}>Size of Facility</div>

        <Stack
          className={styles.below500TonnesParent}
          w="268px"
          style={{ width: "268px" }}
          size="large"
        >
          <Select
            id="below500TonnesParent"
            variant="outline"
            placeholder="- - select size - -"
          >
            <option value="<100">Below 100 tonnes</option>
            <option value="100-500">100 - 500 tonnes</option>
            <option value="501-1000">501 - 1000 tonnes</option>
            <option value="1001-5000">1001 - 5000 tonnes</option>
            <option value="5001-10000">5001 - 10000 tonnes</option>
            <option value="10000+">above 10000 tonnes</option>
          </Select>
        </Stack>
      </div>
      <div className={styles.priceTag}>Price</div>
      <Input
        id="price"
        className={styles.price}
        style={{ width: "268px" }}
        type="number"
        size="large"
      />
      <div className={styles.facilityAddress}>Facility Address</div>
      <div className={styles.streetAddress}>Street</div>
      <Input
        className={styles.street}
        id="street"
        style={{ width: "268px" }}
        size="large"
        placeholder="street"
      />
      <div className={styles.cityAddress}>City</div>
      <Input
        className={styles.city}
        id="city"
        style={{ width: "268px" }}
        size="large"
        placeholder="city"
      />
      <div className={styles.stateAddress}>State</div>
      <Input
        className={styles.state}
        id="state"
        style={{ width: "268px" }}
        size="large"
        placeholder="state"
      />
      <div className={styles.uploadAnImageOfYourFaciliWrapper}>
        <div className={styles.facilityType}>
          Upload an image of your facility
        </div>
      </div>

      <button className={styles.rectangleParent} onClick={handleImageClick}>
        <div className={styles.groupChild} />
        <div className={styles.selectAFileJpgPngWrapper}>
          <div className={styles.selectAFile}>Select a file (jpg, png)</div>
        </div>
      </button>
      <input
        className={styles.rectangleIcon}
        ref={inputRef}
        type="file"
        id="imageInput"
        accept="image/*"
        onChange={handleImageChange}
      />

      <button className={styles.rectangleGroup1} onClick={handleSubmit}>
        <div className={styles.groupChild1} />
        <div className={styles.addFacility}>Add Facility</div>
      </button>
    </div>
  );
};

export default AddNewFacility;
