// JavaScript Document
$(document).ready(function(){
	XULITHONGTINTHEMES();
	XULITHONGTINHINHANH();
	XULITINHIEU();
});

var WebsiteName ="Đam mê Hàng Không";
var SLOGAN = "Chấp cánh giấc mơ bay";
var TieuDeChuyenMuc = "Chuyên Mục: Ảnh Hàng Không";

var HotPic1_address = "../Picture/IMG_0746.jpg";
var HotPic2_address = "../Picture/IMG_3803.jpg";
var HotPic3_address = "../Picture/IMG_2345.jpg";
var HotPic4_address = "../Picture/IMG_7515.jpg";
var AdvertisingPic  = "../Picture/AdvertiseHomePage.jpg";
var AHK1 = "../Picture/IMG_2418.jpg";
var AHK2 = "../Picture/IMG_9412.jpg";
var AHK3 = "../Picture/IMG_4986.jpg";
var AHK4 = "../Picture/IMG_4909.jpg";
var AHK5 = "../Picture/IMG_4857.jpg";
var AHK6 = "../Picture/IMG_4748.jpg";
var AHK7 = "../Picture/IMG_6983.jpg";
var AHK8 = "../Picture/IMG_7447.jpg";
var AHK9 = "../Picture/IMG_2345.jpg";
var AHK10 = "../Picture/IMG_5132.jpg";
var AHK11 = "../Picture/IMG_8217.jpg";
var AHK12 = "../Picture/IMG_0674.jpg";

var AHK13 = "../Picture/IMG_00001.jpg";
var AHK14 = "../Picture/IMG_00002.jpg";
var AHK15 = "../Picture/IMG_00003.jpg";
var AHK16 = "../Picture/IMG_00004.jpg";
var AHK17 = "../Picture/IMG_00005.jpg";
var AHK18 = "../Picture/IMG_00006.jpg";
var AHK19 = "../Picture/IMG_00007.jpg";
var AHK20 = "../Picture/IMG_00008.jpg";
var AHK21 = "../Picture/IMG_00009.jpg";
var AHK22 = "../Picture/IMG_00010.jpg";
var AHK23 = "../Picture/IMG_00011.jpg";
var AHK24 = "../Picture/IMG_00012.jpg";

var AHK25 = "../Picture/IMG_00013.jpg";
var AHK26 = "../Picture/IMG_00014.jpg";
var AHK27 = "../Picture/IMG_00015.jpg";
var AHK28 = "../Picture/IMG_00016.jpg";
var AHK29 = "../Picture/IMG_00017.jpg";
var AHK30 = "../Picture/IMG_00018.jpg";
var AHK31 = "../Picture/IMG_00019.jpg";
var AHK32 = "../Picture/IMG_00020.jpg";
var AHK33 = "../Picture/IMG_00021.jpg";
var AHK34 = "../Picture/IMG_00022.jpg";
var AHK35 = "../Picture/IMG_00023.jpg";
var AHK36 = "../Picture/IMG_00024.jpg";

var AHK37 = "../Picture/IMG_00025.jpg";
var AHK38 = "../Picture/IMG_00026.jpg";
var AHK39 = "../Picture/IMG_00027.jpg";
var AHK40 = "../Picture/IMG_00028.jpg";
var AHK41 = "../Picture/IMG_00029.jpg";
var AHK42 = "../Picture/IMG_00030.jpg";
var AHK43 = "../Picture/IMG_00031.jpg";
var AHK44 = "../Picture/IMG_00032.jpg";
var AHK45 = "../Picture/IMG_00033.jpg";
var AHK46 = "../Picture/IMG_00034.jpg";
var AHK47 = "../Picture/IMG_00035.jpg";
var AHK48 = "../Picture/IMG_00036.jpg";


