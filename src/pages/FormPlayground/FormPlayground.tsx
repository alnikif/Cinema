import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import styles from './FormPlayground.module.scss';
import conditionalValidation from '../../validation-utils/conditionalValidation';

enum PlayerType {
    footballer = 'footballer',
    basketballer = 'basketballer',
    boxer = 'boxer'
}

const playerTypesList: PlayerType[] = Object.values(PlayerType);

type FormType = {
    firstName: string;
    lastName: string;
    email: string;
    athleteType: PlayerType;
    goals: number | null;
    dunks: number | null;
    knockouts: number | null;
};

const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    athleteType: PlayerType.footballer,
    goals: null,
    dunks: null,
    knockouts: null
};

const validationSchema = yup.object().shape({
    firstName: yup.string().required('First Name is required'),
    lastName: yup.string().required('Last Name is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    athleteType: yup.string().oneOf(playerTypesList, 'Invalid Athlete Type').required('Athlete Type is required'),
    goals: conditionalValidation({
        fieldName: 'athleteType',
        fieldValue: (athleteType: PlayerType) => athleteType === PlayerType.footballer,
        message: 'You should enter the amount of players goals'
    }),
    dunks: conditionalValidation({
        fieldName: 'athleteType',
        fieldValue: (athleteType: PlayerType) => athleteType === PlayerType.basketballer,
        message: 'You should enter the amount of players dunks'
    }),
    knockouts: conditionalValidation({
        fieldName: 'athleteType',
        fieldValue: (athleteType: PlayerType) => athleteType === PlayerType.boxer,
        message: "You should enter the amount of boxer ko's"
    })
});

const FormPlayground = () => {
    const formik = useFormik<FormType>({
        validateOnChange: true,
        validateOnBlur: true,
        initialValues,
        validationSchema,
        onSubmit: (values) => {
            const athleteData = {
                firstName: values.firstName,
                lastName: values.lastName,
                email: values.email,
                athleteType: values.athleteType,
                goals: values.athleteType === PlayerType.footballer ? values.goals : undefined,
                dunks: values.athleteType === PlayerType.basketballer ? values.dunks : undefined,
                knockouts: values.athleteType === PlayerType.boxer ? values.knockouts : undefined
            };

            console.log(athleteData);
        }
    });

    return (
        <form className={styles.form} onSubmit={formik.handleSubmit}>
            <div className={styles.block}>
                <label htmlFor="firstName">First Name</label>
                <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    required
                    className={styles.input}
                />
                {formik.touched.firstName && formik.errors.firstName && <div>{formik.errors.firstName}</div>}
            </div>

            <div>
                <label htmlFor="lastName">Last Name</label>
                <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    required
                    className={styles.input}
                />
                {formik.touched.lastName && formik.errors.lastName && <div>{formik.errors.lastName}</div>}
            </div>

            <div>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    required
                    className={styles.input}
                />
                {formik.touched.email && formik.errors.email && <div>{formik.errors.email}</div>}
            </div>

            <div>
                <label htmlFor="athleteType">Athlete Type</label>
                <select
                    id="athleteType"
                    name="athleteType"
                    value={formik.values.athleteType}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    required
                    className={styles.input}
                >
                    {playerTypesList.map((player) => (
                        <option key={player} value={player}>
                            {PlayerType[player]}
                        </option>
                    ))}
                </select>
                {formik.touched.athleteType && formik.errors.athleteType && <div>{formik.errors.athleteType}</div>}
            </div>

            {formik.values.athleteType === PlayerType.footballer && (
                <div>
                    <label htmlFor="goals">Goals</label>
                    <input
                        type="number"
                        id="goals"
                        name="goals"
                        value={formik.values.goals || ''}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        required={formik.values.athleteType === PlayerType.footballer}
                        className={styles.input}
                    />
                    {formik.touched.goals && formik.errors.goals && <div>{formik.errors.goals}</div>}
                </div>
            )}

            {formik.values.athleteType === PlayerType.basketballer && (
                <div>
                    <label htmlFor="dunks">Dunks</label>
                    <input
                        type="number"
                        id="dunks"
                        name="dunks"
                        value={formik.values.dunks || ''}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        required={formik.values.athleteType === PlayerType.basketballer}
                        className={styles.input}
                    />
                    {formik.touched.dunks && formik.errors.dunks && <div>{formik.errors.dunks}</div>}
                </div>
            )}

            {formik.values.athleteType === PlayerType.boxer && (
                <div>
                    <label htmlFor="knockouts">Knockouts</label>
                    <input
                        type="number"
                        id="knockouts"
                        name="knockouts"
                        value={formik.values.knockouts || ''}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        required={formik.values.athleteType === PlayerType.boxer}
                        className={styles.input}
                    />
                    {formik.touched.knockouts && formik.errors.knockouts && <div>{formik.errors.knockouts}</div>}
                </div>
            )}

            <button type="submit" className={styles.button}>
                Submit
            </button>
        </form>
    );
};

export default FormPlayground;