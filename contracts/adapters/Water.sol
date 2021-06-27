pragma solidity ^0.8.0;

// SPDX-License-Identifier: MIT

import "../core/DaoRegistry.sol";
import "../core/DaoConstants.sol";
import "../guards/AdapterGuard.sol";
import "../guards/MemberGuard.sol";

contract WaterContract is DaoConstants, AdapterGuard, MemberGuard {
    bool public irrigation = false;
    bool public warning = false;
    uint256 timestamp;
    uint256 wateringTime;
    uint256 triggerHumidity;
    uint256 newHumidity;

    function triggerWatering(uint256 humidity, DaoRegistry dao)
        external
        onlyMember(dao)
    {
        irrigation = true;
        warning = true
        timestamp = block.timestamp;
        wateringTime = 20;
        triggerHumidity = humidity;
    }

    function stopWatering(uint256 humidity, DaoRegistry dao)
        external
        onlyMember(dao)
    {
        irrigation = false;
        warning = false;
        timestamp = block.timestamp;
        newHumidity = humidity;
    }

    function getIrrigation() public view returns (bool) {
        return irrigation;
    }

    function getWarning() public view returns (bool) {
        return warning;
    }
}
