const FacuToken = artifacts.require("FacuToken");

module.exports = function (deployer){
  deployer.deploy(FacuToken);
};