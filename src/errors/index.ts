type ErrorTypes = 
  | 'bad_request' 
  | 'unauthorized'
  | 'not_found'
  | 'conflict'
  | 'unprocessable_entity'
;

export interface Error {
  type: ErrorTypes,
  message: string
}