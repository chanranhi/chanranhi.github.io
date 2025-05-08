import { graphql, HttpResponse } from "msw";

export enum queryKey {
    'ListSchedule'= 'ListSchedule',
    'CreateSchedule' = 'CreateSchedule',
    'DeleteSchedule' = 'DeleteSchedule',
    'UpdateSchedule' = 'UpdateSchedule',
}

export const handlers = [
    graphql.query(queryKey.ListSchedule, () => {
        console.log('Intercepted a "ListSchedule" GraphQL query:')
        return HttpResponse.json({}, { status: 200 })
    }),
    graphql.mutation(queryKey.CreateSchedule, () => {
        console.log('Intercepted a "CreateSchedule" GraphQL mutation:')
        return HttpResponse.json({}, { status: 200 })
    }),
    graphql.mutation(queryKey.UpdateSchedule, ({ query, variables, operationName }) => {
        const { scheduleId } = variables
        console.log('Intercepted a "UpdateSchedule" GraphQL mutation:', query, scheduleId, operationName)
        return HttpResponse.json({}, { status: 200 })
    }),
    graphql.mutation(queryKey.DeleteSchedule, ({ query, variables, operationName }) => {
        const { scheduleId } = variables
        console.log('Intercepted a "DeleteSchedule" GraphQL mutation', query, scheduleId, operationName)
        return HttpResponse.json({}, { status: 200 })
    }),
];
