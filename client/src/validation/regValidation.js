exports.emailValidation = (val) => {
  if (
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/.test(
      val
    )
  ) {
    return true;
  } else {
    return false;
  }
};

exports.nameValidation = (val) => {
  if (val.trim() === "") {
    return false;
  } else if (val.length < 2) {
    return false;
  } else {
    return true;
  }
};

exports.passwordValidation = (val) => {
  if (val.trim() === "") {
    return false;
  } else if (val.length < 6) {
    return false;
  } else {
    return true;
  }
};
