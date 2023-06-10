function validateCpf(userCpf)
{

    var cpf = userCpf.replace(/[^\d]+/g,'');
   
    if(cpf == '') return false;
    
    if (cpf.length != 11 ||
        cpf == "00000000000" ||
        cpf == "11111111111" ||
        cpf == "22222222222" ||
        cpf == "33333333333" ||
        cpf == "44444444444" ||
        cpf == "55555555555" ||
        cpf == "66666666666" ||
        cpf == "77777777777" ||
        cpf == "88888888888" ||
        cpf == "99999999999")
        {
            return false;
        }

        add = 0;
   
    for (i=0; i < 9; i ++)
    {
        add += parseInt(cpf.charAt(i)) * (10 - i);
    }

    dgVal = 11 - (add % 11);

    if (dgVal == 10 || dgVal == 11)
    {
        dgVal = 0;
    }
    if (dgVal != parseInt(cpf.charAt(9)))
    {
        return false;
    }

    add = 0;
    for (i = 0; i < 10; i ++)
    {
        add += parseInt(cpf.charAt(i)) * (11 - i);
    }
    dgVal = 11 - (add % 11);
    if (dgVal == 10 || dgVal == 11)
    {
        dgVal = 0;
    }
    if (dgVal != parseInt(cpf.charAt(10)))
    {
        return false;
    }
    return true;

}

(() => {
  'use strict'

  const forms = document.querySelectorAll('.needs-validation')
  const cpf = document.querySelector('.cpfFormControl')

  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity() || !validateCpf(cpf.value)) {
        event.preventDefault()
        event.stopPropagation()
        cpf.classList.add('is-invalid')
      }else{
        cpf.classList.remove('is-invalid')
        form.classList.add('was-validated')
      }
    }, false)
  })
})()