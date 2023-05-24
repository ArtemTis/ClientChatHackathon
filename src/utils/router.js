import { Navigate, Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Admin from "../components/Admin/Admin";
import AdminHello from "../components/Admin/AdminHello";
import AdminChats from "../components/Admin/AdminChats";
import Login from "../components/Account/Login";
import Register from "../components/Account/Register";
import Root from "../components/main/Root";
import Account from "../components/Account/Account";
import AuthGuard from './guards/AuthGuard'
import {
   ACCOUNT_PATH,
   ADMIN_CHATS_ACTIVE_PATH,
   ADMIN_CHATS_CLOSED_PATH,
   ADMIN_CHATS_CREATED_PATH,
   ADMIN_CHATS_PATH,
   ADMIN_CHAT_PATH,
   ADMIN_PATH,
   ADMIN_START_PATH,
   HOME_PATH,
   LOGIN_PATH,
   REGISTER_PATH
} from "./routeConstants";
import AdminChatsCreated from "../components/Admin/AdminChatsCreated";
import AdminChatsActive from "../components/Admin/AdminChatsActive";
import AdminChatsClosed from "../components/Admin/AdminChatsClosed";
import AdminChat from "../components/Chat/AdminChat";

export const router = createBrowserRouter(
   createRoutesFromElements(
      <>
         <Route path={HOME_PATH} element={<Root />} />
         <Route path={ADMIN_PATH} element={<Admin />} >
            <Route index element={<Navigate to={ADMIN_START_PATH} replace />} />
            <Route path={ADMIN_START_PATH} element={<AdminHello />} >
               <Route index element={<Navigate to={ADMIN_START_PATH} />} />

            </Route>

            <Route path={ADMIN_CHATS_PATH} element={<AdminChatsCreated />} >
               <Route index element={<Navigate to={ADMIN_CHATS_CREATED_PATH} replace />} />
               <Route path={ADMIN_CHATS_CREATED_PATH} element={<AdminChatsCreated />} >
                  <Route index element={<Navigate to={ADMIN_CHATS_CREATED_PATH} />} />
               </Route>
               <Route path={ADMIN_CHATS_ACTIVE_PATH} element={<AdminChatsActive />} />
               <Route path={ADMIN_CHATS_CLOSED_PATH} element={<AdminChatsClosed />} />

               {/* <Route path={ADMIN_CHAT_PATH} element={<AdminChat />} /> */}
            </Route>
         </Route>

         <Route path={ACCOUNT_PATH} element={<Account />}>
            <Route index element={<AuthGuard element={<Navigate to={HOME_PATH} replace />} />} />
            <Route path={LOGIN_PATH} element={<Login />} >
               <Route index element={<Navigate to={LOGIN_PATH} />} />
            </Route>

            <Route path={REGISTER_PATH} element={<Register />} />
         </Route>
         <Route path="*" element={<HOME_PATH />} />
      </>
   ));

