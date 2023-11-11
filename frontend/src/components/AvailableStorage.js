import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import GlobalStorageCard1 from "./GlobalStorageCard1";
import GadaStorageCard1 from "./GadaStorageCard1";
import KaniStoargeCard1 from "./KaniStoargeCard1";
import GlobalStorageCard2 from "./GlobalStorageCard2";
import GadaStorageCard2 from "./GadaStorageCard2";
import KaniStorageCard2 from "./KaniStorageCard2";
import GlobalStorageCard3 from "./GlobalStorageCard3";
import GadaStorageCard3 from "./GadaStorageCard3";
import KaniStorageCard3 from "./KaniStorageCard3";
import GlobalStorageCard4 from "./GlobalStorageCard4";
import GadaStorageCard4 from "./GadaStorageCard4";
import KaniStorageCard4 from "./KaniStorageCard4";
import styles from "./AvailableStorage.module.css";

const AvailableStorage = () => {
  const navigate = useNavigate();

  const onStorageCardClick = useCallback(() => {
    navigate("/storage-detail");
  }, [navigate]);

  return (
    <div className={styles.availableStorage}>
      <div className={styles.storagesAvailable}>
        <span className={styles.storages}>Storage Facilities</span>
        <span className={styles.available}> Available</span>
      </div>
      <GlobalStorageCard1
        globalStorageCard1Position="absolute"
        globalStorageCard1Width="31.04%"
        globalStorageCard1Height="21.5%"
        globalStorageCard1Top="6.47%"
        globalStorageCard1Right="67.71%"
        globalStorageCard1Bottom="72.03%"
        globalStorageCard1Left="1.25%"
        onStorageCardClick={onStorageCardClick}
      />
      <GadaStorageCard1
        gadaStorageCard1Position="absolute"
        gadaStorageCard1Width="31.04%"
        gadaStorageCard1Height="21.5%"
        gadaStorageCard1Top="6.47%"
        gadaStorageCard1Right="33.85%"
        gadaStorageCard1Bottom="72.03%"
        gadaStorageCard1Left="35.11%"
        onStorageCardClick={onStorageCardClick}
      />
      <KaniStoargeCard1
        kaniStoargeCard1Position="absolute"
        kaniStoargeCard1Width="31.04%"
        kaniStoargeCard1Height="21.5%"
        kaniStoargeCard1Top="6.47%"
        kaniStoargeCard1Right="0%"
        kaniStoargeCard1Bottom="72.03%"
        kaniStoargeCard1Left="68.96%"
        onStorageCardClick={onStorageCardClick}
      />
      <GlobalStorageCard2
        globalStorageCard2Position="absolute"
        globalStorageCard2Width="31.04%"
        globalStorageCard2Height="21.5%"
        globalStorageCard2Top="30.48%"
        globalStorageCard2Right="67.71%"
        globalStorageCard2Bottom="48.02%"
        globalStorageCard2Left="1.25%"
        onStorageCardClick={onStorageCardClick}
      />
      <GadaStorageCard2
        gadaStorageCard2Position="absolute"
        gadaStorageCard2Width="31.04%"
        gadaStorageCard2Height="21.5%"
        gadaStorageCard2Top="30.48%"
        gadaStorageCard2Right="33.85%"
        gadaStorageCard2Bottom="48.02%"
        gadaStorageCard2Left="35.11%"
        onStorageCardClick={onStorageCardClick}
      />
      <KaniStorageCard2
        kaniStorageCard2Position="absolute"
        kaniStorageCard2Width="31.04%"
        kaniStorageCard2Height="21.5%"
        kaniStorageCard2Top="30.48%"
        kaniStorageCard2Right="0%"
        kaniStorageCard2Bottom="48.02%"
        kaniStorageCard2Left="68.96%"
        onStorageCardClick={onStorageCardClick}
      />
      <GlobalStorageCard3
        globalStorageCard3Position="absolute"
        globalStorageCard3Width="31.04%"
        globalStorageCard3Height="21.5%"
        globalStorageCard3Top="54.49%"
        globalStorageCard3Right="67.71%"
        globalStorageCard3Bottom="24.01%"
        globalStorageCard3Left="1.25%"
        onStorageCardClick={onStorageCardClick}
      />
      <GadaStorageCard3
        gadaStorageCard3Position="absolute"
        gadaStorageCard3Width="31.04%"
        gadaStorageCard3Height="21.5%"
        gadaStorageCard3Top="54.49%"
        gadaStorageCard3Right="33.85%"
        gadaStorageCard3Bottom="24.01%"
        gadaStorageCard3Left="35.11%"
        onStorageCardClick={onStorageCardClick}
      />
      <KaniStorageCard3
        kaniStorageCard3Position="absolute"
        kaniStorageCard3Width="31.04%"
        kaniStorageCard3Height="21.5%"
        kaniStorageCard3Top="54.49%"
        kaniStorageCard3Right="0%"
        kaniStorageCard3Bottom="24.01%"
        kaniStorageCard3Left="68.96%"
        onStorageCardClick={onStorageCardClick}
      />
      <GlobalStorageCard4
        globalStorageCard4Position="absolute"
        globalStorageCard4Width="31.04%"
        globalStorageCard4Height="21.5%"
        globalStorageCard4Top="78.5%"
        globalStorageCard4Right="67.71%"
        globalStorageCard4Bottom="0%"
        globalStorageCard4Left="1.25%"
        onStorageCardClick={onStorageCardClick}
      />
      <GadaStorageCard4
        gadaStorageCard4Position="absolute"
        gadaStorageCard4Width="31.04%"
        gadaStorageCard4Height="21.5%"
        gadaStorageCard4Top="78.5%"
        gadaStorageCard4Right="33.85%"
        gadaStorageCard4Bottom="0%"
        gadaStorageCard4Left="35.11%"
        onStorageCardClick={onStorageCardClick}
      />
      <KaniStorageCard4
        kaniStorageCard4Position="absolute"
        kaniStorageCard4Width="31.04%"
        kaniStorageCard4Height="21.5%"
        kaniStorageCard4Top="78.5%"
        kaniStorageCard4Right="0%"
        kaniStorageCard4Bottom="0%"
        kaniStorageCard4Left="68.96%"
        onStorageCardClick={onStorageCardClick}
      />
    </div>
  );
};

export default AvailableStorage;
