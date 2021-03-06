//Bryant K. Feld Techdegree Project 3 - interactive registration form
//global variables
var colorSelectGuts = $("#color").html();
var index1 = colorSelectGuts.indexOf('<option value="tomato">Tomato (I  ♥ JS shirt only)</option>');
var index2 = colorSelectGuts.length - 1;
var index3 = index1 - 1;
var heartJS = colorSelectGuts.slice(index1,index2);
var jsPuns = colorSelectGuts.slice(0,index3);
var regTotal = 0;
var checkboxToggle = [];
var totalBox = document.createElement("p");
var totalBoxText = "";
var checkBoxes = $(".activities input[type='checkbox']" );
var thePs =  $("p").parent("div");
var creditCard = $("#credit-card");
var creditCardValidator = {};
var errorMessage = [];
errorMessage[0] = "Name field can't be empty";
errorMessage[1] = "Email field must be a validly formatted e-mail address";
errorMessage[2] = "At least one activity must be selected";
errorMessage[3] = "Payment option must be selected.";
errorMessage[4] = "Make sure you have supplied a valid Credit Card number";
errorMessage[5] = "Credit Card must have a valid zip code";
errorMessage[6] = "Credit Card must have a valid 3 number CVV value.";
var ok2Submit = false;
var formCheck = [];
//functions
function validateEmail(email) 
{
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}
function zipVal(zipCode)
{
    var re = /(^\d{5}$)|(^\d{5}-\d{4}$)/;
    return re.test(zipCode);
} 
function cvvVal(cvv)
{
   var re = /^[0-9]{3}$/; 
   return re.test(cvv);
}
function checkBasicInfo(boolArray){
  
 var boolresult = (boolArray[0] && boolArray[1] && boolArray[2]);
    return boolresult;
}

function checkPaymentInfo(){
    var cpibool = (($("#payment").val() === "paypal") || ($("#payment").val() === "bitcoin" ));
    var ccbool1 = creditCardValidator.validate($("#cc-num").val());
    var ccbool2 = zipVal($("#zip").val());
    var ccbool3 = zipVal($("#zip").val());
    if (cpibool === true){
        return cpibool;
    } else {
    if ($("#payment").val() === "credit card" ){
        return (ccbool1 && ccbool2 && ccbool3);
                        }
    }
}
function checkTheEngine(){
    for (x = 0; x <=6 ; x++){
        console.log("condition # " + x + " " + formCheck[x]);
                }
    console.log(ok2Submit);
    console.log($("#payment").val());
}
//credit card object
creditCardValidator.cards = {
	'mc':'5[1-5][0-9]{14}',
	'ec':'5[1-5][0-9]{14}',
	'vi':'4(?:[0-9]{12}|[0-9]{15})',
	'ax':'3[47][0-9]{13}',
	'dc':'3(?:0[0-5][0-9]{11}|[68][0-9]{12})',
	'bl':'3(?:0[0-5][0-9]{11}|[68][0-9]{12})',
	'di':'6011[0-9]{12}',
	'jcb':'(?:3[0-9]{15}|(2131|1800)[0-9]{11})',
	'er':'2(?:014|149)[0-9]{11}'
};

