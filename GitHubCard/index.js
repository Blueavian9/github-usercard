import axios from 'axios';
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

axios.get('https://api.github.com/users/Blueavian9')
.then( resp => {
  document.querySelector('.cards').appendChild(GithubAccount(resp));
})
.catch(() => console.log('catch'));


/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3 (line 34).
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = ['https://api.github.com/users/bigknell', 'https://api.github.com/users/justsml', 'https://api.github.com/users/dustinmyers', 
'https://api.github.com/users/tetondan'];

followersArray.forEach(element => {
  axios.get(element)
  .then( resp => {
    document.querySelector('.cards').appendChild(GithubAccount(resp));
  })
  .catch(() => console.log('Error'));
})

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

function GithubAccount(info) {
  // element creations
  let divCard = document.createElement('div');
  let imgUrl = document.createElement('img');
  let divInfo = document.createElement('div');
  let h3Name = document.createElement('h3');
  let pUser = document.createElement('p');
  let pLocation = document.createElement('p');
  let pProfile = document.createElement('p');
  let aAddress = document.createElement('a');
  let pFollowers = document.createElement('p');
  let pFollowing = document.createElement('p');
  let pBio = document.createElement('p');
  // attribute setting
  divCard.setAttribute('class', 'card');
  imgUrl.setAttribute('src', `${info.data.avatar_url}`);
  divInfo.setAttribute('class', 'card-info');
  h3Name.setAttribute('class', 'name');
  pUser.setAttribute('class', 'username');
  aAddress.setAttribute('href', `${info.data.html_url}`);
  
  h3Name.innerHTML = `${info.data.name}`;
  pUser.innerHTML = `${info.data.login}`;
  pLocation.innerHTML = `Location: ${info.data.location}`;
  pProfile.innerHTML = `Profile: `; pProfile.appendChild(aAddress);
  aAddress.innerHTML = `${info.data.html_url}`;
  pFollowers.innerHTML = `Followers: ${info.data.followers}`;
  pFollowing.innerHTML = `Following: ${info.data.following}`;
  pBio.innerHTML = `Bio: ${info.data.bio}`;
  // appending all elements
  const level1 = [imgUrl, divInfo];
  const level2 = [h3Name, pUser, pLocation, pProfile, pFollowers, pFollowing, pBio];
  for (let index = 0; index < level1.length; index++) {
    divCard.appendChild(level1[index]);
    if (index === 1) {
      for (let index2 = 0; index2 < level2.length; index2++) {
        divInfo.appendChild(level2[index2]);
      }
    }
  }
  pProfile.appendChild(aAddress);
  return divCard;
}



/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/