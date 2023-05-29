import {Lotr} from "@varunagw/lotr-sdk";
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import

async function main() {
    const env = dotenv.config().parsed;

    const lotr = new Lotr(env.LOTR_API_KEY);

    const result1 = await lotr.movie.getMovies();
    console.log(result1);

    const result2 = await lotr.movie.getMovieById("5cd95395de30eff6ebccde5c");
    console.log(result2);

    const result3 = await lotr.quote.getQuotes(1);
    console.log(result3);

    const result4 = await lotr.quote.getQuoteById("5cd96e05de30eff6ebccec36");
    console.log(result4);

    const result5 = await lotr.quote.getQuotesByMovie("5cd95395de30eff6ebccde5c");
    console.log(result5);

}

main();