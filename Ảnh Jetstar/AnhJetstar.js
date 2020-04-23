// JavaScript Document
$(document).ready(function(){
	XULITHONGTINTHEMES();
	XULITHONGTINHINHANH();
	XULITHONGTINBANG();
	XuLiTinHieu();
	PushBaiViet1();
});

var WebsiteName ="Đam mê Hàng Không";
var SLOGAN = "Chấp cánh giấc mơ bay";
var TieuDeChuyenMuc = "Ảnh Hàng Không - Jetstar Pacific";

var HotPic1_address = "../Picture/IMG_0746.jpg";
var HotPic2_address = "../Picture/IMG_3803.jpg";
var HotPic3_address = "../Picture/IMG_2345.jpg";
var HotPic4_address = "../Picture/IMG_7515.jpg";
var AdvertisingPic  = "../Picture/AdvertiseHomePage.jpg";
var BannerJetstar_address ="../Picture/Banner Jetstar.jpg";

var Tau1_Reg = "VN-A198"; var Tau1_AircraftType="Airbus 320-200";var Tau1_Config = ""; var Tau1_Day="10/2010"; var Tau1_Age="9.6";
var Tau2_Reg = "VN-A560"; var Tau2_AircraftType="Airbus 320-200";var Tau2_Config = "Y180"; var Tau2_Day="08/2014"; var Tau2_Age="11.6";
var Tau3_Reg = "VN-A562"; var Tau3_AircraftType="Airbus 320-200";var Tau3_Config = "Y180"; var Tau3_Day="05/2015"; var Tau3_Age="9.4";
var Tau4_Reg = "VN-A563"; var Tau4_AircraftType="Airbus 320-200";var Tau4_Config = "Y180"; var Tau4_Day="12/2015"; var Tau4_Age="14.7";
var Tau5_Reg = "VN-A564"; var Tau5_AircraftType="Airbus 320-200";var Tau5_Config = "Y180"; var Tau5_Day="01/2018"; var Tau5_Age="3.8";
var Tau6_Reg = "VN-A565"; var Tau6_AircraftType="Airbus 320-200";var Tau6_Config = "Y180"; var Tau6_Day="01/2018"; var Tau6_Age="3.7";
var Tau7_Reg = "VN-A566"; var Tau7_AircraftType="Airbus 320-200";var Tau7_Config = "Y180"; var Tau7_Day="11/2016"; var Tau7_Age="3.5";
var Tau8_Reg = "VN-A567"; var Tau8_AircraftType="Airbus 320-200";var Tau8_Config = "Y180"; var Tau8_Day="12/2016"; var Tau8_Age="3.4";
var Tau9_Reg = "VN-A568"; var Tau9_AircraftType="Airbus 320-200";var Tau9_Config = "Y180"; var Tau9_Day="06/2017"; var Tau9_Age="2.8";
var Tau10_Reg = "VN-A569"; var Tau10_AircraftType="Airbus 320-200";var Tau10_Config = "Y180"; var Tau10_Day="06/2017"; var Tau10_Age="2.8";
var Tau11_Reg = "VN-A570"; var Tau11_AircraftType="Airbus 320-200";var Tau11_Config = "Y180"; var Tau11_Day="07/2017"; var Tau11_Age="2.8";
var Tau12_Reg = "VN-A571"; var Tau12_AircraftType="Airbus 320-200";var Tau12_Config = "Y180"; var Tau12_Day="08/2017"; var Tau12_Age="2.7";
var Tau13_Reg = "VN-A572"; var Tau13_AircraftType="Airbus 320-200";var Tau13_Config = "Y180"; var Tau13_Day="08/2017"; var Tau13_Age="2.7";
var Tau14_Reg = "VN-A573"; var Tau14_AircraftType="Airbus 320-200";var Tau14_Config = "Y180"; var Tau14_Day="09/2017"; var Tau14_Age="2.6";
var Tau15_Reg = "VN-A577"; var Tau15_AircraftType="Airbus 320-200";var Tau15_Config = "Y180"; var Tau15_Day="12/2017"; var Tau15_Age="2.4";

