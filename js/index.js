

function sendmsg(){
   var no =  document.querySelector('#textfield').value
   var order = document.getElementById("orderid").value;
   var amount = document.getElementById("pricebutton").value;
   var msg = "TQ FOR CHOOSING SWWET CHOICE ,YOUR ORDER ID : "+order+","+" AND THE AMOUNT : "+amount+","+" HTTPS://sweetchoice.github.io/sweetchoice CLICK ON THE ABOVE LINK FOR FREE HOME DELIVERY :)";
   var link = "https://api.whatsapp.com/send?phone="+no+"&text="+msg;
   window.location.href = link;
}
function opennav() {
    
    var checkBox = document.getElementById("myCheck");
    var text = document.getElementById("sidenav");
    if (checkBox.checked == true){
      text.style.display = "none";
      document.getElementById("menuicon").className = "fa fa-bars";
      document.getElementById("brandname").style.display = "block";
      document.getElementById("orderid").style.display = "block";
      document.getElementById("sendbu").style.display = "block";
      document.getElementById("amountbutton").style.display = "block";
      document.getElementById("suborderitems2").style.display = "block";
      document.getElementById("orderitems1").style.display = "block";
      document.getElementById("orderid2").style.display = "block";
      document.getElementById("amountd").style.display = "block";
      document.getElementById("price1").style.display = "block";
      
      
      
    } else {
       text.style.display = "block";
       document.getElementById("menuicon").className = "fa fa-times";
       document.getElementById("brandname").style.display = "none";
       document.getElementById("orderid").style.display = "none";
       document.getElementById("sendbu").style.display = "none";
       document.getElementById("amountbutton").style.display = "none";
       document.getElementById("suborderitems2").style.display = "none";
       document.getElementById("orderitems1").style.display = "none";
       document.getElementById("orderid2").style.display = "none";
       document.getElementById("amountd").style.display = "none";
       document.getElementById("price1").style.display = "none";
       
    }
    
}
function run1(){
   var valueee = document.getElementById("maindrop").value;
   
   if(valueee == 1){
    document.getElementById("ab").innerHTML = "DUM BIRIYANI";
    document.getElementById("bc").innerHTML = "FRY BIRIYANI";
    document.getElementById("cd").innerHTML = "NORMAL BIRIYANI";
    document.getElementById("de").innerHTML = "WINGS BIRIYANI";
    document.getElementById("ef").innerHTML = "FISH BIRIYANI";
    document.getElementById("fg").innerHTML = "FRANCE BIRIYANI";
    
   }
   if(valueee == 2){
    document.getElementById("ab").innerHTML = "SMALL VEG PIZZA";
    document.getElementById("bc").innerHTML = "MEDIUM VEG PIZZA";
    document.getElementById("cd").innerHTML = "SMALL CHICKEN PIZZA";
    document.getElementById("de").innerHTML = "MEDIUM CHICKEN PIZZA";
    document.getElementById("ef").innerHTML = "SPECIAL SMALL PIZZA";
    document.getElementById("fg").innerHTML = "SPECIAL MEDIUM PIZZA";
    
   }if(valueee == 3){
    document.getElementById("ab").innerHTML = "VEG FRIRED RICE";
    document.getElementById("bc").innerHTML = "VEG NOODLES";
    document.getElementById("cd").innerHTML = "EGG FRIRED RICE ";
    document.getElementById("de").innerHTML = "EGG NOODLES";
    document.getElementById("ef").innerHTML = "CHICKEN FRIRED RICE";
    document.getElementById("fg").innerHTML = "CHICKEN NOODLES";
    
   }if(valueee == 4){
    document.getElementById("ab").innerHTML = "CHICKEN BURGER1";
    document.getElementById("bc").innerHTML = "CHICKEN BURGER2";
    document.getElementById("cd").innerHTML = "CHICKEN BURGER3";
    document.getElementById("de").innerHTML = "CHICKEN BURGER4";
    document.getElementById("ef").innerHTML = "CHICKEN BURGER5";
    document.getElementById("fg").innerHTML = "CHICKEN BURGER6";
    
   }if(valueee == 5){
    document.getElementById("ab").innerHTML = "SWEET ITEM1";
    document.getElementById("bc").innerHTML = "SWEET ITEM2";
    document.getElementById("cd").innerHTML = "SWEET ITEM3";
    document.getElementById("de").innerHTML = "SWEET ITEM4";
    document.getElementById("ef").innerHTML = "SWEET ITEM5";
    document.getElementById("fg").innerHTML = "SWEET ITEM6";
    
   }if(valueee == 6){
    document.getElementById("ab").innerHTML = "COOL CAKE";
    document.getElementById("bc").innerHTML = "HALF KG CAKE";
    document.getElementById("cd").innerHTML = "1KG CAKE";
    document.getElementById("de").innerHTML = "SMALL CAKE";
    document.getElementById("ef").innerHTML = "BIG CAKE";
    document.getElementById("fg").innerHTML = "SPECIAL CAKE";
    
   }
}
function run2(){
    var valuee = document.getElementById("maindrop2").value;
    var valueee = document.getElementById("maindrop").value;
    if(valueee == 1 && valuee ==1){
        document.getElementById("pricebutton").value = 1111;
        document.getElementById("orderid").value = 1;

    }
    if(valueee == 1 && valuee ==2){
        document.getElementById("pricebutton").value = 2;
        document.getElementById("orderid").value = 17676;

    }
    if(valueee == 1 && valuee ==3){
        document.getElementById("pricebutton").value = 3;
        document.getElementById("orderid").value = 176767;

    }
    if(valueee == 1 && valuee ==4){
        document.getElementById("pricebutton").value = 4;
        document.getElementById("orderid").value = 17887;

    }
    if(valueee == 1 && valuee ==5){
        document.getElementById("pricebutton").value = 5;
        document.getElementById("orderid").value = 1111324;

    }
    if(valueee == 1 && valuee ==6){
        document.getElementById("pricebutton").value = 6;
        document.getElementById("orderid").value = 111;
    }
    if(valueee == 2 && valuee ==1){
        document.getElementById("pricebutton").value = 7;
        document.getElementById("orderid").value = 11341;
    }
    if(valueee == 2 && valuee ==2){
        document.getElementById("pricebutton").value = 8;
        document.getElementById("orderid").value = 11341;
    }
    if(valueee == 2 && valuee ==3){
        document.getElementById("pricebutton").value = 9;
        document.getElementById("orderid").value = 1341413;
    }
    if(valueee == 2 && valuee ==4){
        document.getElementById("pricebutton").value = 10;
        document.getElementById("orderid").value = 34124121;
    }
    if(valueee == 2 && valuee ==5){
        document.getElementById("pricebutton").value = 11;
        document.getElementById("orderid").value = 124124211;
    }
    if(valueee == 2 && valuee ==6){
        document.getElementById("pricebutton").value = 12;
        document.getElementById("orderid").value = 1124124;
    }
    if(valueee == 3 && valuee ==1){
        document.getElementById("pricebutton").value = 13;
        document.getElementById("orderid").value = 112421;
    }
    if(valueee == 3 && valuee ==2){
        document.getElementById("pricebutton").value = 14;
        document.getElementById("orderid").value = 1124214;
    }
    if(valueee == 3 && valuee ==3){
        document.getElementById("pricebutton").value = 15;
        document.getElementById("orderid").value = 1124141;
    }
    if(valueee == 3 && valuee ==4){
        document.getElementById("pricebutton").value = 16;
        document.getElementById("orderid").value = 1424211;
    }
    if(valueee == 3 && valuee ==5){
        document.getElementById("pricebutton").value = 17;
        document.getElementById("orderid").value = 112412;
    }
    if(valueee == 3 && valuee ==6){
        document.getElementById("pricebutton").value = 18;
        document.getElementById("orderid").value = 112412;
    }
    if(valueee == 4 && valuee ==1){
        document.getElementById("pricebutton").value = 19;
        document.getElementById("orderid").value = 1124;
    }
    if(valueee == 4 && valuee ==2){
        document.getElementById("pricebutton").value = 20;
        document.getElementById("orderid").value = 11241;
    }
    if(valueee == 4 && valuee ==3){
        document.getElementById("pricebutton").value = 21;
        document.getElementById("orderid").value = 124213;
    }
    if(valueee == 4 && valuee ==4){
        document.getElementById("pricebutton").value = 22;
        document.getElementById("orderid").value = 2351;
    }
    if(valueee == 4 && valuee ==5){
        document.getElementById("pricebutton").value = 23;
        document.getElementById("orderid").value = 1235;
    }
    if(valueee == 4 && valuee ==6){
        document.getElementById("pricebutton").value = 24;
        document.getElementById("orderid").value = 5231;
    }
    if(valueee == 5 && valuee ==1){
        document.getElementById("pricebutton").value = 25;
        document.getElementById("orderid").value = 231;
    }
    if(valueee == 5 && valuee ==2){
        document.getElementById("pricebutton").value = 26;
        document.getElementById("orderid").value =531;
    }
    if(valueee == 5 && valuee ==3){
        document.getElementById("pricebutton").value = 27;
        document.getElementById("orderid").value = 2431;
    }
    if(valueee == 5 && valuee ==4){
        document.getElementById("pricebutton").value = 28;
        document.getElementById("orderid").value = 3251;
    }
    if(valueee == 5 && valuee ==5){
        document.getElementById("pricebutton").value = 29;
        document.getElementById("orderid").value =23531;
    }
    if(valueee == 5 && valuee ==6){
        document.getElementById("pricebutton").value = 30;
        document.getElementById("orderid").value = 32531;
    }
    if(valueee == 6 && valuee ==1){
        document.getElementById("pricebutton").value = 31;
        document.getElementById("orderid").value = 25321;
    }
    if(valueee == 6 && valuee ==2){
        document.getElementById("pricebutton").value = 32;
        document.getElementById("orderid").value = 2351;
    }
    if(valueee == 6 && valuee ==3){
        document.getElementById("pricebutton").value = 33;
        document.getElementById("orderid").value = 145235;
    }
    if(valueee == 6 && valuee ==4){
        document.getElementById("pricebutton").value = 34;
        document.getElementById("orderid").value = 12342;
    }
    if(valueee == 6 && valuee ==5){
        document.getElementById("pricebutton").value = 35;
        document.getElementById("orderid").value = 234324;
    }
    if(valueee == 6 && valuee ==6){
        document.getElementById("pricebutton").value = 36;
        document.getElementById("orderid").value = 295;
    }
 

    }
    
    

