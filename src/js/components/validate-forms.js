//import JustValidate from 'just-validate';

document.addEventListener("DOMContentLoaded", function () {
  const validation = new JustValidate('.order__form');

  validation
    .addField('.input-name', [{

        rule: 'minLength',
        value: 3,
        errorMessage: "Не достаточное количество символов!"
      },

      {
        rule: 'required',
        value: true,
        errorMessage: 'Заполните имя!'
      },

      {
        rule: 'customRegexp',
        value: /^[a-zA-Zа-яёА-ЯЁ\s\-]+$/,
        errorMessage: 'Недопустимый формат!'
      }
    ])

    .addField('.input-email', [{
        rule: 'required',
        errorMessage: 'Введите Email!',
      },
      {
        rule: 'email',
        errorMessage: 'Недопустимый формат!',
      }
    ])

    .addField('.contacts__comment', [{

      rule: 'required',
      errorMessage: "Поле нужно заполнить!"
    }
    ])

    document.getElementById('order-form').addEventListener('submit', (event) => {
      event.preventDefault();
      event.target.reset();
    })

})

document.addEventListener("DOMContentLoaded", function () {
  const validation = new JustValidate('.about-as__form')
    validation
      .addField('.email', [{
        rule: 'required',
        errorMessage: 'Введите Email!',
      },
      {
        rule: 'email',
        errorMessage: 'Недопустимый формат!',
      }
    ])
      document.getElementById('form-email').addEventListener('submit', (event) => {
        event.preventDefault();
        event.target.reset();
      })

  })




