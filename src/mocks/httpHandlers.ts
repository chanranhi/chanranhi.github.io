import { http, HttpResponse } from 'msw'

export const handlers = [
  // http[method](predicate, resolver)
  http.get('/api/schedule', () => {
    return HttpResponse.json({}, { status: 200 })
  }),
  http.get('/api/schedule/:scheduleId', ({ params }) => {
    const { scheduleId } = params;
    console.log(`Captured a "GET /schedule/${scheduleId}" request`)
    return HttpResponse.json({}, { status: 200 })
  }),
  http.put('/api/schedule', () => {
    console.log(`Captured a "PUT /schedule" request`)
    return HttpResponse.json({}, { status: 200 })
  }),
  http.post('/api/schedule/:scheduleId', async ({ request, requestId, cookies, params }) => {
    const { scheduleId } = params;
    const requestBody = await request.json();
    console.log(`Captured a "POST /schedule/${scheduleId}, uuid: ${requestId}, requestCookie: ${cookies}" request`)
    return HttpResponse.json(requestBody, { status: 200 })
  }),
  http.delete('/api/schedule/:scheduleId', ({ params }) => {
    const { scheduleId } = params;
    console.log(`Captured a "DELETE /schedule/${scheduleId}" request`)
    return HttpResponse.json({}, { status: 200 })
  }),
]
