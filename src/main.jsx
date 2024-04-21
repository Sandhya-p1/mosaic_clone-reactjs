import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Layout from "./Layout.jsx";
import About from "./components/About.jsx";
import Analytics from "./components/Analytics.jsx";
import Home from "./components/Home/Home.jsx";
import Inbox from "./components/Inbox.jsx";
import Fintech from "./components/Fintech.jsx";
import Customers from "./components/Ecommerce/Customers.jsx";
import Orders from "./components/Ecommerce/Orders.jsx";
import Invoices from "./components/Ecommerce/Invoices.jsx";
import Shop from "./components/Ecommerce/Shop.jsx";
import Shop2 from "./components/Ecommerce/Shop2.jsx";
import SingleProduct from "./components/Ecommerce/SingleProduct.jsx";
import Cart from "./components/Ecommerce/Cart.jsx";
import Cart2 from "./components/Ecommerce/Cart2.jsx";
import Cart3 from "./components/Ecommerce/Cart3.jsx";
import Pay from "./components/Ecommerce/Pay.jsx";
import UsersTabs from "./components/Community/UsersTabs.jsx";
import UsersTiles from "./components/Community/UsersTiles.jsx";
import Profile from "./components/Community/Profile.jsx";
import Feed from "./components/Community/Feed.jsx";
import Forum from "./components/Community/Forum.jsx";
import ForumPost from "./components/Community/ForumPost.jsx";
import Meetups from "./components/Community/Meetups.jsx";
import MeetupsPost from "./components/Community/MeetupsPost.jsx";
import Cards from "./components/Finance/Cards.jsx";
import Transactions from "./components/Finance/Transactions.jsx";
import TransactionDetails from "./components/Finance/TransactionDetails.jsx";
import Listing from "./components/JobBoard/Listing.jsx";
import JobPost from "./components/JobBoard/JobPost.jsx";
import CompanyProfile from "./components/JobBoard/CompanyProfile.jsx";
import Kanban from "./components/Tasks/Kanban.jsx";
import List from "./components/Tasks/List.jsx";
import Messages from "./components/Messages.jsx";
import Calendar from "./components/Calendar.jsx";
import Campaigns from "./components/Campaigns.jsx";
import BilingandInvoices from "./components/Settings/BillingandInvoices.jsx";
import ConnectedApps from "./components/Settings/ConnectedApps.jsx";
import GiveFeedback from "./components/Settings/GiveFeedback.jsx";
import MyAccount from "./components/Settings/MyAccount.jsx";
import MyNotifications from "./components/Settings/MyNotifications.jsx";
import Plans from "./components/Settings/Plans.jsx";
import Empty from "./components/Utility/Empty.jsx";
import EmptyState from "./components/Utility/EmptyState.jsx";
import FAQs from "./components/Utility/FAQs.jsx";
import KnowledgeBase from "./components/Utility/KnowledgeBase.jsx";
import Roadmap from "./components/Utility/Roadmap.jsx";
import Changelog from "./components/Utility/Changelog.jsx";
import SignIn from "./components/Authentication/SignIn.jsx";
import SignUp from "./components/Authentication/SignUp.jsx";
import ResetPassword from "./components/Authentication/ResetPassword.jsx";
import Step1 from "./components/OnBoarding.jsx/Step1.jsx";
import Step2 from "./components/OnBoarding.jsx/Step2.jsx";
import Step3 from "./components/OnBoarding.jsx/Step3.jsx";
import Step4 from "./components/OnBoarding.jsx/Step4.jsx";
import Accordion from "./components/comp/Accordion.jsx";
import AlertandBanner from "./components/comp/AlertandBanner.jsx";
import Avatar from "./components/comp/Avatar.jsx";
import Badge from "./components/comp/Badge.jsx";
import Breadcrump from "./components/comp/Breadcrump.jsx";
import Button from "./components/comp/Button.jsx";
import Dropdown from "./components/comp/DropDown.jsx";
import Icons from "./components/comp/Icons.jsx";
import InputForm from "./components/comp/InputForm.jsx";
import Modal from "./components/comp/Modal.jsx";
import Pagination from "./components/comp/Pagination.jsx";
import Tabs from "./components/comp/Tabs.jsx";

