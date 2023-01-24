import {Form, Button} from "semantic-ui-react";
import Axios from "axios";
import {useRouter} from "next/router";

export default function Login() {
    const router = useRouter();
    function login() {
        Axios.post(`/api/login`)
            .then(res => {
                if (res.status === 200) {
                    // login 성공
                    router.push(`/admin`);
                }
            })
    }

    return <div style={{padding: "100px 0", textAlign: "center"}}>
        <Form>
            <Form.Field inline>
                <input type="text" placeholder={"ID"}/>
            </Form.Field>
            <Form.Field inline>
                <input type="password" placeholder={"PassWord"}/>
            </Form.Field>
            <Form.Field>
                <Button color={"blue"} onClick={login}>Login</Button>
            </Form.Field>
        </Form>
    </div>
}