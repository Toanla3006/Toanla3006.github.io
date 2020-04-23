// JavaScript Document
$(document).ready(function(){
	XULITHONGTINTHEMES();
	XULITHONGTINHINHANH();
	PushThongTinBaiViet1();
	PushThongTinBaiViet5();
	PushThongTinBaiViet9();
	XuLiTinHieu();
});
var Advertise ="../Picture/AdvertiseHomePage.jpg";
var ImageArea_Address = "../Picture/IMG_8815.jpg";
var Pic1_address = "../Picture/IMG_8815.jpg";
var Pic2_address = "../Picture/IMG_8441.jpg";
var Pic3_address = "../Picture/IMG_6873.jpg";
var Pic4_address = "../Picture/IMG_8804.jpg";
var Pic5_address = "../Picture/IMG_8940.jpg";
var AnhBaiViet1_address ="../Picture/IMG_0513.jpg";
var AnhBaiViet2_address ="../Picture/IMG_1432.jpg";
var AnhBaiViet3_address ="../Picture/IMG_9270.jpg";
var AnhBaiViet4_address ="../Picture/IMG_2354.jpg";
var AnhBaiVietDuLich1_address="../Picture/IMG_0750.jpg";
var AnhBaiVietDuLich2_address="../Picture/UBNDTP.jpg";
var AnhBaiVietDuLich3_address="../Picture/HoGuom.jpg";
var AnhBaiVietDuLich4_address="../Picture/SingaporeMerlion.jpg";
var HotPic1_address = "../Picture/IMG_9412.jpg";
var HotPic2_address = "../Picture/IMG_4986.jpg";
var HotPic3_address = "../Picture/IMG_4909.jpg";
var HotPic4_address = "../Picture/IMG_4857.jpg";
var HotPic5_address = "../Picture/IMG_4748.jpg";
var HotPic6_address = "../Picture/IMG_5132.jpg";
var HotPic7_address = "../Picture/IMG_3457.jpg";
var HotPic8_address = "../Picture/IMG_3803.jpg";
var HotPic9_address = "../Picture/IMG_8217.jpg";
var HotPic10_address = "../Picture/IMG_8340.jpg";
var HotPic11_address = "../Picture/IMG_8362.jpg";
var HotPic12_address = "../Picture/IMG_8815.jpg";
var HotPic13_address = "../Picture/IMG_0648.jpg";
var HotPic14_address = "../Picture/IMG_1554.jpg";
var HotPic15_address = "../Picture/IMG_1409.jpg";
var HotPic16_address = "../Picture/IMG_0818.jpg";
var HotPic17_address = "../Picture/IMG_0674.jpg";
var HotPic18_address = "../Picture/IMG_1470.jpg";
var HotPic19_address = "../Picture/IMG_5015.jpg";
var HotPic20_address = "../Picture/IMG_6935.jpg";
var HotPic21_address = "../Picture/IMG_6967.jpg";
var HotPic22_address = "../Picture/IMG_6983.jpg";
var HotPic23_address = "../Picture/IMG_7515.jpg";
var HotPic24_address = "../Picture/IMG_7447.jpg";



var WebsiteName ="Đam mê Hàng Không";
var SLOGAN = "Chấp cánh giấc mơ bay";
var TieuDeBaiViet1 = "Giá cước vận tải hàng không tăng vọt trong dịch bệnh";
var BaiViet1 = "Chi phí vận chuyển đường hàng không tăng mạnh trong dịch Covid-19 do các biện pháp hạn chế đi lại.";
var TieuDeBaiViet2 ="Vietnam Airlines đề xuất mua thêm 50 tàu bay";
var BaiViet2 ="Ông Dương Trí Thành, Tổng giám đốc Vietnam Airlines mong muốn sớm được phê duyệt đề án mua thêm 50 máy bay để đầu tư đón đầu xu thế hậu dịch Covid-19.";
var TieuDeBaiViet3 ="Từ 16/4: Bamboo Airways, Vietnam Airlines đồng loạt bay trở lại";
var BaiViet3 ="Các hàng không trong nước đã công bố bay trở lại từ 16/4 và cập nhật thông tin vé, lịch trình bay mới trên website. Các hãng đều tăng tần suất bay và áp dụng nhiều biện pháp đảm bảo sức khỏe cho hành khách.";
var TieuDeBaiViet4 ="Hàng Không tăng cường vận tải hàng hóa";
var BaiViet4 ="TTO - Sau khi giảm các đường bay, tạm dừng vận chuyển hành khách, các hãng hàng không đã chuyển sang chở hàng hóa nhằm có doanh thu duy trì hoạt động trong bối cảnh ngành hàng không bị thiệt hại nặng do dịch bệnh.";

