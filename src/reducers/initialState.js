import uuid from "react-uuid";

const initialState = {
    id:uuid(),
    showPrew:false,
    blocks:[
        {
            id:uuid(),
            title:'Персональные данные',
            isFormValid: false,
            isEdit:false,
            formControls: {
                // surname: {
                //             control:'input',
                //             value: '',
                //             type: 'text',
                //             label: 'фамилия',
                //             errorMessage: 'Введите свою фамилию',
                //             valid: false,
                //             touched: false,
                //             validation: {
                //             required: true,
                //             minLength: 2,
                //             maxLength: 20          
                //             }
                // },
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
                // subname: {
                //     control:'input',
                //     value: '',
                //     type: 'text',
                //     label: 'отчество',
                //     errorMessage: 'Введите свое отчество',
                //     valid: false,
                //     touched: false,
                //     validation: {
                //     required: true,
                //     minLength: 2,
                //     maxLength: 20          
                //     }
                // },
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
                position: {
                    control:'input',
                    value: '',
                    type: 'text',
                    label: 'должность',
                    errorMessage: 'Введите свою должность',
                    valid: false,
                    touched: false,
                    validation: {
                    required: true,
                    minLength: 2,
                    maxLength: 20          
                    }
                },
                salary: {
                    control:'input',
                    value: '',
                    type: 'number',
                    label: 'ожидаемая зарплата',
                    errorMessage: 'Введите сумму',
                    valid: false,
                    touched: false,
                    validation: {
                    required: true,        
                    }
                },
                experience: {
                    control:'input',
                    value: '',
                    type: 'number',
                    label: 'стаж работы на должности',
                    errorMessage: 'Введите стаж',
                    valid: false,
                    touched: false,
                    validation: {
                    required: true,        
                    }
                },
                residence: {
                    control:'input',
                    value: '',
                    type: 'text',
                    label: 'регион проживания',
                    errorMessage: 'Введите регион проживания',
                    valid: false,
                    touched: false,
                    validation: {
                    required: true,
                    minLength: 2,
                    maxLength: 20          
                    }
                },
                
            }                
        },
        {
            id:uuid(),
            title:'Цели',
            isFormValid: false,
            isEdit:false,
            formControls: {
                goals: {
                    control:'textArea',
                    value: '',
                    label: 'Цели',
                    placeholder:'определите, каких результатов вы ожидаете ',
                    errorMessage: 'Введите ваши цели',
                    valid: false,
                    touched: false,
                    validation: {
                    required: true,
                    }
                }
            },
        },
        {
            id:uuid(),
            title:'Профессиональные компетенции',
            isFormValid: false,
            isEdit:false,
            formControls: {
                competence: {
                    control:'textArea',
                    value: '',
                    label: 'Профессиональные компетенции',
                    placeholder:'определите, Ваши профессиональные компетенции ',
                    errorMessage: 'Введите ваши профессиональные компетенции',
                    valid: false,
                    touched: false,
                    validation: {
                    required: true,
                    }
                }
            },
        },
        {
            id:uuid(),
            title:'Дополнительные навыки',
            isFormValid: false,
            isEdit:false,
            formControls: {
                skills: {
                    control:'textArea',
                    value: '',
                    label: 'Дополнительные навыки',
                    placeholder:'определите, каких дополнительными навыками вы владеете ',
                    errorMessage: 'Введите ваши дополнительные навыки',
                    valid: false,
                    touched: false,
                    validation: {
                    required: true,
                    }
                }
            },
        },
        {
            id:uuid(),
            title:'Каръера',
            isFormValid: true,
            isEdit:false,
            count:0,
            formControls: {
                added:{
                    control:'button',
                    type:'success',
                    value: 'добавить',
                    valid: true,
                    touched: false,                
                },
            },
            example:{
                position: {
                        control:'input',
                        value: '',
                        type: 'text',
                        label: 'должность',
                        errorMessage: 'Введите свою должность',
                        valid: false,
                        touched: false,
                        validation: {
                        required: true,
                        minLength: 2,
                        maxLength: 20          
                        }
                },
                organization: {
                        control:'input',
                        value: '',
                        type: 'text',
                        label: 'организация',
                        errorMessage: 'Введите название организации',
                        valid: false,
                        touched: false,
                        validation: {
                        required: true,
                        minLength: 2,
                        maxLength: 20          
                        }
                },
                start: {
                        control:'input',
                        value: '',
                        type: 'date',
                        label: 'начало',
                        errorMessage: 'Введите дату начала',
                        valid: false,
                        touched: false,
                        validation: {
                        required: true,         
                        }
                },
                finish: {
                        control:'input',
                        value: '',
                        type: 'date',
                        label: 'завершение',
                        errorMessage: 'Введите дату завершения',
                        valid: false,
                        touched: false,
                        validation: {
                        required: true,         
                        }
                },
                functions: {
                        control:'textArea',
                        value: '',
                        label: 'Выполняемые функции, профессиональные достижения на должности',
                        placeholder:'определите, какие функции выполняли на занимаемой должности, каких профессиональных достижений добились',
                        errorMessage: 'Введите ваши функции и достижения',
                        valid: false,
                        touched: false,
                        validation: {
                        required: true,
                        }
                },
                remove: {
                    control:'button',
                    type:'error',
                    value: 'удалить',
                    valid: true,
                    touched: false, 
                },
                hr:{
                    control:'hr',
                    valid: true,
                }               
            },               
        },
        {
            id:uuid(),
            title:'Образование',
            isFormValid: true,
            isEdit:false,
            count:0,
            formControls: {
                added:{
                    control:'button',
                    type:'success',
                    value: 'добавить',
                    valid: true,
                    touched: false,                
                },
            },
            example:{
                univer: {
                        control:'input',
                        value: '',
                        type: 'text',
                        label: 'Учебное заведение',
                        errorMessage: 'Введите название учебного заведения',
                        valid: false,
                        touched: false,
                        validation: {
                        required: true,
                        minLength: 2,
                        maxLength: 20          
                        }
                },
                degree: {
                    control:'select',
                    value: '0',
                    // type: 'text',
                    label: 'ученая степень',
                    options:[
                        {
                            value:'0',
                            text:'выберите ученую степень',
                            disabled:true,
                        },
                        {
                            value:'Бакалавр',
                            text:'Бакалавр'
                        },
                        {
                            value:'Специалист',
                            text:'Специалист'
                        },
                        {
                            value:'Магистр',
                            text:'Магистр'
                        },
                    ],
                    errorMessage: 'Выберите вашу ученую степень',
                    valid: false,
                    touched: false,
                    validation: {
                    required: true,         
                    }
        },
                specialisation: {
                        control:'input',
                        value: '',
                        type: 'text',
                        label: 'специальность',
                        errorMessage: 'Введите название специальность',
                        valid: false,
                        touched: false,
                        validation: {
                        required: true,
                        minLength: 2,
                        maxLength: 20          
                        }
                },
                finish: {
                        control:'input',
                        value: '',
                        type: 'date',
                        label: 'год окончания',
                        errorMessage: 'Введите год окончания',
                        valid: false,
                        touched: false,
                        validation: {
                        required: true,         
                        }
                },
                remove: {
                    control:'button',
                    type:'error',
                    value: 'удалить',
                    valid: true,
                    touched: false, 
                },
                hr:{
                    control:'hr',
                    valid: true,
                }               
            },               
        },
        {
            id:uuid(),
            title:'Данные о неформальном образовании',
            isFormValid: false,
            isEdit:false,
            formControls: {
                skills: {
                    control:'textArea',
                    value: '',
                    label: 'Неформальное образование',
                    placeholder:'Данные о неформальном образовании: курсы, тренинги, семинары , прочее ',
                    errorMessage: 'Введите данные о неформальном образовании, если нет, так и напишите',
                    valid: false,
                    touched: false,
                    validation: {
                    required: true,
                    }
                }
            },
        },
        {
            id:uuid(),
            title:'Дополнительная информация',
            isFormValid: true,
            isEdit:false,
            formControls: {
                stan: {
                    control:'checkbox',
                    controls:[
                        {
                            id:1,
                            value: 'навыки работы с компьютером',
                            type: 'checkbox',
                            checked:false,
                            name:'stan',
                            label: 'навыки работы с компьютером',
                            htmlFor:'male'
                        },
                        {
                            id:2,
                            value: 'наличие автомобиля',
                            type: 'checkbox',
                            checked:false,
                            name:'stan',
                            label: 'наличие автомобиля',
                            htmlFor:'female'
                        },
                        {
                            id:3,
                            value: 'знание касового аппарата',
                            type: 'checkbox',
                            checked:false,
                            name:'stan',
                            label: 'знание касового аппарата',
                            htmlFor:'male'
                        },
                        {
                            id:4,
                            value: 'наличие загранпаспорта',
                            type: 'checkbox',
                            checked:false,
                            name:'stan',
                            label: 'наличие загранпаспорта',
                            htmlFor:'male'
                        },
                        {
                            id:5,
                            value: 'готовность к командировкам',
                            type: 'checkbox',
                            checked:false,
                            name:'stan',
                            label: 'готовность к командировкам',
                            htmlFor:'male'
                        },
                        {
                            id:6,
                            value: 'наличие медицинской книжки',
                            type: 'checkbox',
                            checked:false,
                            name:'stan',
                            label: 'наличие медицинской книжки',
                            htmlFor:'male'
                        },
                        {
                            id:7,
                            value: 'возможность переезда',
                            type: 'checkbox',
                            checked:false,
                            name:'stan',
                            label: 'возможность переезда',
                            htmlFor:'male'
                        },
                    ],
                    value:'',
                    label: 'навыки и характеристики',
                    errorMessage: '',
                    valid: true,
                    touched: false,
                    validation: {
                            
                    }
                },
                auto: {
                    control:'checkbox',
                    controls:[
                        {
                            id:1,
                            value: 'M',
                            type: 'checkbox',
                            checked:false,
                            name:'stan',
                            label: 'M',
                            htmlFor:'male'
                        },
                        {
                            id:2,
                            value: 'A',
                            type: 'checkbox',
                            checked:false,
                            name:'stan',
                            label: 'A',
                            htmlFor:'female'
                        },
                        {
                            id:3,
                            value: 'B',
                            type: 'checkbox',
                            checked:false,
                            name:'stan',
                            label: 'B',
                            htmlFor:'male'
                        },
                        {
                            id:4,
                            value: 'C',
                            type: 'checkbox',
                            checked:false,
                            name:'stan',
                            label: 'C',
                            htmlFor:'male'
                        },
                        {
                            id:5,
                            value: 'D',
                            type: 'checkbox',
                            checked:false,
                            name:'stan',
                            label: 'D',
                            htmlFor:'male'
                        },
                        {
                            id:6,
                            value: 'E',
                            type: 'checkbox',
                            checked:false,
                            name:'stan',
                            label: 'E',
                            htmlFor:'male'
                        },
                        {
                            id:7,
                            value: 'TM',
                            type: 'checkbox',
                            checked:false,
                            name:'stan',
                            label: 'TM',
                            htmlFor:'male'
                        },
                        {
                            id:8,
                            value: 'TB',
                            type: 'checkbox',
                            checked:false,
                            name:'stan',
                            label: 'TB',
                            htmlFor:'male'
                        },
                    ],
                    value:'',
                    label: 'водительские права, категории',
                    errorMessage: '',
                    valid: true,
                    touched: false,
                    validation: {
                            
                    }
                },
                natureQfWork: {
                    control:'checkbox',
                    controls:[
                        {
                            id:1,
                            value: 'постоянный',
                            type: 'checkbox',
                            checked:false,
                            name:'stan',
                            label: 'постоянный',
                            htmlFor:'male'
                        },
                        {
                            id:2,
                            value: 'временный',
                            type: 'checkbox',
                            checked:false,
                            name:'stan',
                            label: 'временный',
                            htmlFor:'female'
                        },
                        {
                            id:3,
                            value: 'сезонный',
                            type: 'checkbox',
                            checked:false,
                            name:'stan',
                            label: 'сезонный',
                            htmlFor:'male'
                        },
                        {
                            id:4,
                            value: 'совмещение',
                            type: 'checkbox',
                            checked:false,
                            name:'stan',
                            label: 'совмещение',
                            htmlFor:'male'
                        },
                        {
                            id:5,
                            value: 'работа дома',
                            type: 'checkbox',
                            checked:false,
                            name:'stan',
                            label: 'работа дома',
                            htmlFor:'male'
                        },
                        {
                            id:6,
                            value: 'другой',
                            type: 'checkbox',
                            checked:false,
                            name:'stan',
                            label: 'другой',
                            htmlFor:'male'
                        },
                        
                    ],
                    value:'',
                    label: 'характер выполняемой работы',
                    errorMessage: '',
                    valid: true,
                    touched: false,
                    validation: {
                            
                    }
                },
                schedule: {
                    control:'checkbox',
                    controls:[
                        {
                            id:1,
                            value: 'полный день',
                            type: 'checkbox',
                            checked:false,
                            name:'stan',
                            label: 'полный день',
                            htmlFor:'male'
                        },
                        {
                            id:2,
                            value: 'сменный график',
                            type: 'checkbox',
                            checked:false,
                            name:'stan',
                            label: 'сменный график',
                            htmlFor:'female'
                        },
                        {
                            id:3,
                            value: 'гибкий график',
                            type: 'checkbox',
                            checked:false,
                            name:'stan',
                            label: 'гибкий график',
                            htmlFor:'male'
                        },
                        {
                            id:4,
                            value: 'удаленная работа',
                            type: 'checkbox',
                            checked:false,
                            name:'stan',
                            label: 'удаленная работа',
                            htmlFor:'male'
                        },
                        {
                            id:5,
                            value: 'вахтовый метод',
                            type: 'checkbox',
                            checked:false,
                            name:'stan',
                            label: 'вахтовый метод',
                            htmlFor:'male'
                        },
                        {
                            id:6,
                            value: 'ненормированный рабочий день',
                            type: 'checkbox',
                            checked:false,
                            name:'stan',
                            label: 'ненормированный рабочий день',
                            htmlFor:'male'
                        },
                        {
                            id:7,
                            value: '5-дневная рабочая неделя',
                            type: 'checkbox',
                            checked:false,
                            name:'stan',
                            label: '5-дневная рабочая неделя',
                            htmlFor:'male'
                        },
                        {
                            id:8,
                            value: '6-дневная рабочая неделя',
                            type: 'checkbox',
                            checked:false,
                            name:'stan',
                            label: '6-дневная рабочая неделя',
                            htmlFor:'male'
                        },
                        
                    ],
                    value:'',
                    label: 'график работы',
                    errorMessage: '',
                    valid: true,
                    touched: false,
                    validation: {
                            
                    }
                },
                languages: {
                    control:'textArea',
                    value: '',
                    label: 'Владение языками',
                    placeholder:'Какими языками владеете, степень владения ',
                    errorMessage: 'Введите данные о неформальном образовании, если нет, так и напишите',
                    valid:true,
                    touched: false,
                    validation: {
                    
                    }
                },
                tolerance: {
                    control:'textArea',
                    value: '',
                    label: 'Допуски и разрешения',
                    placeholder:'Наличие допусков к спец.работам с особым характером выполнения. Работы на высоте, с высоким напряжением, прочее. ',
                    errorMessage: 'Введите данные о неформальном образовании, если нет, так и напишите',
                    valid: true,
                    touched: false,
                    validation: {
                    
                    }
                }
            }
        }, 
               
        
    ]
    
}

 
export default initialState;