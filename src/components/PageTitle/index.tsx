import Head from "next/head";

type PageTitle = {
    children: React.ReactNode;
}

export default function PageTitle({ children }:PageTitle) {
    return (
        <Head>
            <title>{children}</title>
        </Head>
    )
}