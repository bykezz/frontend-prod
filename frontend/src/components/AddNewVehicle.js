import { useCallback, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "./AddNewVehicle.module.css";
import { Select, Stack, Input, Textarea } from "@chakra-ui/react";
import { useSlug } from "../context/SlugContext";
import { useAuth } from "../context/AuthContext";

const AddNewVehicle = () => {
  const navigate = useNavigate();
  const inputRef = useRef();
  const { generateRandomSlug } = useSlug();
  const { userId, token } = useAuth();
  const [selectedImage, setSelectedImage] = useState(null);

  const onGroupButton1Click = useCallback(() => {
    navigate("/logistics-2");
  }, [navigate]);

  const handleImageChange = (e) => {
    console.log("File input change event triggered.");
    const file = e.target.files[0];
    console.log("Selected file:", file);
    if (file) {
      setSelectedImage(file);
    }
  };

  const handleSubmit = () => {
    const vehicleType = document.getElementById("type").value;
    const quantity = document.getElementById("quantity").value;
    const description = document.getElementById("description").value;
    const price = document.getElementById("price").value;
    const slug = generateRandomSlug(8);

    const formData = new FormData();
    formData.append("type", vehicleType);
    formData.append("quantity", quantity);
    formData.append("description", description);
    formData.append("slug", slug);
    formData.append("price", price);

    const formData1 = new FormData();
    formData1.append("image", selectedImage);

    axios.defaults.headers.common["Authorization"] = `JWT ${token}`;
    axios
      .post(`http://13.53.125.166/logistics/${userId}/vehicles/`, formData)
      .then((response) => {
        const id = response.data.id;
        onGroupButton1Click();
        console.log("Data submitted successfully:", response.data);
        return axios.post(
          `http://13.53.125.166/logistics/${userId}/vehicles/${id}/image/`,
          formData1
        );
      })
      .then((response2) => {
        console.log("image", response2);
      })
      .catch((error) => {
        console.error("Error submitting data:", error);
      });
    onGroupButton1Click();
  };

  const handleImageClick = () => {
    inputRef.current.click();
  };
  return (
    <div className={styles.addNewVehicle}>
      <div className={styles.addNewVehicleChild} />
      <div className={styles.addNewVehicleWrapper}>
        <div className={styles.vehicleType}>Add New Vehicle</div>
      </div>
      <div className={styles.vehicleTypeWrapper}>
        <div className={styles.vehicleType}>Vehicle Type</div>
      </div>
      <div className={styles.vehicleTypeWrapper1}>
        <div className={styles.vehicleType}>Quantity</div>
      </div>
      <div className={styles.vehicleTypeWrapper2}>
        <div className={styles.vehicleType}>Description</div>
      </div>
      <Stack
        className={styles.truckParent}
        w="268px"
        style={{ width: "268px" }}
        size="large"
      >
        <Select id="type" variant="outline" placeholder="- - select type - -">
          <option value="Truck">Truck</option>
          <option value="Lorry">Lorry</option>
          <option value="Trailer">Trailer</option>
          <option value="Barge">Barge</option>
          <option value="Railcar">Railcar</option>
          <option value="Pickup">Pickup</option>
          <option value="Freight Aircraft">Freight Aircraft</option>
          <option value="Container Ship">Container Ship</option>
          <option value="Ferry">Ferry</option>
          <option value="Bulk Carrier">Bulk Carrier</option>
        </Select>
      </Stack>
      <div className={styles.sizeOfVehicleWrapper}>
        <div className={styles.vehicleType}>Price</div>
      </div>
      <Input
        className={styles.Input}
        w="268px"
        id="price"
        style={{ width: "268px" }}
        placeholder="enter price"
        type="number"
      />
      <Input
        className={styles.Input1}
        w="268px"
        style={{ width: "268px" }}
        type="number"
        id="quantity"
        placeholder="enter quantity"
      />
      <Textarea
        className={styles.Input2}
        w="268px"
        id="description"
        style={{ width: "268px" }}
        type="number"
        placeholder="description"
      />
      <div className={styles.uploadAnImageOfYourVehiclWrapper}>
        <div className={styles.vehicleType}>
          Upload an image of your Vehicle
        </div>
      </div>
      <input
        className={styles.rectangleIcon}
        ref={inputRef}
        type="file"
        id="imageInput"
        accept="image/*"
        onChange={handleImageChange}
      />
      <button className={styles.rectangleParent} onClick={handleImageClick}>
        <div className={styles.groupChild} />
        <div className={styles.selectAFileJpgPngWrapper}>
          <div className={styles.selectAFile}>Select a file (jpg, png)</div>
        </div>
      </button>

      <button className={styles.rectangleGroup} onClick={handleSubmit}>
        <div className={styles.groupChild1} />
        <div className={styles.addVehicle}>Add Vehicle</div>
      </button>
    </div>
  );
};

export default AddNewVehicle;
