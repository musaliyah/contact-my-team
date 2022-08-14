# Contact My Team

# Table of Contents:

- [Description](#description)
- [Installation](#installation)
- [Usage]($usage)
- [Testing](#testing)
- [Username](#username)
- [Email](#email)

## Description:

"Contact My Team" is a team profile generator that utilizes the command-line interface to prompt users a series of questions regarding their team's information. User input is stored and generated into an html file, which can be opened as a functional webpage displaying all of their team's information. This project synthesized several new subjects for me, such as using Jest to test the functionality of my code. In addition I learned how to incorporate Node.js path modules to create an output folder with a generated HTML. This project is also helpful as a guide for future work where I can quickly generate html files that incorporate user input.

## Installation:

To install Contact My Team, a user must first have all of the files from my remote repository, in a local repository. Once they have all the files, users can then open VS Code, right-click on the index.js file, and select "open integrated terminal" from the options. Then users should type "node index.js" into the terminal and press enter.

![Demo](./demo/Demo.gif)



## Usage:

After user's have opened their terminal and typed "node index.js" and pressed enter, they can then select which member of their team they would like to add to their roster. After selecting from the list of options (manager, engineer, intern), user's will be prompted with specific questions related to each role. After completing each team member, the program loops and the user will have the option to select another team member to add. If the user wishes to complete their roster and exist the command-line interface, they can select "done". After "done" is selected, a "team.html" file is generated in the output folder. For user's to see a web visualization of their team's information they can right-click on the html file and open the file in their browser of choice. On the cards, if anyone presses on the team member's email, a email input pop-up will appear with the team member's contact information already implemented. Furthermore, to access any engineer's github, there is a pressable link to their profile.

## Testing:

There are several tests you can perform to ensure that the generator is properly incorporating, reading and assigning user input. In the test folder there is four tests which test if the program can gather various forms of contact information for each of the team member's specific questions.

## License:

No License.

### If you have any questions you can reach me at:

asmusaliar@gmail.com <br />
or at my Github: [Github](https://github.com/musaliyah)
