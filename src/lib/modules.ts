export interface ModuleInfo {
  id: string;
  title: string;
  path: string;
  color: string;
}

export const modulesList: ModuleInfo[] = [
  { id: 'alarm', title: 'Alarm', path: '/modules/alarm', color: '#fbc02d' },
  { id: 'bulletin-board', title: 'Bulletin Board', path: '/modules/bulletin-board', color: '#fdc107' },
  { id: 'chat-room', title: 'Chat Room', path: '/modules/chat-room', color: '#4baf4f' },
  { id: 'documents', title: 'Documents', path: '/modules/documents', color: '#fe9100' },
  { id: 'home-repairs', title: 'Home Repairs', path: '/modules/home-repairs', color: '#f3372b' },
  { id: 'local-posts', title: 'Local Posts', path: '/modules/local-posts', color: '#9c27b0' },
  { id: 'marketplace', title: 'Marketplace', path: '/modules/marketplace', color: '#4caf50' },
  { id: 'noise-alerts', title: 'Noise Alerts', path: '/modules/noise-alerts', color: '#e91e63' },
  { id: 'official-notices', title: 'Official Notices', path: '/modules/official-notices', color: '#3f51b5' },
  { id: 'parking-sharing', title: 'Parking Sharing', path: '/modules/parking-sharing', color: '#795548' },
  { id: 'quiz', title: 'Quiz', path: '/modules/quiz', color: '#009688' },
  { id: 'security', title: 'Security', path: '/modules/security', color: '#607d8b' },
  { id: 'shared-rides', title: 'Ride Sharing', path: '/modules/shared-rides', color: '#86be41' },
  { id: 'shared-tasks', title: 'Shared Tasks', path: '/modules/shared-tasks', color: '#8bc34a' },
  { id: 'wise-owl', title: 'Wise Owl', path: '/modules/wise-owl', color: '#ffc107' },
  { id: 'business-networking', title: 'Business Networking', path: '/modules/business-networking', color: '#3f51b5' },
  { id: 'conference-rooms', title: 'Conference Rooms', path: '/modules/conference-rooms', color: '#9c27b0' },
];