var ThongTinAHK1 = "1 - AirAsia <br> Airbus 320-200 <br> Reg: 9M-AQD <br> Tác giả: ";
var ThongTinAHK2 = "2 - Qatar Airways <br> Boeing 777-300ER <br> Reg: A7-BAW <br> Tác giả: ";
var ThongTinAHK3 = "3 - Singapore Airlines <br> Airbus 380-800 <br> Reg: 9V-SKY <br> Tác giả: ";
var ThongTinAHK4 = "4 - AirAsia <br> Airbus 320-200 <br> Reg: 9M-AHT <br> Tác giả: ";
var ThongTinAHK5 = "5 - LOT Polish Airlines <br> Boeing 787-8 <br> Reg: SP-LRD <br> Tác giả: ";
var ThongTinAHK6 = "6 - Finnair <br> Airbus 350-900 <br> Reg: OH-LWG <br> Tác giả: ";
var ThongTinAHK7 = "7 - Eva Air <br> Boeing 777-300ER <br> Reg: B-16722 <br> Tác giả: ";
var ThongTinAHK8 = "8 - Bamboo Airways <br> Boeing 787-9 Dreamliner <br> Reg: VN-A829 <br> Tác giả: ";
var ThongTinAHK9 = "9 - Vietnam Airlines <br> Boeing 787-9 Dreamliner <br> Reg: VN-A870 <br> Tác giả: ";
var ThongTinAHK10 = "10 - Qantas <br> Airbus 380-800 <br> Reg: VH-OQJ <br> Tác giả: ";
var ThongTinAHK11 = "11 - Vietjet Air <br> Airbus A321-200 <br> Reg: VN-A541 <br> Tác giả: ";
var ThongTinAHK12 = "12 - China Airlines <br> Boeing 747-400F <br> Reg: B-18722 <br> Tác giả: ";

var ThongTinAHK13 = "13 - Cathay Pacific <br> Airbus 350-900 <br> Reg: B-LRK <br> Tác giả: ";
var ThongTinAHK14 = "14 - Singapore Airlines <br> Boeing 787-10 Dreamliner <br> Reg: 9V-SCG <br> Tác giả: ";
var ThongTinAHK15 = "15 - Turkish Airlines <br> Boeing 777-300ER <br> Reg: TC-JJV <br> Tác giả: ";
var ThongTinAHK16 = "16 - Qantas <br> Airbus 330-300 <br> Reg: VH-QPB <br> Tác giả: ";
var ThongTinAHK17 = "17 - KLM Asia <br> Boeing 777-300ER <br> Reg: PH-BVC <br> Tác giả: ";
var ThongTinAHK18 = "18 - All Nippon Airways <br> Boeing 787-9 Dreamliner <br> Reg: JA886A <br> Tác giả: ";
var ThongTinAHK19 = "19 - Scoot <br> Boeing 787-9 Dreamliner <br> Reg: 9V-OJH <br> Tác giả: ";
var ThongTinAHK20 = "20 - British Airways <br> Boeing 777-300 <br> Reg: G-STBA <br> Tác giả: ";
var ThongTinAHK21 = "21 - Finnair <br> Airbus 350-900 <br> Reg: OH-LWL <br> Tác giả: ";
var ThongTinAHK22 = "22 - Philippines Airlines <br> Airbus 321-200 <br> Reg: RP-C9918 <br> Tác giả: ";
var ThongTinAHK23 = "23 - Scoot <br> Airbus 320-200 <br> Reg: 9V-TAZ <br> Tác giả: ";
var ThongTinAHK24 = "24 - Air India Express <br> Boeing 737-800 <br> Reg: VT-AXT <br> Tác giả: ";

