// JavaScript Document
$(document).ready(function(){
	XULITHONGTINTHEMES();
	XULITHONGTINHINHANH();
	PushArea1();
	XULITINHIEU();
	XULITINHIEUPAGEAREA1();
});

var WebsiteName ="Đam mê Hàng Không";
var SLOGAN = "Chấp cánh giấc mơ bay";
var TieuDeChuyenMuc = "Chuyên Mục: Địa điểm nhiếp ảnh Hàng Không (PlaneSpotting Area)";
var AirportName1 = "Cảng Hàng Không Quốc Tế Tân Sơn Nhất - Tan Son Nhat International Airport";
var AirportName2 = "Cảng Hàng Không Quốc Tế Nội Bài - Noi Bai International Airport";
var AirportName3 = "Cảng Hàng Không Quốc Tế Đà Nẵng - Da Nang International Airport";
var AirportName4 = "Cảng Hàng Không Quốc Tế Cần Thơ - Can Tho International Airport";

var SGN_Vitri1  = "1 - Cafe Ngắm Máy Bay";
var SGN_ThongTin1 =" Địa chỉ: 389/24 Quang Trung Phường 10, Quận Gò Vấp - TPHCM" + "<br> Tiêu cự yêu cầu: 135mm - 400mm" + "<br> Giờ vàng: 16h - 18h" + "<br>Ảnh minh họa: ";

var SGN_Vitri2 = "2 - Cafe Lava";
var SGN_ThongTin2 =" Địa chỉ: 61 Quang Trung Phường 10, Quận Gò Vấp - TPHCM" + "<br> Tiêu cự yêu cầu: " + "<br> Giờ vàng: 07h - 12h" + "<br>Ảnh minh họa: ";

var SGN_Vitri3  = "3 - Cafe Bụi Sài Gòn";
var SGN_ThongTin3 =" Địa chỉ: Big C Ngã Năm Quang Trung" + "<br> Tiêu cự yêu cầu: 300mm - 400mm" + "<br> Giờ vàng: 07h - 12h" + "<br>Ảnh minh họa: ";

var SGN_Vitri4 = "4 - Cafe N111";
var SGN_ThongTin4 =" Địa chỉ: 185-187 Quang Trung Phường 10, Quận Gò Vấp - TPHCM" + "<br> Tiêu cự yêu cầu: 18mm-200mm" + "<br> Giờ vàng: 07h - 12h" + "<br>Ảnh minh họa: ";

var SGN_Vitri5 = "5 - Cafe Long Vân ";
var SGN_ThongTin5 =" Địa chỉ: Cộng Hòa " + "<br> Tiêu cự yêu cầu: " + "<br> Giờ vàng: 07h - 12h" + "<br>Ảnh minh họa: ";

var SGN_Vitri6 = "6 - Cafe Bay";
var SGN_ThongTin6 =" Địa chỉ: 111 Phạm Văn Bạch Tân Bình" + "<br> Tiêu cự yêu cầu: " + "<br> Giờ vàng: 16h - 18h" + "<br>Ảnh minh họa: ";

var HAN_Vitri1 ="1 - HAN ";
var HAN_ThongTin1 = " Địa chỉ: " + "<br> Tiêu cư yêu cầu: " + "<br> Giờ vàng: " +"<br> Ảnh minh họa: ";

var HAN_Vitri2 ="2 - HAN ";
var HAN_ThongTin2 = " Địa chỉ: " + "<br> Tiêu cư yêu cầu: " + "<br> Giờ vàng: " +"<br> Ảnh minh họa: ";

var DAD_Vitri1 ="1 - DAD";
var DAD_ThongTin1 = " Địa chỉ: " + "<br> Tiêu cư yêu cầu: " + "<br> Giờ vàng: " +"<br> Ảnh minh họa: ";

var DAD_Vitri2 ="2 - DAD ";
var DAD_ThongTin2 = " Địa chỉ: " + "<br> Tiêu cư yêu cầu: " + "<br> Giờ vàng: " +"<br> Ảnh minh họa: ";

var VCA_Vitri1 ="1 - VCA ";
var VCA_ThongTin1 = " Địa chỉ: " + "<br> Tiêu cư yêu cầu: " + "<br> Giờ vàng: " +"<br> Ảnh minh họa: ";

var VCA_Vitri2 ="2 - VCA ";
var VCA_ThongTin2 = " Địa chỉ: " + "<br> Tiêu cư yêu cầu: " + "<br> Giờ vàng: " +"<br> Ảnh minh họa: ";

