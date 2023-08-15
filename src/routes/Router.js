import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "../pages/Login/Login"
import CreateAccount from "../pages/CreateAccount/CreateAccount"
import FeedPosts from "../pages/FeedPosts/FeedPosts"
import FeedComments from "../pages/FeedComments/FeedComments"

const Router = () => {

    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<Login/>}/>
                <Route path={"/createaccount"} element={<CreateAccount/>}/>
                <Route path={"/feedposts"} element={<FeedPosts/>}/>
                <Route path={"/feedcomments"} element={<FeedComments/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router