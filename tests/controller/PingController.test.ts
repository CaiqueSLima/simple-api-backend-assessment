import request from "supertest"
import app from "../../src/app"

describe('Testing the Ping Controller', () => {

    it('GET /api/ping - must return success', async () => {
        expect.assertions(2)
        try {
            const response = await request(app).get('/api/ping')

            expect(response.statusCode).toBe(200)
            expect(response.body).toEqual({ success: true })

        } catch (error) {
            console.log(error)
        }
    })
})