import s from './MyButton.module.css'

export const MyButton = ({ children, mod, ...props }) => {
  const classes = [s.my_button]
  if (mod) {
    classes.push(s.mini_button)
  }

  return (
    <button {...props} className={classes.join(' ')}>
      {children}
    </button>
  )
}
