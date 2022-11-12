$(document).ready(function() {
    var txtSDT = $("#txtSDT");
    var txtPass = $("#txtPass");

    function KiemTraSDT() {
        var mau = /^(0)\d{9}$/;

        if (txtSDT.val() == "") {
            $("#tbSDT").html("Điền SDT");
            return false;
        }
        if (!mau.test(txtSDT.val())) {
            $("#tbSDT").html("Số điện thoại không phù hợp");
            return false;
        }
        $("#tbSDT").html("");
        return true;
    }
    txtSDT.blur(KiemTraSDT);

    function KiemTraPass() {
        var mau = /^[A-Za-z0-9(!@#$%^&*()_]{6,20}$/;
        if (txtPass.val() == "") {
            $("#tbMK").html("Điền mật khẩu");
            return false;
        }
        if (!mau.test(txtPass.val())) {
            $("#tbMK").html("Mật khẩu không phù hợp");
            return false;
        }
        $("#tbMK").html("");
        return true;
    }
    txtPass.blur(KiemTraPass);

    function KiemTraDN() {
        if (KiemTraSDT() == true && KiemTraPass() == true) {
            $("#txtDN").removeAttr("disabled");
            return true;
        }
        return false;
    } txtPass.blur(KiemTraDN);
    function KiemTraDK() {
        if (KiemTraSDT() == true && KiemTraPass() == true && KiemTraOTP()==true) {
            $("#txtDK").removeAttr("disabled");
            return true;
        }
        return false;
    } txtPass.blur(KiemTraDK);
    $("#txtDN").click(function()
    {
        alert("Đăng nhập thành công");
    })
    $("#txtDK").click(function()
    {
        alert("Đăng ký thành công");
    })
    var txtOTP = $("#txtOTP");

    function KiemTraOTP() {
        var mau = /^[0-9]{6}$/;
        if (txtOTP.val() == "") {
            $("#tbOTP").html("OTP không được để trống");
            return false;
        }
        if (!mau.test(txtOTP.val())) {
            $("#tbOTP").html("OTP không phù hợp");
            return false;
        }
        $("#tbOTP").html("");
        return true;

    }
    txtOTP.blur(KiemTraOTP);
    var txtHT = $("#txtHT");
    var tbHT = $("#tbHT");

    function KiemTraHT() {
        var kt = /^([A-Za-z]+)(\s[A-Za-z]+)*$/;
        if (txtHT.val() == "") {
            tbHT.html("*");
            return false;
        }
        if (!kt.test(txtHT.val())) {
            tbHT.html("họ tên chưa phù hợp");
            return false;
        }
        tbHT.html("");
        return true;
    }
    txtHT.blur(KiemTraHT);
    var txtEmail = $("#txtEmail");
    var tbEmail = $("#tbEmail");

    function KiemTraEmail() {
        var mau = /^[A-Za-z0-9_.]{6,32}@([a-zA-Z0-9]{2,12})(.[a-zA-Z]{2,12})+$/;
        if (txtEmail.val() == "") {
            tbEmail.html("*");
            return false;
        }
        if (!mau.test(txtEmail.val())) {
            tbEmail.html("email chưa phù hợp");
            return false;
        }
        tbEmail.html("");
        return true;
    }
    txtEmail.blur(KiemTraEmail);
    var txtDC = $("#txtDC");
    var tbDC = $("#tbDC");

    function KiemTraDC() {
        var mau = /^([0-9/]+)(\s[A-Za-z]+)(\s[A-Za-z]+)*$/;
        if (txtDC.val() == "") {
            tbDC.html("*");
            return false;
        }
        if (!mau.test(txtDC.val())) {
            tbDC.html("Địa chỉ không phù hợp");
            return false;
        }
        tbDC.html("");
        return true;
    }
    txtDC.blur(KiemTraDC);

    // Thay đổi số lượng sp trang chi tiết sản phẩm
    var quantity = 1
    var tbQuantity = $('#notify-quantity')
    var maxQuantity = $('#txtQuantity').data('max')

    $('.quantity-right-plus').click(function(e) {
        e.preventDefault();
        quantity = parseInt($('#txtQuantity').val());
        if (quantity < maxQuantity) {
            $('#txtQuantity').val(quantity + 1);
        } else {
            tbQuantity.html('Số lượng bạn chọn đã đạt mức tối đa của sản phẩm này')
        }
    });

    $('.quantity-left-minus').click(function(e) {
        e.preventDefault();
        quantity = parseInt($('#txtQuantity').val());

        if (quantity > 1) {
            $('#txtQuantity').val(quantity - 1);
        }
    });

    $('#txtQuantity').change(ctrlQuantity)


   function ctrlQuantity(e) {
       quantity = parseInt($('#txtQuantity').val());
       if (quantity > maxQuantity) {
           $('#txtQuantity').val(maxQuantity);
           tbQuantity.html('Số lượng bạn chọn đã đạt mức tối đa của sản phẩm này');
       } else {
           tbQuantity.html(' ');
       }
   }
   // giỏ hàng
   var i=1;
   var txtSL=$("#txtSL");
   var txtDG=$("#txtDG");
   var txtTong=$("#txtTong");
   var dongia=0;
   var tong=0;

$("#btngiam").click(function()
{
i= parseInt(txtSL.val());
dongia=parseFloat(txtDG.val());
tong=parseFloat(txtTong.val());
if(i>=1)
{
  txtSL.val(i-1);
  txtTong.val((tong-dongia)+".000");
}

});
$("#btntang").click(function()
{
i=parseInt(txtSL.val());
dongia=parseFloat(txtDG.val());
tong=parseFloat(txtTong.val());
txtSL.val(i+1);
txtTong.val((tong+dongia)+".000");
});
$("#btn-left").click(function()
{
i= parseInt($("#txtSL1").val());
dongia=parseFloat($("#txtDG1").val());
tong=parseFloat($("#txtTong1").val());
if(i>=1)
{
  $("#txtSL1").val(i-1);
  $("#txtTong1").val((tong-dongia)+".000");
}
});
$("#btn-right").click(function()
{
i= parseInt($("#txtSL1").val());
dongia=parseFloat($("#txtDG1").val());
tong=parseFloat($("#txtTong1").val());
$("#txtSL1").val(i+1);
$("#txtTong1").val((tong+dongia)+".000");
})
$("#btn-left-1").click(function(){
   i= parseInt($("#txtSL2").val());
dongia=parseFloat($("#txtDG2").val());
tong=parseFloat($("#txtTong2").val());
if(i>=1)
{
  $("#txtSL2").val(i-1);
  $("#txtTong2").val((tong-dongia)+".000");
}
});
$("#btn-right-1").click(function()
{
   i= parseInt($("#txtSL2").val());
dongia=parseFloat($("#txtDG2").val());
tong=parseFloat($("#txtTong2").val());
$("#txtSL2").val(i+1);
 $("#txtTong2").val((tong+dongia)+".000");
})
//modal
$("#btnModal").click(function()
{
    $("#myModal").modal();
})
function ctrlQuantity(e) {
    quantity = parseInt($('#txtQuantity').val());
    if (quantity > maxQuantity) {
        $('#txtQuantity').val(maxQuantity);
        tbQuantity.html('Số lượng bạn chọn đã đạt mức tối đa của sản phẩm này');
    } else {
        tbQuantity.html(' ');
    }
}


// giỏ hàng
var txtSL = $("tr .txtSL");
var txtDG = $("tr .txtDG");
var txtTong = $("tr .txtTong");
var dongia = 0;
var tong = 0;
var btnGiam = $(".btngiam");
var btnTang = $(".btntang");
var btnXoa = $(".btn-delete")
var sanPham = $(".cart-table tr")

// Tìm id của cha 
function layIDSanPhamCha(PhanTu) {
    return PhanTu.closest('tr').attr('id')
}
// Gán id khác nhau cho từng sản phẩm
let idSP = 0;
sanPham.each(function() {
    $(this).attr('id', idSP);
    ++idSP;
})

btnGiam.on('click', function() {
    let btnId = layIDSanPhamCha($(this))
    giam(btnId)
})

btnTang.on('click', function() {
    let btnId = layIDSanPhamCha($(this))
    tang(btnId)
})

btnXoa.on('click', function() {
    let btnId = layIDSanPhamCha($(this))
    xoaSP(btnId)
})

function giam(id) {
    txtSL = $("tr#" + [id] + " .txtSL");
    txtDG = $("tr#" + [id] + " .txtDG")
    txtTong = $("tr#" + [id] + " .txtTong")

    soLuongHienTai = parseInt(txtSL.val());
    dongia = parseFloat(txtDG.html());
    tong = parseFloat(txtTong.html());

    if (soLuongHienTai > 1) {
        txtSL.val(soLuongHienTai - 1);
        txtTong.html((tong - dongia) + ".000");
    } else {
        xoaSP(id)
    }
}

function tang(id) {
    txtSL = $("tr#" + [id] + " .txtSL");
    txtDG = $("tr#" + [id] + " .txtDG")
    txtTong = $("tr#" + [id] + " .txtTong")
    var tongSLSanPham = txtSL.data('max')

    soLuongHienTai = parseInt(txtSL.val());
    dongia = parseFloat(txtDG.html());
    tong = parseFloat(txtTong.html());

    if (soLuongHienTai < tongSLSanPham) {
        txtSL.val(soLuongHienTai + 1);
        txtTong.html((tong + dongia) + ".000");
    }
}

function xoaSP(id) {
    temp = $("tr#" + [id]);
    temp.html('')
}

// function updateTongTien() {
//     txtTong.each(function(tong) {
//         console.log(tong.innerHTML)
//     })
// }

});

    