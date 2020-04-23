// JavaScript Document
$(document).ready(function(){
	XULITHONGTINTHEMES();
	XULITHONGTINHINHANH();
	PushBaiViet1();
	var SK1 = document.getElementById('LogoPic1');
	SK1.onclick = PushBaiViet1;
	var SK2 = document.getElementById('LogoPic2');
	SK2.onclick = PushBaiViet2;
	var SK3 = document.getElementById('LogoPic3');
	SK3.onclick = PushBaiViet3;
	var SK4 = document.getElementById('LogoPic4');
	SK4.onclick = PushBaiViet4;
});
var HotPic1_address = "../Picture/IMG_0746.jpg";
var HotPic2_address = "../Picture/IMG_3803.jpg";
var HotPic3_address = "../Picture/IMG_2345.jpg";
var HotPic4_address = "../Picture/IMG_7515.jpg";
var Advertise_address = "../Picture/AdvertiseHomePage.jpg";
var LogoPic1_address ="../Picture/LogoBamboo.png";
var LogoPic2_address ="../Picture/LogoJetstar.jpg";
var LogoPic3_address ="../Picture/LogoVietjet.jpg";
var LogoPic4_address ="../Picture/LogoVNA.png";
var HinhAnhBamboo = "../Picture/AnhDaiDienBamboo.jpg";
var HinhAnhJetstar = "../Picture/AnhDaiDienJetstar.jpg";
var HinhAnhVietjet = "../Picture/AnhDaiDienVietjet.jpg";
var HinhAnhVNA = "../Picture/AnhDaiDienVNA.jpg";


var WebsiteName ="Đam mê Hàng Không";
var SLOGAN = "Chấp cánh giấc mơ bay";
var TieuDeChuyenMuc = "Chuyên mục: Mạng lưới đường bay";
var TieuDeHHK1 = "Bamboo Airways - Hơn cả một chuyến bay";
var TieuDeHHK2 = "Jetstar Pacific - Giá rẻ mỗi ngày. Hài lòng khi bay";
var TieuDeHHK3 = "Vietjet Air - Bay là thích ngay";
var TieuDeHHK4 = "Vietnam Airlines - Sải cánh vươn cao";
var ThongTinMangBay1 = "Tự hào là hãng hàng không tiên phong tại Việt Nam hoạt động theo mô hình hybrid mang đến dịch vụ bay chất lượng cao với mức giá hợp lý, Bamboo Airways hiện đang khai thác 30 đường bay Nội địa và Quốc tế. <br>Với thị trường nội địa, Bamboo Airways tập trung khai thác những đường bay mới bên cạnh các trục chính như Hà Nội, Hồ Chí Minh, Đà Nẵng. Các tuyến bay nội địa hướng tới các địa điểm du lịch như Quảng Bình, Quảng Ninh, Hải Phòng, Thanh Hóa, Bình Định, Phú Quốc, Nha Trang,Vinh, Cần Thơ, Pleiku, Đà Lạt. <br> Với thị trường quốc tế, Bamboo Airways hiện đang khai thác các chuyến bay thẳng Đà Nẵng – Hàn Quốc; Nha Trang – Hàn Quốc; Hà Nội – Đài Loan. Trong năm 2020, Hãng sẽ tiếp tục mở rộng mạng lưới đường bay lên 37 – 40 đường, trong đó có các đường bay Quốc tế trực tiếp kết nối tới châu Á, châu Âu và châu Mỹ. Điều này sẽ giúp hành khách giảm các chuyến bay quá cảnh, tiết kiệm thời gian và chi phí.";
var ThongTinMangBay2 = "Với sứ mệnh nhằm phục vụ nhu cầu du lịch ngày càng tăng cao của mọi người, hiện tại mạng lưới đường bay của Jetstar Pacific ngày càng được mở rộng lên đến tổng số 39 đường bay thẳng tại thời điểm hiện tại, bao gồm cả nội địa và quốc tế, bao gồm những chặng sau: <br> + Nội địa: TPHCM - Hà Nội, TPHCM - Đà Nẵng, TPHCM - Nha Trang, TPHCM - Phú Quốc, TPHCM - Đà Lạt, TPHCM - Pleiku, TPHCM - Tuy Hòa, TPHCM - Qui Nhơn, TPHCM - Huế, TPHCM - Chu Lai, TPHCM - Đồng Hới, TPHCM - Hải Phòng, TPHCM - Thanh Hóa, TPHCM - Vinh, TPHCM - Buôn Mê Thuột, Hà Nội - Đà Nẵng, Hà Nội - Chu Lai, Hà Nội - Qui Nhơn, Hà Nội - Pleiku, Hà Nội - Buôn Mê Thuột, Hà Nội - Đà Lạt, Hà Nội - Nha Trang, Hà Nội - Phú Quốc, Buôn Mê Thuột - Chu Lai, Huế - Đà Lạt, Huế - Nha Trang, Buôn Mê Thuột - Hải Phòng, Buôn Mê Thuột - Vinh, Buôn Mê Thuột - Thanh Hóa, Vinh - Nha Trang. <br> + Quốc tế: TPHCM - Bangkok, TPHCM - Singapore, TPHCM - Quảng Châu, TPHCM - HongKong, Hà Nội -Bangkok, Hà Nội - HongKong, Hà Nội - Quảng Châu, Đà Nẵng - Đài Bắc, Đà Nẵng - HongKong.";
var ThongTinMangBay3 = "Vietjet là hãng bay giá rẻ được rất nhiều người lựa hiện nay, thị phần hàng nội địa của hãng bay này đã vượt Vietnam Airlines với hơn 40% trong khi tính đến thời điểm hiện tại đã có đến 4 hãng bay. Hệ thống mạng lưới đường bay của hãng luôn được mở rộng cả về nội địa và quốc tế. Tổng số đường bay là 74 gồm quốc nội lẫn quốc tế. Vậy hiện nay Vietjet Air có tất cả bao nhiêu đường bay nội địa và quốc tế?";
var ThongTinMangBay4 = "Hiện tại hãng hàng không Vietnam Airlines đang thực hiện khai thác nội địa và quốc tế bao gồm rất nhiều các chuyến bay hợp tác song phương & hợp tác liên danh linh hoạt tại Viêt Nam, Châu Á, Châu Âu, Châu Mỹ và Châu Phi cụ thể như sau: <br> NỘI ĐỊA VIỆT NAM - 18 đường bay và 4 điểm đến <br> CHÂU Á - 56 đường bay và 31 điểm đến <br> CHÂU ÂU - 40 đường bay và 30 điểm đến.<br> CHÂU MỸ - 23 đường bay và 20 điểm đến <br> CHÂU PHI - 1 đường bay và 1 điểm đến.";
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
	$('#AdvertisingPic').attr("src",Advertise_address);
	$('#LogoPic1').attr("src",LogoPic1_address);
	$('#LogoPic2').attr("src",LogoPic2_address);
	$('#LogoPic3').attr("src",LogoPic3_address);
	$('#LogoPic4').attr("src",LogoPic4_address);
}

