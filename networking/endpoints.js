
const API_HOST_STAGING = 'https://drg-bets.jx-staging.viserion.dragoons.gg'
const API_HOST = 'https://backend.viserion.dragoons.gg'
// const API_HOST = 'https://dc93c364.ngrok.io'


export const GET_FAQ = API_HOST + '/es/faq/v1/pages/?type=bets.faqPage&fields=body';
export const GET_FAQ_SLUG = API_HOST + '/es/faq/v1/pages/?slug=faq';
export const CREATE_USERS = API_HOST + '/rest-auth/registration/';
export const CONTACT_FORM = API_HOST + '/users/contact/'
export const STEAM_SOCIAL_REGISTER = API_HOST + '/accounts/steam/login/?process=login';
export const FACEBOOK_SOCIAL_REGISTER = API_HOST + '/accounts/facebook/login/?process=login';
export const GOOGLE_SOCIAL_REGISTER = API_HOST + '/accounts/google/login/?process=login';
export const TWITCH_SOCIAL_REGISTER = API_HOST + '/accounts/twitch/login/?process=login';
