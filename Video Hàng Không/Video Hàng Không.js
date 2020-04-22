// JavaScript Document
$(document).ready(function(){
	XULITHONGTINTHEMES();
	XULITHONGTINHINHANH();
	PushBaiViet1();
	XULITINHIEU();
});

var WebsiteName ="Đam mê Hàng Không";
var SLOGAN = "Chấp cánh giấc mơ bay";
var TieuDeChuyenMuc ="Chuyên mục: Video Hàng Không";
var HotPic1_address = "../Picture/IMG_0746.jpg";
var HotPic2_address = "../Picture/IMG_3803.jpg";
var HotPic3_address = "../Picture/IMG_2345.jpg";
var HotPic4_address = "../Picture/IMG_7515.jpg";
var AdvertisingPic  = "../Picture/AdvertiseHomePage.jpg";

var sourcevideo1 = "../Video/Bài Hát Bamboo Airways.mp4";
var sourcevideo2 = "../Video/Bài Hát Bay Việt.mp4";
var sourcevideo3 = "";
var sourcevideo4 = "";
var sourcevideo5 = "";
var sourcevideo6 = "";
var sourcevideo7 = "";
var sourcevideo8 = "";
var sourcevideo9 = "";
var sourcevideo10 = "";
var sourcevideo11 = "";
var sourcevideo12 = "";

var sourcevideo13 = "";
var sourcevideo14 = "";
var sourcevideo15 = "";
var sourcevideo16 = "";
var sourcevideo17 = "";
var sourcevideo18 = "";
var sourcevideo19 = "";
var sourcevideo20 = "";
var sourcevideo21 = "";
var sourcevideo22 = "";
var sourcevideo23 = "";
var sourcevideo24 = "";

var sourcevideo25 = "";
var sourcevideo26 = "";
var sourcevideo27 = "";
var sourcevideo28 = "";
var sourcevideo29 = "";
var sourcevideo30 = "";
var sourcevideo31 = "";
var sourcevideo32 = "";
var sourcevideo33 = "";
var sourcevideo34 = "";
var sourcevideo35 = "";
var sourcevideo36 = "";

var sourcevideo37 = "";
var sourcevideo38 = "";
var sourcevideo39 = "";
var sourcevideo40 = "";
var sourcevideo41 = "";
var sourcevideo42 = "";
var sourcevideo43 = "";
var sourcevideo44 = "";
var sourcevideo45 = "";
var sourcevideo46 = "";
var sourcevideo47 = "";
var sourcevideo48 = "";


var VideoInfo1 ="Bài hát của Bamboo Airways";
var VideoInfo2 ="Bài hát Chấp cánh ước mơ bay";
var VideoInfo3 ="Thông Tin Video";
var VideoInfo4 ="Thông Tin Video";
var VideoInfo5 ="Thông Tin Video";
var VideoInfo6 ="Thông Tin Video";
var VideoInfo7 ="Thông Tin Video";
var VideoInfo8 ="Thông Tin Video";
var VideoInfo9 ="Thông Tin Video";
var VideoInfo10 ="Thông Tin Video";
var VideoInfo11 ="Thông Tin Video";
var VideoInfo12 ="Thông Tin Video";

var VideoInfo13 ="Thông Tin Video";
var VideoInfo14 ="Thông Tin Video";
var VideoInfo15 ="Thông Tin Video";
var VideoInfo16 ="Thông Tin Video";
var VideoInfo17 ="Thông Tin Video";
var VideoInfo18 ="Thông Tin Video";
var VideoInfo19 ="Thông Tin Video";
var VideoInfo20 ="Thông Tin Video";
var VideoInfo21 ="Thông Tin Video";
var VideoInfo22 ="Thông Tin Video";
var VideoInfo23 ="Thông Tin Video";
var VideoInfo24 ="Thông Tin Video";

var VideoInfo25 ="Thông Tin Video";
var VideoInfo26 ="Thông Tin Video";
var VideoInfo27 ="Thông Tin Video";
var VideoInfo28 ="Thông Tin Video";
var VideoInfo29 ="Thông Tin Video";
var VideoInfo30 ="Thông Tin Video";
var VideoInfo31 ="Thông Tin Video";
var VideoInfo32 ="Thông Tin Video";
var VideoInfo33 ="Thông Tin Video";
var VideoInfo34 ="Thông Tin Video";
var VideoInfo35 ="Thông Tin Video";
var VideoInfo36 ="Thông Tin Video";

