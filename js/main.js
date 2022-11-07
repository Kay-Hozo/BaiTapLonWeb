$(document).ready(function()
{
  var txtSDT=$("#txtSDT");
  var txtPass=$("#txtPass");
  function KiemTraSDT()
  {
     var mau=/^(0)\d{9}$/;
   
    if(txtSDT.val()=="")
    {
      $("#tbSDT").html("Điền SDT");
      return false;
    }
    if(!mau.test(txtSDT.val()))
    {
      $("#tbSDT").html("Số điện thoại không phù hợp");
      return false;
    }
    $("#tbSDT").html("");
    return true;
  }txtSDT.blur(KiemTraSDT);
  function KiemTraPass()
  {
    var mau=/^[A-Za-z0-9(!@#$%^&*()_]{6,20}$/;
    if(txtPass.val()=="")
    {
      $("#tbMK").html("Điền mật khẩu");
      return false;
    }
    if(!mau.test(txtPass.val()))
    {
      $("#tbMK").html("Mật khẩu không phù hợp");
      return false;
    }
    $("#tbMK").html("");
    return true;
  }txtPass.blur(KiemTraPass);
  function KiemTraDN()
  {
    if(KiemTraSDT()==true && KiemTraPass()==true)
    {
      $("#txtDN").removeAttr("disabled");
      return true;
    }
    return false;
  }txtPass.blur(KiemTraDN);
  var txtOTP=$("#txtOTP");
  function KiemTraOTP(){
    var mau=/^[0-9]{6}$/;
    if(txtOTP.val()=="")
    {
      $("#tbOTP").html("OTP không được để trống");
      return false;
    }
    if(!mau.test(txtOTP.val()))
    {
      $("#tbOTP").html("OTP không phù hợp");
      return false;
    }
    $("#tbOTP").html("");
    return true;
    
  }txtOTP.blur(KiemTraOTP);
  var txtHT=$("#txtHT");
  var tbHT=$("#tbHT");
  function KiemTraHT()
  {
      var kt = /^([A-Za-z]+)(\s[A-Za-z]+)*$/;
      if(txtHT.val()=="")
      {
          tbHT.html("*");
          return false;
      }
      if(!kt.test(txtHT.val()))
      {
          tbHT.html("họ tên chưa phù hợp");
          return false;
      }
      tbHT.html("");
      return true;
  }txtHT.blur(KiemTraHT);
  var txtEmail=$("#txtEmail");
  var tbEmail=$("#tbEmail");
  function KiemTraEmail()
  {
   var mau=/^[A-Za-z0-9_.]{6,32}@([a-zA-Z0-9]{2,12})(.[a-zA-Z]{2,12})+$/;
      if(txtEmail.val()=="")
      {
          tbEmail.html("*");
          return false;
      }
      if(!mau.test(txtEmail.val()))
      {
         tbEmail.html("email chưa phù hợp");
         return false;
     }
      tbEmail.html("");
      return true;
  }txtEmail.blur(KiemTraEmail);
  var txtDC=$("#txtDC");
  var tbDC=$("#tbDC");
  function KiemTraDC()
  {
      var mau=/^([0-9/]+)(\s[A-Za-z]+)(\s[A-Za-z]+)*$/;
      if(txtDC.val()=="")
      {
          tbDC.html("*");
          return false;
      }
      if(!mau.test(txtDC.val()))
      {
          tbDC.html("Địa chỉ không phù hợp");
          return false;
      }
      tbDC.html("");
      return true;
  }txtDC.blur(KiemTraDC);
  
});