var AHK1_address = "../Picture/Waiting_Pic.jpg";
var AHK2_address = "../Picture/Waiting_Pic.jpg";
var AHK3_address = "../Picture/Waiting_Pic.jpg";
var AHK4_address = "../Picture/Waiting_Pic.jpg";
var AHK5_address = "../Picture/Waiting_Pic.jpg";
var AHK6_address = "../Picture/Waiting_Pic.jpg";
var AHK7_address = "../Picture/Waiting_Pic.jpg";
var AHK8_address = "../Picture/Waiting_Pic.jpg";
var AHK9_address = "../Picture/Waiting_Pic.jpg";
var AHK10_address = "../Picture/Waiting_Pic.jpg";
var AHK11_address = "../Picture/Waiting_Pic.jpg";
var AHK12_address = "../Picture/Waiting_Pic.jpg";
var AHK13_address = "../Picture/Waiting_Pic.jpg";
var AHK14_address = "../Picture/Waiting_Pic.jpg";
var AHK15_address = "../Picture/Waiting_Pic.jpg";
var AHK16_address = "../Picture/Waiting_Pic.jpg";
var AHK17_address = "../Picture/Waiting_Pic.jpg";
var AHK18_address = "../Picture/Waiting_Pic.jpg";
var AHK19_address = "../Picture/Waiting_Pic.jpg";
var AHK20_address = "../Picture/Waiting_Pic.jpg";
var AHK21_address = "../Picture/Waiting_Pic.jpg";
var AHK22_address = "../Picture/Waiting_Pic.jpg";
var AHK23_address = "../Picture/Waiting_Pic.jpg";
var AHK24_address = "../Picture/Waiting_Pic.jpg";


var AHK1Info = "Jetstar Pacific <br> Thông tin tàu bay ";
var AHK2Info = "Jetstar Pacific <br> Thông tin tàu bay ";
var AHK3Info = "Jetstar Pacific <br> Thông tin tàu bay ";
var AHK4Info = "Jetstar Pacific <br> Thông tin tàu bay ";
var AHK5Info = "Jetstar Pacific <br> Thông tin tàu bay ";
var AHK6Info = "Jetstar Pacific <br> Thông tin tàu bay ";
var AHK7Info = "Jetstar Pacific <br> Thông tin tàu bay ";
var AHK8Info = "Jetstar Pacific <br> Thông tin tàu bay ";
var AHK9Info = "Jetstar Pacific <br> Thông tin tàu bay ";
var AHK10Info = "Jetstar Pacific <br> Thông tin tàu bay ";
var AHK11Info = "Jetstar Pacific <br> Thông tin tàu bay ";
var AHK12Info = "Jetstar Pacific <br> Thông tin tàu bay ";
var AHK13Info = "Jetstar Pacific <br> Thông tin tàu bay ";
var AHK14Info = "Jetstar Pacific <br> Thông tin tàu bay ";
var AHK15Info = "Jetstar Pacific <br> Thông tin tàu bay ";
var AHK16Info = "Jetstar Pacific <br> Thông tin tàu bay ";
var AHK17Info = "Jetstar Pacific <br> Thông tin tàu bay ";
var AHK18Info = "Jetstar Pacific <br> Thông tin tàu bay ";
var AHK19Info = "Jetstar Pacific <br> Thông tin tàu bay ";
var AHK20Info = "Jetstar Pacific <br> Thông tin tàu bay ";
var AHK21Info = "Jetstar Pacific <br> Thông tin tàu bay ";
var AHK22Info = "Jetstar Pacific <br> Thông tin tàu bay ";
var AHK23Info = "Jetstar Pacific <br> Thông tin tàu bay ";
var AHK24Info = "Jetstar Pacific <br> Thông tin tàu bay ";

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
	$('#Banner_Jetstar').attr("src",BannerJetstar_address);
}

