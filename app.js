class Request{
	async get(url){
		const response = await fetch(url); // Response Yapısı
        const data = await response.json(); // Json Objesi
		return data;
	}
	
}

const request = new Request;
const name = ["bitcoin","ethereum","ripple","stellar","polkadot","tether","chainlink","litecoin","binancecoin","cardano"]
const fiyat = document.getElementsByClassName("price")
const hacim = document.getElementsByClassName("hacim")   
const degisim = document.getElementsByClassName("değişim") 
function getData(){
	request.get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Ctether%2Cripple%2Ccardano%2Cstellar%2Cpolkadot%2Cbinancecoin%2Clitecoin%2Cchainlink&vs_currencies=usd&include_market_cap=true&include_24hr_change=true')
	.then(x1 => {

		experimentObjcetToArray();
		for (i=0; i<name.length; i++){
			updatePrice(i,x1);
			
			}; 
		})
	.catch(err => console.log(err));
	}
	getData()


async function updatePrice(i,x1){
		let b1 = (x1[name[i]].usd);
		let b2 = (x1[name[i]].usd_market_cap);
		let b3 = (x1[name[i]].usd_24h_change);
		const tbody = document.getElementById("tbody");
		tbody.innerHTML += `
			<tr>
            <th class="name">${i+1}</th>
            <td class="price">${name[i]}</td>
            <td class="price">${b1 + " "+ "$"}</td>
            <td class="hacim">${Math.ceil(b2)+" "+ "$"}</td>
            <td class="değişim">${Number(b3.toFixed(2))}</td> 
          </tr>
		`		
				if (b3 < 0){
					degisim[i].style = "color:red"
				}  
				else{
					degisim[i].style = "color:green"
				}

}
async function experimentObjcetToArray(x1){
	
}


