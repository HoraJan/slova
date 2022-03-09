const slova = require("./input");
// const redis = require("redis");
// const totalCount = slova.length;

// const chars = {};

// slova.forEach((word) => {
//   word.split("").forEach((char) => {
//     if (!chars[char]) chars[char] = 0;

//     chars[char] += 1;
//   });
// });

// const sortedChars = Object.entries(chars).sort((a, b) => b[1] - a[1]);

// sortedChars.forEach(([char, count]) => console.log(char, ",", count));

// console.log(sortedChars);
// const arrays = slova.map((slovo) => slovo.split(""));
const run = () => {
  // const client = redis.createClient();
  // await client.connect();

  // firstGuess = "kotle".split("");

  // const firstMatches = {};

  // slova.forEach((slovo) => {
  //   const match = firstGuess
  //     .map((char, index) => {
  //       if (slovo[index] === char) return 2;
  //       if (slovo.includes(char)) return 1;

  //       return 0;
  //     })
  //     .join("");

  //   firstMatches[slovo] = match;
  // });

  // const secondGuess = "masnu".split("");

  // const secondMatches = {};

  // slova.forEach((slovo) => {
  //   const first = firstMatches[slovo];
  //   const match = secondGuess
  //     .map((char, index) => {
  //       if (slovo[index] === char) return 2;
  //       if (slovo.includes(char)) return 1;

  //       return 0;
  //     })
  //     .join("");

  //   secondMatches[slovo] = `${first}${match}`;
  // });

  // const arrays = slova.map((slovo) => slovo.split(""));

  // console.log(arrays.length);

  // const possibleValues = arrays.map((word, index) => {
  //   if (index % 100 === 0) console.log(index);
  //   const matches = {};

  //   slova.forEach(async (slovo) => {
  //     const first = secondMatches[slovo];
  //     const cached = await client.get(`${word.join("")}${slovo}`);

  //     if (cached) {
  //       if (!matches[`${first}${cached}`]) matches[`${first}${cached}`] = 0;

  //       matches[`${first}${cached}`] += 1;
  //       return;
  //     }

  //     const match = word
  //       .map((char, index) => {
  //         if (slovo[index] === char) return 2;
  //         if (slovo.includes(char)) return 1;

  //         return 0;
  //       })
  //       .join("");

  //     client.set(`${word.join("")}${slovo}`, match);

  //     if (!matches[`${first}${match}`]) matches[`${first}${match}`] = 0;

  //     matches[`${first}${match}`] += 1;
  //   });

  //   const value = Object.values(matches).reduce(
  //     (acc, curr) => acc + (curr / totalCount) * Math.log2(totalCount / curr),
  //     0
  //   );

  //   return { word, value };
  // });

  // possibleValues.sort((a, b) => b.value - a.value);

  // console.log(possibleValues.slice(0, 100));
  const guesses = ["kotle", "masnu", "brzdí"];
  // console.log(process.argv.slice(2));
  const matches = process.argv.slice(2);

  const possibleWords = slova.filter((slovo) => {
    // console.log(slovo);
    return !!guesses.every((guess, index) => {
      const match = guess
        .split("")
        .map((char, index) => {
          if (slovo[index] === char) return 2;
          if (slovo.includes(char)) return 1;

          return 0;
        })
        .join("");

      return matches[index] === match;

      // guess.split("").every((char, charIndex) => {
      //   if (matches[index][charIndex] === "2") return slovo[charIndex] === char;
      //   if (matches[index][charIndex] === "0")
      //     return !slovo.split("").find((charr) => charr === char);

      //   return (
      //     slovo.split("").find((charr) => charr === char) &&
      //     slovo[charIndex] !== char
      //   );
      // });
    });
  });

  console.log(possibleWords);
  return;
};

run();
