import { Octokit } from "octokit";
import { gql, request } from 'graffle';
import * as dotenv from 'dotenv' ;
dotenv.config();

const octokit = new Octokit({ 
    auth: process.env.USER_TOKEN,
});

async function getUserInfo(accountId) {
    return await octokit.request("GET /user/{account_id}", {
            account_id: accountId
        });
};

async function getCurrentUser() {
    return await octokit.request('GET /user', {
        headers: {
            'X-GitHub-Api-Version': '2022-11-28'
        }
    });
};

async function getUserContributions(username) {
    const document = gql`
        query($userName:String!) { 
            user(login: $userName){
                contributionsCollection {
                    contributionCalendar {
                        totalContributions
                        weeks {
                            contributionDays {
                                contributionCount
                                date
                            }
                        }
                    }
                }
            }
        }
    `
    const variables = { "userName": username};
    const headers = {
        Authorization: `Bearer ${process.env.USER_TOKEN}`
    };

    return await request('https://api.github.com/graphql/', document, variables, headers)
}

module.exports = {
    getUserInfo,
    getCurrentUser,
    getUserContributions
};

