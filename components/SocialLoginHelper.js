import {
  FACEBOOK_SOCIAL_REGISTER,
  TWITCH_SOCIAL_REGISTER,
  GOOGLE_SOCIAL_REGISTER,
  STEAM_SOCIAL_REGISTER
} from '../networking/endpoints'
import axios from 'axios'
import to from '../lib/to';

export const socialLogin = async (provider) => {
  console.log('Provider: ', provider);
  let response = undefined;
  switch (provider) {
    case 'steam':
      response = await axios.get(STEAM_SOCIAL_REGISTER);
      console.log('steam', response);
      break;
    case 'google':
      response = await axios.get(GOOGLE_SOCIAL_REGISTER);
      console.log('google', response);
      break;
    case 'facebook':
      response = await axios.get(FACEBOOK_SOCIAL_REGISTER);
      console.log('facebook', response);
      break; 
    case 'twitch':
      response = await axios.get(TWITCH_SOCIAL_REGISTER);
      console.log('twitch', response);
      break;
    default:
      console.log('default');
  }
}
