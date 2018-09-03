function showPopupMenu() {
	document.getElementById("popup_menu").style.visibility = "visible";
}

function hidePopupMenu() {
	document.getElementById("popup_menu").style.visibility = "hidden";
}

function hideOrShowMenu(){															/*NIE PODŁĄCZONA, DODAĆ WAR ŻE WIDTH<X  PRZETESTOWAĆ NA TELEFONIE!!!*/
	if(document.getElementById("popup_menu").style.visibility == "hidden")
		document.getElementById("popup_menu").style.visibility = "visible"
	else
		document.getElementById("popup_menu").style.visibility = "hidden"
}

/*------------------index--------------------*/

function indexJs(){
	var screenWidth = window.innerWidth;

	//document.getElementById("text_box").style.width = screenWidth/2*0.95+"px";
	//document.getElementById("img").style.width = screenWidth/2*0.95+"px";
	
	//var imgWidth = document.getElementById("img").style.width;
	//document.getElementById("text_box").style.width = screenWidth*0.5-imgWidth+"px";
	
	//document.getElementsByName("img").style.width = screenWidth/2*0.95+"px";
	
	//document.getElementById("text_box").style.height = document.getElementById("img").style.height;
	
	getRandomTreatment();
	
}

function getRandomTreatment(){
	//losuje
	var rand = 2;
	//wylosowało xd
	var path = "images/z"+rand+".jpg";
	var elem = document.createElement("img");
	elem.src = path;
	//document.getElementById("rand_treatment").appendChild(elem);
	
	
	
}

function goToTreatment(){
	window.location = "zabiegi-twarz.html";
}


function setPhoto(id_photo){
	//var photo = document.getElementById(id_photo);
	document.getElementById("main_photo").src = id_photo;
}

function showPrice(id){
	
	var ceny = ['<div>\
				<p class="price_main_name">manicure</p><p class="price_null">&nbsp;</p>\
				<p class="price_name">- podstawowe</p><p class="price">20zł</p>\
				<p class="price_name">- hybrydowe</p><p class="price">50zł</p>\
				<p class="price_name">- dekoracyjny</p><p class="price">30-35zł</p>\
				<p class="price_main_name">pedicure</p><p class="price_null">&nbsp;</p>\
				<p class="price_name">- podstawowe</p><p class="price">20zł</p>\
				<p class="price_name">- hybrydowe</p><p class="price">50zł</p>\
				<p class="price_main_name">usuwanie odcisków</p><p class="price_null">70zł</p>\
			</div>',
			'<div>\
				<div><p class="price_main_name" style="background-color:red;">parafina na dłonie</p><p class="price_null">25zł </p></div>\
				<div><p class="price_main_name" style="background-color:yellow;">depilacja woskiem</p><p class="price_null">&nbsp;</p></div>\
				<div><p class="price_name">- wąs</p><p class="price">25zł</p></div>\
				<div><p class="price_name">- broda + wąs</p><p class="price">35zł</p></div>\
				<div><p class="price_name">- łydki</p><p class="price">50zł</p></div>\
				<div><p class="price_name">- uda</p><p class="price">50zł</p></div>\
				<div><p class="price_name">- bikini</p><p class="price">50zł</p></div>\
				<div><p class="price_name">- pachy</p><p class="price">50zł</p></div>\
			</div>',
			'<div>\
				<p class="price_main_name">makijaż</p><p class="price_null">&nbsp;</p>\
				<p class="price_name">- dzienny</p><p class="price">50zł</p>\
				<p class="price_name">- wieczorowy</p><p class="price">60zł</p>\
				<p class="price_name">- ślubny</p><p class="price">100zł</p>\
				<p class="price_name">    - próbny</p><p class="price">30zł</p>\
			</div>',
			'<div>\
				<p class="price_main_name">parafina na dłonie</p><p class="price_null">25zł</p>\
				<p class="price_main_name">brwi</p><p class="price_null">&nbsp;</p>\
				<p class="price_name">- henna</p><p class="price">10zł</p>\
				<p class="price_name">- depilacja</p><p class="price">15zł</p>\
				<p class="price_main_name">brwi + henna na rzęsy</p><p class="price_null">30zł</p>\
				<p class="price_main_name">doklejanie rzęs metodą 1:1 <br/><span style="font-size:14px; padding-left:5px;">(Zapisy na telefon)</span/></p><p class="price_null">150zł</p>\
			</div>']
	
	
	document.getElementById("price_list").innerHTML = ceny[id];
	for(var i = 0; i < 5; i++){
		
		if(i != id){
			document.getElementById(i).style.textShadow = none;
		}
	}
	document.getElementById(id).style.textShadow = '1px 1px 2px #c11ba3,0 0 15px #c11ba3';
	//e.target.style.text-shadow = 
}