const repogetter = new RepoGetter;
const ui = new UI;
// add keyup event to the search bar
document.getElementById('searchUser').addEventListener('keyup', getQuery);


function getQuery(e){
    let query = e.target.value;
    //console.log(query);
    if(query !== ''){
        repogetter.fetchUser(query)
        .then(function(userdata){
            if(userdata.profile.message !== 'Not Found'){
                // display the profile data
                ui.displayProfile(userdata.profile);
                ui.displayRepos(userdata.repos);
                // console.log(userdata.repos);
            }
            else{
                // display a profile not found error message
                ui.displayError('Requested Profile not found', 'alert alert-danger');

            }
        });
    }
    else{
        ui.clearProfile();
    }
}