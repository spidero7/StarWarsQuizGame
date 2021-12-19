# Branching

## Quick Legend

<table>
  <thead>
    <tr>
      <th>Instance</th>
      <th>Branch</th>
      <th>Description, Instructions, Notes</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>main</td>
      <td>develop</td>
      <td>Accepts merges from develop and hotfix/*</td>
    </tr>
    <tr>
      <td>Working</td>
      <td>develop</td>
      <td>Accepts merges from feature/* and hotfix/*</td>
    </tr>
    <tr>
      <td>Features/Issues</td>
      <td>feature/*</td>
      <td>Always branch off HEAD of develop</td>
    </tr>
    <tr>
      <td>Hotfix</td>
      <td>hotfix/*</td>
      <td>Always branch off develop</td>
    </tr>
  </tbody>
</table>

## Main Branches

The develop repository will always hold two evergreen branches:

* `main`
* `develop`

The develop branch should be considered `origin/develop` and will be the develop branch where the source code of `HEAD` always reflects a state with the latest delivered development changes for the next release. As a developer, you will be branching and merging from `develop`.

Consider `origin/main` to always represent the latest code deployed to production. During day to day development, the `main` branch will not be interacted with.

When the source code in the `develop` branch is main and has been deployed, all of the changes will be merged into `main` and tagged with a release number. *How this is done in detail will be discussed later.*

## Supporting Branches

Supporting branches are used to aid parallel development between team members, ease tracking of features, and to assist in quickly fixing live production problems. Unlike the develop branches, these branches always have a limited life time, since they will be removed eventually.

The different types of branches we may use are:

* Feature branches
* Bug branches
* Hotfix branches

Each of these branches have a specific purpose and are bound to strict rules as to which branches may be their originating branch and which branches must be their merge targets. Each branch and its usage is explained below.

### Feature Branches

Feature branches are used when developing a new feature or enhancement which has the potential of a development lifespan longer than a single deployment. When starting development, the deployment in which this feature will be released may not be known. No matter when the feature branch will be finished, it will always be merged back into the develop branch.

During the lifespan of the feature development, the lead should watch the `develop` branch (network tool or branch tool in GitHub) to see if there have been commits since the feature was branched. Any and all changes to `develop` should be merged into the feature before merging back to `develop`; this can be done at various times during the project or at the end, but time to handle merge conflicts should be accounted for.

`<tbd number>` represents the project to which Project Management will be tracked.

* Must branch from: `develop`
* Must merge back into: `develop`
* Branch naming convention: `feature/<tbd number>`

#### Working with a feature branch

If the branch does not exist yet (check with the Team Lead), create the branch locally and then push to GitHub. A feature branch should always be 'publicly' available. That is, development should never exist in just one developer's local branch.

```
$ git checkout -b feature/<id> develop                 // creates a local branch for the new feature
$ git push -u origin feature/<id>                        // makes the new feature remotely available
```

Periodically, changes made to `develop` (if any) should be merged back into your feature branch.

```
$ git merge develop                                  // merges changes from develop into feature branch
```

When development on the feature is complete, the team lead (or another team member  in charge) should merge changes into `develop` and then make sure the remote branch is deleted.

```
$ git checkout develop                               // change to the develop branch  
$ git merge --no-ff feature/<id>                      // makes sure to create a commit object during merge
$ git push origin develop                            // push merge changes
$ git push -u origin :feature/<id>                       // deletes the remote branch
```

### Bug Branches

Bug branches differ from feature branches only semantically. Bug branches will be created when there is a bug on the live site that should be fixed and merged into the next deployment. For that reason, a bug branch typically will not last longer than one deployment cycle. Additionally, bug branches are used to explicitly track the difference between bug development and feature development. No matter when the bug branch will be finished, it will always be merged back into `develop`.

Although likelihood will be less, during the lifespan of the bug development, the team lead should watch the `develop` branch (network tool or branch tool in GitHub) to see if there have been commits since the bug was branched. Any and all changes to `develop` should be merged into the bug before merging back to `develop`; this can be done at various times during the project or at the end, but time to handle merge conflicts should be accounted for.

`<tbd number>` represents the Basecamp project to which Project Management will be tracked. 

* Must branch from: `develop`
* Must merge back into: `develop`
* Branch naming convention: `bug/<tbd number>`

#### Working with a bug branch

If the branch does not exist yet (check with the Lead), create the branch locally and then push to GitHub. A bug branch should always be 'publicly' available. That is, development should never exist in just one developer's local branch.

```
$ git checkout -b bug/<id> develop                     // creates a local branch for the new bug
$ git push -u origin bug/<id>                            // makes the new bug remotely available
```

Periodically, changes made to `develop` (if any) should be merged back into your bug branch.

```
$ git merge develop                                  // merges changes from master into bug branch
```

When development on the bug is complete, [the Lead] should merge changes into `develop` and then make sure the remote branch is deleted.

```
$ git checkout develop                               // change to the develop branch  
$ git merge --no-ff bug/<id>                          // makes sure to create a commit object during merge
$ git push origin develop                            // push merge changes
$ git push origin :bug/<id>                           // deletes the remote branch
```

### Hotfix Branches

A hotfix branch comes from the need to act immediately upon an undesired state of a live production version. Additionally, because of the urgency, a hotfix is not required to be be pushed during a scheduled deployment. Due to these requirements, a hotfix branch is always branched from a tagged `main` branch. This is done for two reasons:

* Development on the `develop` branch can continue while the hotfix is being addressed.
* A tagged `main` branch still represents what is in production. At the point in time where a hotfix is needed, there could have been multiple commits to `develop` which would then no longer represent production.

`<tbd number>` represents the Basecamp project to which Project Management will be tracked. 

* Must branch from: tagged `main`
* Must merge back into: `develop` and `main`
* Branch naming convention: `hotfix/<tbd number>`

#### Working with a hotfix branch

If the branch does not exist yet (check with the Lead), create the branch locally and then push to GitHub. A hotfix branch should always be 'publicly' available. That is, development should never exist in just one developer's local branch.

```
$ git checkout -b hotfix/<id> main                  // creates a local branch for the new hotfix
$ git push -u origin hotfix/<id>                         // makes the new hotfix remotely available
```

When development on the hotfix is complete, [the Lead] should merge changes into `main` and then update the tag.

```
$ git checkout main                               // change to the main branch
$ git merge --no-ff hotfix/<id>                       // forces creation of commit object during merge
$ git tag -a <tag>                                  // tags the fix
$ git push origin main --tags                     // push tag changes
```

Merge changes into `develop` so not to lose the hotfix and then delete the remote hotfix branch.

```
$ git checkout develop                               // change to the develop branch
$ git merge --no-ff hotfix/<id>                       // forces creation of commit object during merge
$ git push origin develop                            // push merge changes
$ git push origin :hotfix/<id>                        // deletes the remote branch
```

><b>Note:</b> In order to merge to delelop and main branches always we need to open pull request first!