var VideoInfo37 ="Thông Tin Video";
var VideoInfo38 ="Thông Tin Video";
var VideoInfo39 ="Thông Tin Video";
var VideoInfo40 ="Thông Tin Video";
var VideoInfo41 ="Thông Tin Video";
var VideoInfo42 ="Thông Tin Video";
var VideoInfo43 ="Thông Tin Video";
var VideoInfo44 ="Thông Tin Video";
var VideoInfo45 ="Thông Tin Video";
var VideoInfo46 ="Thông Tin Video";
var VideoInfo47 ="Thông Tin Video";
var VideoInfo48 ="Thông Tin Video";

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
}

function XULITINHIEU()
{
	var Event1 = document.getElementById('Button1');
	Event1.onclick = PushBaiViet1;
	var Event2 = document.getElementById('Button2');
	Event2.onclick = PushBaiViet2;
	var Event3 = document.getElementById('Button3');
	Event3.onclick = PushBaiViet3;
	var Event4 = document.getElementById('Button4');
	Event4.onclick =PushBaiViet4;
}

function PushBaiViet1()
{
	document.getElementById('VHK1').src=sourcevideo1;
	document.getElementById('VHK2').src=sourcevideo2;
	document.getElementById('VHK3').src=sourcevideo3;
	document.getElementById('VHK4').src=sourcevideo4;
	document.getElementById('VHK5').src=sourcevideo5;
	document.getElementById('VHK6').src=sourcevideo6;
	document.getElementById('VHK7').src=sourcevideo7;
	document.getElementById('VHK8').src=sourcevideo8;
	document.getElementById('VHK9').src=sourcevideo9;
	document.getElementById('VHK10').src=sourcevideo10;
	document.getElementById('VHK10').src=sourcevideo11;
	document.getElementById('VHK11').src=sourcevideo12;
	document.getElementById('VideoInfo1').innerHTML = VideoInfo1;
	document.getElementById('VideoInfo2').innerHTML = VideoInfo2;
	document.getElementById('VideoInfo3').innerHTML = VideoInfo3;
	document.getElementById('VideoInfo4').innerHTML = VideoInfo4;
	document.getElementById('VideoInfo5').innerHTML = VideoInfo5;
	document.getElementById('VideoInfo6').innerHTML = VideoInfo6;
	document.getElementById('VideoInfo7').innerHTML = VideoInfo7;
	document.getElementById('VideoInfo8').innerHTML = VideoInfo8;
	document.getElementById('VideoInfo9').innerHTML = VideoInfo9;
	document.getElementById('VideoInfo10').innerHTML = VideoInfo10;
	document.getElementById('VideoInfo11').innerHTML = VideoInfo11;
	document.getElementById('VideoInfo12').innerHTML = VideoInfo12;
	document.getElementById('Button1').style.backgroundColor='white';
	document.getElementById('Button1').style.color='black';
	document.getElementById('Button2').style.backgroundColor='black';
	document.getElementById('Button2').style.color='white';
	document.getElementById('Button3').style.backgroundColor='black';
	document.getElementById('Button3').style.color='white';
	document.getElementById('Button4').style.backgroundColor='black';
	document.getElementById('Button4').style.color='white';
}

function PushBaiViet2()
{
	document.getElementById('VHK1').src=sourcevideo13;
	document.getElementById('VHK2').src=sourcevideo14;
	document.getElementById('VHK3').src=sourcevideo15;
	document.getElementById('VHK4').src=sourcevideo16;
	document.getElementById('VHK5').src=sourcevideo17;
	document.getElementById('VHK6').src=sourcevideo18;
	document.getElementById('VHK7').src=sourcevideo19;
	document.getElementById('VHK8').src=sourcevideo20;
	document.getElementById('VHK9').src=sourcevideo21;
	document.getElementById('VHK10').src=sourcevideo22;
	document.getElementById('VHK11').src=sourcevideo23;
	document.getElementById('VHK11').src=sourcevideo24;
	document.getElementById('VideoInfo1').innerHTML = VideoInfo13;
	document.getElementById('VideoInfo2').innerHTML = VideoInfo14;
	document.getElementById('VideoInfo3').innerHTML = VideoInfo15;
	document.getElementById('VideoInfo4').innerHTML = VideoInfo16;
	document.getElementById('VideoInfo5').innerHTML = VideoInfo17;
	document.getElementById('VideoInfo6').innerHTML = VideoInfo18;
	document.getElementById('VideoInfo7').innerHTML = VideoInfo19;
	document.getElementById('VideoInfo8').innerHTML = VideoInfo20;
	document.getElementById('VideoInfo9').innerHTML = VideoInfo21;
	document.getElementById('VideoInfo10').innerHTML = VideoInfo22;
	document.getElementById('VideoInfo11').innerHTML = VideoInfo23;
	document.getElementById('VideoInfo12').innerHTML = VideoInfo24;
	document.getElementById('Button1').style.backgroundColor='black';
	document.getElementById('Button1').style.color='white';
	document.getElementById('Button2').style.backgroundColor='white';
	document.getElementById('Button2').style.color='black';
	document.getElementById('Button3').style.backgroundColor='black';
	document.getElementById('Button3').style.color='white';
	document.getElementById('Button4').style.backgroundColor='black';
	document.getElementById('Button4').style.color='white';
}

