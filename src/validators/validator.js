import Joi from "joi";

export const carValidator = Joi.object({
    model: Joi.string().regex(new RegExp('^[a-zA-Zа-яА-ЯїЇіІ]{1,20}$')).required().messages({
        'string.empty':' Поле "model" не може бути пустим ',
        'string.pattern.base': ' Тільки букви, від 1 до 20 символів '
    }),
    price: Joi.number().min(0).max(1000000).required().messages({
        'number.base':' Тільки числа, від 0 до 1 000 000 ',
        'number.min': ' Ціна має бути більше рівна нуля ',
        'number.max': ' Ціна має бути менше рівна мільйону '

    }),
    year: Joi.number().min(1900).max(new Date().getFullYear()).required().messages({
        'number.base':' Рік може бути від 1900 до теперішнього '
    })
})