import ToolTip from "./components/comp/ToolTip.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="home" element={<Home />} />

      <Route path="about" element={<About />} />
      <Route path="analytics" element={<Analytics />} />
      <Route path="fintech" element={<Fintech />} />
      <Route path="customers" element={<Customers />} />
      <Route path="orders" element={<Orders />} />
      <Route path="invoices" element={<Invoices />} />
      <Route path="shop" element={<Shop />} />
      <Route path="shop2" element={<Shop2 />} />
      <Route path="singleproduct" element={<SingleProduct />} />
      <Route path="cart" element={<Cart />} />
      <Route path="cart2" element={<Cart2 />} />
      <Route path="cart3" element={<Cart3 />} />
      <Route path="pay" element={<Pay />} />
      <Route path="userstabs" element={<UsersTabs />} />
      <Route path="userstiles" element={<UsersTiles />} />
      <Route path="profile" element={<Profile />} />
      <Route path="feed" element={<Feed />} />
      <Route path="forum" element={<Forum />} />
      <Route path="forumpost" element={<ForumPost />} />
      <Route path="meetups" element={<Meetups />} />
      <Route path="meetupspost" element={<MeetupsPost />} />
      <Route path="cards" element={<Cards />} />
      <Route path="transactions" element={<Transactions />} />
      <Route path="transactiondetails" element={<TransactionDetails />} />
      <Route path="listing" element={<Listing />} />
      <Route path="jobpost" element={<JobPost />} />
      <Route path="companyprofile" element={<CompanyProfile />} />
      <Route path="list" element={<List />} />
      <Route path="kanban" element={<Kanban />} />
      <Route path="messages" element={<Messages />} />
      <Route path="inbox" element={<Inbox />} />
      <Route path="calendar" element={<Calendar />} />
      <Route path="campaigns" element={<Campaigns />} />
      <Route path="billingandinvoices" element={<BilingandInvoices />} />
      <Route path="connectedapps" element={<ConnectedApps />} />
      <Route path="givefeedback" element={<GiveFeedback />} />
      <Route path="myaccount" element={<MyAccount />} />
      <Route path="mynotifications" element={<MyNotifications />} />
      <Route path="plans" element={<Plans />} />
      <Route path="empty" element={<Empty />} />
      <Route path="changelog" element={<Changelog />} />

      <Route path="emptystate" element={<EmptyState />} />
      <Route path="faqs" element={<FAQs />} />
      <Route path="knowledgebase" element={<KnowledgeBase />} />
      <Route path="roadmap" element={<Roadmap />} />
      <Route path="signin" element={<SignIn />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="resetpassword" element={<ResetPassword />} />
      <Route path="step1" element={<Step1 />} />
      <Route path="step2" element={<Step2 />} />
      <Route path="step3" element={<Step3 />} />
      <Route path="step4" element={<Step4 />} />
      <Route path="accordion" element={<Accordion />} />
      <Route path="alertandbanner" element={<AlertandBanner />} />
      <Route path="avatar" element={<Avatar />} />
      <Route path="badge" element={<Badge />} />
      <Route path="breadcrump" element={<Breadcrump />} />
      <Route path="button" element={<Button />} />
      <Route path="dropdown" element={<Dropdown />} />
      <Route path="icons" element={<Icons />} />
      <Route path="inputform" element={<InputForm />} />
      <Route path="modal" element={<Modal />} />
      <Route path="pagination" element={<Pagination />} />
      <Route path="tabs" element={<Tabs />} />
      <Route path="tooltip" element={<ToolTip />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
