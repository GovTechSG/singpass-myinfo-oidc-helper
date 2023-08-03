# GitHub Workflow for LifeSG libs

This guide will breifly explain what how the GitHub workflow works for LifeSG and the necessary setups to get it working on another LifeSG GitHub repository.

## <u>trigger-gitlab-pipeline.yml</u>

This file is responsible for creating the GitHub workflow and the job that triggers the GitLab pipeline.

--

## <u>Trigger Pipeline Job</u>

When a GitHub `push on master branch` or `pull request` is made it will trigger the job.

Pull Request events that will trigger the pipeline are:

-   `opened`: when opening of a PR
-   `synchronize`: when a new commit is added to the PR
-   `reopened`: when reopening of a PR

We have set variables in the settings of the GitHub repository that is needed to be passed into the trigger pipeline API.

These variables are:

-   GITLAB_TOKEN - The token created in GitLab to authenticate the use of the API
-   GITLAB_ENDPOINT - The host domain of GitLab
-   GITLAB_PROJECT_ID - The project ID of the GitLab pipeline that builds the lib
-   GITLAB_REPO_NAME - The name of the repository being built

The job will make a `curl` to the GitLab pipeline trigger API.

The API contains variables that are important to be passed in the body of the request:

-   PIPELINE_PROJECT_NAME - the repo name
-   PIPELINE_PROJECT_URL - the github url of the repo
-   PIPELINE_EVENT - the workflow trigger event type
-   PIPELINE_BRANCH_NAME - the branch being built
-   PIPELINE_TRIGGER_PERSON - the person that triggered the workflow
-   PIPELINE_COMMIT_MSG - the 1st line of the commit message

Then the Project in GitLab responsible for running the pipeline will create and start the pipeline.
