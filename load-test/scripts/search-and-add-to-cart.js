import http from 'k6/http';
import {  check, group, sleep, fail } from 'k6';
import { SharedArray } from "k6/data";

export let options = {
    stages: [
        { duration: '1m', target: 600 }, // simulate ramp-up of traffic from 1 to 60 users over 5 minutes.
        // { duration: '10m', target: 60 }, // stay at 60 users for 10 minutes
        // { duration: '3m', target: 100 }, // ramp-up to 100 users over 3 minutes (peak hour starts)
        // { duration: '2m', target: 100 }, // stay at 100 users for short amount of time (peak hour)
        // { duration: '3m', target: 60 }, // ramp-down to 60 users over 3 minutes (peak hour ends)
        // { duration: '10m', target: 60 }, // continue at 60 for additional 10 minutes
        // { duration: '5m', target: 0 },
    ],
}
const HOST = 'http://api:3000';
const logins = new SharedArray("logins", function() { return JSON.parse(open('../users.json')); });
const searchVars = new SharedArray("keywords", function() { return JSON.parse(open('../datasets/keywords.json')); });

export function setup() {
    let res;
    let count = 0;
    testRequest();
    function testRequest() {
        res = http.get(HOST);
        if (!res.status) {
            if (count > 10) {
                fail('Server host unavailable');
            }
            count++
            console.log(`Server host unavailable. retry attempt ${count}`)
            sleep(10);
            testRequest();
        }
    }
}

export default function () {
    group('search and put to a card',(_) => {
        let params = {
            headers: {
                'Content-Type': 'application/json',
            },
            tags: {
                name: 'login',
            },
        };

        const body = logins[__VU];
        const loginResponse = http.post(`${HOST}/auth/login`, JSON.stringify(body), params);
        check(loginResponse, {
            'login is status 200': (r) => r.status === 200,
            'login is access token present': (r) => r.json().hasOwnProperty('access_token'),
        });
        const accessToken = loginResponse.json()['access_token'];

        const randomQueryIndex = randomIntFromInterval(0, searchVars.length-1)
        const searchQuery = `title=${searchVars[randomQueryIndex]}`;
        const searchParams = {
            headers: {
                Authorization: 'Bearer ' + accessToken
            },
            tags: {
                name: 'search'
            }
        }
        const searchResponse = http.get(`${HOST}/products/search?${searchQuery}`, searchParams);
        check(searchResponse, {
            'search is status 200': (r) => r.status === 200
        });

        const searchResponseVars = searchResponse.json();
        const randomIndex = randomIntFromInterval(0, searchResponseVars.length-1);
        const chosenVarId = searchResponseVars[randomIndex].id;
        const getProductParams = {
            headers: {
                Authorization: 'Bearer ' + accessToken
            },
            tags: {
                name: 'getProduct'
            }
        }
        const getProductResponse = http.get(`${HOST}/products/${chosenVarId}`, getProductParams);
        check(getProductResponse, {
            'getProduct is status 200': (r) => r.status === 200
        });

        const putToCardParams = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + accessToken
            },
            tags: {
                name: 'putToCard'
            }
        }
        const putToCardBody = {
            productId: chosenVarId
        }
        const putToCardResponse = http.post(`${HOST}/cards`, JSON.stringify(putToCardBody), putToCardParams);
        check(putToCardResponse, {
            'putToCard is status 200': (r) => r.status === 200,
            'putToCard is product in card': (r) => r.json().hasOwnProperty(chosenVarId)
        });

        const getCardParams = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + accessToken
            },
            tags: {
                name: 'getCard'
            }
        }

        const getCardResponse = http.get(`${HOST}/cards`, getCardParams);
        check(getCardResponse, {
            'getCard is status 200': (r) => r.status === 200,
            'getCard is product in card': (r) => r.json().hasOwnProperty(chosenVarId)
        });

        sleep(1);
    });
}


function randomIntFromInterval(min, max) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
}