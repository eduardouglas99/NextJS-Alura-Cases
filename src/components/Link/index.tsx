import NextLink from "next/link";

type NextLinkProps = {
    children: React.ReactNode,
    href: string
}

export default function Link({children, href, ...props}: NextLinkProps) {
    return(
        <NextLink {...props} href={href} passHref>
            {children}
        </NextLink>
    )
}