var LinkBaiViet1 = "https://thitruong.nld.com.vn/thi-truong/gia-cuoc-van-tai-hang-khong-tang-vot-trong-dich-benh-20200327102222714.htm";
var LinkBaiViet2 = "https://zingnews.vn/giua-dich-covid-19-vietnam-airlines-xin-day-nhanh-mua-them-50-may-bay-post1073768.html";
var LinkBaiViet3 = "https://vietnamnet.vn/vn/kinh-doanh/thi-truong/tu-16-4-bamboo-airways-vietjet-vietnam-airlines-dong-loat-bay-tro-lai-632744.html";
var LinkBaiViet4 = "https://tuoitre.vn/ngung-cho-khach-hang-khong-tang-van-chuyen-hang-hoa-20200404092104565.htm";


var TieuDeBaiVietDuLich1 = "Xứ Huế: Điểm đến lý tưởng cho mùa du lịch của bạn";
var BaiVietDuLich1 = "Huế như cô gái đằm thắm, kiêu kỳ, khiến ai cũng đều đắm say khi ở lại và ngẩn ngơ thương nhớ mỗi khi ra về.Trong đôi mắt của người yêu cái đẹp, Huế hiện lên thật tình với chiếc nón bài thơ, bóng dáng thấp thoáng thướt tha những tà áo dài, sông Hương hiền hòa một chiều gió lộng, những câu hát gợi nhớ thương.";
var TieuDeBaiVietDuLich2 = "CẨM NANG DU LỊCH SÀI GÒN";
var BaiVietDuLich2 = "So với Hà Nội nghìn năm văn hiến thì Sài Gòn vài trăm tuổi là một thành phố trẻ, nhưng lại chiếm ngôi đầu về nhịp sống sôi động, hiện đại. Thành phố với đủ các hoạt động ăn – chơi sôi nổi nhất này luôn thu hút du khách đến tham quan và trải nghiệm. Nếu bạn đang có ý định ghé thăm Sài Gòn phồn hoa thì cẩm nang du lịch Sài Gòn từ A-Z dưới đây sẽ cho bạn chuyến chu du thả ga!";
var TieuDeBaiVietDuLich3 = "15 địa điểm vui chơi không thể bỏ qua ở Hà Thành";
var BaiVietDuLich3 = "Không chỉ là thủ đô ngàn năm văn hiến với nhiều di tích lịch sử giá trị, Hà Nội còn có rất nhiều địa điểm vui chơi giải trí hấp dẫn. Giờ hãy cùng Vntrip.vn điểm danh 14 địa điểm vui chơi ở Hà Nội thú vị và lý tưởng nhất để lên lịch trình khám phá cùng gia đình và bạn bè ngay nhé! ";
var TieuDeBaiVietDuLich4 = "Cẩm nang du lịch quốc đảo Singapore";
var BaiVietDuLich4 = "Singapore luôn là điểm đến khá thường xuyên với một số bạn ưa thích du lịch. Bởi đây là đất nước có ngành du lịch khá phát triển có qui mô, hiện đại, đáp ứng được nhiều sở thích của giới trẻ. Từ một mảnh đất nhỏ bé, không nhiều tài nguyên, nhưng đất nước Singapore đã biết biến những điều không thể thành có thể.";
var LinkBaiVietDL1 = "https://zingnews.vn/mytour-xu-hue-mong-mo-say-dam-mot-ngay-ca-doi-thuong-nho-post865726.html";
var LinkBaiVietDL2 = "https://blog.traveloka.com/vn/cam-nang-du-lich-sai-gon-tu-a-z/";
var LinkBaiVietDL3 = "https://www.vntrip.vn/cam-nang/dia-diem-vui-choi-o-ha-noi-11262";
var LinkBaiVietDL4 = "http://toidi.net/diem-den-nuoc-ngoai/cam-nang-du-lich-singapore.html";

