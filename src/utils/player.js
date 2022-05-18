export const AvatarsPlayer = [
  {
    path: '/avatars/lemon.png',
    id: 'lemon',
  },
  {
    path: '/avatars/kiwi.png',
    id: 'kiwi',
  },
  {
    path: '/avatars/mandarin.png',
    id: 'mandarin',
  },
  {
    path: '/avatars/pineapple.webp',
    id: 'pineapple',
  },
  {
    path: '/avatars/watermelon.webp',
    id: 'watermelon',
  },
  {
    path: '/avatars/tomato.webp',
    id: 'tomato',
  },
];

export function getAvatarById(id) {
  return AvatarsPlayer.find((item) => item.id === id) || { id: '', path: '/avatars/tomato.webp' };
}