var ThongTinAHK25 = "25 - Vietjet Air <br> Airbus 321Neo <br> Reg: VN-A646 <br> Tác giả: ";
var ThongTinAHK26 = "26 - Vietnam Airlines <br> Airbus 350-900 <br> Reg: VN-A890 <br> Tác giả: ";
var ThongTinAHK27 = "27 - Xiamen Air <br> Boeing 737-800 <br> Reg: B-5306 <br> Tác giả: ";
var ThongTinAHK28 = "28 - AirAsia <br> Airbus 320-200 <br> Reg: HS-BBI <br> Tác giả: ";
var ThongTinAHK29 = "29 - Jetstar Pacific <br> Airbus 320-200 <br> Reg: VN-A572 <br> Tác giả: ";
var ThongTinAHK30 = "30 - Vietjet Air <br> Airbus 320-200 <br> Reg: VN-A690 <br> Tác giả: ";
var ThongTinAHK31 = "31 - Vietnam Airlines <br> Boeing 787-9 Dreamliner <br> Reg: VN-A865 <br> Tác giả: ";
var ThongTinAHK32 = "32 - Vietjet Air <br> Airbus 320-200 <br> Reg: VN-A669 <br> Tác giả: ";
var ThongTinAHK33 = "33 - Singapore Airlines <br> Boeing 777-200ER <br> Reg: 9V-SVC <br> Tác giả: ";
var ThongTinAHK34 = "34 - Malindo Air <br> Boeing 737-800 <br> Reg: 9M-LNU <br> Tác giả: ";
var ThongTinAHK35 = "35 - Malaysia Airlines <br> Boeing 737-800 <br> Reg: 9M-MLM <br> Tác giả: ";
var ThongTinAHK36 = "36 - Turkish Airlines <br> Airbus A330-300 <br> Reg: TC-JNR <br> Tác giả: ";

var ThongTinAHK37 = "37 - Vietnam Airlines <br> Airbus 321Neo <br> Reg: VN-A508 <br> Tác giả:";
var ThongTinAHK38 = "38 - China Airlines <br> Airbus 330-300 <br> Reg: B-18317 <br> Tác giả:";
var ThongTinAHK39 = "39 - Jetstar Pacific <br> Airbus 320-200 <br> Reg: VN-A573 <br> Tác giả:";
var ThongTinAHK40 = "40 - Vietnam Airlines <br> Boeing 787-9 Dreamliner <br> Reg: VN-A871 <br> Tác giả:";
var ThongTinAHK41 = "41 - Vietjer Air <br> Airbus 321-200 <br> Reg: VN-A684 <br> Tác giả:";
var ThongTinAHK42 = "42 - Vietnam Airlines <br> Airbus 320Neo <br> Reg: VN-A625 <br> Tác giả:";
var ThongTinAHK43 = "43 - SF Airlines <br> Boeing 737-300F <br> Reg: B-2941 <br> Tác giả:";
var ThongTinAHK44 = "44 - Vietnam Airlines <br> Airbus 321-200 <br> Reg: VN-A332 <br> Tác giả:";
var ThongTinAHK45 = "45 - Vietjet Air <br> Airbus 321Neo <br> Reg: VN-A653 <br> Tác giả:";
var ThongTinAHK46 = "46 - China Airlines <br> Boeing 747-400F <br> Reg: B-18720 <br> Tác giả:";
var ThongTinAHK47 = "47 - Qatar Airways <br> Boeing 777-300ER <br> Reg: A7-BAS <br> Tác giả:";
var ThongTinAHK48 = "48 - Malaysia Airlines <br> Airbus 330-200 <br> Reg: 9M-MTW <br> Tác giả:";

function XULITHONGTINTHEMES()
{
	document.getElementById('WebsiteName').innerHTML=WebsiteName;
	document.getElementById('Slogan').innerHTML=SLOGAN;
	document.getElementById('TieuDeChuyenMuc').innerHTML=TieuDeChuyenMuc;
}

function XULITHONGTINHINHANH()
{
	$('#HotPic1').attr("src",HotPic1_address);
	$('#HotPic2').attr("src",HotPic2_address);
	$('#HotPic3').attr("src",HotPic3_address);
	$('#HotPic4').attr("src",HotPic4_address);
	$('#AdvertisingPic').attr("src",AdvertisingPic);
	PushUpPicturePage1();
}

function XULITINHIEU()
{
	var Button1 = document.getElementById('Button1');
	Button1.onclick = PushUpPicturePage1;
	var Button2 = document.getElementById('Button2');
	Button2.onclick = PushUpPicturePage2;
	var Button3 = document.getElementById('Button3');
	Button3.onclick = PushUpPicturePage3;
	var Button4 = document.getElementById('Button4');
	Button4.onclick = PushUpPicturePage4;
}

