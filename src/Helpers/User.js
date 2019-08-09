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
export {
  validateInput,
  validateSignin,
};
