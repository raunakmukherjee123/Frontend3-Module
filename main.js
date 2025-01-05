const api= async ()=>{
 const url=`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false`;
  try{
    const res=await fetch(url);
      const data=await res.json();
    console.log(data);
    return data;
    }
   catch(e)
  {
   console.log(e);
   throw e;
  }
}

let dataArray=[];
let arraydata=[];


const getDatas= async() =>{
   try {
     const datas=await api();
     dataArray=datas;
      if(datas)
      {
         showDatas(datas);
         return; 
      }
      throw new Error("Data not found");
   } catch (error) {
      throw error;
   }
   }
  
   const DataContainer=document.getElementById("data-container");

   const button1=document.getElementById("button1");
   const button2=document.getElementById("button2");
   const textarea=document.getElementById("text");
   const showDatas=(datas)=>{
      const error=document.getElementById("error-message");
      if(datas)
      {
        let html = `<table><tbody>`;
        datas.forEach((data)=>{
          const{symbol,name,image,price_change_percentage_24h,market_cap,current_price,total_volume}=data;
          html+=`
            <tr>
              <td>
              <div class="api-data">
                <img id="image" src=${image} alt="image" style="width: 50px; height: 50px;"> 
                <span class="table-data" id="symbol" style="vertical-align: middle;">${symbol.toUpperCase()}</span>
              </td>
              </div>
               <div class="api-data">
              <td>${name}</td>
              </div>
               <div class="api-data">
              <td class="table-data">$${current_price}</td>
              </div>
               <div class="api-data">
              <td class="table-data">$${total_volume}</td>
              </div>
               <div class="api-data">
              ${price_change_percentage_24h < 0 
                ? `<td  style="color:red;">${price_change_percentage_24h}%</td>` 
                : `<td  style="color:green;">${price_change_percentage_24h}%</td>`}
                </div>
                 <div class="api-data">
              <td class="table-data">Mkt Cap:$${market_cap}</td>
              </div>
            </tr>
          `;
        })

        html += `</tbody></table>`;
        DataContainer.innerHTML=html;
      }
      else
      {
        error.innerHTML="No data found"
      }
    }

    let filteredNames=[];
    let filteredSymbol=[];


    textarea.addEventListener("input",(e)=>{
      let html = `<table><tbody>`;
      const value=e.target.value;
       filteredNames=dataArray.filter((data)=>{
         return data.name.toLowerCase().startsWith(value);
      })
       filteredSymbol=dataArray.filter((data)=>{
         return data.symbol.toLowerCase().startsWith(value);
      })
      filteredNames.forEach((data)=>{
         const{symbol,name,image,price_change_percentage_24h,market_cap,current_price,total_volume}=data;
         html+=`
         <tr>
           <td>
           <div class="api-data">
             <img id="image" src=${image} alt="image" style="width: 50px; height: 50px;"> 
             <span class="table-data" id="symbol" style="vertical-align: middle;">${symbol.toUpperCase()}</span>
           </td>
           </div>
            <div class="api-data">
           <td>${name}</td>
           </div>
            <div class="api-data">
           <td class="table-data">$${current_price}</td>
           </div>
            <div class="api-data">
           <td class="table-data">$${total_volume}</td>
           </div>
            <div class="api-data">
           ${price_change_percentage_24h < 0 
             ? `<td  style="color:red;">${price_change_percentage_24h}%</td>` 
             : `<td  style="color:green;">${price_change_percentage_24h}%</td>`}
             </div>
              <div class="api-data">
           <td class="table-data">Mkt Cap:$${market_cap}</td>
           </div>
         </tr>
       `;
      })
      filteredSymbol.forEach((data)=>{
         const{symbol,name,image,price_change_percentage_24h,market_cap,current_price,total_volume}=data;
         html+=`
         <tr>
           <td>
           <div class="api-data">
             <img id="image" src=${image} alt="image" style="width: 50px; height: 50px;"> 
             <span class="table-data" id="symbol" style="vertical-align: middle;">${symbol.toUpperCase()}</span>
           </td>
           </div>
            <div class="api-data">
           <td>${name}</td>
           </div>
            <div class="api-data">
           <td class="table-data">$${current_price}</td>
           </div>
            <div class="api-data">
           <td class="table-data">$${total_volume}</td>
           </div>
            <div class="api-data">
           ${price_change_percentage_24h < 0 
             ? `<td  style="color:red;">${price_change_percentage_24h}%</td>` 
             : `<td  style="color:green;">${price_change_percentage_24h}%</td>`}
             </div>
              <div class="api-data">
           <td class="table-data">Mkt Cap:$${market_cap}</td>
           </div>
         </tr>
       `;
      })
      html += `</tbody></table>`;
     DataContainer.innerHTML=html;
      })

  



      button1.addEventListener("click",()=>{
         let arraydata1=dataArray;
            arraydata1.sort((a,b)=>a.market_cap-b.market_cap);
      if(arraydata1)
      {
        let html1 = `<table><tbody>`;
        arraydata1.forEach((data)=>{
          const{symbol,name,image,price_change_percentage_24h,market_cap,current_price,total_volume}=data;
          html1+=`
            <tr>
              <td>
              <div class="api-data">
                <img id="image" src=${image} alt="image" style="width: 50px; height: 50px;"> 
                <span class="table-data" id="symbol" style="vertical-align: middle;">${symbol.toUpperCase()}</span>
              </td>
              </div>
               <div class="api-data">
              <td>${name}</td>
              </div>
               <div class="api-data">
              <td class="table-data">$${current_price}</td>
              </div>
               <div class="api-data">
              <td class="table-data">$${total_volume}</td>
              </div>
               <div class="api-data">
              ${price_change_percentage_24h < 0 
                ? `<td  style="color:red;">${price_change_percentage_24h}%</td>` 
                : `<td  style="color:green;">${price_change_percentage_24h}%</td>`}
                </div>
                 <div class="api-data">
              <td class="table-data">Mkt Cap:$${market_cap}</td>
              </div>
            </tr>
          `;
        })
        html1 += `</tbody></table>`;
        DataContainer.innerHTML=html1;
      }      
      })
      

      button2.addEventListener("click",()=>{
         let arraydata2=dataArray;
         arraydata2.sort((a,b)=>a.price_change_percentage_24h-b.price_change_percentage_24h);
         if(arraydata2)
         {
           let html2 = `<table><tbody>`;
           arraydata2.forEach((data)=>{
             const{symbol,name,image,price_change_percentage_24h,market_cap,current_price,total_volume}=data;
             html2+=`
               <tr>
                 <td>
                 <div class="api-data">
                   <img id="image" src=${image} alt="image" style="width: 50px; height: 50px;"> 
                   <span class="table-data" id="symbol" style="vertical-align: middle;">${symbol.toUpperCase()}</span>
                 </td>
                 </div>
                  <div class="api-data">
                 <td>${name}</td>
                 </div>
                  <div class="api-data">
                 <td class="table-data">$${current_price}</td>
                 </div>
                  <div class="api-data">
                 <td class="table-data">$${total_volume}</td>
                 </div>
                  <div class="api-data">
                 ${price_change_percentage_24h < 0 
                   ? `<td  style="color:red;">${price_change_percentage_24h}%</td>` 
                   : `<td  style="color:green;">${price_change_percentage_24h}%</td>`}
                   </div>
                    <div class="api-data">
                 <td class="table-data">Mkt Cap:$${market_cap}</td>
                 </div>
               </tr>
             `;
           })  
           html2 += `</tbody></table>`;
           DataContainer.innerHTML=html2;
         }
        })


  getDatas();


  