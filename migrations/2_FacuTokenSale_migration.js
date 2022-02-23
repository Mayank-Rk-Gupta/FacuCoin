const FacuToken = artifacts.require("FacuToken");
const FacutokenSale = artifacts.require("FacutokenSale");

module.exports = function (deployer){
  deployer.deploy(FacutokenSale,FacuToken.address);
};