var HotPic1_address = "../Picture/IMG_0746.jpg";
var HotPic2_address = "../Picture/IMG_3803.jpg";
var HotPic3_address = "../Picture/IMG_2345.jpg";
var HotPic4_address = "../Picture/IMG_7515.jpg";
var AdvertisingPic  = "../Picture/AdvertiseHomePage.jpg";
var AirportPictureP1  = "../Picture/SGNAirport.jpg";
var AirportPictureP2  = "../Picture/HANAirport.jpg";
var AirportPictureP3  = "../Picture/DADAirport.jpg";
var AirportPictureP4  = "../Picture/VCAAirport.jpg";

var AnhVitri11_1 = "../Picture/Waiting_Pic.jpg";
var AnhVitri11_2 = "../Picture/Waiting_Pic.jpg";
var AnhVitri11_3 = "../Picture/Waiting_Pic.jpg";
var AnhVitri12_1 = "../Picture/Waiting_Pic.jpg";
var AnhVitri12_2 = "../Picture/Waiting_Pic.jpg";
var AnhVitri12_3 = "../Picture/Waiting_Pic.jpg";

var AnhVitri21_1 = "../Picture/Waiting_Pic.jpg";
var AnhVitri21_2 = "../Picture/Waiting_Pic.jpg";
var AnhVitri21_3 = "../Picture/Waiting_Pic.jpg";
var AnhVitri22_1 = "../Picture/Waiting_Pic.jpg";
var AnhVitri22_2 = "../Picture/Waiting_Pic.jpg";
var AnhVitri22_3 = "../Picture/Waiting_Pic.jpg";

var AnhVitri31_1 = "../Picture/Waiting_Pic.jpg";
var AnhVitri31_2 = "../Picture/Waiting_Pic.jpg";
var AnhVitri31_3 = "../Picture/Waiting_Pic.jpg";
var AnhVitri32_1 = "../Picture/Waiting_Pic.jpg";
var AnhVitri32_2 = "../Picture/Waiting_Pic.jpg";
var AnhVitri32_3 = "../Picture/Waiting_Pic.jpg";

var AnhVitri41_1 = "../Picture/Waiting_Pic.jpg";
var AnhVitri41_2 = "../Picture/Waiting_Pic.jpg";
var AnhVitri41_3 = "../Picture/Waiting_Pic.jpg";
var AnhVitri42_1 = "../Picture/Waiting_Pic.jpg";
var AnhVitri42_2 = "../Picture/Waiting_Pic.jpg";
var AnhVitri42_3 = "../Picture/Waiting_Pic.jpg";

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
	$('#AirportPicture1').attr("src",AirportPictureP1);
	$('#AirportPicture2').attr("src",AirportPictureP2);
	$('#AirportPicture3').attr("src",AirportPictureP3);
	$('#AirportPicture4').attr("src",AirportPictureP4);
	
	$('#AnhViTri1_1').attr("src",AnhVitri11_1);
	$('#AnhViTri1_2').attr("src",AnhVitri11_2);
	$('#AnhViTri1_3').attr("src",AnhVitri11_3);
	$('#AnhViTri2_1').attr("src",AnhVitri12_1);
	$('#AnhViTri2_2').attr("src",AnhVitri12_2);
	$('#AnhViTri2_3').attr("src",AnhVitri12_3);
	
	$('#AnhViTriP21_1').attr("src",AnhVitri21_1);
	$('#AnhViTriP21_2').attr("src",AnhVitri21_2);
	$('#AnhViTriP21_3').attr("src",AnhVitri21_3);
	$('#AnhViTriP22_1').attr("src",AnhVitri22_1);
	$('#AnhViTriP22_2').attr("src",AnhVitri22_2);
	$('#AnhViTriP22_3').attr("src",AnhVitri22_3);
	
	$('#AnhViTriP31_1').attr("src",AnhVitri31_1);
	$('#AnhViTriP31_2').attr("src",AnhVitri31_2);
	$('#AnhViTriP31_3').attr("src",AnhVitri31_3);
	$('#AnhViTriP32_1').attr("src",AnhVitri32_1);
	$('#AnhViTriP32_2').attr("src",AnhVitri32_2);
	$('#AnhViTriP32_3').attr("src",AnhVitri32_3);
	
	$('#AnhViTriP41_1').attr("src",AnhVitri41_1);
	$('#AnhViTriP41_2').attr("src",AnhVitri41_2);
	$('#AnhViTriP41_3').attr("src",AnhVitri41_3);
	$('#AnhViTriP42_1').attr("src",AnhVitri42_1);
	$('#AnhViTriP42_2').attr("src",AnhVitri42_2);
	$('#AnhViTriP42_3').attr("src",AnhVitri42_3);
}

