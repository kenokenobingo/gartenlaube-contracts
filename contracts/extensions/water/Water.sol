pragma solidity ^0.8.0;

// SPDX-License-Identifier: MIT

import "../../core/DaoRegistry.sol";
import "../../core/DaoConstants.sol";

contract WaterContract {
    bool irrigation;
    uint256 timestamp;
    uint256 wateringTime;
    uint256 triggerHumidity;
    uint256 newHumidity;

    function triggerWatering(uint256 humidity) public {
        irrigation = true;
        timestamp = block.timestamp;
        wateringTime = 20;
        triggerHumidity = humidity;
    }
    
    function stopWatering(uint256 humidity) public {
        irrigation = false;
        timestamp = block.timestamp;
        newHumidity = humidity;
    }
}