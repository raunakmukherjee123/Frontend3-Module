textarea.addEventListener("input",(e)=>{
   let html = `<table><tbody>`;
   const value=e.target.value;
   const filteredNames=dataArray.filter((data)=>{
      return data.name.toLowerCase().startsWith(inputValue);
   })
   const filteredSymbol=dataArray.filter((data)=>{
      return data.symbol.toLowerCase().startsWith(inputValue);
   })
   filteredNames.forEach((name)=>{
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
        <td class="table-data">Max Cap:$${market_cap}</td>
        </div>
      </tr>
    `;
   })
   filteredSymbol.forEach((symbol)=>{
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
        <td class="table-data">Max Cap:$${market_cap}</td>
        </div>
      </tr>
    `;
   })
   html += `</tbody></table>`;
  DataContainer.innerHTML=html;
   })



      // const showDatas=(datas)=>{
   //    const error=document.getElementById("error-message");
   //    if(datas)
   //    {
   //        let html = `<table><tbody>`;
   //       datas.forEach((data)=>{
   //        const{symbol,name,image,price_change_percentage_24h,market_cap,current_price,total_volume}=data;
   //        html+=`
   //          <tr>
   //           <td>
   //             <div id="image-data">
   //               <div><img id="image" src=${image} alt="image> </div>
   //             </div>
   //           </td>
  
   //          <td>${name}</td>
   //           <td class="table-data" id="symbol">${symbol.toUpperCase()}</td>
            
  
            
   //           <td class="table-data">$${current_price}</td>
            
  
            
   //           <td class="table-data">$${total_volume}</td>
            
  
            
   //           ${price_change_percentage_24h < 0 
   //            ? `<td  style="color:red;">${price_change_percentage_24h}%</td>` 
   //            : `<td  style="color:green;">${price_change_percentage_24h}%</td>`}
            
  
            
   //           <td class="table-data">Max Cap:$${market_cap}</td>
   //          </tr>
   //       `;
   //       })
   //       html += `</tbody></table>`;
   //       DataContainer.innerHTML=html;
   //    }
   //    else
   //    {
   //      error.innerHTML="No data found"
   //    }
   //  }
