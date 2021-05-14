//My api key
var apikey = {
    key: '3c5bd8bc-9733-44e6-84f2-c2b190984cd7'
}

//GET Fetch Requisition
fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY='+
    apikey.key)
    .then((response) => {
        if(!response.ok) throw new Error('Erro ao executar a requisição, status ' + response.status);
        return response.json();
})
.then((api) => {
    console.log(api)
    var texto = "";
    // Get 10 coins and symbols 
    for(let i = 0; i < 10; i++){



    //Show API information

       texto = texto + `
      
        <div class="media">
            <img src="https://s3.criptofacil.com/wp-content/uploads/2019/03/coinmarketcap-se-pronuncia-apos-dados-da-bitwise-sobre-volumes-falsos-de-exchanges.jpg" class="align-self-center mr-3" alt="coin" width="100" height="60">
            <div class="media-body">
            <h3>Nome: ${api.data[i].name}</h3>
            <p><strong>Symbol:</strong> ${api.data[i].symbol}</p>
            <p><strong>Historical date:</strong> ${api.data[i].first_historical_data}</p>
            </div>
        </div>
   
        `;

        document.getElementById("coins").innerHTML = texto;
        
    }
})
.catch((error) => {
    console.error(error.message);
});