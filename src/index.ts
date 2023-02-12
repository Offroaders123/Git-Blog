import { Octokit } from "octokit";

const octokit = new Octokit();

// const { data: user } = await octokit.rest.users.getByUsername({ username: "Offroaders123" });
// console.log(user);

// const { data: repos } = await octokit.rest.repos.listForUser({ username: "Offroaders123" });
// console.log(repos.map(repo =>
//   // repo.name
//   repo.git_commits_url
// ));

const { data: commits } = await octokit.request("GET /repos/{owner}/{repo}/commits",{
  owner: "Offroaders123",
  repo: "Art-Gen"
});
console.log(commits.filter(commit => commit.author?.login === "Offroaders123").map(commit => commit.commit.message));