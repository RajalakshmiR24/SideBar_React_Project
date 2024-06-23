export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
export const phoneRegex = /^(\+91[\\-\s]?)?[0]?(91)?(\(\+91\))?[7896]\d{9}$/;

export const validateSignUp = (formData) => {
  const errors = {};

  if (!formData.name) {
    errors.name = 'Name is required';
  }
  if (!emailRegex.test(formData.email)) {
    errors.email = 'Invalid email address';
  }
  if (!passwordRegex.test(formData.password)) {
    errors.password = 'Password must contain at least 8 characters, including uppercase, lowercase, number, and special character';
  }
  if (!phoneRegex.test(formData.phone)) {
    errors.phone = 'Invalid phone number';
  }

  return errors;
};

export const validateSignIn = (formData) => {
  const errors = {};

  if (!emailRegex.test(formData.email)) {
    errors.email = 'Invalid email address';
  }
  if (!passwordRegex.test(formData.password)) {
    errors.password = 'Password must contain at least 8 characters, including uppercase, lowercase, number, and special character';
  }

  return errors;
};
