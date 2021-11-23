import request from "supertest"
import app from "../../src/app"

describe('Testing real world scenarios', () => {

    test('GET /api/posts?tags=tech - must include "tech" in the tags array', async () => {
        expect.assertions(4)
        try {
            const response = await request(app).get('/api/posts?tags=tech')

            expect(response.statusCode).toBe(200)
            expect(response.body.posts[0].tags).toContain('tech')
            expect(response.body.posts[response.body.posts.length / 2].tags).toContain('tech')
            expect(response.body.posts[response.body.posts.length - 1].tags).toContain('tech')

        } catch (error) {
            console.log(error)
        }
    })

    test('GET /api/posts?tags=tech,history - must include "tech" or "history" in the tags array', async () => {
        expect.assertions(4)
        try {
            const response = await request(app).get('/api/posts?tags=tech,history')

            expect(response.statusCode).toBe(200)
            expect(response.body.posts[0].tags).toContain('tech' || 'history')
            expect(response.body.posts[response.body.posts.length / 2].tags).toContain('tech' || 'history')
            expect(response.body.posts[response.body.posts.length - 1].tags).toContain('tech' || 'history')

        } catch (error) {
            console.log(error)
        }
    })

    test('GET /api/posts?tags=tech&sortBy=reads - must return posts sorted by reads in ascending order', async () => {
        expect.assertions(3)
        try {
            const response = await request(app).get('/api/posts?tags=tech&sortBy=reads')

            expect(response.statusCode).toBe(200)
            expect(response.body.posts[0].reads).toBeLessThanOrEqual(response.body.posts[1].reads)
            expect(response.body.posts[response.body.posts.length - 2].reads)
                .toBeLessThanOrEqual(response.body.posts[response.body.posts.length - 1].reads)

        } catch (error) {
            console.log(error)
        }
    })

    test('GET /api/posts?tags=tech&sortBy=likes - must return posts sorted by likes in ascending order', async () => {
        expect.assertions(3)
        try {
            const response = await request(app).get('/api/posts?tags=tech&sortBy=likes')

            expect(response.statusCode).toBe(200)
            expect(response.body.posts[0].likes).toBeLessThanOrEqual(response.body.posts[1].likes)
            expect(response.body.posts[response.body.posts.length - 2].likes)
                .toBeLessThanOrEqual(response.body.posts[response.body.posts.length - 1].likes)

        } catch (error) {
            console.log(error)
        }
    })

    test('GET /api/posts?tags=tech&sortBy=popularity - must return posts sorted by popularity in ascending order', async () => {
        expect.assertions(3)
        try {
            const response = await request(app).get('/api/posts?tags=tech&sortBy=popularity')

            expect(response.statusCode).toBe(200)
            expect(response.body.posts[0].popularity).toBeLessThanOrEqual(response.body.posts[1].popularity)
            expect(response.body.posts[response.body.posts.length - 2].popularity)
                .toBeLessThanOrEqual(response.body.posts[response.body.posts.length - 1].popularity)

        } catch (error) {
            console.log(error)
        }
    })

    test('GET /api/posts?tags=tech&direction=desc - must return posts sorted by id in descending order', async () => {
        expect.assertions(3)
        try {
            const response = await request(app).get('/api/posts?tags=tech&direction=desc')

            expect(response.statusCode).toBe(200)
            expect(response.body.posts[0].id).toBeGreaterThanOrEqual(response.body.posts[1].id)
            expect(response.body.posts[response.body.posts.length - 2].id)
                .toBeGreaterThanOrEqual(response.body.posts[response.body.posts.length - 1].id)

        } catch (error) {
            console.log(error)
        }
    })

    test('GET /api/posts?tags=hello - must return an empty array', async () => {
        expect.assertions(2)
        try {
            const response = await request(app).get('/api/posts?tags=hello')

            expect(response.statusCode).toBe(200)
            expect(response.body).toEqual({ posts: [] })

        } catch (error) {
            console.log(error)
        }
    })
})