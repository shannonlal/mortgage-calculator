# Git Helper Commands

## Git Stash commits

```
git stash
```

## Git list stashed elements

```
git stash list

-- Output sample

stash@{0}: On main: add style to our site
stash@{1}: WIP on main: 5002d47 our new homepage
stash@{2}: WIP on main: 5002d47 our new homepage
```

## Get a stashed commit from git stash list

```
git stash pop stash@{2}
```

