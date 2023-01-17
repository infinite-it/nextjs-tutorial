import Head from "next/head";

export default function Home() {
    return (
        <div>
            hello, world!
            <Head>
                <title>HOME | 코딩앙마</title>
            </Head>
            {/*<Header as="h3" style={{paddingTop: 40}}>*/}
            {/*    베스트 상품*/}
            {/*</Header>*/}
            {/*<Divider/>*/}
            {/*<ItemList list={list.slice(0, 9)}/>*/}
            {/*<Header as="h3" style={{paddingTop: 40}}>*/}
            {/*    신상품*/}
            {/*</Header>*/}
            {/*<Divider/>*/}
            {/*<ItemList list={list.slice(9)}/>*/}
        </div>
    );
}

// axios
