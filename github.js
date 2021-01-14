class RepoGetter{
    constructor(name){
        this.client_id = 'myclientid';
        this.client_secret = 'myclientkey';
        this.repo_count = 5;
        this.repo_display = 'created: asc';
    }


    async fetchUser(username){
        const profileResponse = await fetch(`https://api.github.com/users/${username}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const repoResponse = await fetch(`https://api.github.com/users/${username}/repos?per_page=${this.repo_count}&sort=${this.repo_display}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

        return {profile: profile, repos: repos};
    }
}