import Head from "next/head";
import Link from "next/link";


export default function staticdatarender({data}) {
    console.log(data);

    return (
        <div>
            <Head>
                <title>Server Side Rendering Example</title>
            </Head>
            <div>
                {data.map((item) => {
                    return <p key={item.id}>{item.name}</p>
                })
                }
            </div>
            <div>
                <Link href={"/"}>
                    <button>Back to Home</button>
                </Link>
            </div>
        </div>
    )
}

export const getServerSideProps = async () => {
    const res = await fetch("http://192.168.1.104:8080/students/Student2/courses");
    const data = await res.json();
    console.log(res);

    return {
        props: {data},
    };
}