function XULITHONGTINBANG()
{
	document.getElementById('Tau1_Reg').innerHTML=Tau1_Reg;
	document.getElementById('Tau1_AircraftType').innerHTML=Tau1_AircraftType;
	document.getElementById('Tau1_Config').innerHTML=Tau1_Config;
	document.getElementById('Tau1_Day').innerHTML=Tau1_Day;
	document.getElementById('Tau1_Age').innerHTML=Tau1_Age;
	document.getElementById('Tau2_Reg').innerHTML=Tau2_Reg;
	document.getElementById('Tau2_AircraftType').innerHTML=Tau2_AircraftType;
	document.getElementById('Tau2_Config').innerHTML=Tau2_Config;
	document.getElementById('Tau2_Day').innerHTML=Tau2_Day;
	document.getElementById('Tau2_Age').innerHTML=Tau2_Age;
	document.getElementById('Tau3_Reg').innerHTML=Tau3_Reg;
	document.getElementById('Tau3_AircraftType').innerHTML=Tau3_AircraftType;
	document.getElementById('Tau3_Config').innerHTML=Tau3_Config;
	document.getElementById('Tau3_Day').innerHTML=Tau3_Day;
	document.getElementById('Tau3_Age').innerHTML=Tau3_Age;
	document.getElementById('Tau4_Reg').innerHTML=Tau4_Reg;
	document.getElementById('Tau4_AircraftType').innerHTML=Tau4_AircraftType;
	document.getElementById('Tau4_Config').innerHTML=Tau4_Config;
	document.getElementById('Tau4_Day').innerHTML=Tau4_Day;
	document.getElementById('Tau4_Age').innerHTML=Tau4_Age;
	document.getElementById('Tau5_Reg').innerHTML=Tau5_Reg;
	document.getElementById('Tau5_AircraftType').innerHTML=Tau5_AircraftType;
	document.getElementById('Tau5_Config').innerHTML=Tau5_Config;
	document.getElementById('Tau5_Day').innerHTML=Tau5_Day;
	document.getElementById('Tau5_Age').innerHTML=Tau5_Age;
	document.getElementById('Tau6_Reg').innerHTML=Tau6_Reg;
	document.getElementById('Tau6_AircraftType').innerHTML=Tau6_AircraftType;
	document.getElementById('Tau6_Config').innerHTML=Tau6_Config;
	document.getElementById('Tau6_Day').innerHTML=Tau6_Day;
	document.getElementById('Tau6_Age').innerHTML=Tau6_Age;
	document.getElementById('Tau7_Reg').innerHTML=Tau7_Reg;
	document.getElementById('Tau7_AircraftType').innerHTML=Tau7_AircraftType;
	document.getElementById('Tau7_Config').innerHTML=Tau7_Config;
	document.getElementById('Tau7_Day').innerHTML=Tau7_Day;
	document.getElementById('Tau7_Age').innerHTML=Tau7_Age;
	document.getElementById('Tau8_Reg').innerHTML=Tau8_Reg;
	document.getElementById('Tau8_AircraftType').innerHTML=Tau8_AircraftType;
	document.getElementById('Tau8_Config').innerHTML=Tau8_Config;
	document.getElementById('Tau8_Day').innerHTML=Tau8_Day;
	document.getElementById('Tau8_Age').innerHTML=Tau8_Age;
	document.getElementById('Tau9_Reg').innerHTML=Tau9_Reg;
	document.getElementById('Tau9_AircraftType').innerHTML=Tau9_AircraftType;
	document.getElementById('Tau9_Config').innerHTML=Tau9_Config;
	document.getElementById('Tau9_Day').innerHTML=Tau9_Day;
	document.getElementById('Tau9_Age').innerHTML=Tau9_Age;
	document.getElementById('Tau10_Reg').innerHTML=Tau10_Reg;
	document.getElementById('Tau10_AircraftType').innerHTML=Tau10_AircraftType;
	document.getElementById('Tau10_Config').innerHTML=Tau10_Config;
	document.getElementById('Tau10_Day').innerHTML=Tau10_Day;
	document.getElementById('Tau10_Age').innerHTML=Tau10_Age;
	document.getElementById('Tau11_Reg').innerHTML=Tau11_Reg;
	document.getElementById('Tau11_AircraftType').innerHTML=Tau11_AircraftType;
	document.getElementById('Tau11_Config').innerHTML=Tau11_Config;
	document.getElementById('Tau11_Day').innerHTML=Tau11_Day;
	document.getElementById('Tau11_Age').innerHTML=Tau11_Age;
	document.getElementById('Tau12_Reg').innerHTML=Tau12_Reg;
	document.getElementById('Tau12_AircraftType').innerHTML=Tau12_AircraftType;
	document.getElementById('Tau12_Config').innerHTML=Tau12_Config;
	document.getElementById('Tau12_Day').innerHTML=Tau12_Day;
	document.getElementById('Tau12_Age').innerHTML=Tau12_Age;
	document.getElementById('Tau13_Reg').innerHTML=Tau13_Reg;
	document.getElementById('Tau13_AircraftType').innerHTML=Tau13_AircraftType;
	document.getElementById('Tau13_Config').innerHTML=Tau13_Config;
	document.getElementById('Tau13_Day').innerHTML=Tau13_Day;
	document.getElementById('Tau13_Age').innerHTML=Tau13_Age;
	document.getElementById('Tau14_Reg').innerHTML=Tau14_Reg;
	document.getElementById('Tau14_AircraftType').innerHTML=Tau14_AircraftType;
	document.getElementById('Tau14_Config').innerHTML=Tau14_Config;
	document.getElementById('Tau14_Day').innerHTML=Tau14_Day;
	document.getElementById('Tau14_Age').innerHTML=Tau14_Age;
	document.getElementById('Tau15_Reg').innerHTML=Tau15_Reg;
	document.getElementById('Tau15_AircraftType').innerHTML=Tau15_AircraftType;
	document.getElementById('Tau15_Config').innerHTML=Tau15_Config;
	document.getElementById('Tau15_Day').innerHTML=Tau15_Day;
	document.getElementById('Tau15_Age').innerHTML=Tau15_Age;
}

