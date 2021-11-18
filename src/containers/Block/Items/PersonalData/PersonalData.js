import React from 'react'

function PersonalData() {
    return (
        <div>
            <div>
                <h2>
                    Дмитро
                    <i class="edit-block-button">Редагувати</i>
                </h2>
                <div>
                    <form>
                        <div>
                            <label>Дмитро</label>
                            <div>
                                <span></span>
                            </div>
                        </div>
                        <div>
                            <label >e-mail</label>
                            <div>
                                kbl@online.ua
                                <span></span>
                            </div>
                        </div>
                        <div>
                            <label >телефон</label>
                            <div>
                                +380673572106
                                <span></span>
                            </div>
                        </div>
                        <div>
                            <label >Дата створення резюме</label>
                            <div>
                                10.11.2021
                                <span></span>
                            </div>
                        </div>
                        <div>
                            <label >Посада</label>
                            <div>
                                <div>
                                    <input type="hidden" name="form-field-name" value=""/>
                                        <div >
                                            <span id="react-select-3--value">
                                                <div>
                                                    <span role="option" aria-selected="true" id="react-select-3--value-item"></span>
                                                </div>
                                                <div >
                                                    <input   value="" />
                                                    <div >
                                                    </div>
                                                </div>
                                            </span>
                                            <span aria-label="Очистити" class="Select-clear-zone" title="Очистити">
                                                <span class="Select-clear">×</span>
                                            </span>
                                            <span class="Select-arrow-zone">
                                                <span class="Select-arrow"></span>
                                            </span>
                                        </div>
                                </div>
                                <span></span>
                            </div>
                        </div>
                        <div class="el-form-item is-required">
                            <label class="el-form-item__label" >Бажана зарплата(грн)</label>
                            <div class="el-form-item__content">
                                <div class="el-input">
                                    <input type="number" min="0" value="" class="el-input__inner" autocomplete="off"/>
                                </div>
                                <span></span>
                            </div>
                        </div>
                        <div class="el-form-item">
                            <label class="el-form-item__label" >Стаж роботи за посадою</label>
                            <div class="el-form-item__content">
                                <div class="el-input">
                                    <input type="number" min="0" max="99" value="" class="el-input__inner" autocomplete="off"/>
                                </div>
                                <span></span>
                            </div>
                        </div>
                        <div class="el-form-item">
                            <label class="el-form-item__label" >Регіон проживання</label>
                            <div class="el-form-item__content">
                                <div class="Select is-clearable is-searchable Select--single">
                                    <div class="Select-control" >
                                        <span class="Select-multi-value-wrapper" id="react-select-4--value">
                                            <div class="Select-placeholder"> 
                                            </div>
                                            <div class="Select-input" >
                                                <input type="combobox"  value=""  />
                                                <div >
                                                </div>
                                            </div>
                                        </span>
                                        <span class="Select-arrow-zone">
                                            <span class="Select-arrow"></span>
                                        </span>
                                    </div>
                                </div>
                                <span></span>
                            </div>
                        </div>
                        <div class="el-form-item">
                            <div class="el-form-item__content">
                                <button class="el-button el-button--default" type="button">
                                    <span>OK</span>
                                </button>
                                <button class="el-button el-button--default" type="button">
                                    <span>Відміна</span>
                                </button>
                                <span></span>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            
        </div>
    )
}

export default PersonalData
