pragma solidity ^0.5.0;

import "./Crowdsale.sol";
import "./vendor/Ownable.sol";


contract LinkTokenSale is Crowdsale, Ownable {

    constructor(
        uint256 rate,
        address payable wallet,
        address token
    )
        public
        Crowdsale(rate, wallet, IERC20(token)) {
    }

    function setRate(uint256 _newRate)
        public
        onlyOwner
    {
        _setRate(_newRate);
    }
}