function PushUpPicturePage1(){
	$('#AHK1').attr("src",AHK1);
	$('#AHK2').attr("src",AHK2);
	$('#AHK3').attr("src",AHK3);
	$('#AHK4').attr("src",AHK4);
	$('#AHK5').attr("src",AHK5);
	$('#AHK6').attr("src",AHK6);
	$('#AHK7').attr("src",AHK7);
	$('#AHK8').attr("src",AHK8);
	$('#AHK9').attr("src",AHK9);
	$('#AHK10').attr("src",AHK10);
	$('#AHK11').attr("src",AHK11);
	$('#AHK12').attr("src",AHK12);
	document.getElementById('PicInfo1').innerHTML=ThongTinAHK1;
	document.getElementById('PicInfo2').innerHTML=ThongTinAHK2;
	document.getElementById('PicInfo3').innerHTML=ThongTinAHK3;
	document.getElementById('PicInfo4').innerHTML=ThongTinAHK4;
	document.getElementById('PicInfo5').innerHTML=ThongTinAHK5;
	document.getElementById('PicInfo6').innerHTML=ThongTinAHK6;
	document.getElementById('PicInfo7').innerHTML=ThongTinAHK7;
	document.getElementById('PicInfo8').innerHTML=ThongTinAHK8;
	document.getElementById('PicInfo9').innerHTML=ThongTinAHK9;
	document.getElementById('PicInfo10').innerHTML=ThongTinAHK10;
	document.getElementById('PicInfo11').innerHTML=ThongTinAHK11;
	document.getElementById('PicInfo12').innerHTML=ThongTinAHK12;
	document.getElementById('Button1').style.backgroundColor='white';
	document.getElementById('Button1').style.color='black';
	document.getElementById('Button2').style.backgroundColor='black';
	document.getElementById('Button2').style.color='white';
	document.getElementById('Button3').style.backgroundColor='black';
	document.getElementById('Button3').style.color='white';
	document.getElementById('Button4').style.backgroundColor='black';
	document.getElementById('Button4').style.color='white';
}

function PushUpPicturePage2(){
	$('#AHK1').attr("src",AHK13);
	$('#AHK2').attr("src",AHK14);
	$('#AHK3').attr("src",AHK15);
	$('#AHK4').attr("src",AHK16);
	$('#AHK5').attr("src",AHK17);
	$('#AHK6').attr("src",AHK18);
	$('#AHK7').attr("src",AHK19);
	$('#AHK8').attr("src",AHK20);
	$('#AHK9').attr("src",AHK21);
	$('#AHK10').attr("src",AHK22);
	$('#AHK11').attr("src",AHK23);
	$('#AHK12').attr("src",AHK24);
	document.getElementById('PicInfo1').innerHTML=ThongTinAHK13;
	document.getElementById('PicInfo2').innerHTML=ThongTinAHK14;
	document.getElementById('PicInfo3').innerHTML=ThongTinAHK15;
	document.getElementById('PicInfo4').innerHTML=ThongTinAHK16;
	document.getElementById('PicInfo5').innerHTML=ThongTinAHK17;
	document.getElementById('PicInfo6').innerHTML=ThongTinAHK18;
	document.getElementById('PicInfo7').innerHTML=ThongTinAHK19;
	document.getElementById('PicInfo8').innerHTML=ThongTinAHK20;
	document.getElementById('PicInfo9').innerHTML=ThongTinAHK21;
	document.getElementById('PicInfo10').innerHTML=ThongTinAHK22;
	document.getElementById('PicInfo11').innerHTML=ThongTinAHK23;
	document.getElementById('PicInfo12').innerHTML=ThongTinAHK24;
	document.getElementById('Button1').style.backgroundColor='black';
	document.getElementById('Button1').style.color='white';
	document.getElementById('Button2').style.backgroundColor='white';
	document.getElementById('Button2').style.color='black';
	document.getElementById('Button3').style.backgroundColor='black';
	document.getElementById('Button3').style.color='white';
	document.getElementById('Button4').style.backgroundColor='black';
	document.getElementById('Button4').style.color='white';
}

