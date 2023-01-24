import Head from "next/head";
import Axios from "axios";
import Item from "../../src/component/Item"

const Post = ({item, name}) => {
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
};

export default Post;

export async function getStaticPaths() {
    return {
        paths: [
            {params: {id: "495"}},
            {params: {id: "488"}}
        ],
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
