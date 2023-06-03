import styles from './Button.module.css';
import Link from "next/link";

export interface ButtonProps {
    content: string;
    click?: () => void;
    path?: string;
}

export function Button({ content, click, path,  }: ButtonProps): JSX.Element {
    return (
        <button className={styles.button} onClick={click}>
            {path ? <Link href={path}>{content}</Link> : <p>{content}</p>}
        </button>
    );
}
