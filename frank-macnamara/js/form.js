const getFormData = () => {
  // Return inputs data
  const formData = {
    name: document.getElementById('contact_name').value,
    email: document.getElementById('contact_email').value,
    phone: document.getElementById('contact_phone').value,
    extension: document.getElementById('contact_extension').value,
    message: document.getElementById('contact_message').value,
  }
  return formData;
};

const resetForm = (shouldReset) => {
  if (shouldReset) {
    document.getElementById('contact_name').value = '';
    document.getElementById('contact_email').value = '';
    document.getElementById('contact_phone').value = '';
    document.getElementById('contact_extension').value = '';
    document.getElementById('contact_message').value = '';
    return true;
  }
  return false;
};
