import s from './MyInput.module.css'

export const MyInput = (props) => {
  return <input {...props} className={s.my_input} />
}
