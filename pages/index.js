import Head from "next/head";
import Axios from "axios";
import ItemList from '../src/component/ItemList'
import {Divider, Header} from "semantic-ui-react";

export default function Home({list}) {
    return (
        <div>
            <Head>
                <title>HOME | 코딩앙마</title>
                <meta name={"description"} content={"코딩 앙마 홈페이지 입니다."}/>
            </Head>
            <Header as="h3" style={{paddingTop: 40}}>
                베스트 상품
            </Header>
            <Divider/>
            <ItemList list={list.slice(0, 6)}/>
            <Header as="h3" style={{paddingTop: 40}}>
                신상품
            </Header>
            <Divider/>
            <ItemList list={list.slice(6)}/>
        </div>
    );
}

export async function getStaticProps() {
    const apiUrl = process.env.apiUrl;
    const res = await Axios.get(apiUrl);
    const data = res.data;
    return {
        props: {
            list: data,
            name: process.env.name
        }
    }

}