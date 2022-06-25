import request from 'superagent'

const rootUrl = '/api/v1'

export function getFruits() {
  return request.get(rootUrl + '/fruits').then((res) => {
    return res.body.fruits
  })
}

const getCrypto = async () => {
  const res = await request.get(
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=nzd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
  )

  return res.body
}

export { getCrypto }
