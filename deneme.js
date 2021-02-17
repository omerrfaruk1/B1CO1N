// class Request{
    // constructor(){
        
        //  this.td = document.getElementsByTagName("td");
        //  let a = this.td[0].textContent;
        // let i = 0;
        // for ( i=0; i<td.length; i++){
        // console.log(td[i]);
        // let tdler = td[i].textContent;
        //     console.log(tdler)
        // }
        // this.coinname = document.getElementsByClassName("coinname")[0]
        // let ı = 0;
        // for (ı=0; ı<1; ı++){
        //     // console.log(coinname[ı].textContent);
        //     let coinnameler = coinname[ı].textContent;
        //     console.log(coinnameler);
            
        // }
    // // }
	// async get(url){
    //     const response = await fetch(url); // Response Yapısı
    //     const data = await response.json(); // Json Objesi
    //     return data;
        
        
        // function  deneme3(){
        //   let a = url2 + deneme1.textContent+ url3;
        // deneme2.textContent = a;
        // console.log(a)
        // }
        // deneme3();
        // setTimeout(deneme3,3000)
    // };
    // async deneme(){
    //     let td = document.getElementsByTagName("td");
    //     let i = 0;
    //     for ( i=0; i<td.length; i++){
    //     console.log(td[i]);
    //     let tdler = td[i].textContent;
    //         console.log(tdler)
    //     }
    //     let coinname = document.getElementsByClassName("coinname");
    //     let ı = 0;
    //     for (ı=0; ı<1; ı++){
    //         // console.log(coinname[ı].textContent);
    //         let coinnameler = coinname[ı].textContent;
    //         console.log(coinnameler);
            
    //     }
        
    // }
// }
// const request = new Request;         
// this.td = document.getElementsByTagName("td");
// let a = this.td[0].textContent;
// request.get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Ctether%2Cripple%2Ccardano%2Cstellar%2Cpolkadot%2Cbinancecoin%2Clitecoin%2Cchainlink&vs_currencies=usd&include_market_cap=true&include_24hr_change=true') 
// .then(coin => {
// // BİTCOİN
// // for (i =0; i<2; i++){
// setTimeout(() => {
// let a1 = (coin[a].usd); 
// let a2 = (coin[a].usd_market_cap);
// let a3 = (coin[a].usd_24h_change);
// // let a4 = (coin[a1].usd); console.log(a4)
// a = a1 + " "+ "$";
// this.td[1].innerHTML = Math.ceil(a2) + " "+ "$";
// this.td[2].innerHTML = Number(a3.toFixed(2));
// },5000);
// // }
// })
// .catch(err => console.log(err));

// class CoinG{
//     constructor(){
//         this.url = "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd&include_market_cap=false&include_24hr_vol=false&include_24hr_change=false&include_last_updated_at=false"
//         this.coın = "https://api.coingecko.com/api/v3/simple/price?ids="+koinisim+"&vs_currencies=usd&include_market_cap=false&include_24hr_vol=false&include_24hr_change=false&include_last_updated_at=false"
//     }
// 	async getcoinGData(){
//         const Coin = await fetch(this.url);
// 		// const koin = await fetch(this.coın);

//         const coinData = await Coin.json();
// 		// const koinData = await koin.json();
// 		// this.koin.innerHTML = bitcoin;
//         return{
//             coin: coinData
//         };
//     }
// }

// class CoinG{
// 	async get(url){
// 		const response = await fetch(url); // Response Yapısı
//         const data = await response.json(); // Json Objesi
//         return data;
// 	}
// }
// const coing = new CoinG();

// coing.get("https://api.coingecko.com/api/v3/simple/price?ids=ethereum%2Cethereum&vs_currencies=USD&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&include_last_updated_at=true")
// .then(coin => (coin))
// .catch(err => console.log(err));

// class UI{
//   constructor(){
//     const piyasa = document.getElementById("piyasa")
// }  
//   getdata(){
//     this.piyasa.
//   }
// }

// APP.JS
// ELEMENTLERİ SEÇME
// const piyasa = document.getElementById("piyasa");

// const ui = new UI();
// const coing = new CoinG();
// eventlisteners();

// function eventlisteners(){
//     piyasa.addEventListener("click",getData);
// }
// function getData(e){

//     coing.getcoinGData()
//     .then(response => {
//         ui.getdata(response.coin)
//     });

//     e.preventDefault();
// }


// class Request{
// 	async get(url){
// 		const response = await fetch(url); // Response Yapısı
//         const data = await response.json(); // Json Objesi
//         return data;
// 	}
// }
// const request = new Request;

//  request.get(" https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum&vs_currencies=USD&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&include_last_updated_at=true")
// .then(coin => ui.getdata(coin.bitcoin.usd))
// .catch(err => console.log(err));

// this.btcprice.textContent = coin[bitcoin]

 // if (tdd[0].textContent < 0){
    //     tdd[0].style = "color: red;"
    // };
    // if (tdd[1].textContent < 0){
    //     tdd[1].style = "color: red;"
    // };
    // if (tdd[2].textContent < 0){
    //     tdd[2].style = "color: red;"
    // };
    // if (tdd[3].textContent < 0){
    //     tdd[3].style = "color: red;"
    // };
    // if (tdd[4].textContent < 0){
    //     tdd[4].style = "color: red;"
    // };
    // if (tdd[5].textContent < 0){
    //     tdd[5].style = "color: red;"
    // };
    // if (tdd[6].textContent < 0){
    //     tdd[6].style = "color: red;"
    // };
    // if (tdd[7].textContent < 0){
    //     tdd[7].style = "color: red;"
    // };
    // if (tdd[8].textContent < 0){
    //     tdd[8].style = "color: red;"
    // };
    // if (tdd[9].textContent < 0){
    //     tdd[9].style = "color: red;"
    // };

// const url = 'https://api.coingecko.com/api/v3/simple/price?ids='
// const url2 = '%2Cethereum%2Ctether%2Cripple%2Ccardano%2Cstellar%2Cpolkadot%2Cbinancecoin%2Clitecoin%2Cchainlink&vs_currencies=usd&include_market_cap=true&include_24hr_change=true'
// const COİN = "bitcoin";
// const son = url+COİN+url2
// console.log(son)

	// function mrb(){
// let tdC = td[0].textContent;

//     if(tdC > 0){
//         // td.style = "color: red;"
//         console.log(tdC)
//     }
//     else{
//         console.log("sayı 0'dan küçük")
//     }
    
// }
// setTimeout(mrb,5000);

// setTimeout(function(){
//     if (btc.textContent < 0){
//     btc.style = "color: red;"
//     }
   
// },4000);

/* .containerr { 
    width: 100vh;  
    height: 500px; 
    overflow: auto; 
}  */
/* ::-webkit-scrollbar {
  width:0;
}
#progressbar {

      position:fixed;
      top:0;
      right:0;
      width:15px;
      border-radius:10px;
      background: linear-gradient(top,#fcb045,#fd1d1d,#833ab4);

} */
   