var ThongTinAnh1 = "Qatar Airways <br> Boeing 777-300ER <br> Reg: A7-BAW <br> Tác giả: ";
var ThongTinAnh2 = "Singapore Airlines <br> Airbus 380-800 <br> Reg: 9V-SKY <br> Tác giả: ";
var ThongTinAnh3 = "AirAsia <br> Airbus 320-200 <br> Reg: 9M-AHT <br> Tác giả: ";
var ThongTinAnh4 = "LOT Polish Airlines <br> Boeing 787-8 <br> Reg: SP-LRD <br> Tác giả: ";
var ThongTinAnh5 = "Finnair <br> Airbus 350-900 <br> Reg: OH-LWG <br> Tác giả: ";
var ThongTinAnh6 = "Qantas <br> Airbus 380-800 <br> Reg: VH-OQJ <br> Tác giả: ";
var ThongTinAnh7 = "Vietjet Air <br> Airbus A321-200 <br> Reg: VN-A657 <br> Tác giả: ";
var ThongTinAnh8 = "Jetstar Pacific <br> Airbus A320-200 <br> Reg: VN-A573 <br> Tác giả: ";
var ThongTinAnh9 = "Vietjet Air <br> Airbus A321-200 <br> Reg: VN-A541 <br> Tác giả: ";
var ThongTinAnh10 = "AirAsia <br> Airbus 320-200 <br> Reg: 9M-AJN <br> Tác giả: ";
var ThongTinAnh11 = "Cambodia Angkor Air <br> Airbus 320-200 <br> Reg: XU-353 <br> Tác giả: ";
var ThongTinAnh12 = "Bamboo Airways <br> Boeing 787-9  <br> Reg: VN-A829 <br> Tác giả: ";
var ThongTinAnh13 = "Bamboo Airways <br> Boeing 787-9  <br> Reg: VN-A819 <br> Tác giả: ";
var ThongTinAnh14 = "Vietjet Air <br> Airbus A321-200 <br> Reg: VN-A693 <br> Tác giả: ";
var ThongTinAnh15 = "SilkAir <br> Boeing 737-800 <br> Reg: 9V-MGF <br> Tác giả: ";
var ThongTinAnh16 = "Bamboo Airways <br> Airbus 320-200 <br> Reg: TC-FBO <br> Tác giả: ";
var ThongTinAnh17 = "China Airlines <br> Boeing 747-400F <br> Reg: B-18722 <br> Tác giả: ";
var ThongTinAnh18 = "Jetstar Pacific <br> Airbus 320-200 <br> Reg: VN-A567 <br> Tác giả: ";
var ThongTinAnh19 = "Air India <br> Airbus 320Neo <br> Reg: VT-CIQ <br> Tác giả: ";
var ThongTinAnh20 = "YTO Airlines <br> Boeing 737-300F <br> Reg: B-2608 <br> Tác giả: ";
var ThongTinAnh21 = "Vietjet Air <br> Airbus A321-200 <br> Reg: VN-A644 <br> Tác giả: ";
var ThongTinAnh22 = "Eva Air <br> Boeing 777-300ER <br> Reg: B-16722 <br> Tác giả: ";
var ThongTinAnh23 = "China Airlines <br> Airbus 330-300 <br> Reg: B-18316 <br> Tác giả: ";
var ThongTinAnh24 = "Bamboo Airways <br> Boeing 787-9  <br> Reg: VN-A829 <br> Tác giả: ";
function XULITHONGTINTHEMES()
{
	document.getElementById('WebsiteName').innerHTML=WebsiteName;
	document.getElementById('Slogan').innerHTML=SLOGAN;
}

