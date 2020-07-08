// Get user data from Aidax
function _getUsersData() {
  return new Promise((resolve, reject) => fetch('https://api.aidax.com.br/rkey?id=f421bdae-9b75-40f3-9d82-8195493123c4&cache=-1')
    .then(response => {
    	if (response.status === 200) return response.json();
    	else {
    		reject(response);
    	}
    })
    .then(data => resolve(data)));
}