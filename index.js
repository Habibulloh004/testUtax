const api = 'https://utax-777597cb6d80.herokuapp.com/create_user';
fetch(api, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(
    {
        "name": "asa",
        "surname": "asa",
        "phone": 999,
    }
  ),
})
  .then((response) => response.json())
  .then((data) => {
    console.log('Success:', data);
    // Handle success (if needed)
  })
  .catch((error) => {
    console.error('Error:', error);
    // Handle error (if needed)
  });