function XULITHONGTINHINHANH(){
	$('#ImageArea').attr("src",ImageArea_Address);
	$('#Pic1').attr("src",Pic1_address);
	$('#Pic2').attr("src",Pic2_address);
	$('#Pic3').attr("src",Pic3_address);
	$('#Pic4').attr("src",Pic4_address);
	$('#Pic5').attr("src",Pic5_address);
	var NextButton = document.getElementById('NextBtn');
	NextButton.onclick = NextPicture;
	var PrevButton = document.getElementById('PrevBtn');
	PrevButton.onclick = PrevPicture;
	var Event1 = document.getElementById('Pic1');
	Event1.onmouseover = ChangePic1;
	var Event2 = document.getElementById('Pic2');
	Event2.onmouseover = ChangePic2;
	var Event3 = document.getElementById('Pic3');
	Event3.onmouseover = ChangePic3;
	var Event4 = document.getElementById('Pic4');
	Event4.onmouseover = ChangePic4;
	var Event5 = document.getElementById('Pic5');
	Event5.onmouseover = ChangePic5;
	$('#HotPicture1').attr("src",HotPic1_address);
	$('#HotPicture2').attr("src",HotPic2_address);
	$('#HotPicture3').attr("src",HotPic3_address);
	$('#HotPicture4').attr("src",HotPic4_address);
	$('#HotPicture5').attr("src",HotPic5_address);
	$('#HotPicture6').attr("src",HotPic6_address);
	$('#Ad_Pic').attr("src",Advertise);
}

var STT = 1;
function NextPicture()
{
	if(STT == 1)
		{
			$('#ImageArea').attr("src",Pic2_address);
			document.getElementById('SelectedPicture').style.top='115px';
			STT = 2;
		}
	else if (STT== 2)
		{
			$('#ImageArea').attr("src",Pic3_address);
			document.getElementById('SelectedPicture').style.top='215px';
			STT = 3;
		}
	else if (STT == 3)
		{
			$('#ImageArea').attr("src",Pic4_address);
			document.getElementById('SelectedPicture').style.top='315px';
			STT = 4;
		}
	else if(STT == 4)
		{
			$('#ImageArea').attr("src",Pic5_address);
			document.getElementById('SelectedPicture').style.top='415px';
			STT = 5;
		}
	else
		{
			$('#ImageArea').attr("src",Pic1_address);
			document.getElementById('SelectedPicture').style.top='15px';
			STT = 1;
		}
}

function PrevPicture()
{
	if(STT == 1)
		{
			$('#ImageArea').attr("src",Pic5_address);
			document.getElementById('SelectedPicture').style.top = '415px';
			STT = 5;
		}
	else if (STT == 5)
		{
			$('#ImageArea').attr("src",Pic4_address);
			document.getElementById('SelectedPicture').style.top = '315px';
			STT = 4;
		}
	else if (STT == 4)
		{
			$('#ImageArea').attr("src",Pic3_address);
			document.getElementById('SelectedPicture').style.top = '215px';
			STT = 3;
		}
	else if(STT == 3)
		{
			$('#ImageArea').attr("src",Pic2_address);
			document.getElementById('SelectedPicture').style.top = '115px';
			STT = 2;
		}
	else
		{
			$('#ImageArea').attr("src",Pic1_address);
			document.getElementById('SelectedPicture').style.top = '15px';
			STT = 1;
		}
}

function ChangePic1(){
	$('#ImageArea').attr("src",Pic1_address);
	document.getElementById('SelectedPicture').style.top = '15px';
	STT = 1;
}
function ChangePic2(){
	$('#ImageArea').attr("src",Pic2_address);
	document.getElementById('SelectedPicture').style.top = '115px';
	STT = 2;
}
function ChangePic3(){
	$('#ImageArea').attr("src",Pic3_address);
	document.getElementById('SelectedPicture').style.top = '215px';
	STT = 3;
}
function ChangePic4(){
	$('#ImageArea').attr("src",Pic4_address);
	document.getElementById('SelectedPicture').style.top = '315px';
	STT = 4;
}
function ChangePic5(){
	$('#ImageArea').attr("src",Pic5_address);
	document.getElementById('SelectedPicture').style.top = '415px';
	STT = 5;
}

