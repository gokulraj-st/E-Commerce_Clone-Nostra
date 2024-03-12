// var product = document.getElementById("product")
// var search = document.getElementById("search")
// var productlist = product.querySelectorAll("h5")

// search.addEventListener("keyup",function(){
//     var enteredvalue = event.target.value.toUppercase()
//     for(count=0;count<productlist.length;count=count+1){
//         var productname =productlist[count].querySelector("h5").textContent
         
//         if(productname.toUpperCase().indexOf(entervalue)<0){
//             productlist[count].style.display="none"
        
//         }
//         else{
//             productlist[count].style.display="block"  
//         }
//     }


// })





  document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("search");
    const products = document.getElementById("product").getElementsByClassName("col");

    searchInput.addEventListener("input", function () {
      const searchTerm = searchInput.value.toLowerCase();

      for (const product of products) {
        const productTitle = product.querySelector(".card-title").innerText.toLowerCase();
        const productVisible = productTitle.includes(searchTerm);
        product.style.display = productVisible ? "block" : "none";
      }
    });
  });

