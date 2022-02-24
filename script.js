
//Declearing all variabes..
var mode = document.getElementById('mode')
var txt = document.getElementById('txt')
var img = document.getElementById('img')
var nme = document.getElementById('name')
var username = document.getElementById('username')
var joined = document.getElementById('joined')
var demo = document.getElementById('demo')
var spn1 = document.getElementById('spn1')
var spn2 = document.getElementById('spn2')
var spn3 = document.getElementById('spn3')
var id1 = document.getElementById('id1')
var id2 = document.getElementById('id2')
var id3 = document.getElementById('id3')
var id4 = document.getElementById('id4')
var cont = document.getElementsByClassName('container')[0]


// For changing the mode
mode.onclick = function () {
    bdy.classList.toggle('dark')
    cont.classList.toggle('dark')
}


// //## Fetching the API From GitHub...
// getFile('https://api.github.com/users/bradtraversy')

async function getFile(file) {
    let data = await fetch(file);
    let y = await data.json()
//     console.log(y)

    if (y == null) {
        this.innerHTML = 'Not available'
    }

    var mths = ['Jan','Feb','March','April','May','June','July','August','Sept','Oct','Nov','Dec']

    let strng = y.created_at
    let len = strng.substr(0,10)

    let rep = len.replace(/-/g,'')
    let ars = rep.substring(4,6)
    let ars1 = len.split('-').reverse()

    let date = ars1[0]+' '+mths[ars - 1]+' '+ars1[2]
    joined.innerHTML = date


    console.log(len)
    nme.innerHTML = y.name
    img.src = y.avatar_url
    username.innerHTML = y.login
   
    spn1.innerHTML = y.public_repos
    spn2.innerHTML = y.followers
    spn3.innerHTML = y.following
    demo.innerHTML = y.bio
    
    if (y.twitter_username == null ) {  
        id3.innerHTML = 'not avaiable'  
        id3.classList.add('avail') 
    }
     else{
        id3.innerHTML = y.twitter_username
     }

     if (y.location == null ) {  
        id1.innerHTML = 'not avaiable'
        id1.classList.add('avail') 
    }
     else{
        id1.innerHTML = y.location
     }

     if (y.blog == null || y.blog == '') {  
        id2.innerHTML = 'not avaiable'  
        id2.classList.add('avail') 
    }
     else{
        id2.innerHTML = y.blog
     }

     if (y.company == null ) {  
        id4.innerHTML = 'not avaiable'  
        id4.classList.add('avail') 
    }
     else{
        id4.innerHTML = y.company
     }
  
}


//## Button function for displaying the search result..
function myBtn() {
    
getFile('https://api.github.com/users/'+txt.value+'?client_id=8914d05319298ca33344&client_secret=707bb9408d5622046e2a8001ac8c26bc3782f725')
}

// 
// 