function XuLiTinHieu()
{
	var CHOICE1 = document.getElementById('BaiVietABtn1');
	CHOICE1.onclick=PushThongTinBaiViet1;
	var CHOICE2 = document.getElementById('BaiVietABtn2');
	CHOICE2.onclick=PushThongTinBaiViet2;
	var CHOICE3 = document.getElementById('BaiVietABtn3');
	CHOICE3.onclick=PushThongTinBaiViet3;
	var CHOICE4 = document.getElementById('BaiVietABtn4');
	CHOICE4.onclick=PushThongTinBaiViet4;
	
	var CHOICE5 = document.getElementById('BaiVietBBtn1');
	CHOICE5.onclick=PushThongTinBaiViet5;
	var CHOICE6 = document.getElementById('BaiVietBBtn2');
	CHOICE6.onclick=PushThongTinBaiViet6;
	var CHOICE7 = document.getElementById('BaiVietBBtn3');
	CHOICE7.onclick=PushThongTinBaiViet7;
	var CHOICE8 = document.getElementById('BaiVietBBtn4');
	CHOICE8.onclick=PushThongTinBaiViet8;
	
	var CHOICE9 = document.getElementById('BaiVietCBtn1');
	CHOICE9.onclick=PushThongTinBaiViet9;
	var CHOICE10 = document.getElementById('BaiVietCBtn2');
	CHOICE10.onclick=PushThongTinBaiViet10;
	var CHOICE11 = document.getElementById('BaiVietCBtn3');
	CHOICE11.onclick=PushThongTinBaiViet11;
	var CHOICE12 = document.getElementById('BaiVietCBtn4');
	CHOICE12.onclick=PushThongTinBaiViet12;
	
	
	var Event1 = document.getElementById('AirNews');
	Event1.onclick = ChuyenLayer1;
	var Event2 = document.getElementById('TravelNews');
	Event2.onclick = ChuyenLayer2;
	var Event3 = document.getElementById('PictureNews');
	Event3.onclick = ChuyenLayer3;
}

function PushThongTinBaiViet1(){
	$('#AnhBaiViet1').attr("src",AnhBaiViet1_address);
	document.getElementById('TieuDe1').innerHTML=TieuDeBaiViet1;
	document.getElementById('NoiDung1').innerHTML=BaiViet1;
	document.getElementById('link1').href= LinkBaiViet1;
	document.getElementById('BaiVietABtn1').style.opacity='100%';
	document.getElementById('BaiVietABtn2').style.opacity='50%';
	document.getElementById('BaiVietABtn3').style.opacity='50%';
	document.getElementById('BaiVietABtn4').style.opacity='50%';
}

function PushThongTinBaiViet2(){
	$('#AnhBaiViet1').attr("src",AnhBaiViet2_address);
	document.getElementById('TieuDe1').innerHTML=TieuDeBaiViet2;
	document.getElementById('NoiDung1').innerHTML=BaiViet2;
	document.getElementById('link1').href= LinkBaiViet2;
	document.getElementById('BaiVietABtn1').style.opacity='50%';
	document.getElementById('BaiVietABtn2').style.opacity='100%';
	document.getElementById('BaiVietABtn3').style.opacity='50%';
	document.getElementById('BaiVietABtn4').style.opacity='50%';
}

function PushThongTinBaiViet3(){
	$('#AnhBaiViet1').attr("src",AnhBaiViet3_address);
	document.getElementById('TieuDe1').innerHTML=TieuDeBaiViet3;
	document.getElementById('NoiDung1').innerHTML=BaiViet3;
	document.getElementById('link1').href= LinkBaiViet3;
	document.getElementById('BaiVietABtn1').style.opacity='50%';
	document.getElementById('BaiVietABtn2').style.opacity='50%';
	document.getElementById('BaiVietABtn3').style.opacity='100%';
	document.getElementById('BaiVietABtn4').style.opacity='50%';
}

function PushThongTinBaiViet4(){
	$('#AnhBaiViet1').attr("src",AnhBaiViet4_address);
	document.getElementById('TieuDe1').innerHTML=TieuDeBaiViet4;
	document.getElementById('NoiDung1').innerHTML=BaiViet4;
	document.getElementById('link1').href= LinkBaiViet4;
	document.getElementById('BaiVietABtn1').style.opacity='50%';
	document.getElementById('BaiVietABtn2').style.opacity='50%';
	document.getElementById('BaiVietABtn3').style.opacity='50%';
	document.getElementById('BaiVietABtn4').style.opacity='100%';
}

