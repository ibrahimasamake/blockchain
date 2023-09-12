const url= "https://www.blockchain.com/ticker"
console.log("HELLO")
let prix_bitcoin = document.querySelector('#prix_bitcoin')

//recuperation avec Api 
function bitcoin() {
    let request = new XMLHttpRequest();
    request.open('GET',url);

    request.responseType="json";
    request.send();

    request.onload = function () {
        if(request.readyState= XMLHttpRequest.DONE){
            if(request.status===200){
                let response = request.response;
                console.log(response);
                let prix_last_Euro = response.EUR.last;
                prix_bitcoin.textContent=prix_last_Euro
            }else {
                alert("il ya eu une erreur, merci de reesayer plus tard")
            }
        }
    }
    console.log('prix actualiser')
}


setInterval(bitcoin,2000)




