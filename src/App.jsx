import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import About from "./pages/About";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Contact from "./pages/Contact";
import Modules from "./pages/Modules";
import OfficialNotices from "./pages/modules/official-notices";
import ChatRoom from "./pages/modules/chat-room";
import Quiz from "./pages/modules/quiz";
import BulletinBoard from "./pages/modules/bulletin-board";
import Documents from "./pages/modules/documents";
import WiseOwl from "./pages/modules/wise-owl";
import SharedTasks from "./pages/modules/shared-tasks";
import Security from "./pages/modules/security";
import Alarm from "./pages/modules/alarm";
import NoiseAlerts from "./pages/modules/noise-alerts";
import Marketplace from "./pages/modules/marketplace";
import HomeRepairs from "./pages/modules/home-repairs";
import ParkingSharing from "./pages/modules/parking-sharing";
import SharedRides from "./pages/modules/shared-rides";
import LocalPosts from "./pages/modules/local-posts";
import BusinessNetworking from "./pages/modules/business-networking";
import ConferenceRooms from "./pages/modules/conference-rooms";
import Pricing from "./pages/Pricing";
import Benefits from "./pages/Benefits";
import HowItWorks from "./pages/HowItWorks";
import FAQ from "./pages/FAQ";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/modules" element={<Modules />} />
        <Route path="/modules/official-notices" element={<OfficialNotices />} />
        <Route path="/modules/chat-room" element={<ChatRoom />} />
        <Route path="/modules/quiz" element={<Quiz />} />
        <Route path="/modules/bulletin-board" element={<BulletinBoard />} />
        <Route path="/modules/documents" element={<Documents />} />
        <Route path="/modules/wise-owl" element={<WiseOwl />} />
        <Route path="/modules/shared-tasks" element={<SharedTasks />} />
        <Route path="/modules/security" element={<Security />} />
        <Route path="/modules/alarm" element={<Alarm />} />
        <Route path="/modules/noise-alerts" element={<NoiseAlerts />} />
        <Route path="/modules/marketplace" element={<Marketplace />} />
        <Route path="/modules/home-repairs" element={<HomeRepairs />} />
        <Route path="/modules/parking-sharing" element={<ParkingSharing />} />
        <Route path="/modules/shared-rides" element={<SharedRides />} />
        <Route path="/modules/local-posts" element={<LocalPosts />} />
        <Route path="/modules/business-networking" element={<BusinessNetworking />} />
        <Route path="/modules/conference-rooms" element={<ConferenceRooms />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/benefits" element={<Benefits />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
