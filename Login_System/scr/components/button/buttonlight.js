import styles from './button.module.css'

export default function Buttonlight({children, ...props}){
    return(
        <button className={styles.buttonlight} {...props}>{children}</button>
    )
} 