import styles from './button.module.css'

export default function Buttondark({children, ...props}){
    return(
        <button className={styles.buttondark} {...props}>{children}</button>
    )
} 

