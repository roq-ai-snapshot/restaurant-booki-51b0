import * as yup from 'yup';

export const reservationValidationSchema = yup.object().shape({
  date: yup.date().required(),
  time: yup.date().required(),
  number_of_people: yup.number().integer().required(),
  table_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
});
