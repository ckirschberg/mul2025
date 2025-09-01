export async function getData() {
  const url = "http://127.0.0.1:8000/";
  try {
    const response = await fetch(url);
    // console.log(response);
    
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    console.log(result);
    
    return result;

  } catch (error) {
    console.error(error.message);
  }
}