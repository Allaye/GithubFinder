class UI{
    constructor(){
        this.profileElement = document.getElementById("profile");
        this.profileDiv = document.getElementById("repos");
    }

    displayRepos(repoData){
        let output = '';

        repoData.forEach(function(repo){
            output += `
            <div class="card card-body mb-2">
                <div class="row">
                    <div class="col-md=6">
                        <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                    </div>
                    <div class="col-md-6">
                    <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
                    <span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
                    <span class="badge badge-success">Forks: ${repo.forks_count}</span>
                    </div>
                </div>
            </div>`;
        });

        document.getElementById('repos').innerHTML = output;
    }





    displayProfile(profileData){
        this.profileElement.innerHTML = `
        <div class="card card-body mb-3">
            <div class="row">
                <div class="col-md-3">
                    <img class="img-fluid mb-2" src="${profileData.avatar_url}">
                    <a href="${profileData.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
                </div>
                <div class="col-md-9">
                    <span class="badge badge-primary">Public Repos: ${profileData.public_repos}</span>
                    <span class="badge badge-secondary">Public Gists: ${profileData.public_gists}</span>
                    <span class="badge badge-success">Followers: ${profileData.followers}</span>
                    <span class="badge badge-info">Following: ${profileData.following}</span>
                    <br><br>
                    <ul class="list-group">
                        <li class="list-group-item">Company: ${profileData.company}</li>
                        <li class="list-group-item">Website: ${profileData.blog}</li>
                        <li class="list-group-item">Location: ${profileData.location}</li>
                        <li class="list-group-item">Member Since: ${profileData.created_at}</li>
                    </ul>
                </div>
            </div>
        </div>
        <h3 class="page-heading mb-3">Latest Repos</h3>
        <div id="repos"></div>`;
    }

    displayError(errormsg, msgclass){
        this.clearAlert();
        // create and get the neccessary elements
        const div = document.createElement('div');
        const searchContainer = document.querySelector('.searchContainer');
        const search = document.querySelector('.search');
        // add classname and text to the div elements
        div.className = msgclass;
        div.appendChild(document.createTextNode(errormsg));
        // place the div elements in between the searchContainer and search
        searchContainer.insertBefore(div, search);

        setTimeout(() => {
            this.clearAlert()
        }, 3000);
    }

    clearAlert(){
        const alertdiv = document.querySelector('.alert')
        if(alertdiv){
            alertdiv.remove();
        }
    }

    clearProfile(){
        this.profileElement.innerHTML = '';
    }
}

