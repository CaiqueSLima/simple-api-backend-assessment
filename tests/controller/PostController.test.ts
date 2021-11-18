// import { Request, Response } from "express"
// import { PostBusiness } from "../../src/business/PostBusiness"
// import { PostDatabase } from "../../src/data/PostDatabase"
import supertest from "supertest"
import app from "../../src/app"
import { techPosts } from "../mocks/PostsMock"


// const postBusiness = new PostBusiness(new PostDatabase())

describe('Testing real world scenarios', () => {

    test('GET /api/posts?tags=tech - must return techPosts', async () => {
        // expect.assertions(2)
        const response = await supertest(app).get('/api/posts?tags=tech')

        console.log(response)

        
    })

})