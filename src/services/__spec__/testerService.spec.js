import testerService from "../testerService"
jest.mock("../testerService")
describe('testerService', () => {
    beforeAll(() => {
        testerService.searchTester.mockReturnValue(Promise.resolve(
            {
                "firstName": "Lynda",
                "lastName": "Golumb",
                "country": "New Zealand",
                "device": "Huawei P10",
                "bugs": [
                    {
                        "id": 2,
                        "title": "device is stuck"
                    },
                    {
                        "id": 3,
                        "title": "can't load application"
                    },
                    {
                        "id": 5,
                        "title": "no input validation"
                    }
                ]
            },
            {
                "firstName": "Artem",
                "lastName": "Puzailov",
                "country": "Ukraine",
                "device": "Galaxy S7",
                "bugs": [
                    {
                        "id": 7,
                        "title": "Chrome displays jibberish"
                    }
                ]

            }
        ))
    })
    describe('add tester', () => {
        it('addTester to the list', async () => {
            const tester = await testerService.searchTester('lynda');
            expect(tester.bugs.length).toBe(3)
            expect(tester.firstName).toStrictEqual('Lynda')
        })
    })

})
