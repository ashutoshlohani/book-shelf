// with key🗝️ https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=yourAPIKey
// without key 🗝️ https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}&maxResults=3
// 🔐 API_KEY = 'AIzaSyA1ItgsbVrDwuDtx24oYERMDWUIxVsTcuE';

const API_URL = 'https://www.googleapis.com/books/v1';

export async function client(endpoint) {
   const response = await window.fetch(`${API_URL}${endpoint}`);
   const data = await response.json();
   if (response.ok) {
      return data;
   } else {
      return Promise.reject(data);
   }
}
