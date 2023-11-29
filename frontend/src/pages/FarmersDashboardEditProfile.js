import { useCallback, useState, useRef, useEffect } from "react";
import { Input } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import styles from "./FarmersDashboardEditProfile.module.css";
import Footer from "../components/Footer";
import axios from "axios";
import SearchBar from "../components/SearchBar";
import DashboardNavigation from "../components/DashboardNavigation";
import { useFarmerProfile } from "../context/FarmerProfileContext";
import { useAuth } from "../context/AuthContext";

const FarmersDashboardEditProfile = () => {
  const navigate = useNavigate();
  const inputFileRef = useRef(null);
  const { token } = useAuth();
  const {
    setfirst_name,
    setlast_name,
    setFarmName,
    editedFarmInfo,
    setEditedFarmInfo,
    editedUsername,
    setEditedUsername,
    editedFarmAddress,
    setEditedFarmAddress,
    setStreet,
    setCity,
    setFarmState,
    profilePicture,
    setProfilePicture,
    selectedImage,
    setSelectedImage,
  } = useFarmerProfile();
  const [tempProfilePic, setTempProfilePic] = useState();
  useEffect(() => {
    // Log the token whe the component mounts or when the token changes
    console.log("Token:", token);
  }, [token]);

  const onGroupButtonClick = useCallback(() => {
    navigate("/farmers-dashboard-profile");
  }, [navigate]);

  const onGroupButton1Click = useCallback(() => {
    navigate("/farmers-dashboard-profile");
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

  const handleSave = () => {
    axios.defaults.headers.common["Authorization"] = `JWT ${token}`;
    axios
      .put("http://127.0.0.1:8000/auth/users/me/", editedUsername)
      .then((response) => {
        console.log("Profile updated successfully", response.data);
        setfirst_name(response.data.first_name);
        setlast_name(response.data.last_name);
        handleImageChange();
      });
    axios
      .put("http://127.0.0.1:8000/farmers/my_profile/", editedFarmInfo)
      .then((response) => {
        console.log("Profile updated successfully", response.data);
        setFarmName(response.data.farm_name);
      });
    axios
      .post("http://127.0.0.1:8000/address/", editedFarmAddress)
      .then((response) => {
        console.log("Profile updated successfully", response.data);
        setStreet(response.data.street);
        setCity(response.data.city);
        setFarmState(response.data.state);
      })
      .catch((error) => {
        console.error("Error updating profile:", error);
      });
  };

  const handleImageChange = () => {
    const formData = new FormData();
    formData.append("image", selectedImage.image);

    // Assuming you have an API endpoint for updating the profile picture:

    axios.defaults.headers.common["Authorization"] = `JWT ${token}`;
    axios
      .post("http://127.0.0.1:8000/farm-images/profile_image/", formData)

      .then((response) => {
        console.log("Profile picture posted successfully", response.data);
        const pic = `http://127.0.0.1:8000${response.data.image}`;
        setProfilePicture(pic);
      })

      .catch((error) => {
        console.error("Error updating profile picture:", error);
      });
  };

  return (
    <div>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.rectangleGroup}>
          <Footer />
        </div>
        <div className={styles.rectangleContainer}>
          <div className={styles.groupChild2} />
          <div className={styles.groupChild3} />
          <div className={styles.editProfile}>Edit Profile</div>
          <div className={styles.farmName}>Farm name:</div>
          <Input
            className={styles.rectangleInput}
            width="258px"
            w="258px"
            type="text"
            value={editedFarmInfo.farm_name}
            onChange={(e) =>
              setEditedFarmInfo({
                ...editedFarmInfo,
                farm_name: e.target.value,
              })
            }
          />
          <Input
            className={styles.groupChild4}
            width="258px"
            w="258px"
            type="text"
            value={editedUsername.first_name}
            onChange={(e) =>
              setEditedUsername({
                ...editedUsername,
                first_name: e.target.value,
              })
            }
          />
          <Input
            className={styles.groupChild15}
            width="258px"
            w="258px"
            type="text"
            value={editedUsername.last_name}
            onChange={(e) =>
              setEditedUsername({
                ...editedUsername,
                last_name: e.target.value,
              })
            }
          />

          <div className={styles.username}>First name:</div>
          <div className={styles.username1}>Last name:</div>
          <div className={styles.email}>Farm address</div>
          <Input
            className={styles.groupChild6}
            width="258px"
            w="258px"
            type="text"
            value={editedFarmAddress.street}
            onChange={(e) =>
              setEditedFarmAddress({
                ...editedFarmAddress,
                street: e.target.value,
              })
            }
          />
          <Input
            className={styles.groupChild16}
            width="258px"
            w="258px"
            type="text"
            value={editedFarmAddress.city}
            onChange={(e) =>
              setEditedFarmAddress({
                ...editedFarmAddress,
                city: e.target.value,
              })
            }
          />
          <Input
            className={styles.groupChild17}
            width="258px"
            w="258px"
            type="text"
            value={editedFarmAddress.state}
            onChange={(e) =>
              setEditedFarmAddress({
                ...editedFarmAddress,
                state: e.target.value,
              })
            }
          />
          <div className={styles.farmAddress}>Street:</div>
          <div className={styles.farmAddress1}>City:</div>
          <div className={styles.farmAddress2}>State:</div>
          <img
            className={styles.groupIcon}
            alt=""
            src={
              tempProfilePic
                ? tempProfilePic
                : profilePicture
                ? profilePicture
                : "/group-491.svg"
            }
          />
          <button
            className={styles.changeProfilePicture}
            onClick={() => inputFileRef.current.click()}
          >
            Change profile picture
          </button>
          <input
            type="file"
            name="image"
            accept=".png, .jpg, .jpeg"
            ref={inputFileRef}
            style={{ display: "none" }}
            onChange={(e) => {
              setSelectedImage({ image: e.target.files[0] });
              setTempProfilePic(URL.createObjectURL(e.target.files[0]));
            }}
          />

          <button className={styles.groupButton} onClick={onGroupButtonClick}>
            <div className={styles.groupChild7} />
            <div className={styles.save} onClick={handleSave}>
              Save
            </div>
          </button>
        </div>
        <button
          className={styles.rectangleParent1}
          onClick={onGroupButton1Click}
        >
          <div className={styles.groupChild8} />
          <div className={styles.save1}>Save</div>
        </button>
      </div>
      <SearchBar
        dimensionText="/phuserlight3.svg"
        dimensionText2="/bibasketfill2.svg"
        propRight="5.4%"
      />
      <DashboardNavigation
        onGroupButton2Click={onGroupButton2Click}
        onGroupButton3Click={onGroupButton3Click}
        onGroupButton4Click={onGroupButton4Click}
        onGroupButton5Click={onGroupButton5Click}
        onGroupButton6Click={onGroupButton6Click}
        onGroupButton7Click={onGroupButton7Click}
      />
    </div>
  );
};

export default FarmersDashboardEditProfile;
