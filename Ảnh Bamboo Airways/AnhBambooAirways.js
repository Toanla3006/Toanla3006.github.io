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
var TieuDeChuyenMuc = "Ảnh Hàng Không - Bamboo Airways";

var HotPic1_address = "../Picture/IMG_0746.jpg";
var HotPic2_address = "../Picture/IMG_3803.jpg";
var HotPic3_address = "../Picture/IMG_2345.jpg";
var HotPic4_address = "../Picture/IMG_7515.jpg";
var AdvertisingPic  = "../Picture/AdvertiseHomePage.jpg";
var BannerBamboo_address ="../Picture/Banner Bamboo.jpg";

var Tau1_Reg = "VN-A581"; var Tau1_AircraftType="Airbus 319-100";var Tau1_Config = "C8Y120"; var Tau1_Day="01/2019"; var Tau1_Age="14.6";
var Tau2_Reg = "VN-A582"; var Tau2_AircraftType="Airbus 320-200";var Tau2_Config = "C8Y162"; var Tau2_Day="05/2019"; var Tau2_Age="13.3";
var Tau3_Reg = "VN-A583"; var Tau3_AircraftType="Airbus 320-200";var Tau3_Config = "C8Y162"; var Tau3_Day="10/2019"; var Tau3_Age="11.0";
var Tau4_Reg = "VN-A584"; var Tau4_AircraftType="Airbus 320-200";var Tau4_Config = "C8Y162"; var Tau4_Day="10/2019"; var Tau4_Age="13.2";
var Tau5_Reg = "VN-A586"; var Tau5_AircraftType="Airbus 320-200";var Tau5_Config = "C8Y162"; var Tau5_Day="01/2019"; var Tau5_Age="13.5";
var Tau6_Reg = "VN-A587"; var Tau6_AircraftType="Airbus 320-200";var Tau6_Config = "C8Y162"; var Tau6_Day="09/2019"; var Tau6_Age="13.3";
var Tau7_Reg = "VN-A595"; var Tau7_AircraftType="Airbus 320-200";var Tau7_Config = "C8Y162"; var Tau7_Day="11/2019"; var Tau7_Age="12.1";
var Tau8_Reg = "VN-A592"; var Tau8_AircraftType="Airbus 320Neo";var Tau8_Config = "C8Y162"; var Tau8_Day="12/2019"; var Tau8_Age="12.1";
var Tau9_Reg = "VN-A593"; var Tau9_AircraftType="Airbus 320Neo";var Tau9_Config = "Y180"; var Tau9_Day="11/2019"; var Tau9_Age="0.5";
var Tau10_Reg = "VN-A596"; var Tau10_AircraftType="Airbus 320Neo";var Tau10_Config = "C8Y162"; var Tau10_Day="10/2019"; var Tau10_Age="0.5";
var Tau11_Reg = "VN-A598"; var Tau11_AircraftType="Airbus 320Neo";var Tau11_Config = "C8Y168"; var Tau11_Day="11/2019"; var Tau11_Age="0.4";
var Tau12_Reg = "VN-A599"; var Tau12_AircraftType="Airbus 320Neo";var Tau12_Config = "C8Y162"; var Tau12_Day="12/2019"; var Tau12_Age="0.3";
var Tau13_Reg = "VN-A585"; var Tau13_AircraftType="Airbus 321-200";var Tau13_Config = ""; var Tau13_Day="10/2019"; var Tau13_Age="8.2";
var Tau14_Reg = "VN-A594"; var Tau14_AircraftType="Airbus 321-200";var Tau14_Config = ""; var Tau14_Day="12/2019"; var Tau14_Age="8.2";
var Tau15_Reg = "VN-A597"; var Tau15_AircraftType="Airbus 321-200";var Tau15_Config = ""; var Tau15_Day="10/2019"; var Tau15_Age="7.6";

var Tau16_Reg = "VN-A588"; var Tau16_AircraftType="Airbus 321Neo";var Tau16_Config = "C8Y196"; var Tau16_Day="12/2018"; var Tau16_Age="1.4";
var Tau17_Reg = "VN-A589"; var Tau17_AircraftType="Airbus 321Neo";var Tau17_Config = "C8Y196"; var Tau17_Day="04/2019"; var Tau17_Age="1.9";
var Tau18_Reg = "VN-A590"; var Tau18_AircraftType="Airbus 321Neo";var Tau18_Config = ""; var Tau18_Day="08/2019"; var Tau18_Age="1.4";
var Tau19_Reg = "VN-A591"; var Tau19_AircraftType="Airbus 321Neo";var Tau19_Config = "C8Y196"; var Tau19_Day="04/2019"; var Tau19_Age="1.7";

