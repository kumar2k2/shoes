import Validator from 'validator';


const validateInput = (data) => {
  const errors = {};
  if (Validator.isEmpty(data.username)) {
    errors.username = 'This field is required.';
  }
  if (Validator.isEmpty(data.email)) {
    errors.email = 'This field is required.';
  }
  if (Validator.isEmpty(data.password)) {
    errors.password = 'This field is required.';
  }
  if (!Validator.isLength(data.password, { min: 6 })) {
    errors.password = 'This field must be more than 6 characters';
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};

const validateSignin = (data) => {
  const errors = {};
  if (Validator.isEmpty(data.email)) {
    errors.email = 'This field is required.';
  }
  if (Validator.isEmpty(data.password)) {
    errors.password = 'This field is required.';
  }
  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};

const validatePassword = (data) => {
  const errors = {};
  if (Validator.isEmpty(data.recentpassword)) {
    errors.recentpassword = 'This field is required.';
  }
  if ((!Validator.isLength(data.newpassword, { min: 6 })) || Validator.isEmpty(data.newpassword)) {
    errors.newpassword = 'This field must be more than 6 characters';
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};
const validateUsername = (data) => {
  const errors = {};
  if (Validator.isEmpty(data.username)) {
    errors.username = 'This field is required.';
  }
  if ((!Validator.isLength(data.username, { min: 6 }))) {
    errors.username = 'This field must be more than 6 characters';
  }
  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};
export {
  validateInput,
  validateSignin,
  validatePassword,
  validateUsername,
};