function PushThongTinBaiViet5(){
	$('#AnhBaiViet2').attr("src",AnhBaiVietDuLich1_address);
	document.getElementById('TieuDe2').innerHTML=TieuDeBaiVietDuLich1;
	document.getElementById('NoiDung2').innerHTML=BaiVietDuLich1;
	document.getElementById('link2').href= LinkBaiVietDL1;
	document.getElementById('BaiVietBBtn1').style.opacity='100%';
	document.getElementById('BaiVietBBtn2').style.opacity='50%';
	document.getElementById('BaiVietBBtn3').style.opacity='50%';
	document.getElementById('BaiVietBBtn4').style.opacity='50%';
}

function PushThongTinBaiViet6(){
	$('#AnhBaiViet2').attr("src",AnhBaiVietDuLich2_address);
	document.getElementById('TieuDe2').innerHTML=TieuDeBaiVietDuLich2;
	document.getElementById('NoiDung2').innerHTML=BaiVietDuLich2;
		document.getElementById('link2').href= LinkBaiVietDL2;
	document.getElementById('BaiVietBBtn1').style.opacity='50%';
	document.getElementById('BaiVietBBtn2').style.opacity='100%';
	document.getElementById('BaiVietBBtn3').style.opacity='50%';
	document.getElementById('BaiVietBBtn4').style.opacity='50%';
}

function PushThongTinBaiViet7(){
	$('#AnhBaiViet2').attr("src",AnhBaiVietDuLich3_address);
	document.getElementById('TieuDe2').innerHTML=TieuDeBaiVietDuLich3;
	document.getElementById('NoiDung2').innerHTML=BaiVietDuLich3;
		document.getElementById('link2').href= LinkBaiVietDL3;
	document.getElementById('BaiVietBBtn1').style.opacity='50%';
	document.getElementById('BaiVietBBtn2').style.opacity='50%';
	document.getElementById('BaiVietBBtn3').style.opacity='100%';
	document.getElementById('BaiVietBBtn4').style.opacity='50%';
}

function PushThongTinBaiViet8(){
	$('#AnhBaiViet2').attr("src",AnhBaiVietDuLich4_address);
	document.getElementById('TieuDe2').innerHTML=TieuDeBaiVietDuLich4;
	document.getElementById('NoiDung2').innerHTML=BaiVietDuLich4;
	document.getElementById('link2').href= LinkBaiVietDL4;
	document.getElementById('BaiVietBBtn1').style.opacity='50%';
	document.getElementById('BaiVietBBtn2').style.opacity='50%';
	document.getElementById('BaiVietBBtn3').style.opacity='50%';
	document.getElementById('BaiVietBBtn4').style.opacity='100%';
}

function PushThongTinBaiViet9(){
	$('#HotPicture1').attr("src",HotPic1_address);
	$('#HotPicture2').attr("src",HotPic2_address);
	$('#HotPicture3').attr("src",HotPic3_address);
	$('#HotPicture4').attr("src",HotPic4_address);
	$('#HotPicture5').attr("src",HotPic5_address);
	$('#HotPicture6').attr("src",HotPic6_address);
	document.getElementById('PictureInfo1').innerHTML=ThongTinAnh1;
	document.getElementById('PictureInfo2').innerHTML=ThongTinAnh2;
	document.getElementById('PictureInfo3').innerHTML=ThongTinAnh3;
	document.getElementById('PictureInfo4').innerHTML=ThongTinAnh4;
	document.getElementById('PictureInfo5').innerHTML=ThongTinAnh5;
	document.getElementById('PictureInfo6').innerHTML=ThongTinAnh6;
	document.getElementById('BaiVietCBtn1').style.opacity='100%';
	document.getElementById('BaiVietCBtn2').style.opacity='50%';
	document.getElementById('BaiVietCBtn3').style.opacity='50%';
	document.getElementById('BaiVietCBtn4').style.opacity='50%';
}