function PushBaiViet1(){
	document.getElementById('TieuDeHangHangKhong').innerHTML=TieuDeHHK1;
	document.getElementById('LogoPic1').style.borderWidth='4px';
	document.getElementById('LogoPic2').style.borderWidth='2px';
	document.getElementById('LogoPic3').style.borderWidth='2px';
	document.getElementById('LogoPic4').style.borderWidth='2px';
	$('#HinhAnhHang').attr("src",HinhAnhBamboo);
	document.getElementById('Summary').innerHTML = ThongTinMangBay1;
	document.getElementById('Link').href='../Sơ Đồ Bay Bamboo/SDBBamboo.html';
}
function PushBaiViet2(){
	document.getElementById('TieuDeHangHangKhong').innerHTML=TieuDeHHK2;
	document.getElementById('LogoPic1').style.borderWidth='2px';
	document.getElementById('LogoPic2').style.borderWidth='4px';
	document.getElementById('LogoPic3').style.borderWidth='2px';
	document.getElementById('LogoPic4').style.borderWidth='2px';
	$('#HinhAnhHang').attr("src",HinhAnhJetstar);
	document.getElementById('Summary').innerHTML = ThongTinMangBay2;
	document.getElementById('Link').href='../Sơ Đồ Bay Jetstar/SDBJetstar.html';
}
function PushBaiViet3(){
	document.getElementById('TieuDeHangHangKhong').innerHTML=TieuDeHHK3;
	document.getElementById('LogoPic2').style.borderWidth='2px';
	document.getElementById('LogoPic1').style.borderWidth='2px';
	document.getElementById('LogoPic3').style.borderWidth='4px';
	document.getElementById('LogoPic4').style.borderWidth='2px';
	$('#HinhAnhHang').attr("src",HinhAnhVietjet);
	document.getElementById('Summary').innerHTML = ThongTinMangBay3;
	document.getElementById('Link').href='../Sơ Đồ Bay Vietjet/SDBVietjet.html';
}
function PushBaiViet4(){
	document.getElementById('TieuDeHangHangKhong').innerHTML=TieuDeHHK4;
	document.getElementById('LogoPic2').style.borderWidth='2px';
	document.getElementById('LogoPic1').style.borderWidth='2px';
	document.getElementById('LogoPic3').style.borderWidth='2px';
	document.getElementById('LogoPic4').style.borderWidth='4px';
	$('#HinhAnhHang').attr("src",HinhAnhVNA);
	document.getElementById('Summary').innerHTML = ThongTinMangBay4;
	document.getElementById('Link').href='../Sơ Đồ Bay VNA/SDBVNA.html';
}