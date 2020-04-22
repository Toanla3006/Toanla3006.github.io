// JavaScript Document
$(document).ready(function(){
	XULITHONGTINTHEMES();
	XULITHONGTINHINHANH();
});

var WebsiteName ="Đam mê Hàng Không";
var SLOGAN = "Chấp cánh giấc mơ bay";
var TM9_1 = "[M9] #201: Bay hạng NHẤT của United Airlines | Lái máy bay đi ngắm cảnh Seattle | Yêu Máy Bay";
var TM9_2 = "[M9] #200: Một chuyến bay nhiều tâm sự | Hạng thương gia Bamboo Airways | Yêu Máy Bay";
var TM9_3 = "[M9] #199: Lạ lẫm chuyến bay Vietjet Thailand từ Đà Lạt đi Bangkok | Yêu Máy Bay";
var DL_1 = "CÂNÊ #12: Khách sạn quá cảnh gần sân bay Nội Bài | Xe đưa ra sân bay miễn phí | Yêu Máy Bay";
var DL_2 = "CÂNÊ #11: Phòng 3 giường đơn rộng rãi ở Vũng Tàu Riva Hotel | Yêu Máy Bay";
var DL_3 = "CÂNÊ #10: Resort ở Phú Quốc phòng view biển và ngắm hoàng hôn tuyệt đẹp | Yêu Máy Bay";
var VL_1 = "VLOG #250: Tại sao sân bay Changi đóng cửa nhà ga T2? Lịch sử nhà ga 30 năm tuổi | Yêu Máy Bay";
var VL_2 = "VLOG #249: Tên các sân bay Hàn Quốc | Tại sao là Incheon, Gimpo? | Tập 2 | Yêu Máy Bay";
var VL_3 = "VLOG #248: Những cái tên sân bay thú vị (tập 1) | Suvarnabhumi nghĩa là gì? | Yêu Máy Bay";



var HotPic1_address = "../Picture/IMG_0746.jpg";
var HotPic2_address = "../Picture/IMG_3803.jpg";
var HotPic3_address = "../Picture/IMG_2345.jpg";
var HotPic4_address = "../Picture/IMG_7515.jpg";
var AdvertisingPic  = "../Picture/AdvertiseHomePage.jpg";
var LogoYMB_address ="../Picture/LogoYeuMayBay.jpg";
function XULITHONGTINTHEMES()
{
	document.getElementById('WebsiteName').innerHTML=WebsiteName;
	document.getElementById('Slogan').innerHTML=SLOGAN;
	document.getElementById('VInfo1').innerHTML=TM9_1;
	document.getElementById('VInfo2').innerHTML=TM9_2;
	document.getElementById('VInfo3').innerHTML=TM9_3;
	document.getElementById('VInfo5').innerHTML=DL_1;
	document.getElementById('VInfo6').innerHTML=DL_2;
	document.getElementById('VInfo7').innerHTML=DL_3;
	document.getElementById('VInfo9').innerHTML=VL_1;
	document.getElementById('VInfo10').innerHTML=VL_2;
	document.getElementById('VInfo11').innerHTML=VL_3;
}

function XULITHONGTINHINHANH()
{
	$('#HotPic1').attr("src",HotPic1_address);
	$('#HotPic2').attr("src",HotPic2_address);
	$('#HotPic3').attr("src",HotPic3_address);
	$('#HotPic4').attr("src",HotPic4_address);
	$('#PC1').attr("src",LogoYMB_address);
	$('#AdvertisingPic').attr("src",AdvertisingPic);
}