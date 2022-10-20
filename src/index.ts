import dotenv    from 'dotenv';
import { write } from 'fast-csv';
import * as fs   from 'fs';

import { CSVAuditLogEntry }                 from './types/util.types';
import { getAllBoardMembers, getAllBoards } from './util';

dotenv.config();

export async function runJob(){
    const ACCESS_TOKEN = process.env.MIRO_ACCESS_TOKEN as string;
    const TEAM_ID      = process.env.TEAM_ID as string

    let resultArray: CSVAuditLogEntry[] = [];
    let ws                              = fs.createWriteStream('Output.csv');

    //GET ALL BOARDS FOR A TEAM
    let globalBoards = await getAllBoards(ACCESS_TOKEN, [], null, TEAM_ID);

    // eslint-disable-next-line no-restricted-syntax
    for (let board of globalBoards) {
        let boardMembers = await getAllBoardMembers(ACCESS_TOKEN, [], null, board.id);

        let numberOfMembers = boardMembers.length;

        //Write Board Data
        resultArray.push({
            board_id           : board.id,
            board_name         : board.name,
            board_owner        : board.owner.name,
            board_member_count : numberOfMembers,
            created_at         : board.createdAt.toString(),
            last_modified_at   : board.modifiedAt.toString(),
            board_description  : board.description
        })
    }

    write(resultArray, { headers: true }).pipe(ws);
}

runJob();