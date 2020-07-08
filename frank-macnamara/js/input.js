/**
 * Return field
 * @param {string} id of field
 */
function _getFieldById(id) {
  const field = document.getElementById(id);
  if (!field) {
    throw new Error('There isn`t any field with this ID');
  }
  return field;
}

/**
 * Return field
 * @param {string} tagName of field
 */
function _getFieldByTagName(tagName) {
  const field = document.getElementsByTagName(tagName);
  if (field.length === 0) {
    throw new Error('There isn`t any tag with this name');
  }
  return field;
}

/**
 * Reset a field value
 * @param {string} id 
 */
function _resetFieldValueByID() {
  _getFieldById(id).value = '';
}