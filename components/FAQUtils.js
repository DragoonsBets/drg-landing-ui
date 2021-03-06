import { GET_FAQ, GET_FAQ_SLUG } from '../networking/endpoints'
import axios from 'axios'
import to from '../lib/to';
import React from 'react'
import ReactHtmlParser from 'react-html-parser';

export const loadFaqs = async () => {
  let error, error2, response, faqs;
  [error, response] = await to(axios.get(GET_FAQ, {
    headers: {
      'Content-Type': 'application/json;',
    },
  }));

  if (error) return [error, null];
  return [null, response.data.items];

  //[error2, faqs] = await to(axios.get(GET_FAQ + `&child_of=${response.data.items[0].id}`, {
  //  headers: {
  //    'Content-Type': 'application/json;',
  //  },
  //}));

  //if (error2) return [error2, null];
}

export const processFaq = (items) => {
  let processedFaqs = []
  for (let i = 0; i < items.length; i++) {
    let faq = {}
    let temp = items[i].title
    faq.key = i
    faq.title = temp
    temp = items[i].body
    faq.content = {
      content: ReactHtmlParser(temp)
    }
    console.log('FAQ: ', faq)
    processedFaqs.push(faq)
  }
  return processedFaqs
}
