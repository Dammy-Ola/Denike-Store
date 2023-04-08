import { ParsedUrlQuery } from 'querystring'

export default interface IParams extends ParsedUrlQuery {
  slug: string
}
