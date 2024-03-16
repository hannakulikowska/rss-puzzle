import { WordData, Rounds } from '../../models/interfaces/WordDataParams';

export async function fetchPhrases(): Promise<string[]> {
  const response = await fetch('src/assets/data/wordCollectionLevel1.json');
  const data: Rounds = await response.json();
  return data.rounds[0].words.map((word: WordData) => word.textExample);
}
