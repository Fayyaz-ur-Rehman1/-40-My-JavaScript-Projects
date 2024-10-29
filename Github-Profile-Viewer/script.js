const getBtn = document.getElementById("getBtn");
getBtn.addEventListener("click", () => {
    const username = document.getElementById("username").value;

    if (!username) {
        alert("Give username");
        return; // Stop execution if username is empty
    }

    fetch(`https://api.github.com/users/${username}`)
        .then(res => {
            if (!res.ok) {
                // Display error message and log the status code
                let createElm = document.getElementById("profile");
                createElm.innerHTML = `<h1>This username is not found (Status: ${res.status})</h1>`;
                // console.error('Error response:', res);
                throw new Error('Invalid GitHub username');
            }
            return res.json(); // Correctly parse JSON response
        })
        .then(data => {
            getDisplay(data);
        })
        .catch(err => {
            console.error('Fetch main error:', err);
        });
});

function getDisplay(profileData) {
    let innerElm = document.getElementById("profile");
    innerElm.innerHTML = `
        <h2>${profileData.login}</h2>
          <a href="${profileData.html_url}" target="_blank">
        <img src="${profileData.avatar_url}" style="width:100px; height:100px; border-radius:50%;" /></a>
    `;
}
