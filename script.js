function check() {
  validateName();
  validatePassEquality();
 }

 function getValue(chkElementId) {
  return document.getElementById (chkElementId).value;
}

function validateName() {
  let name = getValue('inp_1');
  if ((name.length >= 16) || (name.length <= 1)) {
    alert ('Ошибка в длине имени')
  }
}

function validatePassEquality() {
  let pass = getValue('inp_4'),
      pass2 = getValue('inp_5')
     /*  if ((pass.length >= 16) || (pass.length <= 1)) {
        alert ('Ошибка в длине пароля')
      } */
      if (pass != pass2) {
        alert('Пароли не совпадают');
  }
}

function validateName() {
  let pass3 = getValue('inp_4');
  if ((pass3.length >= 16) || (pass3.length <= 1)) {
    alert ('Ошибка в длине пароля')
  }
}