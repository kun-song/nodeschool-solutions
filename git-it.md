## Get git

```
git config --global user.name ’satansk'
git config --global user.email 'satansk@hotmail.com'
```

## Create a Repository

### Creating a new folder, and initialize it as a Git repository.

```
mkdir hello-world
cd ./hello-world
git init
```

`git init` will tell Git to initialize the hello-world folder, in others
words, start tracking every change of this folder.

Using `git status` to verify.

## Commit to it

> Commits are the moments in which you save and describe what you have done,
> and your project's timelines are composed of commits.

### git status, add, commit

Create a new file named readme.txt in the previous folder.

Now check if Git knows what has changed over this time:

```
git status
```

Git will show that a new file has been added, and you should add this new file
and therefore make it a part of the changes you will commit(save):

```
git add readme.txt
```

Finally, commit this change with a short message to describe it:

```
git commit -m 'created readme'
```

### diff

Add a new line to readme.txt and you can find the difference between the old one
and the new one:

```
git diff
```

Then you can update what will be committed by `git add readme.txt`, and commit it
by `git commit -m 'add a new line'`.

## Github

## Remote control

Connect your local repository to a remote one, and push changes to it. You then
can work around this repository by *push* and *pull*.
