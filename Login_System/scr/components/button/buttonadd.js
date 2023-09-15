import styles from './button.module.css'

export default function Buttonadd({children, ...props}){
    return(
        <button className={styles.buttonadd} {...props}>{children}</button>
    )
} 