var Tau20_Reg = "VN-A818"; var Tau20_AircraftType="Boeing 787-9 Dreamliner";var Tau20_Config = "C26W21Y247"; var Tau20_Day="01/2019"; var Tau20_Age="0.5";
var Tau21_Reg = "VN-A819"; var Tau21_AircraftType="Boeing 787-9 Dreamliner";var Tau21_Config = "C26W21Y247"; var Tau21_Day="04/2019"; var Tau21_Age="0.4";
var Tau22_Reg = "VN-A828"; var Tau22_AircraftType="Boeing 787-9 Dreamliner";var Tau22_Config = "C30W36Y226"; var Tau22_Day="Due"; var Tau22_Age="1.5";
var Tau23_Reg = "VN-A829"; var Tau23_AircraftType="Boeing 787-9 Dreamliner";var Tau23_Config = "C30W36Y226"; var Tau23_Day="01/2020"; var Tau23_Age="1.7";

var AHK1_address = "../Picture/IMG_8815.jpg";
var AHK2_address = "../Picture/IMG_9270.jpg";
var AHK3_address = "../Picture/IMG_0648.jpg";
var AHK4_address = "../Picture/IMG_0818.jpg";
var AHK5_address = "../Picture/IMG_BAV_00001.jpg";
var AHK6_address = "../Picture/IMG_BAV_00002.jpg";
var AHK7_address = "../Picture/IMG_BAV_00003.jpg";
var AHK8_address = "../Picture/IMG_BAV_00004.jpg";
var AHK9_address = "../Picture/IMG_BAV_00005.jpg";
var AHK10_address = "../Picture/IMG_BAV_00006.jpg";
var AHK11_address = "../Picture/IMG_BAV_00007.jpg";
var AHK12_address = "../Picture/IMG_BAV_00008.jpg";
var AHK13_address = "../Picture/IMG_BAV_00009.jpg";
var AHK14_address = "../Picture/IMG_BAV_00010.jpg";
var AHK15_address = "../Picture/IMG_BAV_00011.jpg";
var AHK16_address = "../Picture/IMG_BAV_00012.jpg";
var AHK17_address = "../Picture/IMG_BAV_00013.jpg";
var AHK18_address = "../Picture/IMG_BAV_00014.jpg";
var AHK19_address = "../Picture/IMG_BAV_00015.jpg";
var AHK20_address = "../Picture/IMG_BAV_00016.jpg";
var AHK21_address = "../Picture/IMG_BAV_00017.jpg";
var AHK22_address = "../Picture/IMG_BAV_00018.jpg";
var AHK23_address = "../Picture/IMG_BAV_00019.jpg";
var AHK24_address = "../Picture/IMG_BAV_00020.jpg";