function XuLiTinHieu(){
	var Event1 = document.getElementById('ButtonThongTin1');
	Event1.onclick = Changelayer2;
	var Event2 = document.getElementById('ButtonThongTin2');
	Event2.onclick = Changelayer1;
	var ButtonEvent1 = document.getElementById('Button1');
	ButtonEvent1.onclick = PushBaiViet1;
	var ButtonEvent2 = document.getElementById('Button2');
	ButtonEvent2.onclick = PushBaiViet2;
	var ButtonEvent3 = document.getElementById('Button3');
	ButtonEvent3.onclick = PushBaiViet3;
	var ButtonEvent4 = document.getElementById('Button4');
	ButtonEvent4.onclick = PushBaiViet4;
}

function Changelayer1(){
	document.getElementById('AnhJetstarArea').style.display='none';
	document.getElementById('TieuDeNoiDungTrang').style.display='inherit';
	document.getElementById('ButtonThongTin2').style.display='none';
}
function Changelayer2(){
	document.getElementById('AnhJetstarArea').style.display='inherit';
	document.getElementById('TieuDeNoiDungTrang').style.display='none';
	document.getElementById('ButtonThongTin2').style.display='inherit';
}

function PushBaiViet1(){
	$('#AHK1').attr("src",AHK1_address);
	$('#AHK2').attr("src",AHK2_address);
	$('#AHK3').attr("src",AHK3_address);
	$('#AHK4').attr("src",AHK4_address);
	$('#AHK5').attr("src",AHK5_address);
	$('#AHK6').attr("src",AHK6_address);
	document.getElementById('PicInfo1').innerHTML = AHK1Info;
	document.getElementById('PicInfo2').innerHTML = AHK2Info;
	document.getElementById('PicInfo3').innerHTML = AHK3Info;
	document.getElementById('PicInfo4').innerHTML = AHK4Info;
	document.getElementById('PicInfo5').innerHTML = AHK5Info;
	document.getElementById('PicInfo6').innerHTML = AHK6Info;
	document.getElementById('Button1').style.backgroundColor='white';
	document.getElementById('Button1').style.color='black';
	document.getElementById('Button2').style.backgroundColor='black';
	document.getElementById('Button2').style.color='white';
	document.getElementById('Button3').style.backgroundColor='black';
	document.getElementById('Button3').style.color='white';
	document.getElementById('Button4').style.backgroundColor='black';
	document.getElementById('Button4').style.color='white';
}

