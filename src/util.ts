import axios, { AxiosRequestConfig } from 'axios';

import { PaginatedResponse }  from './types/api.types';
import { Board, BoardMember } from './types/miro.types';

export async function getAllBoards(
    accessToken: string,
    result?: Array<Board>,
    path?: any,
    teamId?: any
) {
    let links;

    // If data is sent, use it. Otherwise open an empty array
    result = result || [];
    path   = path || `https://api.miro.com/v2/boards?team_id=${teamId}&sort=default`;

    // If your API endpoint requires authorization, you'll probably need to set a header.
    // Follow the docs for your use case.
    const requestConfig: AxiosRequestConfig = {
        headers: {
            'Content-Type' : 'application/json',
            Authorization  : `Bearer ${accessToken}`,
        },
    };

    await axios.get<PaginatedResponse<Board>>(path, requestConfig)
        .then(function (response) {
            let boards = response.data.data;

            // Dump each response item into the array to return
            boards.forEach(function (el: Board) {
                result?.push(el);
            });

            links = response.data.links;

        }).catch(function (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log(error.response.status);
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest
                // in the browser and an instance of
                // http.ClientRequest in node.js
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
            }
            console.log(error.config);
        });

    // If there is a next header, run it again.
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (links.hasOwnProperty('next')) {
        console.log('Next Link present, requesting more...');
        // Return only the endpoint by removing the base URL
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        await getAllBoards(accessToken, result, links.next, null);
    }

    return result;
}

export async function getAllBoardMembers(
    accessToken: string,
    result?: Array<BoardMember>,
    path?: any,
    boardId?: any
) {
    let links;

    // If data is sent, use it. Otherwise open an empty array
    result = result || [];
    path   = path || `https://api.miro.com/v2/boards/${boardId}/members?sort=default`;

    // If your API endpoint requires authorization, you'll probably need to set a header.
    // Follow the docs for your use case.
    const requestConfig: AxiosRequestConfig = {
        headers: {
            'Content-Type' : 'application/json',
            Authorization  : `Bearer ${accessToken}`,
        },
    };

    await axios.get<PaginatedResponse<BoardMember>>(path, requestConfig)
        .then(function (response) {
            let members = response.data.data;

            // Dump each response item into the array to return
            members.forEach(function (el: BoardMember) {
                result?.push(el);
            });

            links = response.data.links;

        }).catch(function (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log(error.response.status);
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest
                // in the browser and an instance of
                // http.ClientRequest in node.js
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
            }
            console.log(error.config);
        });

    // If there is a next header, run it again.
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (links.hasOwnProperty('next')) {
        console.log('Next Link present, requesting more...');
        // Return only the endpoint by removing the base URL
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        await getAllBoardMembers(accessToken, result, links.next, null);
    }

    return result;
}