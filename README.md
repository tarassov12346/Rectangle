# Rectangle

## Requirements  
Clone this repository to your workstation. 

#### Step 1: check the project configuration

First of all you need to open the terminal and navigate to the project root. 
Check if the project structure  basically looks like this:
​
```text
project_name
    - js (folder)
    - node_modules(folder)
    - tests (folder)
    - .gitignore (file)
    - package.json (file)
    - yarn.lock(file)
```
If there is no package.json file, initialize the project with the following command 'yarn init' from the repository root.

Check the 'package.json' file if the dev dependency was added:
​
```json
  "devDependencies": {
    "jest": "^29.2.2"
  }
```
If not, execute the command 'yarn add --dev jest' from the repository root.

Check if 'package.json' is updated with the the command, which will trigger test execution:
​
```json
  "scripts": {
    "test": "jest"
  }
```
If not, update as shown above.

#### Step 2: run the tests
Run the command 'yarn test' from the repository root.

#### Step 2: check the tests results
If the tests have run smoothly see the output of a kind:

yarn run v1.22.19
$ jest
 PASS  tests/utils.test.js
Test Suites: 1 passed, 1 total
Tests:       3 passed, 3 total
Snapshots:   0 total
Time:        0.937s
Ran all test suites.

If the tests went wrong see the detailed report in the output.


#### GOOD LUCK!!!