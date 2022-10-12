const loadFetchUser = () => {
    url = `https://randomuser.me/api/?gender=female`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayFetchData(data.results[0]))
        .catch(error => console.log('Sorry! The url must be broken.', error))
}

const asyncDataLoad = async() =>{
    url = `https://randomuser.me/api/?gender=female`;
    try {
        const res = await fetch(url);
        const data = await res.json();
        displayFetchData(data.results[0]);
    } 
    catch (error) {
        console.log(error)    
    }
}

const displayFetchData = user =>{
    console.log(user)
}