function PushBaiViet3()
{
	document.getElementById('VHK1').src=sourcevideo25;
	document.getElementById('VHK2').src=sourcevideo26;
	document.getElementById('VHK3').src=sourcevideo27;
	document.getElementById('VHK4').src=sourcevideo28;
	document.getElementById('VHK5').src=sourcevideo29;
	document.getElementById('VHK6').src=sourcevideo30;
	document.getElementById('VHK7').src=sourcevideo31;
	document.getElementById('VHK8').src=sourcevideo32;
	document.getElementById('VHK9').src=sourcevideo33;
	document.getElementById('VHK10').src=sourcevideo34;
	document.getElementById('VHK11').src=sourcevideo35;
	document.getElementById('VHK11').src=sourcevideo36;
	document.getElementById('VideoInfo1').innerHTML = VideoInfo25;
	document.getElementById('VideoInfo2').innerHTML = VideoInfo26;
	document.getElementById('VideoInfo3').innerHTML = VideoInfo27;
	document.getElementById('VideoInfo4').innerHTML = VideoInfo28;
	document.getElementById('VideoInfo5').innerHTML = VideoInfo29;
	document.getElementById('VideoInfo6').innerHTML = VideoInfo30;
	document.getElementById('VideoInfo7').innerHTML = VideoInfo31;
	document.getElementById('VideoInfo8').innerHTML = VideoInfo32;
	document.getElementById('VideoInfo9').innerHTML = VideoInfo33;
	document.getElementById('VideoInfo10').innerHTML = VideoInfo34;
	document.getElementById('VideoInfo11').innerHTML = VideoInfo35;
	document.getElementById('VideoInfo12').innerHTML = VideoInfo36;
	document.getElementById('Button1').style.backgroundColor='black';
	document.getElementById('Button1').style.color='white';
	document.getElementById('Button2').style.backgroundColor='black';
	document.getElementById('Button2').style.color='white';
	document.getElementById('Button3').style.backgroundColor='white';
	document.getElementById('Button3').style.color='black';
	document.getElementById('Button4').style.backgroundColor='black';
	document.getElementById('Button4').style.color='white';
}

function PushBaiViet4()
{
	document.getElementById('VHK1').src=sourcevideo37;
	document.getElementById('VHK2').src=sourcevideo38;
	document.getElementById('VHK3').src=sourcevideo39;
	document.getElementById('VHK4').src=sourcevideo40;
	document.getElementById('VHK5').src=sourcevideo41;
	document.getElementById('VHK6').src=sourcevideo42;
	document.getElementById('VHK7').src=sourcevideo43;
	document.getElementById('VHK8').src=sourcevideo44;
	document.getElementById('VHK9').src=sourcevideo45;
	document.getElementById('VHK10').src=sourcevideo46;
	document.getElementById('VHK11').src=sourcevideo47;
	document.getElementById('VHK11').src=sourcevideo48;
	document.getElementById('VideoInfo1').innerHTML = VideoInfo37;
	document.getElementById('VideoInfo2').innerHTML = VideoInfo38;
	document.getElementById('VideoInfo3').innerHTML = VideoInfo39;
	document.getElementById('VideoInfo4').innerHTML = VideoInfo40
	document.getElementById('VideoInfo5').innerHTML = VideoInfo41;
	document.getElementById('VideoInfo6').innerHTML = VideoInfo42;
	document.getElementById('VideoInfo7').innerHTML = VideoInfo43;
	document.getElementById('VideoInfo8').innerHTML = VideoInfo44;
	document.getElementById('VideoInfo9').innerHTML = VideoInfo45;
	document.getElementById('VideoInfo10').innerHTML = VideoInfo46;
	document.getElementById('VideoInfo11').innerHTML = VideoInfo47;
	document.getElementById('VideoInfo12').innerHTML = VideoInfo48;
	document.getElementById('Button1').style.backgroundColor='black';
	document.getElementById('Button1').style.color='white';
	document.getElementById('Button2').style.backgroundColor='black';
	document.getElementById('Button2').style.color='white';
	document.getElementById('Button3').style.backgroundColor='black';
	document.getElementById('Button3').style.color='white';
	document.getElementById('Button4').style.backgroundColor='white';
	document.getElementById('Button4').style.color='black';
}