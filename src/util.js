/**
 * @description: Return address based on user information
 * user.type /boss /genius
 * user.avatar /bossinfo /geniusinfo
 * @param {type}
 * @return:
 */
export function getRedirectPath({ type, avatar }) {
  let url = (type === 'boss') ? '/boss' : '/genius'
  if (!avatar) {
    url += 'info'
  }
  return url
}

export function getChatId(userId, targetId) {
  return [userId, targetId].sort().join('_')
}
