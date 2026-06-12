async function testApi() {
  try {
    const res = await fetch('http://localhost:3000/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: 'Alex Chen',
        email: 'alex.chen@example.com',
        company: 'Nexus Heavy Industries',
        message: 'Need to integrate our European warehouses into the OTIF network.'
      })
    });
    
    const data = await res.json();
    console.log("Status:", res.status);
    console.log("Response:", data);
  } catch (error) {
    console.error("Error calling API:", error.message);
  }
}

testApi();
