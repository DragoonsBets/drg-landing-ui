
const API_HOST = 'https://drg-bets.jx-staging.viserion.dragoons.gg'

export const GET_FAQ = API_HOST + '/es/faq/v1/pages/?type=bets.faqPage&fields=body';
export const GET_FAQ_SLUG = API_HOST + '/es/faq/v1/pages/?slug=faq';
export const CREATE_USERS = API_HOST + '/rest-auth/registration/';
export const SOCIAL_REGISTER = API_HOST + '/accounts/signup/';