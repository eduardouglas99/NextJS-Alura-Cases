import Link from "../src/components/Link";

//Funções estaticas x dinamicas de SSR (Server Side Render)
//Em modo dev ambas as funções sempre rodam a cada acesso

// export async function getStaticProps() {}
// A função getServerSideProps() {} roda a cada acesso

export async function getStaticProps() {
    // A função getStaticProps roda somente em tempo de build
    const FAQ_API_URL = 'https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json';
    const faq = await fetch(FAQ_API_URL)
            .then((response) => {
                return response.json();
            })
            .then((response) => {
                return response;
            })
    return {
        props: {
            faq
        },
    };
}

export default function FAQPage({ faq }) {
    return(
        <div>
            <h1>FAQ</h1>
            <Link href="/">Ir para a página Home</Link>
            <ul>
                {faq.map(({answer, question}) => (
                    <li key={question}>
                        <article>
                            <h2>{question}</h2>
                            <p>{answer}</p>
                        </article>
                    </li>
                ))}
            </ul>
        </div>
    )
}