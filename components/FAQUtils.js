import { GET_FAQ, GET_FAQ_SLUG } from '../networking/endpoints'
import axios from 'axios'
import to from '../lib/to';

export const loadFaqs = async () => {
  let error, error2, response, faqs;
  [error, response] = await to(axios.get(GET_FAQ_SLUG, {
    headers: {
      'Content-Type': 'application/json;',
    },
  }));

  if (error) return [error, null];
  
  [error2, faqs] = await to(axios.get(GET_FAQ + `&child_of=${response.data.items[0].id}`, {
    headers: {
      'Content-Type': 'application/json;',
    },
  }));

  if (error2) return [error2, null];
  return [null, faqs.data.items];
}

export const processFaq = (items) => {
  let processedFaqs = []
  for (let i = 0; i < items.length; i++) {
    let faq = {}
    let temp = items[i].title
    faq.key = i
    faq.title = temp
    temp = items[i].body
    faq.content = temp
    processedFaqs.push(faq)
  }
  return processedFaqs
}