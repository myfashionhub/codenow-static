## Desktop shortcuts:
Never have to right click again!
```
CTRL + A: Select all
CTRL + C: Copy
CTRL + V: Paste
CTRL + Z: Undo last changes
```

## Command Line
- Check what directory you are in:
```bash
$ pwd # present working directory
```

- Create new file:
```bash
$ touch [filename.ext]

# Example
$ touch index.html
$ touch style.css
```
- Make a folder:
```bash
$ mkdir [folder name]

# Example
$ mkdir assets
```

- Navigate around:
```bash
$ cd assets # change directory to assets
$ cd .. # Go back to parent folder
```

- Move files:
```bash
$ mv script.js assets/ # Move script.js to assets folder
```

- Autocomplete: For example in the mv command above, you can type
```bash
mv scr
```
Then hit tab, the terminal will autocomplete the file name for you.

- Arrow navigation:
   - Up arrow will show you the previous command so you don't have to retype.
   - You can only navigate text on the command line using left & right arrow.
   The shortcuts to navigate to the beginning and end of line are CTRL + A and CTRL + E.
   - You can use the mouse to select text.


## Run a server
- Using python (SimpleHTTPServer is the module name)
```bash
$ python -m SimpleHTTPServer 8081
```
8081 is the port number and it's optional.
If you don't specify the port number, it defaults to 8000.

- If you accidentally close this terminal and the server is still running, it's OK.
```
# ps aux lists all the processes and their ports
# | grep python searches the output of ps aux, and look for our python command
$ ps aux | grep python

# Kill the running process
$ kill -9 [port number]
```

## SSH keys
SSH is a protocol for remote servers to identify each other. 
Before you are able to push from Cloud9 workspace (or your laptop) to Github,
you need to authorize you local computer by pasting the SSH key to Github. 
Name the Github key accordingly so you can keep track of where you're pushing code from.

## Version tracking with Git
- Initialize git in a directory (you only have to do this once).
```bash
$ git init
```

- Add Github remote to the local repository.
(The URL should be copied from your repo on Github, under SSH tab)
```bash
$ git remote add origin git@github.com:username/repo-name.git

# Check to see if remote was added correctly
$ git remote -v
```

- Check changes you've made:
```bash
$ git status # Shows you which files have changes

# Shows you all the lines that changed
$ git diff
# Green means the line was added, red means it was deleted
# To exit the preview mode, hit "q" (quit)
```

- Once you review and decide which changes you want to keep, use git add.
There're several ways to add files:
```bash
$ git add index.html # Specify name of file to add
$ git add . # Dot means everything, be careful when using this

# Check which changes were added
$ git diff --staged

# Finally commit when you are satisfied
# The commit message should describe the changes you've made
$ git commit -m "Commit message"

# Push to Github so the code can be shared
$ git push origin master
```

- Undo changes:
```bash
# Undo changes you've made to a file
$ git checkout index.html

# Undo changes that were added but not yet committed
$ git reset [filename]

# Undo all staged changes
$ git reset HEAD
```

## HTML page
- index.html is the naming convention for the main page of your website.
When you navigate to the site via the browser,
 the server automatically looks for the index.html file and serves it.
