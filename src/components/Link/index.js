import NextLink from "next/link";
import { Text } from '../../theme/components';

// type NextLinkProps = {
//     children: React.ReactNode,
//     href: string
// }

export default function Link({children, href, ...props}) {
    return(
        <NextLink href={href} passHref>
            <Text as="span" {...props}>{children}</Text>
        </NextLink>
    )
}