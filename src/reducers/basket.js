const basket = {
    // id:uuid(),
    title:'Персональные данные 2',
    isFormValid: false,
    isEdit:false,
    formControls: {
        surname: {
                    control:'input',
                    value: '',
                    type: 'text',
                    label: 'фамилия',
                    errorMessage: 'Введите свою фамилию',
                    valid: false,
                    touched: false,
                    validation: {
                    required: true,
                    minLength: 2,
                    maxLength: 20          
                    }
        },
        name: {
                    control:'input',
                    value: '',
                    type: 'text',
                    label: 'имя',
                    errorMessage: 'Введите свое имя',
                    valid: false,
                    touched: false,
                    validation: {
                    required: true,
                    minLength: 2,
                    maxLength: 20          
                    }
        },
        subname: {
                    control:'input',
                    value: '',
                    type: 'text',
                    label: 'отчество',
                    errorMessage: 'Введите свое отчество',
                    valid: false,
                    touched: false,
                    validation: {
                    required: true,
                    minLength: 2,
                    maxLength: 20          
                    }
        },
        male: {
            control:'radio',
            controls:[
                {
                    value: 'male',
                    type: 'radio',
                    name:'male',
                    label: 'мужской',
                    htmlFor:'male'
                },
                {
                    value: 'female',
                    type: 'radio',
                    name:'male',
                    label: 'женский',
                    htmlFor:'female'
                }
            ],
            value:'',
            label: 'пол',
            errorMessage: 'Выберите свой пол',
            valid: false,
            touched: false,
            validation: {
            required: true,         
            }
        },
        email: {
                    control:'input',
                    value: '',
                    type: 'email',
                    label: 'Email',
                    errorMessage: 'Введите корректный email',
                    valid: false,
                    touched: false,
                    validation: {
                    required: true,
                    email: true
                    }
        },
        tel: {
                    control:'input',
                    value: '',
                    type: 'tel',
                    label: 'Телефон',
                    errorMessage: 'Введите корректный номер телефона',
                    valid: false,
                    touched: false,
                    validation: {
                    required: true,
                    minLength: 13,
                    maxLength: 13,

                    }
        },
        stan: {
            control:'radio',
            controls:[
                {
                    value: 'женат',
                    type: 'radio',
                    name:'stan',
                    label: 'женат',
                    htmlFor:'male'
                },
                {
                    value: 'холост',
                    type: 'radio',
                    name:'stan',
                    label: 'холост',
                    htmlFor:'female'
                },
                {
                    value: 'замужем',
                    type: 'radio',
                    name:'stan',
                    label: 'замужем',
                    htmlFor:'male'
                },
                {
                    value: 'незамужем',
                    type: 'radio',
                    name:'stan',
                    label: 'незамужем',
                    htmlFor:'male'
                },
            ],
            value:'',
            label: 'семейное положение',
            errorMessage: 'Выберите свое семейное положение',
            valid: false,
            touched: false,
            validation: {
            required: true,         
            }
        },
        quantries: {
            control:'select',
            value: '0',
            // type: 'text',
            label: 'страна проживания',
            options:[
                {
                    value:'0',
                    text:'выберите страну',
                    disabled:true,
                },
                {
                    value:'1',
                    text:'Украина'
                },
                {
                    value:'2',
                    text:'Беларусь'
                },
                {
                    value:'3',
                    text:'Россия'
                },
                {
                    value:'4',
                    text:'Казахстан'
                },
            ],
            errorMessage: 'Введите страну в которой проживаете',
            valid: false,
            touched: false,
            validation: {
            required: true,         
            }
},
        
        
        
        subinfo: {
            control:'textArea',
            value: '',
            // type: 'email',
            label: 'Дополнительная информация',
            placeholder:'dop infa',
            errorMessage: 'Введите корректный email',
            valid: false,
            touched: false,
            validation: {
            required: true,
            }
},
        
        
    }

        
}

console.log(basket)