function XULITINHIEU()
{
	var Event1 = document.getElementById('Button1');
	Event1.onclick = PushArea1;
	var Event2 = document.getElementById('Button2');
	Event2.onclick = PushArea2;
	var Event3 = document.getElementById('Button3');
	Event3.onclick = PushArea3;
	var Event4 = document.getElementById('Button4');
	Event4.onclick = PushArea4;
}

function PushArea1()
{
	document.getElementById('Button1').style.background ='black';
	document.getElementById('Button1').style.color='white';
	document.getElementById('Button1').style.lineHeight='35px';
	document.getElementById('Button1').style.height='40px';
	document.getElementById('Button2').style.background ='#C8C8C8';
	document.getElementById('Button2').style.color='black';
	document.getElementById('Button2').style.lineHeight='25px';
	document.getElementById('Button2').style.height='30px';
	document.getElementById('Button3').style.background ='#C8C8C8';
	document.getElementById('Button3').style.color='black';
	document.getElementById('Button3').style.lineHeight='25px';
	document.getElementById('Button3').style.height='30px';
	document.getElementById('Button4').style.background ='#C8C8C8';
	document.getElementById('Button4').style.color='black';
	document.getElementById('Button4').style.lineHeight='25px';
	document.getElementById('Button4').style.height='30px';
	document.getElementById('AirportName1').innerHTML=AirportName1;
	PushArea1_Page1();
	
	document.getElementById('Area1').style.display='inherit';
	document.getElementById('Area2').style.display='none';
	document.getElementById('Area3').style.display='none';
	document.getElementById('Area4').style.display='none';
}

function PushArea2()
{
	document.getElementById('Button1').style.background ='#C8C8C8';
	document.getElementById('Button1').style.color='black';
	document.getElementById('Button1').style.lineHeight='25px';
	document.getElementById('Button1').style.height='30px';
	document.getElementById('Button2').style.background ='black';
	document.getElementById('Button2').style.color='white';
	document.getElementById('Button2').style.lineHeight='35px';
	document.getElementById('Button2').style.height='40px';
	document.getElementById('Button3').style.background ='#C8C8C8';
	document.getElementById('Button3').style.color='black';
	document.getElementById('Button3').style.lineHeight='25px';
	document.getElementById('Button3').style.height='30px';
	document.getElementById('Button4').style.background ='#C8C8C8';
	document.getElementById('Button4').style.color='black';
	document.getElementById('Button4').style.lineHeight='25px';
	document.getElementById('Button4').style.height='30px';
	document.getElementById('AirportName2').innerHTML=AirportName2;
	PushArea2_Page1();
	document.getElementById('Area1').style.display='none';
	document.getElementById('Area2').style.display='inherit';
	document.getElementById('Area3').style.display='none';
	document.getElementById('Area4').style.display='none';
}

function PushArea3()
{
	document.getElementById('Button1').style.background ='#C8C8C8';
	document.getElementById('Button1').style.color='black';
	document.getElementById('Button1').style.lineHeight='25px';
	document.getElementById('Button1').style.height='30px';
	document.getElementById('Button2').style.background ='#C8C8C8';
	document.getElementById('Button2').style.color='black';
	document.getElementById('Button2').style.lineHeight='25px';
	document.getElementById('Button2').style.height='30px';
	document.getElementById('Button3').style.background ='black';
	document.getElementById('Button3').style.color='white';
	document.getElementById('Button3').style.lineHeight='35px';
	document.getElementById('Button3').style.height='40px';
	document.getElementById('Button4').style.background ='#C8C8C8';
	document.getElementById('Button4').style.color='black';
	document.getElementById('Button4').style.lineHeight='25px';
	document.getElementById('Button4').style.height='30px';
	document.getElementById('AirportName3').innerHTML=AirportName3;
	PushArea3_Page1();
	document.getElementById('Area1').style.display='none';
	document.getElementById('Area2').style.display='none';
	document.getElementById('Area3').style.display='inherit';
	document.getElementById('Area4').style.display='none';
}

