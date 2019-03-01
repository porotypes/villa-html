$(function() {

  var isQrCodeLogin = false;

  $('.qr-login').on('click', function() {
    if (!isQrCodeLogin) {
      $('.qr-login-tip').hide();
      $('.normal-login-tip').show();
      $('.qr-login-icon').hide();
      $('.normal-login-icon').show();
      $('.normal-login').hide();
      $('.qrcode').show();
      isQrCodeLogin = true;
    } else {
      $('.qr-login-tip').show();
      $('.normal-login-tip').hide();
      $('.qr-login-icon').show();
      $('.normal-login-icon').hide();
      $('.normal-login').show();
      $('.qrcode').hide();
      isQrCodeLogin = false;
    }
  });

  $('.login-form-btn').on('click', function(e) {
    e.preventDefault();
    var username = $('.login-form-main .login-form-item .username').val();
    var password = $('.login-form-main .login-form-item .password').val();
    if (!username) {
      $('.login-form-main .login-form-item .username + .error-tip').show();
      return;
    } else {
      $('.login-form-main .login-form-item .username + .error-tip').hide();
    }
    if (!password) {
      $('.login-form-main .login-form-item .password + .error-tip').show();
      return;
    } else {
      $('.login-form-main .login-form-item .password + .error-tip').hide();
    }

    var a = document.createElement('a');
    a.href = '../index.html';
    a.click();
  });

  $('#personal').on('click', function() {
    $('#company').removeClass('active');
    $(this).addClass('active');
    $('.company-register').hide();
    $('.personal-register').show();
  });

  $('#company').on('click', function() {
    $('#personal').removeClass('active');
    $(this).addClass('active');
    $('.company-register').show();
    $('.personal-register').hide();
  });

});