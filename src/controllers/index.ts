/* eslint-disable @typescript-eslint/semi */
/* eslint-disable eol-last */
import { Request, Response } from "express";
// importamos getcharacters
import { getCharacters } from "../services/character";
/**
 * GET /
 * Home page.
 */

export const character = async (req: Request, res: Response): Promise<void> => {

  // importamos desde services el metodo getCharacters
  const characters = await getCharacters()
  // renderizamos el archivo character
  res.json(characters)
  res.status(200)
};