var AHK1Info = "Bamboo Airways <br> Boeing 787-9 Dreamliner <br> Reg: VN-A829 <br> Tên: Quy Nhơn City <br> Tác giả: ";
var AHK2Info = "Bamboo Airways <br> Airbus 321Neo <br> Reg: VN-A589 <br> Tác giả: ";
var AHK3Info = "Bamboo Airways <br> Boeing 787-9 Dreamliner <br> Reg: VN-A819 <br> Tên: Ha Long Bay <br> Tác giả: ";
var AHK4Info = "Bamboo Airways <br> Airbus 320-200 <br> Reg: TC-FBO <br> Tác giả: ";
var AHK5Info = "Bamboo Airways <br> Airbus 321Neo <br> Reg: VN-A590 <br> Tác giả: ";
var AHK6Info = "Bamboo Airways <br> Airbus 321-200 <br> Reg: VN-A585 <br> Tác giả: ";
var AHK7Info = "Bamboo Airways <br> Airbus 321Neo <br> Reg: VN-A589 <br> Tác giả: ";
var AHK8Info = "Bamboo Airways <br> Airbus 320-200 <br> Reg: TC-FHN <br> Tác giả: ";
var AHK9Info = "Bamboo Airways <br> Boeing 787-9 Dreamliner <br> Reg: VN-A818 <br> Tên: Sam Son Beach <br> Tác giả:  ";
var AHK10Info = "Bamboo Airways <br> Airbus 321Neo <br> Reg: VN-A591 <br> Tác giả: ";
var AHK11Info = "Bamboo Airways <br> Airbus 320-200 <br> Reg: VN-A583 <br> Tác giả: ";
var AHK12Info = "Bamboo Airways <br> Airbus 320-200 <br> Reg: TC-FBO <br> Tác giả:  ";
var AHK13Info = "Bamboo Airways <br> Airbus 321Neo <br> Reg: VN-A591 <br> Tác giả: ";
var AHK14Info = "Bamboo Airways <br> Airbus 320-200 <br> Reg: TC-FHN <br> Tác giả: ";
var AHK15Info = "Bamboo Airways <br> Airbus 319-100 <br> Reg: VN-A581 <br> Tác giả: ";
var AHK16Info = "Bamboo Airways <br> Boeing 787-9 Dreamliner <br> Reg: VN-A829 <br> Tên: Quy Nhơn City <br> Tác giả: ";
var AHK17Info = "Bamboo Airways <br> Airbus 321-200 <br> Reg: VN-A594 <br> Tác giả: ";
var AHK18Info = "Bamboo Airways <br> Airbus 320Neo <br> Reg: VN-A596 <br> Tác giả: ";
var AHK19Info = "Bamboo Airways <br> Airbus 320-200 <br> Reg: VN-A587 <br> Tác giả: ";
var AHK20Info = "Bamboo Airways <br> Airbus 320Neo <br> Reg: VN-A599 <br> Tác giả: ";
var AHK21Info = "Bamboo Airways <br> Boeing 787-9 Dreamliner <br> Reg: VN-A818 <br> Tên: Sam Son Beach <br> Tác giả:  ";
var AHK22Info = "Bamboo Airways <br> Airbus 320-200 <br> Reg: TC-FBO <br> Tác giả:  ";
var AHK23Info = "Bamboo Airways <br> Boeing 787-9 Dreamliner <br> Reg: VN-A818 <br> Tên: Sam Son Beach <br> Tác giả:  ";
var AHK24Info = "Bamboo Airways <br> Airbus 321Neo <br> Reg: VN-A588 <br> Tác giả: ";

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
	$('#Banner_Bamboo').attr("src",BannerBamboo_address);
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
	document.getElementById('Tau16_Reg').innerHTML=Tau16_Reg;
	document.getElementById('Tau16_AircraftType').innerHTML=Tau16_AircraftType;
	document.getElementById('Tau16_Config').innerHTML=Tau16_Config;
	document.getElementById('Tau16_Day').innerHTML=Tau16_Day;
	document.getElementById('Tau16_Age').innerHTML=Tau16_Age;
	document.getElementById('Tau17_Reg').innerHTML=Tau17_Reg;
	document.getElementById('Tau17_AircraftType').innerHTML=Tau17_AircraftType;
	document.getElementById('Tau17_Config').innerHTML=Tau17_Config;
	document.getElementById('Tau17_Day').innerHTML=Tau17_Day;
	document.getElementById('Tau17_Age').innerHTML=Tau17_Age;
	document.getElementById('Tau18_Reg').innerHTML=Tau18_Reg;
	document.getElementById('Tau18_AircraftType').innerHTML=Tau18_AircraftType;
	document.getElementById('Tau18_Config').innerHTML=Tau18_Config;
	document.getElementById('Tau18_Day').innerHTML=Tau18_Day;
	document.getElementById('Tau18_Age').innerHTML=Tau18_Age;
	document.getElementById('Tau19_Reg').innerHTML=Tau19_Reg;
	document.getElementById('Tau19_AircraftType').innerHTML=Tau19_AircraftType;
	document.getElementById('Tau19_Config').innerHTML=Tau19_Config;
	document.getElementById('Tau19_Day').innerHTML=Tau19_Day;
	document.getElementById('Tau19_Age').innerHTML=Tau19_Age;
	document.getElementById('Tau20_Reg').innerHTML=Tau20_Reg;
	document.getElementById('Tau20_AircraftType').innerHTML=Tau20_AircraftType;
	document.getElementById('Tau20_Config').innerHTML=Tau20_Config;
	document.getElementById('Tau20_Day').innerHTML=Tau20_Day;
	document.getElementById('Tau20_Age').innerHTML=Tau20_Age;
	document.getElementById('Tau21_Reg').innerHTML=Tau21_Reg;
	document.getElementById('Tau21_AircraftType').innerHTML=Tau21_AircraftType;
	document.getElementById('Tau21_Config').innerHTML=Tau21_Config;
	document.getElementById('Tau21_Day').innerHTML=Tau21_Day;
	document.getElementById('Tau21_Age').innerHTML=Tau21_Age;
	document.getElementById('Tau22_Reg').innerHTML=Tau22_Reg;
	document.getElementById('Tau22_AircraftType').innerHTML=Tau22_AircraftType;
	document.getElementById('Tau22_Config').innerHTML=Tau22_Config;
	document.getElementById('Tau22_Day').innerHTML=Tau22_Day;
	document.getElementById('Tau22_Age').innerHTML=Tau22_Age;
	document.getElementById('Tau23_Reg').innerHTML=Tau23_Reg;
	document.getElementById('Tau23_AircraftType').innerHTML=Tau23_AircraftType;
	document.getElementById('Tau23_Config').innerHTML=Tau23_Config;
	document.getElementById('Tau23_Day').innerHTML=Tau23_Day;
	document.getElementById('Tau23_Age').innerHTML=Tau23_Age;
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
	document.getElementById('AnhBambooArea').style.display='none';
	document.getElementById('TieuDeNoiDungTrang').style.display='inherit';
	document.getElementById('ButtonThongTin2').style.display='none';
}
function Changelayer2(){
	document.getElementById('AnhBambooArea').style.display='inherit';
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