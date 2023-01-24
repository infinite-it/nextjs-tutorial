import Head from "next/head";
import Axios from "axios";
import Item from "../../src/component/Item"
import {useRouter} from "next/router";
import {Loader} from "semantic-ui-react";

const Post = ({item, name}) => {
    const router = useRouter();
    if (router.isFallback) {
        return (
            <div style={{padding: "300px 0"}}>
                <Loader active>Loading</Loader>
            </div>
        )
    }
    return (
        <>
            <Head>
                <title>{item?.name ?? 'undefined'}</title>
                <meta name={"description"} content={item?.description ?? "description"}/>
            </Head>
            {name} 환경입니다.
            {item && <Item item={item}/>}
        </>
    )
}

export default Post;

export async function getStaticPaths() {
    const apiUrl = process.env.apiUrl;
    const res = await Axios.get(apiUrl);
    const data = res.data;

    return {
        // paths: [
        //     {params: {id: "495"}},
        //     {params: {id: "488"}}
        // ],
        paths: data.slice(0,9).map((item) => ({
            params: {
                id: item.id.toString()
            },
        })),
        fallback: true
    }
}

export async function getStaticProps(context) {
    const id = context.params.id;
    const apiUrl = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
    const res = await Axios.get(apiUrl);
    const data = res.data;
    return {
        props: {
            item: data,
            name: process.env.name
        }
    }
}
