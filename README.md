# Codewars challenges solved in different languages

This is a lib of solutions for Codewars (https://www.codewars.com) katas. Mainly its to learn basic skills in new languages.

## IDE Configurations
I also added config files for some IDEs (vscode) to show how they have to be configured for debugging certain languages.

## Run Tests
### Typescript
- You can start the Typescript tests by `npm run test` in the typescript_lang folder
- To start a single test run for example `npm run test -- --grep "hasCorrectBrackets"`

### Ruby
- Start tests simply by `ruby TESTFILE.rb`

### Golang
- Start tests simply in the folder by `go test`

### Scala
- Sbt is needed for build and run
- inside `codewars/scala` 
    - run `sbt test` to run all tests
    - run `sbt "test:testOnly DescendingOrderSpec"` to run only `DescendingOrderSpec` test
    - run `sbt "test:testOnly DescendingOrderSpec -- -z complexer"` ro run only tests matching substring `complexer`

