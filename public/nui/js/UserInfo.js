var num = document.querySelector('.current-phone').innerHTML;
var email = document.querySelector('.current-email').innerHTML;

var str = num.toString();
var strEmail = email.toString();
var retrunPhone = num.toString();

let RemovedPhone = false;
let RemoveEmail = false;
function MaskCharacter(str, mask, n) {

    return ('' + str).slice(0, -n)
        .replace(/./g, mask)
        + ('' + str).slice(-n);
}
function DefaultsCharacter(str, mask, n) {
    return ('' + str).slice(0, -n)
        .replace(/./g, mask)
        + ('' + str).slice(-n);
}
function EncryptionDetails(email, phone) {
    if (email.length > 0 && phone.length > 0) {
        document.querySelector('.current-phone').innerHTML = MaskCharacter(str, '*', 4);
        document.querySelector('.current-email').innerHTML = MaskCharacter(strEmail, '*', 4);
    }
}
function DecryptionDetails(email, phone) {
    console.log(RemoveEmail, RemovedPhone);
    if (RemoveEmail == false && RemovedPhone == false) {
        document.getElementById('reveal-btn-phone').addEventListener('click', function () {
            document.querySelector('.current-phone').innerHTML = DefaultsCharacter(str, '*', phone.lengh);
        });
        document.getElementById('reveal-btn-email').addEventListener('click', function () {
            document.querySelector('.current-email').innerHTML = DefaultsCharacter(strEmail, '*', email.length);
        });
    }
    else{
        console.log("Data has already removed")
    }
}
function Remove(email, phone) {
    document.getElementById('removeEmail-btn').addEventListener('click', function () {
        document.querySelector('.current-email').innerHTML = ''
        RemoveEmail = true;
        console.log(RemoveEmail)
    });
    document.getElementById('removePhone-btn').addEventListener('click', function () {
        document.querySelector('.current-phone').innerHTML = ''
        RemovedPhone = true;
        console.log(RemovedPhone)
    });
}


EncryptionDetails(email, num)
DecryptionDetails(email, num);
Remove(email, num)