function PushThongTinBaiViet10(){
	$('#HotPicture1').attr("src",HotPic7_address);
	$('#HotPicture2').attr("src",HotPic8_address);
	$('#HotPicture3').attr("src",HotPic9_address);
	$('#HotPicture4').attr("src",HotPic10_address);
	$('#HotPicture5').attr("src",HotPic11_address);
	$('#HotPicture6').attr("src",HotPic12_address);
	document.getElementById('PictureInfo1').innerHTML=ThongTinAnh7;
	document.getElementById('PictureInfo2').innerHTML=ThongTinAnh8;
	document.getElementById('PictureInfo3').innerHTML=ThongTinAnh9;
	document.getElementById('PictureInfo4').innerHTML=ThongTinAnh10;
	document.getElementById('PictureInfo5').innerHTML=ThongTinAnh11;
	document.getElementById('PictureInfo6').innerHTML=ThongTinAnh12;
	document.getElementById('BaiVietCBtn1').style.opacity='50%';
	document.getElementById('BaiVietCBtn2').style.opacity='100%';
	document.getElementById('BaiVietCBtn3').style.opacity='50%';
	document.getElementById('BaiVietCBtn4').style.opacity='50%';
}

function PushThongTinBaiViet11(){
	$('#HotPicture1').attr("src",HotPic13_address);
	$('#HotPicture2').attr("src",HotPic14_address);
	$('#HotPicture3').attr("src",HotPic15_address);
	$('#HotPicture4').attr("src",HotPic16_address);
	$('#HotPicture5').attr("src",HotPic17_address);
	$('#HotPicture6').attr("src",HotPic18_address);
	document.getElementById('PictureInfo1').innerHTML=ThongTinAnh13;
	document.getElementById('PictureInfo2').innerHTML=ThongTinAnh14;
	document.getElementById('PictureInfo3').innerHTML=ThongTinAnh15;
	document.getElementById('PictureInfo4').innerHTML=ThongTinAnh16;
	document.getElementById('PictureInfo5').innerHTML=ThongTinAnh17;
	document.getElementById('PictureInfo6').innerHTML=ThongTinAnh18;
	document.getElementById('BaiVietCBtn1').style.opacity='50%';
	document.getElementById('BaiVietCBtn2').style.opacity='50%';
	document.getElementById('BaiVietCBtn3').style.opacity='100%';
	document.getElementById('BaiVietCBtn4').style.opacity='50%';
}
function PushThongTinBaiViet12(){
	$('#HotPicture1').attr("src",HotPic19_address);
	$('#HotPicture2').attr("src",HotPic20_address);
	$('#HotPicture3').attr("src",HotPic21_address);
	$('#HotPicture4').attr("src",HotPic22_address);
	$('#HotPicture5').attr("src",HotPic23_address);
	$('#HotPicture6').attr("src",HotPic24_address);
	document.getElementById('PictureInfo1').innerHTML=ThongTinAnh19;
	document.getElementById('PictureInfo2').innerHTML=ThongTinAnh20;
	document.getElementById('PictureInfo3').innerHTML=ThongTinAnh21;
	document.getElementById('PictureInfo4').innerHTML=ThongTinAnh22;
	document.getElementById('PictureInfo5').innerHTML=ThongTinAnh23;
	document.getElementById('PictureInfo6').innerHTML=ThongTinAnh24;
	document.getElementById('BaiVietCBtn1').style.opacity='50%';
	document.getElementById('BaiVietCBtn2').style.opacity='50%';
	document.getElementById('BaiVietCBtn3').style.opacity='50%';
	document.getElementById('BaiVietCBtn4').style.opacity='100%';
}



function ChuyenLayer1(){
	document.getElementById('AirNewContent').style.display='inherit';
	document.getElementById('TravelNewContent').style.display='none';
	document.getElementById('NewPictureContent').style.display='none';
}

function ChuyenLayer2(){
	document.getElementById('AirNewContent').style.display='none';
	document.getElementById('TravelNewContent').style.display='inherit';
	document.getElementById('NewPictureContent').style.display='none';
}

function ChuyenLayer3(){
	document.getElementById('AirNewContent').style.display='none';
	document.getElementById('TravelNewContent').style.display='none';
	document.getElementById('NewPictureContent').style.display='inherit';
}


