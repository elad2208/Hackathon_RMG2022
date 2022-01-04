$(function () {
    getAllplayers();
});


function getAllplayers() {
    $.ajax({
        url: 'https://quizzi2.herokuapp.com/api/players',
        type: 'GET',
        success: (players) => {
            console.log(players);
            recreatePlayersTable(players);
        }
    });
}
function recreatePlayersTable(players) {
    $("table").empty().remove();

    const tableStructure =
        '<table class="table">' +
        '<thead>' +
        '<tr>' +
        '<th>No.</th>' +
        '<th>User Name</th>' +
        '<th>Score</th>' +
        '<th>Wins</th>' +
        '<th>Losses</th>' +
        '</tr>' +
        '</thead>' +
        '<tbody>' +
        '</tbody>' +
        '</table>';

    $('#players-list').append(tableStructure);

    players.forEach(player => {
        $("table tbody").append('<tr>' +
            '<th scope="row">' + player.id + '</th>' +
            '<td>' + player.name + '</td>' +
            '<td>' + player.pointsEarned + '</td>' +
            '<td>' + player.gamesWins + '</td>' +
            '<td>' + player.gamesLosses + '</td>' +
            '</tr>'
        );
    });
}