creditCardValidator.validate = function(value,ccType) {
	value = String(value).replace(/[- ]/g,''); //ignore dashes and whitespaces

	var cardinfo = creditCardValidator.cards, results = [];
	if(ccType){
		var expr = '^' + cardinfo[ccType.toLowerCase()] + '$';
		return expr ? !!value.match(expr) : false; // boolean
	}

	for(var p in cardinfo){
		if(value.match('^' + cardinfo[p] + '$')){
			results.push(p);
		}
	}
	return results.length ? results.join('|') : false; // String | boolean
};
// main program logic
// on page load set focus to the name input field & hide job role "other" text area
// set initial shirt color to "select theme"
$(document).ready(function(){
    $("#name").focus();
    $("#other-title").hide();
    $("#color").append("<option value='select a t-shirt theme' selected>select a t-shirt theme</option>");
    
}); 
// if job role is "other" add text area
$("#title").change(function(){
	if ($("#title").val() === "other"){
      $("#other-title").show();
		} else {
            $("#other-title").hide();
        }
}); 
// hide invalid & show valid color select options for current t-shirt theme
$("#design").change (function(){
    if ($("#design").val() == "js puns"){
       $("#color").html(jsPuns);
     } 
    if ($("#design").val() == "heart js"){
        $("#color").html(heartJS);
         } 
});
// dynamic itinerary update total registration cost and prevent conflicts
for (x=0; x<=6; x++){
    checkboxToggle[x] = false;
}
totalBox.setAttribute("ID","totalBox");
$(".activities").append(totalBox);
checkBoxes.change(function(){
var selected_id = Array.prototype.indexOf.call(checkBoxes, this);
console.log(selected_id);
if (selected_id === 0){
    if (checkboxToggle[0] === false){
    regTotal = regTotal + 200;
        checkboxToggle[0] = true;
    }else{
    if(checkboxToggle[0] === true){
        regTotal = regTotal - 200;
        checkboxToggle[0] = false;
    }
    }
}
if (selected_id === 1){
    if (checkboxToggle[1] === false){
    regTotal = regTotal + 100;
    checkBoxes[3].disabled = true;
    checkboxToggle[1] = true;
    }else{
    if(checkboxToggle[1] === true){
        regTotal = regTotal - 100;
        checkBoxes[3].disabled = false;
        checkboxToggle[1] = false;
    }
}
}
if (selected_id === 2){
    if (checkboxToggle[2] === false){
    regTotal = regTotal + 100;
    checkBoxes[4].disabled = true;
    checkboxToggle[2] = true;
    }else{
    if(checkboxToggle[2] === true){
        regTotal = regTotal - 100;
        checkBoxes[4].disabled = false;
        checkboxToggle[2] = false;
    }
}
}
if (selected_id === 3){
    if (checkboxToggle[3] === false){
    regTotal = regTotal + 100;
    checkBoxes[5].disabled = true;
    checkboxToggle[3] = true;
    }else{
    if(checkboxToggle[3] === true){
        regTotal = regTotal - 100;
        checkBoxes[5].disabled = false;
        checkboxToggle[3] = false;
    }
}
}
if (selected_id === 4){
    if (checkboxToggle[4] === false){
    regTotal = regTotal + 100;
    checkBoxes[2].disabled = true;
    checkboxToggle[4] = true;
    }else{
    if(checkboxToggle[4] === true){
        regTotal = regTotal - 100;
        checkBoxes[2].disabled = false;
        checkboxToggle[4] = false;
    }
}
}
if (selected_id === 5){
    if (checkboxToggle[5] === false){
    regTotal = regTotal + 100;
    checkboxToggle[5] = true;
    }else{
    if(checkboxToggle[5] === true){
        regTotal = regTotal - 100;
        checkboxToggle[5] = false;
    }
}
}
if (selected_id === 6){
    if (checkboxToggle[6] === false){
    regTotal = regTotal + 100;
    checkboxToggle[6] = true;
    }else{
    if(checkboxToggle[6] === true){
    regTotal = regTotal - 100;
    checkboxToggle[6] = false;
    }
}
}
// show registration total at bottom of registration section
   if (regTotal > 0){ 
    totalBoxText = "TOTAL: $" + regTotal + ".00";
    totalBox.innerHTML = totalBoxText;
   } else {
       totalBoxText = "";
       totalBox.innerHTML = totalBoxText;
   }
});
//hide/show active payment option (credit card as default)
// grab paragraphs for bitcoin and pay pal
thePs[0].style.display = "none";
thePs[1].style.display = "none";
// dynamically change payment option section
$("#payment").change(function(){
// console.log($("#payment").val())
if ($("#payment").val() == "bitcoin"){
    $("p").parent("div")[0].style.display = "none";
    $("p").parent("div")[1].style.display = "block";
   document.getElementById("credit-card").style.display = "none";
} else {
  if ($("#payment").val() == "paypal"){
    $("p").parent("div")[0].style.display = "block";
    $("p").parent("div")[1].style.display = "none";
    document.getElementById("credit-card").style.display = "none";
} else {
    $("p").parent("div")[0].style.display = "none";
    $("p").parent("div")[1].style.display = "none";
    document.getElementById("credit-card").style.display = "block";
}
}
});
// initialize form check array and dynamically verify if ok to submit form and alert user of form errors
for (y = 0; y <= 6; y++){formCheck[y] = false;}
$("input").change(function(){
// condition 0 - "Name field can't be empty"
formCheck[0] = $("#name").val() !== "";
// condition 1 - "Email field must be a validly formatted e-mail address"
formCheck[1] = validateEmail($("#mail").val());
// condition 2 - "At least one activity must be selected""
formCheck[2] = regTotal > 0;
// condition 3 - "Payment option must be selected." 
formCheck[3] = ($("#payment").val() === "credit card" ) || ($("#payment").val() === "paypal") || ($("#payment").val() === "bitcoin" );
// condition 4 - "Make sure you have supplied a valid Credit Card number" 
formCheck[4] = creditCardValidator.validate($("#cc-num").val());
// condition 5 - "Credit Card must have a valid zip code" 
formCheck[5] = zipVal($("#zip").val());
// condition 6 - "Credit Card must have a valid 3 number CVV value."
formCheck[6] = cvvVal($("#cvv").val());
});

$("form").on("submit",function(e){
     ok2Submit = checkBasicInfo(formCheck) && checkPaymentInfo();
        if (ok2Submit === false){
            e.preventDefault();
            for (x=0; x<=6; x++){
                if (formCheck[x] === false){
                    alert(errorMessage[x]);
                    break;
                }
            }
        }
    });