function PushArea4()
{
	document.getElementById('Button1').style.background ='#C8C8C8';
	document.getElementById('Button1').style.color='black';
	document.getElementById('Button1').style.lineHeight='25px';
	document.getElementById('Button1').style.height='30px';
	document.getElementById('Button2').style.background ='#C8C8C8';
	document.getElementById('Button2').style.color='black';
	document.getElementById('Button2').style.lineHeight='25px';
	document.getElementById('Button2').style.height='30px';
	document.getElementById('Button3').style.background ='#C8C8C8';
	document.getElementById('Button3').style.color='black';
	document.getElementById('Button3').style.lineHeight='25px';
	document.getElementById('Button3').style.height='30px';
	document.getElementById('Button4').style.background ='black';
	document.getElementById('Button4').style.color='white';
	document.getElementById('Button4').style.lineHeight='35px';
	document.getElementById('Button4').style.height='40px';
	document.getElementById('AirportName4').innerHTML=AirportName4;
	PushArea4_Page1();
	document.getElementById('Area1').style.display='none';
	document.getElementById('Area2').style.display='none';
	document.getElementById('Area3').style.display='none';
	document.getElementById('Area4').style.display='inherit';
}


function PushArea1_Page1()
{
	document.getElementById('SGN_Vitri1').innerHTML = SGN_Vitri1;
	document.getElementById('ThongSoKyThuatSGN1').innerHTML=SGN_ThongTin1;
	document.getElementById('SGN_Vitri2').innerHTML=SGN_Vitri2;
	document.getElementById('ThongSoKyThuatSGN2').innerHTML=SGN_ThongTin2;
}

function PushArea1_Page2()
{
	document.getElementById('SGN_Vitri1').innerHTML = SGN_Vitri3;
	document.getElementById('ThongSoKyThuatSGN1').innerHTML=SGN_ThongTin3;
	document.getElementById('SGN_Vitri2').innerHTML=SGN_Vitri4;
	document.getElementById('ThongSoKyThuatSGN2').innerHTML=SGN_ThongTin4;
}


function PushArea1_Page3()
{
	document.getElementById('SGN_Vitri1').innerHTML = SGN_Vitri5;
	document.getElementById('ThongSoKyThuatSGN1').innerHTML=SGN_ThongTin5;
	document.getElementById('SGN_Vitri2').innerHTML=SGN_Vitri6;
	document.getElementById('ThongSoKyThuatSGN2').innerHTML=SGN_ThongTin6;
}

function XULITINHIEUPAGEAREA1(){
	var ButtonPage1Next = document.getElementById('NextBtn');
	ButtonPage1Next.onclick = XuLiNextButton;
	var ButtonPage1Prev = document.getElementById('PrevBtn');
	ButtonPage1Prev.onclick = XuLiPrevButton;
}

var STT = 1;
function XuLiNextButton(){
	if(STT == 1)
		{
			PushArea1_Page2();
			STT = 2;
		}
	else if(STT == 2)
		{
			PushArea1_Page3();
			STT = 3;
		}
	else 
		{
			PushArea1_Page1();
			STT = 1;
		}
}

function XuLiPrevButton(){
	if(STT == 1)
		{
			PushArea1_Page3();
			STT = 3;
		}
	else if(STT == 3)
		{
			PushArea1_Page2();
			STT = 2;
		}
	else 
		{
			PushArea1_Page1();
			STT = 1;
		}
}

function PushArea2_Page1()
{
	document.getElementById('HAN_Vitri1').innerHTML = HAN_Vitri1;
	document.getElementById('ThongSoKyThuatHAN1').innerHTML=HAN_ThongTin1;
	document.getElementById('HAN_Vitri2').innerHTML=HAN_Vitri2;
	document.getElementById('ThongSoKyThuatHAN2').innerHTML=HAN_ThongTin2;
}

function PushArea3_Page1()
{
	document.getElementById('DAD_Vitri1').innerHTML = DAD_Vitri1;
	document.getElementById('ThongSoKyThuatDAD1').innerHTML=DAD_ThongTin1;
	document.getElementById('DAD_Vitri2').innerHTML=DAD_Vitri2;
	document.getElementById('ThongSoKyThuatDAD2').innerHTML=DAD_ThongTin2;
}
function PushArea4_Page1()
{
	document.getElementById('VCA_Vitri1').innerHTML = VCA_Vitri1;
	document.getElementById('ThongSoKyThuatVCA1').innerHTML=VCA_ThongTin1;
	document.getElementById('VCA_Vitri2').innerHTML=VCA_Vitri2;
	document.getElementById('ThongSoKyThuatVCA2').innerHTML=VCA_ThongTin2;
}