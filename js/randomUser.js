const loadUsers = () => {
    fetch('https://randomuser.me/api/?results=50')
        .then(res => res.json())
        .then(data => displayUsers(data.results))
}


const displayUsers = users => {
    const userContainer = document.getElementById('user-container');
    for (const user of users) {
        console.log(user)
        const userDiv = document.createElement('div');
        userDiv.classList.add('user')
        userDiv.innerHTML = `
            <img src="${user.picture.large}">
            <h4>Name: ${user.name.title}. ${user.name.first} ${user.name.last}</h4>
            <p>Email:<a href="#"> ${user.email}</a></p>
            <p>Location: ${user.location.city}, ${user.location.contry}</p>
            <p>Gender: ${user.gender}</p>
            <p>User Phone: ${user.phone}</p>
            <p>Age: ${user.dob.age}</p>
        `;
        userContainer.appendChild(userDiv);
    }
}

loadUsers();