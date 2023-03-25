export interface IFetcher {
  url: string,
  method: string,
  body: any,
  json: boolean
}

export const fetcher = async (url: string, method: string, body: any, json: boolean = true) => {
  const res = await fetch(url, {
    method,
    ...(body && {body: JSON.stringify(body)}),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  })

  if (!res.ok) {
    // handle your errors
    throw new Error('API error')
  }

  if (json) {
    const data = await res.json()
    return data.data
  }
}

export const register = (user: any) => {
  return fetcher('/api/register','post', user)
}

export const signin = (user: any) => {
  return fetcher('/api/signin', 'post', user)
}