function PushBaiViet2(){
	$('#AHK1').attr("src",AHK7_address);
	$('#AHK2').attr("src",AHK8_address);
	$('#AHK3').attr("src",AHK9_address);
	$('#AHK4').attr("src",AHK10_address);
	$('#AHK5').attr("src",AHK11_address);
	$('#AHK6').attr("src",AHK12_address);
	document.getElementById('PicInfo1').innerHTML = AHK7Info;
	document.getElementById('PicInfo2').innerHTML = AHK8Info;
	document.getElementById('PicInfo3').innerHTML = AHK9Info;
	document.getElementById('PicInfo4').innerHTML = AHK10Info;
	document.getElementById('PicInfo5').innerHTML = AHK11Info;
	document.getElementById('PicInfo6').innerHTML = AHK12Info;
	document.getElementById('Button1').style.backgroundColor='black';
	document.getElementById('Button1').style.color='white';
	document.getElementById('Button2').style.backgroundColor='white';
	document.getElementById('Button2').style.color='black';
	document.getElementById('Button3').style.backgroundColor='black';
	document.getElementById('Button3').style.color='white';
	document.getElementById('Button4').style.backgroundColor='black';
	document.getElementById('Button4').style.color='white';
}

function PushBaiViet3(){
	$('#AHK1').attr("src",AHK13_address);
	$('#AHK2').attr("src",AHK14_address);
	$('#AHK3').attr("src",AHK15_address);
	$('#AHK4').attr("src",AHK16_address);
	$('#AHK5').attr("src",AHK17_address);
	$('#AHK6').attr("src",AHK18_address);
	document.getElementById('PicInfo1').innerHTML = AHK13Info;
	document.getElementById('PicInfo2').innerHTML = AHK14Info;
	document.getElementById('PicInfo3').innerHTML = AHK15Info;
	document.getElementById('PicInfo4').innerHTML = AHK16Info;
	document.getElementById('PicInfo5').innerHTML = AHK17Info;
	document.getElementById('PicInfo6').innerHTML = AHK18Info;
	document.getElementById('Button1').style.backgroundColor='black';
	document.getElementById('Button1').style.color='white';
	document.getElementById('Button2').style.backgroundColor='black';
	document.getElementById('Button2').style.color='white';
	document.getElementById('Button3').style.backgroundColor='white';
	document.getElementById('Button3').style.color='black';
	document.getElementById('Button4').style.backgroundColor='black';
	document.getElementById('Button4').style.color='white';
}

function PushBaiViet4(){
	$('#AHK1').attr("src",AHK19_address);
	$('#AHK2').attr("src",AHK20_address);
	$('#AHK3').attr("src",AHK21_address);
	$('#AHK4').attr("src",AHK22_address);
	$('#AHK5').attr("src",AHK23_address);
	$('#AHK6').attr("src",AHK24_address);
	document.getElementById('PicInfo1').innerHTML = AHK19Info;
	document.getElementById('PicInfo2').innerHTML = AHK20Info;
	document.getElementById('PicInfo3').innerHTML = AHK21Info;
	document.getElementById('PicInfo4').innerHTML = AHK22Info;
	document.getElementById('PicInfo5').innerHTML = AHK23Info;
	document.getElementById('PicInfo6').innerHTML = AHK24Info;
	document.getElementById('Button1').style.backgroundColor='black';
	document.getElementById('Button1').style.color='white';
	document.getElementById('Button2').style.backgroundColor='black';
	document.getElementById('Button2').style.color='white';
	document.getElementById('Button3').style.backgroundColor='black';
	document.getElementById('Button3').style.color='white';
	document.getElementById('Button4').style.backgroundColor='white';
	document.getElementById('Button4').style.color='black';
}