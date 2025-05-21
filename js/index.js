async function fetchData() {
  try {
    const url = " https://www.swapi.tech/api/"
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error('Request failed');
    }
    
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

fetchData();