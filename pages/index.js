import Head from "next/head";
import Axios from "axios";
import {useEffect, useState} from "react";
import ItemList from '../src/component/ItemList'
import {Divider, Header, Loader} from "semantic-ui-react";

export default function Home() {
    const [list, setList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const API_URL = process.env.NEXT_PUBLIC_API_URL;

    function getData() {
        Axios.get(API_URL)
            .then(res => {
                setList(res.data);
                setIsLoading(false);
            })
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <div>
            <Head>
                <title>HOME | 코딩앙마</title>
                <meta name={"description"} content={"코딩 앙마 홈페이지 입니다."}/>
            </Head>
            {isLoading && (
                <div style={{padding: "300px 0"}}>
                    <Loader active>Loading</Loader>
                </div>
            )}
            {!isLoading && (
                <>
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
                </>
            )}
        </div>
    );
}

// axios
