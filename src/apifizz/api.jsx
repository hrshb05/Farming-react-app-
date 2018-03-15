export function signup(type, userData) {
    let BaseURL = './api.json';
 
    return new Promise((resolve, reject) =>{
    fetch(BaseURL+type, {
   method: 'Get',
   body: JSON.stringify(userData)
   })
   .then((response) => response.json())
   .then((res) => {
    resolve(res);
   })
   .catch((error) => {
    reject(error);
   });
   });
}
   
   