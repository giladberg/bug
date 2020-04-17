
import axios from 'axios'
import storageService from './storageService'
const TESTER_URL = 'https://test-api.techsee.me/api/ex/';
const PROXY_URL = "https://cors-anywhere.herokuapp.com/";


const gTesters = storageService.load('testers') || []
const _getSortedTesters=(testersToReturn,sortBy)=>{
    return testersToReturn.sort((tester1, tester2)=> {
            return tester1[sortBy] > tester2[sortBy] ? 1 :
            (tester1[sortBy] < tester2[sortBy] ? -1 : 0)
    })
}
const getTesters = (sortBy) => {
    let testers=[...gTesters]
    return Promise.resolve(_getSortedTesters(testers,sortBy))
}


const searchTester = (testerName) => {
    return axios.get(PROXY_URL + TESTER_URL + testerName).then(res => {
        const testers = res.data
        if (testers) _addTesters(testers)
        return  testers
    }).catch(err => false)
}

const _addTesters = (newTesters) => {
    if (Array.isArray(newTesters)) newTesters.forEach(newTester => gTesters.push(newTester))
    else gTesters.push(newTesters)
    storageService.store('testers',gTesters)
}


export default { searchTester, getTesters }