$(document).ready(function() {
    var txtSDT = $("#txtSDT");
    var txtPass = $("#txtPass");

    function KiemTraSDT() {
        var mau = /^(03|09|08|06|02|07)\d{8}$/;

        if (txtSDT.val() == "") {
            $("#tbSDT").html("Điền SDT");
            return false;
        }
        if (!mau.test(txtSDT.val())) {
            $("#tbSDT").html("Số điện thoại không phù hợp");
            return false;
        }
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
        return true;
    }
    txtPass.blur(KiemTraPass);

    function KiemTraDN() {
        if (KiemTraSDT() == true && KiemTraPass() == true) {
            $("#txtDN").removeAttr("disabled");
            return true;
        }
        $("#thongbao2").html("Phải nhập đầy đủ thông tin");
        return false;
    }
    txtPass.blur(KiemTraDN);
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
        return true;

    }
    txtOTP.blur(KiemTraOTP);

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
})