function PushUpPicturePage3(){
	$('#AHK1').attr("src",AHK25);
	$('#AHK2').attr("src",AHK26);
	$('#AHK3').attr("src",AHK27);
	$('#AHK4').attr("src",AHK28);
	$('#AHK5').attr("src",AHK29);
	$('#AHK6').attr("src",AHK30);
	$('#AHK7').attr("src",AHK31);
	$('#AHK8').attr("src",AHK32);
	$('#AHK9').attr("src",AHK33);
	$('#AHK10').attr("src",AHK34);
	$('#AHK11').attr("src",AHK35);
	$('#AHK12').attr("src",AHK36);
	document.getElementById('PicInfo1').innerHTML=ThongTinAHK25;
	document.getElementById('PicInfo2').innerHTML=ThongTinAHK26;
	document.getElementById('PicInfo3').innerHTML=ThongTinAHK27;
	document.getElementById('PicInfo4').innerHTML=ThongTinAHK28;
	document.getElementById('PicInfo5').innerHTML=ThongTinAHK29;
	document.getElementById('PicInfo6').innerHTML=ThongTinAHK30;
	document.getElementById('PicInfo7').innerHTML=ThongTinAHK31;
	document.getElementById('PicInfo8').innerHTML=ThongTinAHK32;
	document.getElementById('PicInfo9').innerHTML=ThongTinAHK33;
	document.getElementById('PicInfo10').innerHTML=ThongTinAHK34;
	document.getElementById('PicInfo11').innerHTML=ThongTinAHK35;
	document.getElementById('PicInfo12').innerHTML=ThongTinAHK36;
	document.getElementById('Button1').style.backgroundColor='black';
	document.getElementById('Button1').style.color='white';
	document.getElementById('Button2').style.backgroundColor='black';
	document.getElementById('Button2').style.color='white';
	document.getElementById('Button3').style.backgroundColor='white';
	document.getElementById('Button3').style.color='black';
	document.getElementById('Button4').style.backgroundColor='black';
	document.getElementById('Button4').style.color='white';
}

function PushUpPicturePage4(){
	$('#AHK1').attr("src",AHK37);
	$('#AHK2').attr("src",AHK38);
	$('#AHK3').attr("src",AHK39);
	$('#AHK4').attr("src",AHK40);
	$('#AHK5').attr("src",AHK41);
	$('#AHK6').attr("src",AHK42);
	$('#AHK7').attr("src",AHK43);
	$('#AHK8').attr("src",AHK44);
	$('#AHK9').attr("src",AHK45);
	$('#AHK10').attr("src",AHK46);
	$('#AHK11').attr("src",AHK47);
	$('#AHK12').attr("src",AHK48);
	document.getElementById('PicInfo1').innerHTML=ThongTinAHK37;
	document.getElementById('PicInfo2').innerHTML=ThongTinAHK38;
	document.getElementById('PicInfo3').innerHTML=ThongTinAHK39;
	document.getElementById('PicInfo4').innerHTML=ThongTinAHK40;
	document.getElementById('PicInfo5').innerHTML=ThongTinAHK41;
	document.getElementById('PicInfo6').innerHTML=ThongTinAHK42;
	document.getElementById('PicInfo7').innerHTML=ThongTinAHK43;
	document.getElementById('PicInfo8').innerHTML=ThongTinAHK44;
	document.getElementById('PicInfo9').innerHTML=ThongTinAHK45;
	document.getElementById('PicInfo10').innerHTML=ThongTinAHK46;
	document.getElementById('PicInfo11').innerHTML=ThongTinAHK47;
	document.getElementById('PicInfo12').innerHTML=ThongTinAHK48;
	document.getElementById('Button1').style.backgroundColor='black';
	document.getElementById('Button1').style.color='white';
	document.getElementById('Button2').style.backgroundColor='black';
	document.getElementById('Button2').style.color='white';
	document.getElementById('Button3').style.backgroundColor='black';
	document.getElementById('Button3').style.color='white';
	document.getElementById('Button4').style.backgroundColor='white';
	document.getElementById('Button4').style.color='black';
}