import * as yup from 'yup';

type ConditionalValidationParamsType<T> = {
    fieldName: string | string[];
    fieldValue: T;
    message?: string;
};

const conditionalValidation = <T>(params: ConditionalValidationParamsType<T>): yup.MixedSchema<NonNullable<unknown> | undefined, yup.AnyObject> => {
    const { fieldName, fieldValue, message } = params;

    return yup.mixed().when(fieldName, {
        is: fieldValue,
        then: (s) => s.required(message),
        otherwise: (s) => s.nullable()
    });
};

export default conditionalValidation;