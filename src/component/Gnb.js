import {Menu} from "semantic-ui-react";
import {useRouter} from "next/router";

export default function Gnb() {
    let activeItem = "";
    const router = useRouter();

    switch (router.pathname) {
        case "/":
            activeItem = "home";
            break;
        case "/about":
            activeItem = "about";
            break;
    }

    function goLink(e, data) {
        if (data.name === "home") {
            router.push("/");
        } else if (data.name === "about") {
            router.push("/about");
        }
    }

    return (
        <Menu inverted>
            <Menu.Item
                name="home"
                active={activeItem === "home"}
                onClick={goLink}
            />
            <Menu.Item
                name="about"
                active={activeItem === "about"}
                onClick={goLink}
            />
            <Menu.Item
                name="friends"
                active={activeItem === "friends"}
                onClick={goLink}
            />
        </Menu>
    );
}
