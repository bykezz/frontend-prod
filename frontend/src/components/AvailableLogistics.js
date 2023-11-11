import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import RollingLoudCard1 from "./RollingLoudCard1";
import TransLogisticsCard1 from "./TransLogisticsCard1";
import CargoExpressCard1 from "./CargoExpressCard1";
import CargoExpressCard2 from "./CargoExpressCard2";
import KaniExpressCard1 from "./KaniExpressCard1";
import KaniExpressCard2 from "./KaniExpressCard2";
import TransLogisticsCard2 from "./TransLogisticsCard2";
import CargoExpressCard3 from "./CargoExpressCard3";
import CargoExpressCard4 from "./CargoExpressCard4";
import RollingLoudCard2 from "./RollingLoudCard2";
import RollingLoudCard3 from "./RollingLoudCard3";
import TransLogisticsCard3 from "./TransLogisticsCard3";
import styles from "./AvailableLogistics.module.css";

const AvailableLogistics = () => {
  const navigate = useNavigate();

  const onTransLogisticsCardClick = () => {
    navigate("/logistic-detail");
  };

  return (
    <div className={styles.availableLogistics}>
      <div className={styles.logisticsAvailable}>
        <span className={styles.logistics}>Logistics Facilities</span>
        <span className={styles.available}> Available</span>
      </div>
      <RollingLoudCard1
        rollingLoudCard1Position="absolute"
        rollingLoudCard1Width="31.04%"
        rollingLoudCard1Height="21.5%"
        rollingLoudCard1Top="6.47%"
        rollingLoudCard1Right="67.71%"
        rollingLoudCard1Bottom="72.03%"
        rollingLoudCard1Left="1.25%"
        onTransLogisticsCardClick={onTransLogisticsCardClick}
      />
      <TransLogisticsCard1
        transLogisticsCard1Position="absolute"
        transLogisticsCard1Width="31.04%"
        transLogisticsCard1Height="21.5%"
        transLogisticsCard1Top="6.47%"
        transLogisticsCard1Right="33.85%"
        transLogisticsCard1Bottom="72.03%"
        transLogisticsCard1Left="35.11%"
        onTransLogisticsCardClick={onTransLogisticsCardClick}
      />
      <CargoExpressCard1
        cargoExpressCard1Position="absolute"
        cargoExpressCard1Width="31.04%"
        cargoExpressCard1Height="21.5%"
        cargoExpressCard1Top="6.47%"
        cargoExpressCard1Right="0%"
        cargoExpressCard1Bottom="72.03%"
        cargoExpressCard1Left="68.96%"
        onTransLogisticsCardClick={onTransLogisticsCardClick}
      />
      <CargoExpressCard2
        cargoExpressCard2Position="absolute"
        cargoExpressCard2Width="31.04%"
        cargoExpressCard2Height="21.5%"
        cargoExpressCard2Top="30.48%"
        cargoExpressCard2Right="67.71%"
        cargoExpressCard2Bottom="48.02%"
        cargoExpressCard2Left="1.25%"
        onTransLogisticsCardClick={onTransLogisticsCardClick}
      />
      <KaniExpressCard1
        kaniExpressCard1Position="absolute"
        kaniExpressCard1Width="31.04%"
        kaniExpressCard1Height="21.5%"
        kaniExpressCard1Top="30.48%"
        kaniExpressCard1Right="33.85%"
        kaniExpressCard1Bottom="48.02%"
        kaniExpressCard1Left="35.11%"
        onTransLogisticsCardClick={onTransLogisticsCardClick}
      />
      <KaniExpressCard2
        kaniExpressCard2Position="absolute"
        kaniExpressCard2Width="31.04%"
        kaniExpressCard2Height="21.5%"
        kaniExpressCard2Top="30.48%"
        kaniExpressCard2Right="0%"
        kaniExpressCard2Bottom="48.02%"
        kaniExpressCard2Left="68.96%"
        onTransLogisticsCardClick={onTransLogisticsCardClick}
      />
      <TransLogisticsCard2
        transLogisticsCard2Position="absolute"
        transLogisticsCard2Width="31.04%"
        transLogisticsCard2Height="21.5%"
        transLogisticsCard2Top="54.49%"
        transLogisticsCard2Right="67.71%"
        transLogisticsCard2Bottom="24.01%"
        transLogisticsCard2Left="1.25%"
        onTransLogisticsCardClick={onTransLogisticsCardClick}
      />
      <CargoExpressCard3
        cargoExpressCard3Position="absolute"
        cargoExpressCard3Width="31.04%"
        cargoExpressCard3Height="21.5%"
        cargoExpressCard3Top="54.49%"
        cargoExpressCard3Right="33.85%"
        cargoExpressCard3Bottom="24.01%"
        cargoExpressCard3Left="35.11%"
        onTransLogisticsCardClick={onTransLogisticsCardClick}
      />
      <CargoExpressCard4
        cargoExpressCard4Position="absolute"
        cargoExpressCard4Width="31.04%"
        cargoExpressCard4Height="21.5%"
        cargoExpressCard4Top="54.49%"
        cargoExpressCard4Right="0%"
        cargoExpressCard4Bottom="24.01%"
        cargoExpressCard4Left="68.96%"
        onTransLogisticsCardClick={onTransLogisticsCardClick}
      />
      <RollingLoudCard2
        rollingLoudCard2Position="absolute"
        rollingLoudCard2Width="31.04%"
        rollingLoudCard2Height="21.5%"
        rollingLoudCard2Top="78.5%"
        rollingLoudCard2Right="67.71%"
        rollingLoudCard2Bottom="0%"
        rollingLoudCard2Left="1.25%"
        onTransLogisticsCardClick={onTransLogisticsCardClick}
      />
      <RollingLoudCard3
        rollingLoudCard3Position="absolute"
        rollingLoudCard3Width="31.04%"
        rollingLoudCard3Height="21.5%"
        rollingLoudCard3Top="78.5%"
        rollingLoudCard3Right="33.85%"
        rollingLoudCard3Bottom="0%"
        rollingLoudCard3Left="35.11%"
        onTransLogisticsCardClick={onTransLogisticsCardClick}
      />
      <TransLogisticsCard3
        transLogisticsCard3Position="absolute"
        transLogisticsCard3Width="31.04%"
        transLogisticsCard3Height="21.5%"
        transLogisticsCard3Top="78.5%"
        transLogisticsCard3Right="0%"
        transLogisticsCard3Bottom="0%"
        transLogisticsCard3Left="68.96%"
        onTransLogisticsCardClick={onTransLogisticsCardClick}
      />
    </div>
  );
};

export default AvailableLogistics;
