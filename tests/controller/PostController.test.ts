import request from "supertest"
import app from "../../src/app"
import {
    techPosts,
    techAndHistoryPosts,
    techSortByReads,
    techSortByLikes,
    techSortByPopularity,
    techDesc
} from "../mocks/PostsMock"

describe('Testing real world scenarios', () => {

    test('GET /api/posts?tags=tech - must return techPosts', async () => {
        expect.assertions(2)
        try {
            const response = await request(app).get('/api/posts?tags=tech')

            expect(response.statusCode).toBe(200)
            expect(response.body).toEqual(techPosts)

        } catch (error) {
            console.log(error)
        }
    })

    test('GET /api/posts?tags=tech,history - must return techAndHistoryPosts', async () => {
        expect.assertions(2)
        try {
            const response = await request(app).get('/api/posts?tags=tech,history')

            expect(response.statusCode).toBe(200)
            expect(response.body).toEqual(techAndHistoryPosts)

        } catch (error) {
            console.log(error)
        }
    })

    test('GET /api/posts?tags=tech&sortBy=reads - must return techSortByReads', async () => {
        expect.assertions(2)
        try {
            const response = await request(app).get('/api/posts?tags=tech&sortBy=reads')

            expect(response.statusCode).toBe(200)
            expect(response.body).toEqual(techSortByReads)

        } catch (error) {
            console.log(error)
        }
    })

    test('GET /api/posts?tags=tech&sortBy=likes - must return techSortByLikes', async () => {
        expect.assertions(2)
        try {
            const response = await request(app).get('/api/posts?tags=tech&sortBy=likes')

            expect(response.statusCode).toBe(200)
            expect(response.body).toEqual(techSortByLikes)

        } catch (error) {
            console.log(error)
        }
    })

    test('GET /api/posts?tags=tech&sortBy=popularity - must return techSortByPopularity', async () => {
        expect.assertions(2)
        try {
            const response = await request(app).get('/api/posts?tags=tech&sortBy=popularity')

            expect(response.statusCode).toBe(200)
            expect(response.body).toEqual(techSortByPopularity)

        } catch (error) {
            console.log(error)
        }
    })

    test('GET /api/posts?tags=tech&direction=desc - must return techDesc', async () => {
        expect.assertions(2)
        try {
            const response = await request(app).get('/api/posts?tags=tech&direction=desc')

            expect(response.statusCode).toBe(200)
            expect(response.body).toEqual(techDesc)

        } catch (error) {
            console.log(error)
        }
    })
})