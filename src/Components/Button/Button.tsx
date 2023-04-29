import styles from './Button.module.css';
import Link from "next/link";

export interface ButtonProps {
    content: string;
    onClick?: () => void;
    path?: string;
}

export function Button({ content, onClick, path }: ButtonProps): JSX.Element {
    return (
        <button className={styles.button} onClick={onClick}>
            {path ? <Link href={path}>{content}</Link> : <p>{content}</p>}
        </button>
    );
}
