import { PostBusiness } from "../../src/business/PostBusiness"
import { PostDatabaseMock } from "../mocks/PostDatabaseMock"
import { techPostsToModel } from "../mocks/PostsMock"

const postBusiness = new PostBusiness(new PostDatabaseMock())

describe('Testing invalid query parameters', () => {

    test('No tag is given', async () => {
        expect.assertions(2)
        try {
            await postBusiness.getPostLogic(undefined, 'id', 'asc')
        } catch (error: any) {
            expect(error.message).toEqual('Tags parameter is required')
            expect(error.statusCode).toBe(400)
        }
    })

    test('Invalid sortBy parameter', async () => {
        expect.assertions(2)
        try {
            await postBusiness.getPostLogic('test', 'hello', 'asc')
        } catch (error: any) {
            expect(error.message).toEqual('sortBy parameter is invalid')
            expect(error.statusCode).toBe(400)
        }
    })

    test('Invalid direction parameter', async () => {
        expect.assertions(2)
        try {
            await postBusiness.getPostLogic('test', 'id', 'hello')
        } catch (error: any) {
            expect(error.message).toEqual('direction parameter is invalid')
            expect(error.statusCode).toBe(400)
        }
    })
})

describe('Testing success case', () => {

    test('All parameters are valid', async () => {
        expect.assertions(1)
        try {
            const result = await postBusiness.getPostLogic('test', 'id', 'asc')
            expect(result).toEqual(techPostsToModel)
        } catch (error) {
            console.log(error)
        }
    })
})