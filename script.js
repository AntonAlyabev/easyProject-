//function validForm() {
  //var  charMatch = new RegExp('^[a-zA-Z_0-9]*$');
  let validName = document.getElementById ('inp_1').value 
      if (validName.length >= 16) {alert('Больше 16')}
      else if (validName.length <= 1) {alert('Короткое имя')}
      else {alert('ок')}

      //if (validName.length <= 1) {}
        //else {alert("пустая строка")};
  
  

      /* if (!charMatch.test(name)) return false;
        else (alert("больше 16")); */
      //return true;
  //};



  /*     function validForm() {
    var name_length = ("inp_1").val().length;
      var name_input = document.querySelector("inp_1");
      if (name_length != 0) {
          if ((name_length <= 16) {
              name_input.setCustomValidity("");
              var emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
              return true;
          }
          else {
              name_input.setCustomValidity("Поле должно быть заполнено, длина не более 16 символов");
              return false;
         }
      }
     else {
        name_input.setCustomValidity("");
       return true;
  }
 }

/* var	elements	= form.querySelectorAll('.form-control'),
  btn= document.getElementById('send_mess'),
  patternName	= /^[a-zA-Z0-9][а-яёА-ЯЁ\s]+$/,
	patternMail	= /^[A-Za-z0-9](([_\.\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([\.\-]?[a-zA-Z0-9]+)*)\.([A-Za-z])+$/,
  errorMess	= [
		'Незаполненное поле ввода', // [0]
		'Введите Ваше реальное имя', // [1]
		'Укажите Ваш электронную почту', // [2]
		'Неверный формат электронной почты', // [3]
		'Укажите тему сообщения', // [4]
		'Напишите текст сообщения', // [5]
		'Ваше сообщение похоже на спам, уберите специальные символы.' // [6]
	],
	iserror		= false;
  function validForm(e) {
    var formVal = getFormData(form),error;
  }

  function getFormData(form) {
    var controls = {};
    if (!form.elements) return '';
    for (var i = 0, ln = form.elements.length; i < ln; i++) {
      var element = form.elements[i];
      if (element.tagName.toLowerCase() != 'button') {
        controls[element.name]= element.value;
      }
    } 
    return controls;
  } */