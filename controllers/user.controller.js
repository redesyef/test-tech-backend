exports.allAccess = (req, res) => {
    res.status(200).send("Public Content.");
  };
  
  exports.gestsBoard = (req, res) => {
    res.status(200).send("Gests Content.");
  };
  
  exports.adminBoard = (req, res) => {
    res.status(200).send("Admin Content.");
  };
  
  