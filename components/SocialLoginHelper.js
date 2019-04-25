export const socialLogin = (provider) => {
  switch (provider) {
    case 'steam':
      console.log('steam');
      break; // al encontrar este 'break' no se continuará con el siguiente 'default:'
    case 'google':  
      console.log('google');
      break; // al encontrar este 'break' no se continuará con el siguiente 'default:'
    case 'facebook':  
      console.log('facebook');
      break; // al encontrar este 'break' no se continuará con el siguiente 'default:'
    case 'twitch':  
      console.log('twitch');
      break; // al encontrar este 'break' no se continuará con el siguiente 'default:'
    default:
      console.log('default');
  }
  alert('Provider: ', provider)
}