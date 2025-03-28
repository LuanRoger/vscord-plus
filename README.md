<div align="center">

<img width="256" alt="VSCord Logo" src="https://i.imgur.com/n7ieZfW.png" />

</div>

# VSCord +

Highly customizable [Discord Rich Presence](https://discord.com/rich-presence) extension for [Visual Studio Code](https://code.visualstudio.com/)

This is a fork of [leonardssh/vscord](https://github.com/leonardssh/vscord) with some additional features and improvements.

## New Features

- REST API support, send activity updates to custom compatible clients
- Support for a few more languages

## Disclaimer

This extension does not work with snapstore / flatpak version of VSCode, please use the official version from the VSCode website!

## 📌 Features

- Shows what you're working on!
- Switch between 3 IDE names (`Code`, `Visual Studio Code` and `VSCodium`) or a custom one if you wish!
- Packed with 60+ extension settings!
- Tons of variable to use!
- Support for over 130+ of the most popular languages!
- Support custom images (using HTTP link)
- Support custom button link!
- Support flatpak / snapstore version of Discord!
- Detect when you are Debugging!
- Detect when you are using the [Insiders build](https://code.visualstudio.com/insiders/)!
- Detect when you are Idling!

## 👀 Preview

![1](https://i.imgur.com/LaB4TqM.png)
![2](https://i.imgur.com/yTFIFiK.png)
![3](https://i.imgur.com/5OOkKUW.png)

## 📥 Installation

I don't distribute this extension on the Visual Studio Marketplace or Open VSX Marketplace, so you have to install it manually.

1. Clone the repository
2. Run `npm install` to install the dependencies
3. Run `npm run package` to create the `.vsix` file
4. Install the `.vsix` file in Visual Studio Code

## ⚙️ Configuration

The following variables will be replaced with the respective value in custom strings.<br>

| Variable                         | Value                                                             |
| -------------------------------- | ----------------------------------------------------------------- |
| `{app_name}`                     | current editor name                                               |
| `{app_id}`                       | editor name that's suitable for using inside url                  |
| `{file_name}`                    | name of the file                                                  |
| `{file_extension}`               | extension of the file                                             |
| `{file_size}`                    | size of the file                                                  |
| `{folder_and_file}`              | folder and file name                                              |
| `{relative_file_path}`           | filepath relative to the workspace folder                         |
| `{directory_name}`               | directory name                                                    |
| `{full_directory_name}`          | full directory name                                               |
| `{workspace}`                    | name of the workspace                                             |
| `{workspace_folder}`             | name of the workspace folder                                      |
| `{workspace_and_folder}`         | name of the workspace and folder                                  |
| `{lang}` \| `{Lang}` \| `{LANG}` | format of the lang string (css, Css, CSS)                         |
| `{problems}`                     | problems text defined in settings                                 |
| `{problems_count}`               | number of problems                                                |
| `{problems_count_errors}`        | number of problems that are errors                                |
| `{problems_count_warnings}`      | number of problems that are warnings                              |
| `{problems_count_infos}`         | number of problems that are infos                                 |
| `{problems_count_hints}`         | number of problems that are hints                                 |
| `{line_count}`                   | number of lines                                                   |
| `{current_line}`                 | current line                                                      |
| `{current_column}`               | current column                                                    |
| `{git_url}`                      | link to current git repository                                    |
| `{git_owner}`                    | current git repository owner                                      |
| `{git_provider}`                 | domain (including .com) to the provider of current git repository |
| `{git_repo}`                     | repository name for current repository                            |
| `{git_branch}`                   | current git branch                                                |
| `{empty}`                        | an empty space                                                    |

## 👨‍💻 Contributing

To contribute to this repository, feel free to create a new fork of the repository and submit a pull request.

1. Fork / Clone the `main` branch.
2. Create a new branch in your fork.
3. Make your changes.
4. Commit your changes and push them.
5. Submit a Pull Request [here](https://github.com/LeonardSSH/vscord/pulls)!

## 👨‍💻 Adding a new language

I maybe will do it for myself, but if you want to add a new language, feel free to create a new fork of the repository and submit a pull request.

We have a guide for adding a new language [here](ADDING_LANGUAGE.md)!

## 🎉 Thanks

- [discordjs](https://github.com/discordjs/) - Creator of Discord RPC Client
- [iCrawl](https://github.com/iCrawl) - Creator of [discord-vscode](https://github.com/iCrawl/discord-vscode)
- [Satoqz](https://github.com/Satoqz) - Creator of [vscode-discord](https://github.com/Satoqz/vscode-discord/)
- [LeonardSSH](https://github.com/leonardssh/vscord) - Creator of the original VSCord

_Much of the code in this repository is based on [iCrawl/discord-vscode](https://github.com/iCrawl/discord-vscode) & [Satoqz/vscode-discord](https://github.com/Satoqz/vscode-discord). This extension would not exist without them._

## 📋 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
