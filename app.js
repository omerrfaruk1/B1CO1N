class Request{
	async get(url){
	const response = await fetch(url); // Response Yapısı
        const data = await response.json(); // Json Objesi
        return data;
	}
}
const request = new Request;
const name = document.getElementsByClassName("name")
const fiyat = document.getElementsByClassName("price")   
const hacim = document.getElementsByClassName("hacim")   
const degisim = document.getElementsByClassName("değişim") 
function getData(){
	request.get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Ctether%2Cripple%2Ccardano%2Cstellar%2Cpolkadot%2Cbinancecoin%2Clitecoin%2Cchainlink&vs_currencies=usd&include_market_cap=true&include_24hr_change=true')
	.then(x1 => {
		for (i=0; i<fiyat.length; i++){
			updatePrice(i,x1);
		}; 
	})
	.catch(err => console.log(err));
}
setInterval(getData,2000);

async function updatePrice(i,x1){
		let b1 = (x1[name[i].textContent].usd);
		let b2 = (x1[name[i].textContent].usd_market_cap);
		let b3 = (x1[name[i].textContent].usd_24h_change);
			fiyat[i].textContent = b1 + " "+ "$";
			hacim[i].textContent = Math.ceil(b2)+" "+ "$";
			degisim[i].textContent = Number(b3.toFixed(2));
				if (degisim[i].textContent < 0){
					degisim[i].style = "color:red"
				}  
				else{
					degisim[i].style = "color:green"
				}

}

