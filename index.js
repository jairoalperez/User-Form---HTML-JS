function sendInfo() {
    var email = document.getElementById('email').value
    var phone = document.getElementById('phone').value
    
    document.getElementById('tdemail').value = email
    document.getElementById('tdphone').value = phone

    alert('First data recieved!')
}

function sendFullInfo () {
    var email = document.getElementById('email').value
    var phone = document.getElementById('phone').value
    var title = document.getElementById('title').value
    var name = document.getElementById('name').value
    var mid = document.getElementById('mid').value
    var last = document.getElementById('lastname').value
    var date = document.getElementById('date').value
    var gender = document.getElementById('gender').value

    var div = document.getElementById('last')

    var lemail = document.createElement('label')
    var lphone = document.createElement('label')
    var luser = document.createElement('label')
    var ldate = document.createElement('label')
    var lgender = document.createElement('label')

    var br = document.createElement('br')

    lemail.innerText = 'E-mail: '+email
    lphone.innerText = 'Phone Number: '+phone
    luser.innerText = 'User: '+title+'. '+name+' '+mid+' '+last
    ldate.innerText = 'Birthdate: '+date
    lgender.innerText = 'Gender: '+gender

    div.append(lemail)
    div.innerHTML += '<br><br>'
    div.append(lphone)
    div.innerHTML += '<br><br>'
    div.append(luser)
    div.innerHTML += '<br><br>'
    div.append(ldate)
    div.innerHTML += '<br><br>'
    div.append(lgender)

    alert('All data recieved!')

}