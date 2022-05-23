const profileDataArgs = process.argv.slice(2, process.argv.length);

const [name, github] = profileDataArgs;

// const printProfileData = (profileDataArr) => {
    // for (let i = 0; i < profileDataArr.length; i++) {
        // console.log(profileDataArr[i]);
    // }

    // console.log("================");

    // profileDataArr.forEach(profileItem => console.log(profileItem));
// };

// printProfileData(profileDataArgs);

// const generatePage = () => "Name: Jane, GitHub: janehub";
// console.log(generatePage());

const generatePage = (userName, githubName) => {
    return `
      Name: ${userName}
      GitHub: ${githubName}
    `;
};

console.log(name, github);
console.log(generatePage(name, github));