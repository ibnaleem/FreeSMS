<p align="center">
  <img src="/docs/img.png"/>
</p>
 <h3><p align="center">
    ⚠️ Disclaimer: This repository is intended for educational purposes exclusively. I bear no responsibility for any illicit or unauthorized use of this project.
</p></h3>
</p>
<p align="center">
  <img src="https://img.shields.io/badge/Version-0.0.1-green" alt=""/>
  <img src="https://img.shields.io/badge/Written in-Javascript-yellow" alt=""/>
  <img src="https://img.shields.io/badge/Author-Ibn Aleem-red" alt=""/>
</p>

## Getting Started
Clone this repository:
```
$ git clone https://github.com/ibnaleem/FreeSMS.git
```
Run `run.py`:
```
$ py run.py
```
Go to http://localhost:8000 to view WebGUI

## E.164 Format
1. Country Code (eg `+1`, `+44`, etc.)
2. No leading zeros (eg `+44076` = `+4476`)
3. Make sure to include `+`

## Failure to Send
1. Your number is not in `E.164` format
2. You've already sent a message to this number
3. Use a VPN if errors persist, and [open an issue](https://github.com/ibnaleem/FreeSMS/issues)

## Authors
- [Ibn Aleem](https:///github.com/ibnaleem) - initial work

## Built With
- [Textbelt API](https://textbelt.com)

## License
This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/ibnaleem/FreeSMS/blob/main/LICENSE) file for details

## Acknowledgments
- [machine1337](https://github.com/machine1337) - initial idea

## Contributions 
I welcome contributions from the community and appreciate the time and effort put into making this project better. To contribute, please follow the guidelines and steps outlined below:

### Fork the Repository
Start by [forking this repository](https://github.com/ibnaleem/FreeSMS/fork). You can do this by clicking on the ["Fork"](https://github.com/ibnaleem/FreeSMS/fork) button located at the top right corner of the GitHub page. This will create a personal copy of the repository under your own GitHub account.

### Clone the Repository
Next, clone the forked repository to your local machine using the following command:
```bash
$ git clone https://github.com/yourusername/FreeSMS.git
```
Navigate to the cloned directory:
```bash 
$ cd FreeSMS
```
### Create a New Branch
Before making any changes, it's recommended to create a new branch. This ensures that your changes won't interfere with other contributions and keeps the main branch clean. Use the following command to create and switch to a new branch:
```bash
$ git checkout -b branch-name
```
### Make the Desired Changes
Now, you can proceed to make your desired changes to the project. Whether it's fixing bugs, adding new features, improving documentation, or optimizing code, your efforts will be instrumental in enhancing the project.

### Commit and Push Changes
Once you have made the necessary changes, commit your work using the following commands:
```bash
$ git add .
$ git commit -m "Your commit message"
```
Push the changes to your forked repository:
```bash
$ git push origin branch-name
```
### Submit a Pull Request
Head over to the [original repository](https://github.com/ibnaleem/FreeSMS) on GitHub and go to the ["Pull requests"](https://github.com/ibnaleem/FreeSMS/pulls) tab.
1. Click on the "New pull request" button.
2. Select your forked repository and the branch containing your changes.
3. Provide a clear and informative title for your pull request, and use the description box to explain the modifications you have made.
4. Finally, click on the "Create pull request" button to submit your changes.
