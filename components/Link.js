import Link from "next/link"

export const LinkDefault = ({href, text, className = ''}) => {
    return (
        <Link href={href} className={className}>
            <a>
                {text}
            </a>
        </Link>
    )
}