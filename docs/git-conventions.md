## Semantic Commit Messages

See how a minor change to your commit message style can make you a better programmer.

Format: `<type>(<scope>): <subject>`

`<scope>` is optional

### Example

```
feat(auth): add login page
^--^ ^--^   ^-------------^
|       |         |
|       |         +-> Summary in present tense.
|       |
|       +----> Subject (optional).
|
+-------> Type: chore, docs, feat, fix, refactor, style, or test.
```

#### More Examples:

- `feat`: (new feature for the user, not a new feature for build script)
- `fix`: (bug fix for the user, not a fix to a build script)
- `docs`: (changes to the documentation)
- `style`: (formatting, missing semi colons, etc; no production code change)
- `refactor`: (refactoring production code, eg. renaming a variable)
- `test`: (adding missing tests, refactoring tests; no production code change)
- `chore`: (updating grunt tasks etc; no production code change)

<br/>

## Git Branch Naming Convention

Format: `<type>/a short text pointing <scope> ( & || ) <subject>`

### Example: `feat/login` or `test/admin-create-agent`
