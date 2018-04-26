$(document).ready(function(){
  $('#form').submit(function() {

    var data = {};
    data.x = $('input[name=x]').val();
    data.y = $('input[name=y]').val();
    showError(data.x, data.y);
    data.pheptinh = $('input[name=pheptinh]:checked').val();
    console.log(data);
    $.ajax({
      type: 'GET',
      data: data,
                  url: 'http://localhost:3000/submit',
                  success: function(data) {
                    console.log(data);
                      if (data== 'error') {
                          var inf = document.getElementById("error");
                          inf.innerText = "Lỗi: không thể chia cho 0!";
                      return;
                      }
                      $('#result').val(data);
                  }
              });
        return false;
  });
});

$(function(){
    $('[data-toggle="tooltip"]').tooltip()
});

function showError(a, b) {
    var error = document.getElementById("error");

    if (isNaN(a) && isNaN(b)) {
        error.innerText = "Cả hai ô không phải là số!";
        return false;
    }

    if (isNaN(a)) {
        error.innerText = "Ô thứ 1 không phải là số!";
        return false;
    }
    if (isNaN(b)) {
        error.innerText = "Ô thứ 2 không phải là số!";
        return false;
    }
    if (a == "" || b == "") {
        error.innerText = "Vui lòng nhập số vào đủ 2 ô!";
        return false;
    }
    else {
        error.innerText = "";
        return true
    }
}
